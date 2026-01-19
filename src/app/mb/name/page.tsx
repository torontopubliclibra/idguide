"use client";

import Link from 'next/link';
import { useEffect } from "react";
import styles from "./page.module.css";
import { t } from "../../lib/i18n";

export default function MbName() {
  let pageLocale = "en";
  if (typeof window !== "undefined") {
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") pageLocale = "fr";
    else if (window.navigator.language.startsWith("fr")) pageLocale = "fr";
  }

  useEffect(() => {
    document.title = `${t("Pages.manitobaNameChanges", "Manitoba name changes", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.name}>
        <h2 className="page-title">{t("Pages.manitobaNameChanges", "Manitoba name changes", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>{t("Site.jumpTo", "Jump to", pageLocale)}:</p>
            <ul>
              <li><Link href="#process">{t("Subheadings.process", "Process", pageLocale)}</Link></li>
              <li><Link href="#requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</Link></li>
              <li><Link href="#submitting-your-application">{t("Subheadings.submittingYourApplication", "Submitting your application", pageLocale)}</Link></li>
              <li><Link href="#sources">{t("Subheadings.sources", "Sources", pageLocale)}</Link></li>
            </ul>
          </div>
          <hr />
          <h3 id='process'>{t("Subheadings.process", "Process", pageLocale)}</h3>
          <p>To legally change your name in Manitoba, fill out the <Link  href="/downloads#mb-name">Legal Change of Name Application (Adult)</Link>.</p>
          <h3 id='requirements'>{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>
          <h4>{t("Subheadings.informationYoullNeedToProvide", "Information you'll need to provide", pageLocale)}</h4>
          <ol>
            <li>Current legal name and new chosen name</li>
            <li>Proof of Manitoba residency (e.g., health card, driver&#39;s license, or Manitoba ID)</li>
            <li>Identity document (government-issued, with photo and ID number)</li>
            <li>Birth certificate (or explanation if unavailable)</li>
            <li>Marital status and previous name changes (if any)</li>
            <li>Reason for name change (e.g., “to reflect my preferred gender”)</li>
            <li>Notarized/commissioned documents (see below)</li>
          </ol>
          <h4>{t("Subheadings.commissioning", "Commissioning", pageLocale)}</h4>
          <p>Documents must be confirmed/notarized by a Commissioner of Oaths, RCMP, lawyer, or at the Vital Statistics Agency.</p>
          <blockquote>
            <p>For trans I.D. clinics and commissioning services, see <Link href="/mb/resources" target='blank'>Manitoba resources</Link> for a list of local and province-wide organizations.</p>
          </blockquote>
          <h3 id='submitting-your-application'>{t("Subheadings.submittingYourApplication", "Submitting your application", pageLocale)}</h3>
          <p>Forms can be submitted in person at the <a href="https://www.google.com/maps/place/254+Portage+Ave,+Winnipeg,+MB+R3C+0B6" target="_blank" rel="noreferrer">Vital Statistics Branch (254 Portage Ave, Winnipeg)</a>, or by mail/fax. In-person submission is recommended for faster processing and support.</p>
          <p>If mailing or faxing, expect a 2-8 month backlog. Fees can be paid by cash, debit, or credit. As of 2024, trans individuals are exempt from the publication fee in the Manitoba Gazette and can request this exemption on the form. Fingerprinting may be required. The Vital Statistics Agency will provide instructions and an information sheet if so.</p>
          <hr />
          <h3 id='sources'>{t("Subheadings.sources", "Sources", pageLocale)}</h3>
          <ul>
            <li><a href="https://queerwinnipeg.ca/posts/how-to-change-your-legal-name-or-sex-in-manitoba/" target="_blank" rel="noreferrer">Queer Winnipeg - How to Change Your Legal Name or Sex in Manitoba</a></li>
            <li><a href="https://vitalstats.gov.mb.ca/change_of_name.html" target="_blank" rel="noreferrer">Manitoba Vital Statistics - Change of Name</a></li>
            <li><a href="https://rainbowresourcecentre.org/" target="_blank" rel="noreferrer">Rainbow Resource Centre</a></li>
            <li><a href="https://www.sunshinehousewpg.org/2s-trans-id-peer-support" target="_blank" rel="noreferrer">Sunshine House 2S/Trans ID Peer Support</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
