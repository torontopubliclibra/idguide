"use client";

import Link from 'next/link';
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../lib/i18n";

export default function SIN() {
  
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.sin", "Social Insurance Registry", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.sin}>
        <h2 className="page-title">{t("Pages.sin", "Social Insurance Registry", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>{t("Site.jumpTo", "Jump to", pageLocale)}:</p>
            <ul>
              <li><Link href="#process">{t("Subheadings.process", "Process", pageLocale)}</Link></li>
              <li><Link href="#important-considerations">{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</Link></li>
              <li><Link href="#sources">{t("Subheadings.sources", "Sources", pageLocale)}</Link></li>
            </ul>
          </div>
          <hr />
          <h3 id="process">{t("Subheadings.process", "Process", pageLocale)}</h3>
          <p>Permanent and temporary residents need a Social Insurance Number (SIN) to work in Canada or access government programs and benefits. Your SIN is linked to your legal name, date of birth, place of birth, and parents’ names. Updating this information will not change your SIN itself; you will receive a confirmation letter in the mail once your update is successful.</p>
          <p>Apply to update your SIN when you change your name and/or gender marker. You can submit your application:</p>
          <ul>
            <li><strong>{t("Subheadings.inPerson", "In person", pageLocale)}:</strong> Service Canada Centre, 559 College Street, Suite 100, Toronto ON M6G 1A9</li>
            <li><strong>{t("Subheadings.online", "Online", pageLocale)}:</strong> <Link href="https://sin-nas.canada.ca/en/Sin/" target="_blank" rel="noreferrer">SIN Online Portal</Link></li>
            <li><strong>{t("Subheadings.byMail", "By mail", pageLocale)}:</strong> Service Canada, Social Insurance Registration Office, PO Box 7000, Bathurst, NB E2A 4T1</li>
          </ul>
          <p>For most people, applying in person or online is easiest. You will need to provide three separate identity documents: one primary, one secondary, and one supporting document (for most, this is your Name Change Certificate). See the <Link href="https://www.canada.ca/en/employment-social-development/services/sin/required-documents.html" target="_blank" rel="noreferrer">official list of accepted documents</Link>.</p>
          <p>If applying online, you may use digital copies of the same documents. Visit the <Link href="https://www.canada.ca/en/employment-social-development/services/sin/receiving-updating" target="_blank" rel="noreferrer">Service Canada SIN portal</Link> for details.</p>
          <h3 id="important-considerations">{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h3>
          <p>If you are updating your sex designation, you may now choose an X marker or choose to not declare your gender. Service Canada will add a note to your record with your choice. However, until their computer systems are upgraded, &quot;male&quot; or &quot;female&quot; will still appear on your SIN record.</p>
          <p>After updating your SIN record, you must also notify the <Link href="/cra">Canada Revenue Agency</Link>.</p>
        <hr/>
          <h3 id="sources">{t("Subheadings.sources", "Sources", pageLocale)}</h3>
          <ul>
            <li><Link href="https://www.canada.ca/en/employment-social-development/services/sin/receiving-updating" target="_blank" rel="noreferrer">Government of Canada - Receiving and updating your SIN</Link></li>
          </ul>
          <hr/>
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/cra">{t("Pages.cra", "Canada Revenue Agency", pageLocale)}</Link></li>
              <li><Link href="/passport">{t("Pages.passport", "Canadian passports", pageLocale)}</Link></li>
              <li><Link href="/pr">{t("Pages.prCards", "Permanent residency cards", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
