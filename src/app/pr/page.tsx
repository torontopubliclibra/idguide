"use client";

import Link from 'next/link';
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../lib/i18n";

export default function PR() {
  
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.prCards", "Permanent resident cards", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.pr}>
        <h2 className="page-title">{t("Pages.prCards", "Permanent resident cards", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>{t("Site.jumpTo", "Jump to", pageLocale)}:</p>
            <ul>
              <li><Link href="#process">{t("Subheadings.process", "Process", pageLocale)}</Link></li>
              <li><Link href="#requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</Link></li>
              <li><Link href="#important-considerations">{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</Link></li>
              <li><Link href="#sources">{t("Subheadings.sources", "Sources", pageLocale)}</Link></li>
            </ul>
          </div>
          <hr />

          <h3 id="process">{t("Subheadings.process", "Process", pageLocale)}</h3>
          <p>If you need to update the name on your permanent resident card, you must apply for a new card (reissued cards are not available for name changes). Complete the <Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5445-applying-permanent-resident-card-card-first-application-replacement-renewal-change-gender-identifier" target="_blank" rel="noreferrer">PR Card Application (IMM-5445)</Link> to start the process. The fee is $50.00.</p>

          <h3 id="requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>
          <p>Use the <Link href="/downloads#pr">Permanent Resident Card Document Checklist (IMM-5644)</Link> to confirm which documents you need. Include the completed checklist with your application</p>
          <ul>
            <li>Copy of the receipt showing the fees paid</li>
            <li>Photos must meet the <Link href="https://www.canada.ca/content/dam/ircc/migration/ircc/english/pdf/photospecs-e.pdf" target="_blank" rel="noreferrer">photo specifications (PDF)</Link><br />
              <ul>
                <li>If applying online: upload 1 photo (front and back) taken within 12 months. For digital photos, upload a confirmation from the photo studio if required</li>
                <li>If applying by paper: provide two (2) identical photos taken within 12 months, in a small envelope with the applicant&#39;s name written on it (no staples or paper clips)</li>
              </ul>
            </li>
            <li>Documents showing you meet the residency obligation for the past 5 years. See <Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/appendix-a-residency-obligation.html" target="_blank" rel="noreferrer">Appendix A: Residency Obligation</Link></li>
            <li>A copy of one of the following:
              <ul>
                <li>Your valid passport or travel document</li>
                <li>The passport or travel document you had when you became a permanent resident (include the page stamped on arrival, if applicable)</li>
                <li>Certificate of identity or travel document issued by IRCC or a foreign country</li>
              </ul>
              <em>The copy should show document type and number, issue and expiry date, your name, photo, and date of birth</em>
            </li>
            <li>Your current PR card (if renewing or replacing)</li>
            <li><Link href="/name">Change of name certificate</Link></li>
            <li>If your PR card was lost, include a copy of a police report or incident number</li>
          </ul>
          <h4>{t("Subheadings.inExceptionalCases", "In exceptional cases", pageLocale)}</h4>
          <ul>
            <li>If you cannot obtain a primary identity document, provide:
              <ul>
                <li>A copy of any identity document issued outside Canada before you came to Canada, or</li>
                <li>A statutory declaration signed by you attesting to your identity and a statutory declaration also attesting to your identity signed by:
                  <ul>
                    <li>a person who knew you before you came to Canada (such as a family member), or</li>
                    <li>an official of an organization representing people from your country of nationality or past residence.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <blockquote>
            All statutory declarations must be certified by an accredited commissioner of oaths. If submitting a statutory declaration, also provide a letter explaining the exceptional circumstances and why you cannot obtain identity documents.
          </blockquote>
          <br/>
          <h4>{t("Subheadings.translations", "Translations", pageLocale)}</h4>
          <ul>
            <li>Any document not in English or French must be accompanied by:
              <ul>
                <li>The English or French translation</li>
                <li>An affidavit from the translator (if not a Canadian certified translator)</li>
              </ul>
            </li>
            <li>Translations must not be done by the applicant or their family members</li>
          </ul>
          <h3 id="important-considerations">{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h3>
          <ul>
            <li>Temporary Residence Permits cannot be amended to reflect changes made in Canada (e.g., a name change completed in Ontario). Your temporary residence permit must match your passport.</li>
            <li>If your name change document was issued outside of Canada, you must also provide a provincial ID in your new name (such as a driver&#39;s license, photo card, or health card).</li>
          </ul>
          <hr/>
          <h3 id="sources">{t("Subheadings.sources", "Sources", pageLocale)}</h3>
          <ul>
            <li><Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5445-applying-permanent-resident-card-card-first-application-replacement-renewal-change-gender-identifier" target="_blank" rel="noreferrer">Government of Canada - Applying for a permanent resident card</Link></li>
            <li><Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5530-request-reissue-permanent-resident-card-card" target="_blank" rel="noreferrer">Government of Canada - Request to Reissue a Permanent Resident Card</Link></li>
          </ul>
          <hr/>
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/sin">{t("Pages.sin", "Social Insurance Registry", pageLocale)}</Link></li>
              <li><Link href="/cra">{t("Pages.cra", "Canada Revenue Agency", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
