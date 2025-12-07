"use client";
import Link from 'next/link';
import { useEffect } from "react";
import styles from "./page.module.css";


export default function OnName() {
    useEffect(() => {
      document.title = 'Ontario Name Changes | I.D. Guide';
    }, []);
  return (
    <div className="page">
      <main className={styles.name}>
        <h2 className="page-title">Ontario name changes</h2>
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
          <p>To legally change your name in Ontario, fill out the <Link href="/downloads#on-name">Application to Change an Adult&#39;s Name (11155e)</Link>.</p>
          <p>The application is 19 pages and split into seven sections, but you may not need to complete every part. A fee of $137 is required.</p>

          <h3 id='requirements'>Requirements</h3>
          <h4>Information youll need to provide</h4>
          <p>The application asks for detailed personal information, including:</p>
          <ol>
            <li>Full current legal name</li>
            <li>New chosen name</li>
            <li>Mailing address</li>
            <li>Date and location of birth</li>
            <li>Marital/relationship status</li>
            <li>Parental information</li>
            <li>Details of any previous name change</li>
            <li>Information about any current or past criminal offences</li>
            <li>Information about any current or past financial judgments, fines, or bankruptcy</li>
          </ol>

          <h4>Extra sections and documents</h4>
          <ul>
            <li>If you are married or in a conjugal relationship, you must notify your partner or spouse and complete Part 2.</li>
            <li>If you are 16 or 17, you need consent from everyone with legal custody and must complete Part 3.</li>
            <li>If you have any law enforcement orders, criminal convictions, or pending charges, you&#39;ll need a police record check. Download the <Link href="/downloads#on-name">Requirements for a Police Record Check for a Change of Name form (5349e)</Link> to ensure the check meets all requirements.</li>
            <li>If you were born elsewhere in Canada and want a new birth certificate, contact the province or territory where you were born after you get your change of name certificate.</li>
          </ul>

          <h4>Guarantor statement</h4>
          <p>You&#39;ll need a guarantor who can confirm you&#39;ve lived in Ontario for the past 12 months. Most people use a medical professional, but other options include municipal clerks, school principals, or First Nations chiefs (see page 13 of the application for the full list). If you can&#39;t find someone who meets the requirements, you can use a non-relative who has known you for at least five years and can confirm your Ontario residency. Have your guarantor complete and sign the statement before you submit your application.</p>

          <h4>Previous identity documents</h4>
          <ul>
            <li>If you were born in Ontario and have a valid birth certificate, include the originals (or certified copies) of all previously issued short- or long-form certificates.</li>
            <li>If you were born elsewhere in Canada, submit either an original birth certificate or a certified copy from your province or territory of birth.</li>
            <li>If you don&#39;t have a birth certificate, you&#39;ll likely need to apply for one before submitting your name change application.</li>
            <li>If any supporting documents are not in English or French, you must provide a translation. See page 13 for translator requirements.</li>
          </ul>

          <h4>Request for non-publication</h4>
          <p>By default, all name changes in Ontario are published in The Ontario Gazette (online and in print). If you are transgender, First Nations, Inuit, or Métis, you can request non-publication by submitting a <Link href="/downloads#on-name">Request for Non-Publication form (11320e)</Link> with your application. If you do not want your previous name published, we strongly recommend including this form.</p>
          <h4>Commissioning</h4>
          <p>You must sign the statutory declaration (page 16) in front of a commissioner for taking affidavits, who will stamp or seal the document to verify your identity and the accuracy of your information. The commissioner does not need to know you personally. Many notary/commissioner offices in Ontario will commission these documents for trans individuals for free; otherwise, the typical fee is $30-45.</p>

          <h3 id="submitting-your-application">Submitting your application</h3>
          <h4>By mail</h4>
          <p>If possible, send your application in a tracked envelope via Canada Post. This helps prevent it from getting lost and lets you know when it&#39;s being processed.</p>
          <p>Mail your completed form, payment, and required documents to:</p>
          <textarea readOnly name="address" id="address" value={
            `Office of the Registrar General, P.O. Box 3000, 189 Red River Road, Thunder Bay, ON, P7B 5W0`}
          />
          <h4>In person</h4>
          <p>If you prefer to submit in person and are in Toronto, bring your completed form, payment, and documents to:</p>
          <textarea readOnly name="address" id="address" value={
            `ServiceOntario, 47 Sheppard Avenue East, Unit 417, 4th Floor, Toronto, ON, M2N 5N1 `}
          />

          <h4>Delivery time</h4>
          <p>If your application is complete and accurate, you should receive your name change certificate in 6-8 weeks. It may take longer for single name or reclaimed name changes. If you were born in Ontario, you&#39;ll also get your updated birth certificate. If you were born elsewhere in Canada, notice of your name change is sent to the vital statistics office in your province or territory, and you&#39;ll likely need to apply there for a new birth certificate.</p>
          <h4>Next steps and tips</h4>
          <p>Give yourself plenty of time to gather information and complete the forms. It may take several weeks to get everything ready.</p>
          <p>Print clearly with blue or black ink. Don&#39;t use correction fluid. If you make a mistake or need to change information:</p>
          <ul>
            <li>Put brackets around the incorrect info</li>
            <li>Write the correct info</li>
            <li>Initial each change</li>
            <li>Have the commissioner initial each change before it&#39;s sworn</li>
          </ul>
          <p>Your change of name certificate will show both your previous and new names. Use this certificate to update other documents, like your driver&#39;s license, photo card, or health card. By law, you must notify the Ministry of Transportation within 6 days of legally changing your name if you have a driver&#39;s license.</p>

          <hr />
          <h3 id="sources">Sources</h3>
          <ul>
            <li><Link href="https://www.ontario.ca/page/change-name" target="_blank" rel="noreferrer">ServiceOntario - Change of name</Link></li>
          </ul>
          <hr />

          <div className="pageNav">
            <p>See also:</p>
            <ul>
              <li><Link href="/on/birth">Ontario birth certificates</Link></li>
              <li><Link href="/on/health">Ontario health cards</Link></li>
              <li><Link href="/on/id">Ontario driver&#39;s licenses & photo cards</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}