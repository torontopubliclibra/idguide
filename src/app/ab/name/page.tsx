"use client";
import Link from 'next/link';
import { useEffect } from "react";
import styles from "./page.module.css";


export default function AbName() {
    useEffect(() => {
      document.title = 'Alberta name changes | I.D. Guide';
    }, []);
  return (
    <div className="page">
      <main className={styles.name}>
        <h2 className="page-title">Alberta name changes</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>Jump to: </p>
            <ul>
              <li><Link href="#process">Process</Link></li>
              <li><Link href="#requirements">Requirements</Link></li>
              <li><Link href="#submitting-your-application">Submitting your application</Link></li>
              <li><Link href="#sources">Sources</Link></li>
            </ul>
          </div>
          <hr />
          <h3 id='process'>Process</h3>
          <p>To legally change your name in Albert, fill out the <Link href="/downloads#ab-name" target="_blank" rel="noreferrer">Application for Change of Name (DVS3132)</Link>.</p>
          <p>The application is 16 pages and split into five sections, but you may not need to complete every part. A fee of $120 is required.</p>
          <h3 id='requirements'>Requirements</h3>
          <h4>Information you&apos;ll need to provide</h4>
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

          <h4>Previous identity documents</h4>
          <p>All Alberta birth certificates issued before your legal name change must be surrendered with your application. These will be replaced free of charge with new certificates showing your new name. If you were born outside Alberta, you must contact the vital statistics office in your birth jurisdiction for new birth certificates after your name change is processed.</p>

          <h4>Commissioning</h4>
          <p>You must swear or affirm the affidavit in your application in front of a Commissioner for Oaths or Notary Public in Alberta. The commissioner will verify your identity and the accuracy of your information, and will stamp or seal the document. The commissioner does not need to know you personally. Many notary/commissioner offices in Ontario will commission these documents for trans individuals for free; otherwise, the typical fee is $20-40.</p>
          <p>
            <strong>Note:</strong> If there are any changes or additions to the affidavit, the commissioner must initial each change. Unless changes are authenticated, the affidavit will not be accepted by Vital Statistics.
          </p>
          
          <h3 id='submitting-your-application'>Submitting your application</h3>
            <h4>In person</h4>
            <p>Applications for a legal change of name in Alberta must be submitted in person at a registry agent office. Photocopies, faxes, and emails are not accepted. If you have questions about mail service disruptions, contact the registry agent or Vital Statistics for guidance.</p>

            <h4>Delivery time</h4>
            <p>Once your application is approved and processed, a Legal Change of Name Certificate will be mailed to you. Surrendered Alberta birth certificates will be replaced free of charge. If you did not surrender any Alberta birth certificates, you may purchase new ones from a registry agent. Processing times may vary; check with your registry agent for current estimates.</p>

            <h4>Important considerations</h4>
            <p>Carefully review the Information Guide and gather all required documents before applying. Only electronic fingerprints are accepted, and all supporting documents must be originals. If you are changing a child’s or represented adult’s name, ensure you have all required consents or court orders. If you have questions, contact your registry agent or Alberta Vital Statistics for help.</p>
          <ul>
            <li>Residential school and Sixties Scoop survivors, their descendants, and spouses/partners may reclaim Indigenous names at no cost. Contact <a href="mailto:sa.vitalstatisticslcn@gov.ab.ca">sa.vitalstatisticslcn@gov.ab.ca</a> for details.</li>
          </ul>
          <hr />
          <h3 id="sources">Sources</h3>
          <ul>
            <li><Link href="https://www.alberta.ca/legal-name-change" target="_blank" rel="noreferrer">Government of Alberta - Legal name change</Link></li>
          </ul>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}