"use client";

import Link from 'next/link';
import { useEffect } from "react";
import styles from "./page.module.css";
import { t } from "../../lib/i18n";

export default function OnID() {
  let pageLocale = "en";
  if (typeof window !== "undefined") {
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") pageLocale = "fr";
    else if (window.navigator.language.startsWith("fr")) pageLocale = "fr";
  }

  useEffect(() => {
    document.title = `${t("Pages.ontarioIdCards", "Ontario driver's licenses & I.D. cards", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);
  
  return (
    <div className="page">
      <main className={styles.id}>
        <h2 className="page-title">{t("Pages.ontarioIdCards", "Ontario driver's licenses & I.D. cards", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>{t("Pages.jumpTo", "Jump to", pageLocale)}:</p>
            <ul>
              <li><Link href="#process">{t("Subheadings.process", "Process", pageLocale)}</Link></li>
              <li><Link href="#sources">{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</Link></li>
              <li><Link href="#sources">{t("Subheadings.sources", "Sources", pageLocale)}</Link></li>
            </ul>
          </div>
          <hr />
          <p>When updating the sex designation on your Ontario driver&apos;s license or photo card, you can choose F, M, or X. The process depends on which designation you select.</p>
          <h3 id="process">{t("Subheadings.process", "Process", pageLocale)}</h3>
          <p>Updating your driver&apos;s license is free if you already have one. If you don&apos;t drive, you can get an Ontario photo card for $35.</p>
          <p>We highly recommend the photo card for trans and non-binary people who don&apos;t have a driver&apos;s license. It&apos;s a helpful piece of I.D. for proving your legal name, sex designation, and address, and can make other document changes, voting, and bureaucratic processes easier.</p>
          <h4 id="to-x">M to X or F to X</h4>
          <p>To change your sex designation to X (gender neutral), just visit a ServiceOntario location. No supporting documents are required.</p>
          <h4 id="to-f-or-m">M to F or F to M</h4>
          <p>For binary sex designation changes (M to F or F to M), go to ServiceOntario and bring the following original documents (photocopies are not accepted):</p>
          <ul>
            <li>Your current driver&apos;s license or photo ID</li>
            <li>Original copy of change of name certificate <span style={{fontStyle: 'italic'}}>(if you are changing your name)</span></li>
            <li>Original, valid long or short form birth certificate <span style={{fontStyle: 'italic'}}>(showing the correct information)</span> or a certified copy of your birth registration</li>
          </ul>
          <p>If you don&apos;t have a birth certificate or registration with the correct gender marker, bring these two documents instead:</p>
          <ol>
            <li>A letter from a licensed doctor or psychologist (on their letterhead) stating they have examined or treated you and that the updated designation is appropriate. The letter must be signed by the doctor and should specify that you wish to update your driver&apos;s license.</li>
            <li>A letter from you that includes:
              <ul>
                <li>The change you want to make</li>
                <li>Your full name</li>
                <li>Your current address</li>
                <li>Your driver&apos;s license or photo card number</li>
                <li>The name and address of the doctor or psychologist who signed the supporting letter</li>
              </ul>
            </li>
          </ol>
          <p>Make sure you have original copies of these documents, signed in ink. ServiceOntario does not accept e-signatures or photocopies.</p>
          <p>You do not need to have undergone surgery in order to update your gender marker. However, if you have had surgery, you can present documentation from a recognized specialist (such as the Centre for Addiction and Mental Health or other comparable institutions) instead of a letter from a doctor or psychologist.</p>
          <h3 id="important-considerations">{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h3>
          <p>By law in Ontario, if you have a driver&apos;s license, you must notify the Ministry of Transportation within 6 days of legally changing your name. Be sure to include this step when updating your documents.</p>
          <hr />
          <h3 id="sources">{t("Subheadings.sources", "Sources", pageLocale)}</h3>
          <ul>
            <li><Link href="https://www.ontario.ca/page/change-sex-designation-your-government-ids" target="_blank" rel="noreferrer">ServiceOntario - Change the sex designation on your government IDs</Link></li>
          </ul>
          <hr />
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/on/name">{t("Pages.ontarioNameChanges", "Ontario name changes", pageLocale)}</Link></li>
              <li><Link href="/on/birth">{t("Pages.ontarioBirthCertificates", "Ontario birth certificates", pageLocale)}</Link></li>
              <li><Link href="/on/health">{t("Pages.ontarioHealthCards", "Ontario health cards", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}