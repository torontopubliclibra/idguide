"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";
import { t } from "../lib/i18n";

export default function Guides() {
  let pageLocale = "en";
  if (typeof window !== "undefined") {
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") pageLocale = "fr";
    else if (window.navigator.language.startsWith("fr")) pageLocale = "fr";
  }

  useEffect(() => {
    document.title = `${t("Pages.healthCards", "Health cards", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.health}>
        <h2 className="page-title">{t("Pages.healthCards", "Health cards", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className={styles.content}>
            <p>{t("HealthCards.process", "The process for updating your health card will vary depending on your province or territory of residency", pageLocale)}:</p>
            <ul style={{margin: '1.5rem 0'}}>
              <li>
                <Link href="/on/health">{t("Pages.ontarioHealthCards", "Ontario health card updates", pageLocale)}</Link>
              </li>
            </ul>
            <p>
              <small>{t("Site.workInProgress", "We're working to add more provinces and territories. Check back soon for expanded support across Canada.", pageLocale)}</small>
            </p>
          </div>
          <hr />
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/start">{t("Pages.start", "Get started", pageLocale)}</Link></li>
              <li><Link href="/guides">{t("Pages.guides", "Guides", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}