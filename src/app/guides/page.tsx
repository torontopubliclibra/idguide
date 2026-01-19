"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";
import "../skip-link.css";
import { t } from "../lib/i18n";

export default function Guides() {
  let pageLocale = "en";
  if (typeof window !== "undefined") {
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") pageLocale = "fr";
    else if (window.navigator.language.startsWith("fr")) pageLocale = "fr";
  }

  useEffect(() => {
    document.title = `${t("Pages.guides", "Guides", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <a href="#main" className="skip-link">{t("Site.skipToMain", "Skip to main content", pageLocale)}</a>
      <main id="main" className={styles.guides}>
        <h2 className="page-title">{t("Pages.guides", "Guides", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>{t("Site.jumpTo", "Jump to", pageLocale)}:</p>
            <ul>
              <li><Link href="#alberta">{t("Site.alberta", "Alberta", pageLocale)}</Link></li>
              <li><Link href="#manitoba">{t("Site.manitoba", "Manitoba", pageLocale)}</Link></li>
              <li><Link href="#ontario">{t("Site.ontario", "Ontario", pageLocale)}</Link></li>
              <li><Link href="#canada-wide">{t("Site.canadaWide", "Canada-wide", pageLocale)}</Link></li>
            </ul>
          </div>
          <hr style={{margin: '0.5rem 0', marginTop: '1rem'}}/>
          <div>
            <h3 id="alberta">{t("Site.alberta", "Alberta", pageLocale)}</h3>
            <ul>
              <li>
                <Link href="/ab/name">{t("GuidesPage.legalNameChanges", "Legal name changes", pageLocale)}</Link>
              </li>
            </ul>
            <hr/>
            <h3 id="manitoba">{t("Site.manitoba", "Manitoba", pageLocale)}</h3>
            <ul>
              <li>
                <Link href="/mb/name">{t("GuidesPage.legalNameChanges", "Legal name changes", pageLocale)}</Link>
              </li>
            </ul>
            <hr/>
            <h3 id="ontario">{t("Site.ontario", "Ontario", pageLocale)}</h3>
            <ul>
              <li>
                <Link href="/on/name">{t("GuidesPage.legalNameChanges", "Legal name changes", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/on/birth">{t("GuidesPage.birthCertificateUpdates", "Birth certificate updates", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/on/health">{t("GuidesPage.healthCardUpdates", "Health card updates", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/on/id">{t("GuidesPage.idCardUpdates", "ID card updates", pageLocale)}</Link>
              </li>
            </ul>
            <hr/>
            <h3 id="canada-wide">{t("Site.canadaWide", "Canada-wide", pageLocale)}</h3>
            <ul>
              <li>
                <Link href="/passport">{t("GuidesPage.passportUpdates", "Passport updates", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/pr">{t("GuidesPage.prCardUpdates", "PR card updates", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/sin">{t("GuidesPage.sinUpdates", "SIN updates", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/cra">{t("GuidesPage.craUpdates", "CRA updates", pageLocale)}</Link>
              </li>
            </ul>
          </div>
          <hr style={{margin: '1rem 0'}}/>
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/start">{t("Pages.start", "Get started", pageLocale)}</Link></li>
              <li><Link href="/resources">{t("Pages.resources", "Resources", pageLocale)}</Link></li>
              <li><Link href="/downloads">{t("Pages.downloads", "Downloads", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}