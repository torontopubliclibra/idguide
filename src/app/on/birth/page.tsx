"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../../lib/i18n";

export default function BirthPage() {
  
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.ontarioBirthCertificates", "Ontario birth certificates", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.birth}>
        <h2 className="page-title">{t("Pages.ontarioBirthCertificates", "Ontario birth certificates", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>{t("Site.jumpTo", "Jump to", pageLocale)}: </p>
            <ul>
              <li><Link href="#process">{t("Subheadings.process", "Process", pageLocale)}</Link></li>
              <li><Link href="#requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</Link></li>
              <li><Link href="#submitting-your-application">{t("Subheadings.submittingYourApplication", "Submitting your application", pageLocale)}</Link></li>
              <li><Link href="#sources">{t("Subheadings.sources", "Sources", pageLocale)}</Link></li>
            </ul>
          </div>
          <hr />
          <h3 id='process'>{t("Subheadings.process", "Process", pageLocale)}</h3>
          <p>To update the sex designation on your Ontario birth registration or certificate, complete the <Link href="/downloads#on-birth">Application for Change of Sex Designation on a Birth Registration of an Adult (11325e)</Link> and the <Link href="/downloads#on-birth">Statutory Declaration for a Change of Sex Designation (11324e)</Link>. Make sure you use the most recent versions of these forms.</p>
          <p>The application is two pages, and the declaration is one page. You can submit them together with your Ontario name change if needed.</p>
          <p>When changing your sex designation, you can choose M (male), F (female), X (gender neutral), or opt to have no sex designation displayed. Anyone with an Ontario birth registration can make this change, regardless of gender identity. The process may differ depending on your choice.</p>
          <h3 id="requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>
          <p>You must be born in Ontario and be at least 16 years old to apply. Along with your forms, you&#39;ll need:</p>
          <ol>
            <li>A letter from a licensed doctor or psychologist (on their letterhead) stating they have examined or treated you and that the updated sex designation is appropriate. The letter must be signed by the doctor.</li>
            <li>All previously issued Ontario birth certificates (short and long form) and certified copies of your birth registration.</li>
            <li>Your completed application and declaration, plus any applicable fees.</li>
          </ol>
          <h4>{t("Subheadings.commissioning", "Commissioning", pageLocale)}</h4>
          <p>As with the name change application, you must sign the statutory declaration in front of a commissioner for taking affidavits. Plan ahead to include this step in your process.</p>
          <h3 id="submitting-your-application">{t("Subheadings.submittingYourApplication", "Submitting your application", pageLocale)}</h3>
          <h4>{t("Subheadings.fees", "Fees", pageLocale)}</h4>
          <p>ServiceOntario has waived the fee for changing your sex designation since 2021, and currently does not list a fee. Please double-check this policy before submitting, as it may change. There may be fees for copies of birth certificates or registrations (unless you&#39;re submitting with a name change, which covers those fees).</p>
          <h4>{t("Subheadings.byMail", "By mail", pageLocale)}</h4>
          <p>Mail your completed form, any payment, and required documents to:</p>
          <textarea readOnly name="address" id="address" value={
            `Office of the Registrar General, P.O. Box 3000, 189 Red River Road, Thunder Bay, ON, P7B 5W0`}
          />
          <p>If you&#39;re mailing at the same time as a name change, you can send all documents together in one envelope. If you&#39;re filing without a name change, we recommend using a tracked envelope. Photocopied, faxed, or e-signed documents are not accepted.</p>
          <h4>{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h4>
          <p>Ontario birth certificates with an X or no sex designation are recognized by the Government of Ontario. However, they cannot guarantee that all organizations in Ontario or other jurisdictions will accept these documents.</p>
          <h4>{t("Subheadings.deliveryTime", "Delivery time", pageLocale)}</h4>
          <p>If your application is complete and meets all requirements, you should receive your new birth certificate or registration in 6-8 weeks.</p>
          <div className={styles.imageContainer}>
            <Image src="/on-birth-example.jpeg" alt="Sample Ontario birth certificate showing updated name and gender marker" width={350} height={500} />
          </div>
          <hr />
          <h3 id="sources">{t("Subheadings.sources", "Sources", pageLocale)}</h3>
          <ul>
            <li><Link href="https://www.ontario.ca/page/changing-your-sex-designation-your-birth-registration-and-birth-certificate" target="_blank" rel="noreferrer">ServiceOntario - Changing your sex designation on your birth registration and birth certificate</Link></li>
          </ul>
          <hr />
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/on/name">{t("Pages.ontarioNameChanges", "Ontario name changes", pageLocale)}</Link></li>
              <li><Link href="/on/health">{t("Pages.ontarioHealthCards", "Ontario health cards", pageLocale)}</Link></li>
              <li><Link href="/on/id">{t("Pages.ontarioDriversLicensesAndIDCards", "Ontario driver's licenses & I.D. cards", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}