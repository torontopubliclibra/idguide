"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import styles from "./page.module.css";
import "../skip-link.css";
import { t } from "../lib/i18n";
import LastUpdated from "../components/LastUpdated";
import JumpTo from "../components/JumpTo";
import SeeAlso from "../components/SeeAlso";

export default function Guides() {
  
  const pageLocale = usePageLocale();

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
          <p>{t("GuidesPage.intro", "This is a full list of our guides to legal name changes, birth certificate updates, health card updates, and more across different provinces and Canada-wide.", pageLocale)}</p>
          <hr />
          <JumpTo pageLocale={pageLocale} sections={["alberta", "manitoba", "ontario", "canada-wide"]} />
          <hr style={{margin: '0.5rem 0'}}/>
          <div>
            <Link href="/ab" style={{textDecoration: 'none'}}>
              <h3 id="alberta">{t("Site.alberta", "Alberta", pageLocale)}</h3>
            </Link>
            <ul>
              <li>
                <Link href="/ab/name">{t("GuidesPage.legalNameChanges", "Legal name changes", pageLocale)}</Link>
              </li>
            </ul>
            <hr style={{margin: '2rem 0'}}/>
            <Link href="/mb" style={{textDecoration: 'none'}}>
              <h3 id="manitoba">{t("Site.manitoba", "Manitoba", pageLocale)}</h3>
            </Link>
            <ul>
              <li>
                <Link href="/mb/name">{t("GuidesPage.legalNameChanges", "Legal name changes", pageLocale)}</Link>
              </li>
            </ul>
            <hr style={{margin: '2rem 0'}}/>
            <Link href="/on" style={{textDecoration: 'none'}}>
              <h3 id="ontario">{t("Site.ontario", "Ontario", pageLocale)}</h3>
            </Link>
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
            <hr style={{margin: '2rem 0'}}/>
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
          <SeeAlso pages={["start", "resources", "downloads"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="guides" pageLocale={pageLocale} />
      </main>
    </div>
  );
}