"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import LastUpdated from "../components/LastUpdated";
import SeeAlso from "../components/SeeAlso";

export default function Alberta() {
  
  const pageLocale = usePageLocale();

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
          <SeeAlso pages={["start", "guides", "resources", "mb", "on"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="ab" pageLocale={pageLocale} />
      </main>
    </div>
  );
}