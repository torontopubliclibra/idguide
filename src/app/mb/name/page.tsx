
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
              <li><Link href="#commissioning">{t("Subheadings.commissioning", "Commissioning", pageLocale)}</Link></li>
              <li><Link href="#submitting">{t("Subheadings.submittingYourApplication", "Submitting your application", pageLocale)}</Link></li>
              <li><Link href="#sources">{t("Subheadings.sources", "Sources", pageLocale)}</Link></li>
            </ul>
          </div>
          <hr />
          <h3 id="process">{t("Subheadings.process", "Process", pageLocale)}</h3>
          <ol>
            <li>Complete the <Link href="/downloads#mb-name">{t("NameChanges.manitobaApplicationName", "Manitoba application for an adult legal change of name", pageLocale)}</Link> and gather all required documents and the $100 fee.</li>
            <li>Submit your application to the Vital Statistics Branch (254 Portage Avenue, Winnipeg MB R3C 0B6) in person or by mail.</li>
            <li>Wait for review. If accepted, you will receive instructions for a certified criminal record check (if 18+). Do not undergo a criminal record check until instructed.</li>
            <li>Complete the certified criminal record check and submit results as instructed.</li>
            <li>If approved, you will receive your legal change of name certificate by mail.</li>
          </ol>
          <hr />
          <h3 id="requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>
          <h4>{t("Subheadings.eligibility", "Eligibility", pageLocale)}</h4>
          <ul>
            <li>Must have lived in Manitoba for at least 3 months before applying.</li>
            <li>Applicants must be 18+ (or under 18 and married/in a common-law relationship, or a parent with custody).</li>
            <li>To change a child&#39;s name, you must be the parent or legal guardian (with proper documentation and consents).</li>
            <li>You cannot apply if you:
              <ul>
                <li>Have been convicted of a primary offence as defined in subsection 490.011(1) of the Criminal Code (Canada)</li>
                <li>Are designated a dangerous offender (s.753) or long-term offender (s.753.1) under the Criminal Code</li>
                <li>Are listed on the National Sex Offender Registry</li>
              </ul>
            </li>
          </ul>
          <h4>{t("Subheadings.informationYoullNeedToProvide", "Information you'll need to provide", pageLocale)}</h4>
          <ol>
            <li>Current legal name and new chosen name</li>
            <li>Proof of Manitoba residency (e.g., health card, driver&#39;s license, or Manitoba ID)</li>
            <li>Identity document (government-issued, with photo and ID number)</li>
            <li>Birth certificate (or explanation if unavailable)</li>
            <li>Marital status and previous name changes (if any)</li>
            <li>Reason for name change (e.g., “to reclaim Indigenous name” or “to reflect my gender”)</li>
            <li>Notarized/commissioned documents (see below)</li>
            <li>All court documents for guardianship/custody (if applying for a child)</li>
            <li>All documents must be originals or confirmed copies (by eligible witness)</li>
            <li>Documents in other languages must be translated by a certified translator</li>
          </ol>
          <hr />
          <h3 id="commissioning">{t("Subheadings.commissioning", "Commissioning", pageLocale)}</h3>
          <p>Affidavits must be signed by a Commissioner for Oaths, RCMP, lawyer, notary, judge, or other authorized person (see The Evidence Act of Manitoba). Witnesses can also confirm photocopies of your documents by comparing originals and signing the copies.</p>
          <blockquote>
            <p>For trans I.D. clinics and commissioning services, see <Link href="/mb/resources" target='blank'>Manitoba resources</Link> for a list of local and province-wide organizations.</p>
          </blockquote>
          <hr />
          <h3 id="submitting">{t("Subheadings.submittingYourApplication", "Submitting your application", pageLocale)}</h3>
          <p>Submit your application and documents in person (by appointment) or by mail to:</p>
          <textarea readOnly name="address" id="address" value={
            `Vital Statistics Branch\nAttn: Legal Change of Name\n254 Portage Avenue\nWinnipeg MB   R3C 0B6`
          } />
          <p>To book an appointment: <a href="tel:204-945-3701">204-945-3701</a> or <a href="tel:866-949-9296">866-949-9296</a></p>
          <p>If mailing, use a tracked service if possible. Fees can be paid by cash, debit, or credit in person.</p>
          <hr />
          <h3 id="sources">Sources</h3>
          <ul>
            <li><a href="https://vitalstats.gov.mb.ca/change_of_name.html" target="_blank" rel="noreferrer">Manitoba Vital Statistics - Change of Name</a></li>
            <li><a href="https://queerwinnipeg.ca/posts/how-to-change-your-legal-name-or-sex-in-manitoba/" target="_blank" rel="noreferrer">Queer Winnipeg - How to Change Your Legal Name or Sex in Manitoba</a></li>
            <li><a href="https://rainbowresourcecentre.org/" target="_blank" rel="noreferrer">Rainbow Resource Centre</a></li>
            <li><a href="https://www.sunshinehousewpg.org/2s-trans-id-peer-support" target="_blank" rel="noreferrer">Sunshine House 2S/Trans ID Peer Support</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
