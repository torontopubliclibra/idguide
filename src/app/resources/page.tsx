"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";
import { t } from "../lib/i18n";

export default function Resources() {
  let pageLocale = "en";
  if (typeof window !== "undefined") {
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") pageLocale = "fr";
    else if (window.navigator.language.startsWith("fr")) pageLocale = "fr";
  }
  
  useEffect(() => {
    document.title = `${t("Pages.resources", "Resources", pageLocale)} | ${t("Site.name", "Resources", pageLocale)}`;
  }, [pageLocale]);
  
  return (
    <div className="page">
      <main className={styles.resources}>
        <h2 className="page-title">{t("Pages.resources", "Resources", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p className={styles.intro}>
            {t("ResourcesPage.intro", "This table lists organizations offering trans I.D. clinics, legal support, healthcare, peer groups, and other resources for 2SLGBTQ+ people across Canada. You'll also find links below to our lists of region-specific resources.", pageLocale)}
          </p>
          <p>
            {t("ResourcesPage.suggestion", "If you have a resource to suggest, please", pageLocale)}{" "}
            <Link href="mailto:contact@idguide.ca">{t("ResourcesPage.contactUs", "contact us", pageLocale)}</Link>.
          </p>
          <br />
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>{t("ResourcesPage.organization", "Organization", pageLocale)}</th>
                <th>{t("ResourcesPage.service", "Service", pageLocale)}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="https://justicetrans.org/" target="_blank" rel="noreferrer">
                    JusticeTrans
                  </a>
                </td>
                <td>{t("ResourcesPage.justicetrans", "legal rights and information", pageLocale)}</td>
              </tr>
              <tr>
                <td>
                  <a href="https://egale.ca/" target="_blank" rel="noreferrer">
                    Egale Canada
                  </a>
                </td>
                <td>{t("ResourcesPage.egale", "Advocacy and research for 2SLGBTQI rights", pageLocale)}</td>
              </tr>
              <tr>
                <td>
                  <a href="https://translifeline.org/" target="_blank" rel="noreferrer">
                    Trans Lifeline
                  </a>
                </td>
                <td>{t("ResourcesPage.translifeline", "Peer support hotline", pageLocale)}</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h3>{t("ResourcesPage.byRegion", "Resources by region", pageLocale)}</h3>
          <ul>
            <li>
              <Link href="/ab/resources">{t("ResourcesPage.ab", "Alberta resources", pageLocale)}</Link>
            </li>
            <li>
              <Link href="/on/resources">{t("ResourcesPage.on", "Ontario resources", pageLocale)}</Link>
            </li>
            <li>
              <Link href="/mb/resources">{t("ResourcesPage.mb", "Manitoba resources", pageLocale)}</Link>
            </li>
          </ul>
          <hr />
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
              <li>
                <Link href="/start">{t("Pages.start", "Get started", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/guides">{t("Pages.guides", "Guides", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/downloads">{t("Pages.downloads", "Downloads", pageLocale)}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}
