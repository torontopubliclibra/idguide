
"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";
import { t } from "../../lib/i18n";

export default function AbResources() {
  let pageLocale = "en";
  if (typeof window !== "undefined") {
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") pageLocale = "fr";
    else if (window.navigator.language.startsWith("fr")) pageLocale = "fr";
  }

  useEffect(() => {
    document.title = `${t("Pages.albertaResources", "Alberta resources", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.resources}>
        <h2 className="page-title">{t("Pages.albertaResources", "Alberta resources", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p className={styles.intro}>
            {t("ResourcesPage.albertaIntro", "This table lists organizations offering trans I.D. clinics, legal support, peer groups, and other resources for 2SLGBTQ+ people in Alberta. You&apos;ll find options for major cities, province-wide services, and online support.", pageLocale)}
          </p>
          <p>{t("ResourcesPage.suggestion", "If you have a suggestion for this page, or you spot an error, please", pageLocale)} <Link href="mailto:contact@idguide.ca">{t("ResourcesPage.contactUs", "contact us", pageLocale)}</Link>.</p>
          <hr />
          <div className="pageNav">
            <p>{t("Site.jumpTo", "Jump to", pageLocale)}:</p>
            <ul>
              <li><Link href="#province-wide">{t("Subheadings.provinceWide", "Province-wide", pageLocale)}</Link></li>
              <li><Link href="#edmonton">Edmonton</Link></li>
              <li><Link href="#calgary">Calgary</Link></li>
            </ul>
          </div>
          <hr />
          <h3 id="province-wide">{t("Subheadings.provinceWide", "Province-wide", pageLocale)}</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://albertahumanrights.ab.ca/" target="_blank" rel="noreferrer">Alberta Human Rights Commission</a></td>
                <td>Human rights advocacy and support</td>
              </tr>
              <tr>
                <td><a href="https://www.transwellnessinitiative.ca/" target="_blank" rel="noreferrer">Trans Wellness Initiative</a></td>
                <td>Medical and community resources</td>
              </tr>
              <tr>
                <td><a href="https://www.connectfund.org/" target="_blank" rel="noreferrer">Connect Fund</a></td>
                <td>Medical funding support</td>
              </tr>
              <tr>
                <td><a href="https://www.foriaclinic.com/" target="_blank" rel="noreferrer">Foria Clinic</a></td>
                <td>Virtual healthcare services</td>
              </tr>
            </tbody>
          </table>
          <h3 id="edmonton">Edmonton</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.slsedmonton.com/trans-id-project" target="_blank" rel="noreferrer">Student Legal Services of Edmonton Trans I.D. Clinic</a></td>
                <td>Legal support for I.D. changes</td>
              </tr>
              <tr>
                <td><a href="https://pridecentreofedmonton.ca/" target="_blank" rel="noreferrer">Pride Centre of Edmonton</a></td>
                <td>Peer support, groups, and community resources</td>
              </tr>
            </tbody>
          </table>
          <h3 id="calgary">Calgary</h3>
          <table className={styles.resourceTable}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.skippingstone.ca/" target="_blank" rel="noreferrer">Skipping Stone</a></td>
                <td>Peer support, drop-ins</td>
              </tr>
              <tr>
                <td><a href="https://clg.ab.ca/">Calgary Legal Guidance</a></td>
                <td>Legal services and support</td>
              </tr>
              <tr>
                <td><a href="https://www.calgaryoutlink.ca/" target="_blank" rel="noreferrer">Calgary Outlink</a></td>
                <td>Peer support, groups, and community resources</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <p>{t("ResourcesPage.suggestion", "If you have a suggestion for a resource to add, or you spot an error, please", pageLocale)} <Link href="mailto:contact@idguide.ca">{t("ResourcesPage.contactUs", "contact us", pageLocale)}</Link>. {t("Disclaimers.disclaimer-4", "Your feedback helps keep this resource accurate and useful for everyone.", pageLocale)}</p>
          <hr />
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/start">{t("Pages.start", "Get started", pageLocale)}</Link></li>
              <li><Link href="/ab/name">{t("Pages.albertaNameChanges", "Alberta name changes", pageLocale)}</Link></li>
              <li><Link href="/resources">{t("Pages.canadaWideResources", "Canada-wide resources", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}
