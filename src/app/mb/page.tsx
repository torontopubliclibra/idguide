"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import LastUpdated from "../components/LastUpdated";
import SeeAlso from "../components/SeeAlso";

export default function Manitoba() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.manitoba", "Manitoba", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.manitoba}>
        <h2 className="page-title">{t("Pages.manitoba", "Manitoba", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className={styles.content}>
            <p>{t("Province.manitoba", "This is a full list of pages specific to Manitoba", pageLocale)}:</p>
            <ul style={{margin: '1.5rem 0'}}>
              <li>
                <Link href="/mb/name">{t("Pages.manitobaNameChanges", "Manitoba name changes", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/mb/resources">{t("Pages.manitobaResources", "Manitoba resources", pageLocale)}</Link>
              </li>
            </ul>
          </div>
          <hr />
          <SeeAlso pages={["start", "guides", "resources", "ab", "on"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="mb" pageLocale={pageLocale} />
      </main>
    </div>
  );
}