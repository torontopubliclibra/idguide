"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import LastUpdated from "../components/LastUpdated";
import SeeAlso from "../components/SeeAlso";

export default function Guides() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.idCards", "Driver's licenses & I.D. cards", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.id}>
        <h2 className="page-title">{t("Pages.idCards", "Driver's licenses & I.D. cards", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className={styles.content}>
            <p>{t("IdCards.process", "The process for updating your driver's license or I.D. card will vary depending on your province or territory of residency", pageLocale)}:</p>
            <ul style={{margin: '1.5rem 0'}}>
              <li>
                <Link href="/on/id">{t("Pages.ontarioIdCards", "Ontario driver's licenses & I.D. cards", pageLocale)}</Link>
              </li>
            </ul>
            <p>
              <small>{t("Site.workInProgress", "We're working to add more provinces and territories. Check back soon for expanded support across Canada.", pageLocale)}</small>
            </p>
          </div>
          <hr />
          <SeeAlso pages={["start", "guides", "name", "birth", "health"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="id" pageLocale={pageLocale} />
      </main>
    </div>
  );
}