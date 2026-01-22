"use client";

import Link from 'next/link';
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../../lib/i18n";

export default function AbName() {
  
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.albertaNameChanges", "Alberta name changes", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.name}>
        <h2 className="page-title">{t("Pages.albertaNameChanges", "Alberta name changes", pageLocale)}</h2>
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
          <p>To legally change your name in Alberta, fill out the <Link href="/downloads#ab-name" target="_blank" rel="noreferrer">Application for Change of Name (DVS3132)</Link>.</p>
          <p>The application is 16 pages and split into five sections, but you may not need to complete every part. A fee of $120 is required.</p>
          <h3 id='requirements'>{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>
          <h4>{t("Subheadings.informationYoullNeedToProvide", "Information you'll need to provide", pageLocale)}</h4>
          <p>The application asks for detailed personal information, including:</p>
          <ol>
            <li>Full current legal name</li>
            <li>New chosen name</li>
            <li>Mailing address and contact information</li>
            <li>Date and location of birth</li>
            <li>Marital/relationship status</li>
            <li>Parental information</li>
            <li>Details of any previous name changes</li>
            <li>Information about any current or past criminal offences</li>
            <li>Electronic fingerprint confirmation letter (for each person 12+ changing their name)</li>
            <li>Criminal record check or police information check (for applicants 18+)</li>
            <li>All Alberta birth certificates for anyone whose name is being changed</li>
          </ol>
          <h4>{t("Subheadings.previousIdentityDocuments", "Previous identity documents", pageLocale)}</h4>
          <p>All Alberta birth certificates issued before your legal name change must be surrendered with your application. These will be replaced free of charge with new certificates showing your new name. If you were born outside Alberta, you must contact the vital statistics office in your birth jurisdiction for new birth certificates after your name change is processed.</p>
          <h4>{t("Subheadings.commissioning", "Commissioning", pageLocale)}</h4>
          <p>You must swear or affirm the affidavit in your application in front of a Commissioner for Oaths or Notary Public in Alberta. The commissioner will verify your identity and the accuracy of your information, and will stamp or seal the document. The commissioner does not need to know you personally. Many notary/commissioner offices in Ontario will commission these documents for trans individuals for free; otherwise, the typical fee is $20-40.</p>
          <p>
            Note: If there are any changes or additions to the affidavit, the commissioner must initial each change. Unless changes are authenticated, the affidavit will not be accepted by Vital Statistics.
          </p>
          <blockquote>
            <p>For trans I.D. clinics and commissioning services, see <Link href="/ab/resources" target='blank'>Alberta resources</Link> for a list of local and province-wide organizations.</p>
          </blockquote>
          <h3 id='submitting-your-application'>{t("Subheadings.submittingYourApplication", "Submitting your application", pageLocale)}</h3>
            <h4>{t("Subheadings.inPerson", "In person", pageLocale)}</h4>
            <p>Applications for a legal change of name in Alberta must be submitted in person at a registry agent office. Photocopies, faxes, and emails are not accepted. If you have questions about mail service disruptions, contact the registry agent or Vital Statistics for guidance.</p>

            <h4>{t("Subheadings.deliveryTime", "Delivery time", pageLocale)}</h4>
            <p>Once your application is approved and processed, a Legal Change of Name Certificate will be mailed to you. Surrendered Alberta birth certificates will be replaced free of charge. If you did not surrender any Alberta birth certificates, you may purchase new ones from a registry agent. Processing times may vary; check with your registry agent for current estimates.</p>

            <h4>{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h4>
            <p>Carefully review the Information Guide and gather all required documents before applying. Only electronic fingerprints are accepted, and all supporting documents must be originals. If you are changing a child’s or represented adult’s name, ensure you have all required consents or court orders. If you have questions, contact your registry agent or Alberta Vital Statistics for help.</p>
          <h4 id="reclaiming-indigenous-names">Reclaiming Indigenous names</h4>
          <p>
            If you are a residential school survivor, a person who was part of the Sixties Scoop, or a descendant (child, grandchild, great-grandchild) or spouse/partner of a survivor, you may be eligible to reclaim your Indigenous name at no cost through Alberta Vital Statistics.
          </p>
          <ul>
            <li>Applicants must be Alberta residents.</li>
            <li>There is no government fee for eligible applicants reclaiming an Indigenous name.</li>
            <li>Certificates like birth certificates surrendered with an amendment request will be cancelled and replaced with the Indigenous name free of charge.</li>
          </ul>
          <p>To apply, request a Legal Change of Name (LCN) directly through the Vital Statistics office by emailing <a href="mailto:sa.vitalstatisticslcn@gov.ab.ca">sa.vitalstatisticslcn@gov.ab.ca</a>. Do not submit your application through a registry agent. Vital Statistics will issue an LCN certificate. Using the LCN certificate and a completed Fee Waiver Application Form, you may apply to amend any Alberta Vital Statistics record that reflects your name. If you have questions about reclaiming an Indigenous name, contact Alberta Vital Statistics directly for guidance and support.</p>
          <hr />
          <h3 id="sources">{t("Subheadings.sources", "Sources", pageLocale)}</h3>
          <ul>
            <li><Link href="https://www.alberta.ca/legal-name-change" target="_blank" rel="noreferrer">Government of Alberta - Legal name change</Link></li>
          </ul>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}