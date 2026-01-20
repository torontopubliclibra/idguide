"use client";

import React from "react";

import styles from "./page.module.css";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { t } from "../lib/i18n";
import { useState } from "react";

export default function Downloads() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  let pageLocale = "en";
  if (typeof window !== "undefined") {
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") pageLocale = "fr";
    else if (window.navigator.language.startsWith("fr")) pageLocale = "fr";
  }

  useEffect(() => {
    document.title = `${t("Pages.downloads", "Downloads", pageLocale)} | ${t("Site.name", "Downloads", pageLocale)}`;
    if (typeof window !== "undefined") {
      const setSectionFromHash = () => {
        const hash = window.location.hash.replace('#', '');
        if (hash) setOpenSection(hash);
      };
      setSectionFromHash();
      window.addEventListener('hashchange', setSectionFromHash);
      return () => window.removeEventListener('hashchange', setSectionFromHash);
    }
  }, [pageLocale]);

  useEffect(() => {
    if (!openSection) return;
    const timeout = setTimeout(() => {
      const el = document.getElementById(openSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
    return () => clearTimeout(timeout);
  }, [openSection]);

  const downloadSections = [
    {
      id: "ab-name",
      title: t("DownloadsPage.abName", "Alberta name changes", pageLocale),
      links: [
        {
          id: "dvs3132",
          href: "/dvs3132.pdf",
          label: "Alberta Name Change Application",
          description: "DVS3132 | English PDF download",
        }
      ],
      more: { href: "/ab/name" },
    },
    {
      id: "mb-name",
      title: t("DownloadsPage.mbName", "Manitoba name changes", pageLocale),
      links: [
        {
          id: "mbname",
          href: "/mb-application_change_of_name_adult.en.pdf",
          label: "Manitoba application for an adult legal change of name",
          description: "English PDF download",
        },
        {
          id: "mbname",
          href: "/mb-application_change_of_name_adult.fr.pdf",
          label: "Demande de changement légal de nom d'un adulte au Manitoba",
          description: "Téléchargement PDF français"
        }
      ],
      more: { href: "/mb/name" },
    },
    {
      id: "on-name",
      title: t("DownloadsPage.onName", "Ontario name changes", pageLocale),
      links: [
        {
          id: "11155",
          href: "/11155e.pdf",
          label: "Ontario application to change an adult's name",
          description: "11155e | English PDF download",
        },
        {
          id: "11155",
          href: "/11155f.pdf",
          label: "Demande de changement de nom d'une personne adulte en Ontario",
          description: "11155f | Téléchargement PDF français",
        },
        {
          id: "11320",
          href: "/11320e.pdf",
          label: "Request for Non-Publication in The Ontario Gazette",
          description: "11320e | English PDF download",
        },
        {
          id: "11320",
          href: "/11320f.pdf",
          label: "Demande de non-publication dans la Gazette de l'Ontario",
          description: "11320f | Téléchargement PDF français",
        },
        {
          id: "5349",
          href: "/5349e.pdf",
          label: "Requirements for a Police Record Check for a Change of Name",
          description: "5349e | English PDF download",
        },
        {
          id: "5349",
          href: "/5349f.pdf",
          label: "Exigences relatives à une vérification de dossiers de police pour un changement de nom",
          description: "5349f | Téléchargement PDF français",
        },
      ],
      more: { href: "/on/name" },
    },
    {
      id: "on-birth",
      title: t("DownloadsPage.onBirth", "Ontario birth certificates", pageLocale),
      links: [
        {
          id: "11325",
          href: "/11325e.pdf",
          label: "Ontario Application for a Change of Sex Designation on a Birth Registration of an Adult",
          description: "11325e | English PDF download",
        },
        {
          id: "11325",
          href: "/11325f.pdf",
          label: "Demande de changement de la désignation du sexe sur l'enregistrement de naissance d'un adulte en Ontario",
          description: "11325f | Téléchargement PDF français",
        },
        {
          id: "11324",
          href: "/11324e.pdf",
          label: "Ontario Statutory Declaration for a Change of Sex Designation on a Birth Registration of an Adult",
          description: "11324e | English PDF download",
        },
        {
          id: "11324",
          href: "/11324f.pdf",
          label: "Ontario Déclaration solennelle pour un changement de la désignation du sexe sur l'enregistrement de naissance d'un adulte",
          description: "11324f | Téléchargement PDF français",
        },
      ],
      more: { href: "/on/birth" },
    },
    {
      id: "on-health",
      title: t("DownloadsPage.onHealth", "Ontario health cards", pageLocale),
      links: [
        {
          id: "0280-82",
          href: "/0280-82e.pdf",
          label: "Ontario Health Card Change of Information Form",
          description: "0280-82e | English PDF download",
        },
        {
          id: "0280-82",
          href: "/0280-82f.pdf",
          label: "Demande de modification de la carte santé de l'Ontario",
          description: "0280-82f | Téléchargement PDF français",
        },
      ],
      more: { href: "/on/health" },
    },
    {
      id: "passport",
      title: t("DownloadsPage.passport", "Canadian passports", pageLocale),
      links: [
        {
          id: "pptc-153/4",
          href: "/pptc153.pdf",
          label: "Adult General Passport Application",
          description: "PPTC-153 | English PDF download",
        },
        {
          id: "pptc-153/4",
          href: "/pptc154.pdf",
          label: "Demande de passeport générale pour adulte",
          description: "PPTC-154 | Téléchargement PDF français",
        },
        {
          id: "pptc-643",
          href: "/pptc643e.pdf",
          label: "Canadian Passport Sex Identifier Update Form",
          description: "PPTC-643 | English PDF download",
        },
        {
          id: "pptc-643",
          href: "/pptc643f.pdf",
          label: "Demande de modification de l'identificateur de sexe sur le passeport canadien",
          description: "PPTC-643 | Téléchargement PDF français",
        },
      ],
      more: { href: "/passport" },
    },
    {
      id: "pr",
      title: t("DownloadsPage.pr", "Permanent resident cards", pageLocale),
      links: [
        {
          id: "imm5644",
          href: "/imm5644e.pdf",
          label: "Permanent Resident Card Document Checklist",
          description: "IMM-5644 | English PDF download",
        },
        {
          id: "imm5644",
          href: "/imm5644f.pdf",
          label: "Liste de vérification des documents pour la carte de résident permanent",
          description: "IMM-5644 | Téléchargement PDF français",
        },
      ],
      more: { href: "/pr" },
    },
    {
      id: "presentation-materials",
      title: t("DownloadsPage.presentationMaterials", "Presentation materials", pageLocale),
      links: [
        {
          id: "tg-id-1025",
          href: "/tg-id-1025.pdf",
          label: "Ontario TG I.D. slideshow",
          description: "English PDF download",
        },
        {
          id: "tg-id-1025-1",
          href: "/tg-id-1025.odp",
          label: "Ontario TG I.D. slideshow",
          description: "English ODP",
        },
        {
          id: "tg-id-1025-1",
          href: "/tg-id-1025.pptx",
          label: "Ontario TG I.D. slideshow",
          description: "English PPTX",
        },
      ],
      more: null,
    },
  ];

  return (
    <div className="page">
      <main className={styles.downloads}>
        <h2 className="page-title">{t("Pages.downloads", "Downloads", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p>
            {t("DownloadsPage.intro", "Here you'll find the forms to help with name changes and gender marker updates, as well as presentation materials for past workshops. If you need help finding the right document, please check the sources at the bottom of the related guide, or", pageLocale)} <Link href="mailto:contact@idguide.ca">{t("DownloadsPage.contactUs", "contact us", pageLocale)}</Link> {t("DownloadsPage.forSupport", "for support.", pageLocale)}
          </p>

          <hr />
          <div className="pageNav">
            <p>{t("Site.jumpTo", "Jump to", pageLocale)}: </p>
            <ul>
              <li><Link href="#ab-name" onClick={e => {e.preventDefault(); setOpenSection("ab-name"); window.location.hash = "ab-name";}}>{t("DownloadsPage.abName", "Alberta name changes", pageLocale)}</Link></li>
              <li><Link href="#mb-name" onClick={e => {e.preventDefault(); setOpenSection("mb-name"); window.location.hash = "mb-name";}}>{t("DownloadsPage.mbName", "Manitoba name changes", pageLocale)}</Link></li>
              <li><Link href="#on-name" onClick={e => {e.preventDefault(); setOpenSection("on-name"); window.location.hash = "on-name";}}>{t("DownloadsPage.onName", "Ontario name changes", pageLocale)}</Link></li>
              <li><Link href="#on-birth" onClick={e => {e.preventDefault(); setOpenSection("on-birth"); window.location.hash = "on-birth";}}>{t("DownloadsPage.onBirth", "Ontario birth certificates", pageLocale)}</Link></li>
              <li><Link href="#on-health" onClick={e => {e.preventDefault(); setOpenSection("on-health"); window.location.hash = "on-health";}}>{t("DownloadsPage.onHealth", "Ontario health cards", pageLocale)}</Link></li>
              <li><Link href="#passport" onClick={e => {e.preventDefault(); setOpenSection("passport"); window.location.hash = "passport";}}>{t("DownloadsPage.passport", "Canadian passports", pageLocale)}</Link></li>
              <li><Link href="#pr" onClick={e => {e.preventDefault(); setOpenSection("pr"); window.location.hash = "pr";}}>{t("DownloadsPage.pr", "Permanent resident cards", pageLocale)}</Link></li>
              <li><Link href="#presentation-materials" onClick={e => {e.preventDefault(); setOpenSection("presentation-materials"); window.location.hash = "presentation-materials";}}>{t("DownloadsPage.presentationMaterials", "Presentation materials", pageLocale)}</Link></li>
            </ul>
          </div>
          <hr/>
          {downloadSections.map(section => {
            const isOpen = openSection === section.id;

            return (
              <section key={section.id} className={styles.accordionSection}>
                <button
                  id={section.id}
                  className={styles.accordionButton + ' accordionBtn'}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${section.id}`}
                  onClick={() => setOpenSection(isOpen ? null : section.id)}
                >
                  <span>
                    {section.title}
                  </span>
                  <span style={{fontSize: '1.15em', transition: 'transform 0.2s', transform: isOpen ? 'rotate(90deg)' : 'rotate(180deg)'}}>&#9654;</span>
                </button>
                <div
                  id={`panel-${section.id}`}
                  className={styles.accordionPanel}
                  style={{
                    display: isOpen ? 'block' : 'none',
                    padding: isOpen ? '1rem' : 0,
                  }}
                  aria-hidden={!isOpen}
                >
                  {section.more && (
                    <p style={{color: 'var(--black)', fontSize: '0.9em'}}>
                      {t("Site.moreAbout", "More about ", pageLocale)}
                      <Link href={section.more.href} target="_blank">
                        {pageLocale === "en"
                          ? section.title
                          : section.title.charAt(0).toLowerCase() + section.title.slice(1)}
                      </Link>.
                      <br style={{marginBottom: '0.75rem'}}/>
                    </p>
                  )}
                  <ul style={{padding: 0, marginTop: -16, listStyle: 'none'}}>
                    {(() => {
                      const getIdPrefix = (id: string) => id.replace(/([a-zA-Z])$/, '');
                      const groups = [];
                      let i = 0;
                      while (i < section.links.length) {
                        const currentPrefix = getIdPrefix(section.links[i].id);
                        const group = [section.links[i]];
                        let j = i + 1;
                        while (j < section.links.length && getIdPrefix(section.links[j].id) === currentPrefix) {
                          group.push(section.links[j]);
                          j++;
                        }
                        groups.push(group);
                        i = j;
                      }
                      return groups.map((group, groupIdx) => {
                        if (group.length > 1) {
                          return (
                            <React.Fragment key={group.map(l => l.id + '-' + l.href).join('-') + i}>
                            <li className={styles.linkGroup + (pageLocale === 'en' ? '' : ' ' + styles.fr)} style={{margin: '1rem 0'}}>
                              {group.map(link => (
                                <div key={link.id + '-' + link.href} style={{flex: 1}}>
                                  <Link
                                    id={link.id}
                                    className={styles.downloadButton}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{maxWidth: '100%'}}
                                  >
                                    <span className={styles.linkTitle}>
                                      <span className="button-label" style={{minWidth: "100%"}}>
                                        {link.label}
                                        {link.description ? <><hr style={{borderColor: 'var(--white)'}}/><span style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', fontSize: '0.75rem'}}>{link.description}<Image src="/download.svg" alt="Download" className={styles.downloadIcon} width={20} height={20} style={{width: '20px'}} /></span></> : ''}
                                      </span>
                                    </span>
                                  </Link>
                                  {link.href.endsWith('.pdf') && (
                                    <div className={styles.pdfPreview}>
                                      <iframe
                                        src={link.href}
                                        title={`Preview of ${link.label}`}
                                        width="100%"
                                        height="400px"
                                        style={{border: 'none'}}
                                        loading="lazy"
                                      />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </li>
                            {groupIdx < groups.length - 1 && <hr style={{margin: '1rem 0', border: '1px dashed var(--black)'}} />}
                            </React.Fragment>
                          );
                        } else {
                          const link = group[0];
                          return (
                            <li key={link.id + '-' + link.href} style={{margin: '1rem 0'}}>
                              <Link
                                id={link.id}
                                className={styles.downloadButton}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className={styles.linkTitle}>
                                  <span className="button-label" style={{minWidth: "100%"}}>
                                    {link.label}
                                    {link.description ? <><hr style={{borderColor: 'var(--white)'}}/><span style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem'}}>{link.description}<Image src="/download.svg" alt="Download" className={styles.downloadIcon} width={20} height={20} style={{width: '20px'}} /></span></>  : ''}
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
                                    style={{border: 'none'}}
                                    loading="lazy"
                                  />
                                </div>
                              )}
                              {groupIdx < groups.length - 1 && <hr style={{margin: '1rem 0', border: '1px dashed var(--black)'}} />}
                            </li>
                          );
                        }
                      });
                    })()}
                  </ul>
                </div>
              </section>
            );
          })}
          <hr />
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/start">{t("Pages.start", "Get started", pageLocale)}</Link></li>
              <li><Link href="/guides">{t("Pages.guides", "Guides", pageLocale)}</Link></li>
              <li><Link href="/resources">{t("Pages.resources", "Resources", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}