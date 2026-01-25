"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../lib/i18n";

export default function Alberta() {
  
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.alberta", "Alberta", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.alberta}>
        <h2 className="page-title">{t("Pages.alberta", "Alberta", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className={styles.content}>
            <p>{t("Province.alberta", "This is a full list of pages specific to Alberta", pageLocale)}:</p>
            <ul style={{margin: '1.5rem 0'}}>
              <li>
                <Link href="/ab/name">{t("Pages.albertaNameChanges", "Alberta name changes", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/ab/resources">{t("Pages.albertaResources", "Alberta resources", pageLocale)}</Link>
              </li>
            </ul>
          </div>
          <hr />
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/start">{t("Pages.start", "Get started", pageLocale)}</Link></li>
              <li><Link href="/guides">{t("Pages.guides", "Guides", pageLocale)}</Link></li>
              <li><Link href="/resources">{t("Pages.resources", "Resources", pageLocale)}</Link></li>
              <li><Link href="/mb">{t("Pages.manitoba", "Manitoba", pageLocale)}</Link></li>
              <li><Link href="/on">{t("Pages.ontario", "Ontario", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}