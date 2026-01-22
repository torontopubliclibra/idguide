"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../../lib/i18n";

export default function MbResources() {
  
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.manitobaResources", "Manitoba resources", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);
  
  return (
    <div className="page">
      <main className={styles.resources}>
        <h2 className="page-title">{t("Pages.manitobaResources", "Manitoba resources", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p className={styles.intro}>
            {t("ResourcesPage.manitobaIntro", "This table lists organizations offering trans I.D. clinics, legal support, healthcare, peer groups, and other resources for 2SLGBTQ+ people in Manitoba.", pageLocale)}
          </p>
          <p>{t("ResourcesPage.suggestion", "If you have a suggestion for this page, or you spot an error, please", pageLocale)} <Link href="mailto:contact@idguide.ca">{t("ResourcesPage.contactUs", "contact us", pageLocale)}</Link>.</p>
          <hr />
          <div className="pageNav">
            <p>{t("Site.jumpTo", "Jump to", pageLocale)}:</p>
            <ul>
              <li><Link href="#province-wide">{t("Subheadings.provinceWide", "Province-wide", pageLocale)}</Link></li>
              <li><Link href="#winnipeg">Winnipeg</Link></li>
            </ul>
          </div>
          <hr />

          <h3 id="province-wide">{t("Subheadings.provinceWide", "Province-wide", pageLocale)}</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.manitobahumanrights.ca/" target="_blank" rel="noreferrer">Manitoba Human Rights Commission</a></td>
                <td>Human rights advocacy and support</td>
              </tr>
              <tr>
                <td><a href="https://justicetrans.org/projects/2s-trans-self-advocacy-workbook/" target="_blank" rel="noreferrer">JusticeTrans 2S Trans+ Self Advocacy Workbook</a></td>
                <td>Self-advocacy workbook</td>
              </tr>
              <tr>
                <td><a href="https://klinic.mb.ca/all-services/trans-health-trans-health-klinic/" target="_blank" rel="noreferrer">Trans Health Klinic Community Health</a></td>
                <td>Medical, psychosocial, and peer supports</td>
              </tr>
            </tbody>
          </table>
          <h3 id="winnipeg">Winnipeg</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://rainbowresourcecentre.org/" target="_blank" rel="noreferrer">Rainbow Resource Centre</a></td>
                <td>I.D. clinics, support programs, and drop-ins</td>
              </tr>
              <tr>
                <td><a href="https://www.sunshinehousewpg.org/" target="_blank" rel="noreferrer">Sunshine House</a></td>
                <td>Peer support, drop-ins, and community resources</td>
              </tr>
              <tr>
                <td><a href="https://www.sunshinehousewpg.org/2s-trans-id-peer-support" target="_blank" rel="noreferrer">Sunshine House 2S/Trans ID Peer Support</a></td>
                <td>I.D. peer support</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/start">{t("Pages.start", "Get started", pageLocale)}</Link></li>
              <li><Link href="/mb/name">{t("Pages.manitobaNameChanges", "Manitoba name change guide", pageLocale)}</Link></li>
              <li><Link href="/resources">{t("Pages.canadaWideResources", "Canada-wide resources", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}
