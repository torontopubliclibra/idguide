"use client";

import React from "react";
import styles from "./page.module.css";
import { useState, useEffect, useMemo } from "react";
import { usePageLocale } from "../hooks/usePageLocale";
import Image from "next/image";
import Link from "next/link";
import { t } from "../lib/i18n";
import LastUpdated from "../components/LastUpdated";
import SeeAlso from "../components/SeeAlso";
import downloadData from '../downloads.json';
import JumpTo from "../components/JumpTo";

export default function Downloads() {

  const [openSection, setOpenSection] = useState<string | null>(null);

  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.downloads", "Downloads", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
    if (typeof window === "undefined") return;
    const setSectionFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) setOpenSection(hash);
    };
    setSectionFromHash();
    window.addEventListener('hashchange', setSectionFromHash);
    return () => window.removeEventListener('hashchange', setSectionFromHash);
  }, [pageLocale]);

  useEffect(() => {
    if (!openSection) return;
    const timeout = setTimeout(() => {
      const el = document.getElementById(openSection);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
    return () => clearTimeout(timeout);
  }, [openSection]);

  const jumpLinks = useMemo(() =>
    downloadData.map((section: { id: string; title: string }) => ({
      id: section.id,
      label: t(section.title, section.title, pageLocale)
    })),
    [pageLocale]
  );

  function groupLinks(links: { id: string; href: string; description?: string; label?: string }[]) {
    const getIdPrefix = (id: string) => id.replace(/([a-zA-Z])$/, '');
    const groups = [];
    let i = 0;
    while (i < links.length) {
      const currentPrefix = getIdPrefix(links[i].id);
      const group = [links[i]];
      let j = i + 1;
      while (j < links.length && getIdPrefix(links[j].id) === currentPrefix) {
        group.push(links[j]);
        j++;
      }
      groups.push(group);
      i = j;
    }
    return groups;
  }

  return (
    <div className="page">
      <main className={styles.downloads}>
        <h2 className="page-title">{t("Pages.downloads", "Downloads", pageLocale)}<Image src="/icon/download.svg" alt={t("Pages.downloads", "Downloads", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p>
            {t("DownloadsPage.intro", "Here you'll find the forms to help with name changes and gender marker updates, as well as presentation materials for past workshops. If you need help finding the right document, please check the sources at the bottom of the related guide, or", pageLocale)}{' '}
            <Link href="mailto:contact@idguide.ca">{t("DownloadsPage.contactUs", "contact us", pageLocale)}</Link>{' '}
            {t("DownloadsPage.forSupport", "for support.", pageLocale)}
          </p>
          <hr />
          <JumpTo
            pageLocale={pageLocale}
            sections={jumpLinks.map(link => link.id)}
            onSectionClick={(id: string) => {
              setOpenSection(id);
            }}
          />
          <hr />
          {downloadData.map((section: {
            id: string;
            title: string;
            links: { id: string; href: string; description?: string; label?: string }[];
            more?: { href: string } | null;
          }) => {
            const isOpen = openSection === section.id;
            const groups = groupLinks(section.links);
            return (
              <section key={section.id} className={styles.accordionSection}>
                <button
                  id={section.id}
                  className={styles.accordionButton + ' accordionBtn'}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${section.id}`}
                  onClick={() => setOpenSection(isOpen ? null : section.id)}
                >
                  <h3 style={{ color: 'var(--white)', fontSize: '1rem', margin: 0 }}>{t(section.title, "Ontario birth certificates", pageLocale)}</h3>
                  <span style={{ fontSize: '1.15em', transition: 'transform 0.2s', transform: isOpen ? 'rotate(90deg)' : 'rotate(180deg)' }}>&#9654;</span>
                </button>
                <div
                  id={`panel-${section.id}`}
                  className={styles.accordionPanel}
                  style={{ display: isOpen ? 'block' : 'none', padding: isOpen ? '1rem' : 0 }}
                  aria-hidden={!isOpen}
                >
                  {section.more && (
                    <p style={{ color: 'var(--black)', fontSize: '0.9em' }}>
                      {t("Site.moreAbout", "More about ", pageLocale)}
                      <Link href={section.more.href} target="_blank">
                        {pageLocale === "en"
                          ? t(section.title, undefined, pageLocale)
                          : section.title.charAt(0).toLowerCase() + section.title.slice(1)}
                      </Link>.
                      <br style={{ marginBottom: '0.75rem' }} />
                    </p>
                  )}
                  <ul style={{ padding: 0, marginTop: -16, listStyle: 'none' }}>
                    {groups.map((group, groupIdx) => {
                      if (group.length > 1) {
                        return (
                          <React.Fragment key={group.map(l => l.id + '-' + l.href).join('-') + groupIdx}>
                            <li className={styles.linkGroup + (pageLocale === 'en' ? '' : ' ' + styles.fr)} style={{ margin: '1rem 0' }}>
                              {group.map(link => (
                                <div key={link.id + '-' + link.href} style={{ flex: 1 }}>
                                  <h4 style={{ fontSize: '1rem', marginTop: 0, marginBottom: '0.5rem' }}>{link.label}</h4>
                                  {link.href.endsWith('.pdf') && (
                                    <div className={styles.pdfPreview}>
                                      <iframe
                                        src={link.href}
                                        title={`Preview of ${link.label}`}
                                        width="100%"
                                        height="400px"
                                        style={{ border: 'none' }}
                                        loading="lazy"
                                      />
                                    </div>
                                  )}
                                  <Link
                                    id={link.id}
                                    className={styles.downloadButton}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ maxWidth: '100%', marginTop: '0.5rem' }}
                                  >
                                    <span className={styles.linkTitle}>
                                      <span className="button-label" style={{ minWidth: "100%" }}>
                                        {link.description ? (
                                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', fontSize: '0.75rem' }}>
                                            {link.description}
                                            <Image src="/download.svg" alt="Download" className={styles.downloadIcon} width={20} height={20} style={{ width: '20px' }} />
                                          </span>
                                        ) : ''}
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              ))}
                            </li>
                            {groupIdx < groups.length - 1 && <hr style={{ margin: '1rem 0', border: '1px dashed var(--black)' }} />}
                          </React.Fragment>
                        );
                      } else {
                        const link = group[0];
                        return (
                          <li key={link.id + '-' + link.href} style={{ margin: '0', marginTop: '1rem' }} className={pageLocale === 'en' ? '' : styles.fr}>
                            <h4>{link.label}</h4>
                            <Link
                              id={link.id}
                              className={styles.downloadButton}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ maxWidth: '100%', marginTop: '0.5rem' }}
                            >
                              <span className={styles.linkTitle}>
                                <span className="button-label" style={{ minWidth: "100%" }}>
                                  {link.description ? <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>{link.description}<Image src="/download.svg" alt="Download" className={styles.downloadIcon} width={20} height={20} style={{ width: '20px' }} /></span> : ''}
                                </span>
                              </span>
                            </Link>
                            {link.href.endsWith('.pdf') && (
                              <div className={styles.pdfPreview + ' ' + styles.single}>
                                <iframe
                                  src={link.href}
                                  title={`Preview of ${link.label}`}
                                  width="100%"
                                  height="400px"
                                  style={{ border: 'none' }}
                                  loading="lazy"
                                />
                              </div>
                            )}
                            {groupIdx < groups.length - 1 && <hr style={{ margin: '1rem 0', border: '1px dashed var(--black)' }} />}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </section>
            );
          })}
          <hr />
          <SeeAlso pages={["start", "guides", "resources"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="downloads" pageLocale={pageLocale} />
      </main>
    </div>
  );
}