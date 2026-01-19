"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import Link from "next/link";
import { t } from "../lib/i18n";

export default function Downloads() {
  let pageLocale = "en";
  if (typeof window !== "undefined") {
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") pageLocale = "fr";
    else if (window.navigator.language.startsWith("fr")) pageLocale = "fr";
  }

  useEffect(() => {
    document.title = `${t("Pages.downloads", "Downloads", pageLocale)} | ${t("Site.name", "Downloads", pageLocale)}`;
  }, [pageLocale]);

  const downloadSections = [
    {
      id: "ab-name",
      title: t("DownloadsPage.abName", "Alberta name changes", pageLocale),
      links: [
        {
          id: "dvs3132",
          href: "/dvs3132.pdf",
          label: "Alberta Name Change Application",
          description: "DVS3132",
        }
      ],
      more: { href: "/ab/name" },
    },
    {
      id: "mb-name",
      title: t("DownloadsPage.mbName", "Manitoba name changes", pageLocale),
      links: [
        {
          id: "application_change_of_name_adult",
          href: "/mb-application_change_of_name_adult.en.pdf",
          label: "Manitoba Name Change Application",
          description: ""
        }
      ],
      more: { href: "/mb/name" },
    },
    {
      id: "on-name",
      title: t("DownloadsPage.onName", "Ontario name changes", pageLocale),
      links: [
        {
          id: "11155e",
          href: "/11155e.pdf",
          label: "Ontario Name Change Application",
          description: "11155e",
        },
        {
          id: "11320e",
          href: "/11320e.pdf",
          label: "Request for Non-Publication in The Ontario Gazette",
          description: "11320e",
        },
        {
          id: "5349e",
          href: "/5349e.pdf",
          label: "Requirements for a Police Record Check for a Change of Name",
          description: "5349e",
        },
      ],
      more: { href: "/on/name" },
    },
    {
      id: "on-birth",
      title: t("DownloadsPage.onBirth", "Ontario birth certificates", pageLocale),
      links: [
        {
          id: "11325e",
          href: "/11325e.pdf",
          label: "Ontario Birth Certificate Sex Designation Form",
          description: "11325e",
        },
        {
          id: "11324e",
          href: "/11324e.pdf",
          label: "Ontario Birth Certificate Sex Designation Statutory Declaration",
          description: "11324e",
        },
      ],
      more: { href: "/on/birth" },
    },
    {
      id: "on-health",
      title: t("DownloadsPage.onHealth", "Ontario health cards", pageLocale),
      links: [
        {
          id: "0280-82e",
          href: "/0280-82e.pdf",
          label: "Ontario Health Card Change of Information Form",
          description: "0280-82e",
        },
      ],
      more: { href: "/on/health" },
    },
    {
      id: "passport",
      title: t("DownloadsPage.passport", "Canadian passports", pageLocale),
      links: [
        {
          id: "pptc-153",
          href: "/pptc153.pdf",
          label: "Adult General Passport Application",
          description: "PPTC-153",
        },
        {
          id: "pptc-643",
          href: "/pptc643.pdf",
          label: "Canadian Passport Sex Identifier Update Form",
          description: "PPTC-643",
        },
      ],
      more: { href: "/passport" },
    },
    {
      id: "pr",
      title: t("DownloadsPage.pr", "Permanent resident cards", pageLocale),
      links: [
        {
          id: "imm5644e",
          href: "/imm5644e.pdf",
          label: "Permanent Resident Card Document Checklist",
          description: "IMM-5644",
        },
      ],
      more: { href: "/pr" },
    },
    {
      id: "presentation-materials",
      title: t("DownloadsPage.presentationMaterials", "Presentation materials", pageLocale),
      links: [
        {
          id: "tg-id-1025-pdf",
          href: "/tg-id-1025.pdf",
          label: "Ontario TG I.D. slideshow",
          description: "PDF | EN",
        },
        {
          id: "tg-id-1025-odp",
          href: "/tg-id-1025.odp",
          label: "Ontario TG I.D. slideshow",
          description: "ODP | EN",
        },
        {
          id: "tg-id-1025-pptx",
          href: "/tg-id-1025.pptx",
          label: "Ontario TG I.D. slideshow",
          description: "PPTX | EN",
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
              <li><Link href="#ab-name">{t("DownloadsPage.abName", "Alberta name changes", pageLocale)}</Link></li>
              <li><Link href="#mb-name">{t("DownloadsPage.mbName", "Manitoba name changes", pageLocale)}</Link></li>
              <li><Link href="#on-name">{t("DownloadsPage.onName", "Ontario name changes", pageLocale)}</Link></li>
              <li><Link href="#on-birth">{t("DownloadsPage.onBirth", "Ontario birth certificates", pageLocale)}</Link></li>
              <li><Link href="#on-health">{t("DownloadsPage.onHealth", "Ontario health cards", pageLocale)}</Link></li>
              <li><Link href="#passport">{t("DownloadsPage.passport", "Canadian passports", pageLocale)}</Link></li>
              <li><Link href="#pr">{t("DownloadsPage.pr", "Permanent resident cards", pageLocale)}</Link></li>
              <li><Link href="#presentation-materials">{t("DownloadsPage.presentationMaterials", "Presentation materials", pageLocale)}</Link></li>
            </ul>
          </div>
          
          <hr/>
          {downloadSections.map(section => (
            <section key={section.id}>
              <h3 id={section.id} className={styles.h4} style={{paddingBottom: '0.5rem'}}>
                {section.more ? (
                  <Link href={section.more.href} style={{textDecoration: 'none'}}>{section.title}</Link>
                ) : (
                  section.title
                )}
              </h3>
              <ul>
                {section.links.map(link => (
                  <li key={link.id} style={{margin: '1rem 0'}}>
                    <Link
                      id={link.id}
                      className="download"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{display: 'block'}}
                    >
                      <span className="link-title" style={{display: 'flex', alignItems: 'center', gap: '0.5em'}}>
                        <span className="button-label">
                          {link.label}
                          {link.description ? ` (${link.description})` : ''}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              {section.id !== 'presentation-materials' && <hr style={{marginTop: '2rem'}}/>}
            </section>
          ))}
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