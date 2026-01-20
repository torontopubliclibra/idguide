"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from "react";
import styles from "./page.module.css";
import { t } from "../../lib/i18n";

export default function OnHealth() {
  let pageLocale = "en";
  if (typeof window !== "undefined") {
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") pageLocale = "fr";
    else if (window.navigator.language.startsWith("fr")) pageLocale = "fr";
  }

  useEffect(() => {
    document.title = `${t("Pages.ontarioHealthCards", "Ontario health cards", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.health}>
        <h2 className="page-title">{t("Pages.ontarioHealthCards", "Ontario health cards", pageLocale)}</h2>
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
          <p>There is no fee to get a new Ontario health card.</p>
          <p>To change your name, visit a ServiceOntario location and bring a completed <Link href="/downloads#on-health">Change of Information form (0280-82e)</Link> plus an original copy of one of the following:</p>
          <ol>
            <li><Link href="/birth">Canadian birth certificate</Link></li>
            <li>Canadian <Link href="/name">change of name</Link> certificate</li>
            <li>Citizenship or immigration status document in your new name</li>
          </ol>
          <h3 id="important-considerations">{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h3>
          <h4>{t("Subheadings.frenchLanguageCharacters", "French language characters", pageLocale)}</h4>
          <p>Since August 2022, you can add French language characters to your name on your Ontario health card. To do this, visit ServiceOntario with documents that show your legal name with those characters. If your citizenship or immigration document doesn&#39;t show your name with French characters, you may be able to use another proof of residency or identity document.</p>
          <p>Since June 2016, Ontario health cards no longer display sex designation.</p>
          <div className={styles.imageContainer}>
            <Image src="/on-health-example.jpeg" alt="Sample Ontario health card showing no sex designation" width={400} height={500} />
          </div>
          <hr />
          <h3 id="sources">{t("Subheadings.sources", "Sources", pageLocale)}</h3>
          <ul>
            <li><Link href="https://www.ontario.ca/page/replace-cancel-or-change-information-your-health-card#section-3" target="_blank" rel="noreferrer">ServiceOntario - Replace, cancel or change information on your health card</Link></li>
          </ul>
          <hr />
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/on/name">{t("Pages.ontarioNameChanges", "Ontario name changes", pageLocale)}</Link></li>
              <li><Link href="/on/birth">{t("Pages.ontarioBirthCertificates", "Ontario birth certificates", pageLocale)}</Link></li>
              <li><Link href="/on/id">{t("Pages.ontarioIdCards", "Ontario driver's licenses & I.D. cards", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}