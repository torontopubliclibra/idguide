"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import LastUpdated from "../components/LastUpdated";
import SeeAlso from "../components/SeeAlso";

export default function Name() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.nameChanges", "Name changes", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.name}>
        <h2 className="page-title">{t("Pages.nameChanges", "Name changes", pageLocale)}<Image src="/icon/draft.svg" alt={t("Pages.nameChanges", "Name changes", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className={styles.content}>
            <p>{t("NameChanges.process", "The process for changing your legal name will vary depending on your province or territory of residency", pageLocale)}:</p>
            <ul style={{margin: '1.5rem 0'}}>
              <li>
                <Link href="/ab/name">{t("Pages.albertaNameChanges", "Alberta name changes", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/mb/name">{t("Pages.manitobaNameChanges", "Manitoba name changes", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/on/name">{t("Pages.ontarioNameChanges", "Ontario name changes", pageLocale)}</Link>
              </li>
            </ul>
            <p>
              <small>{t("Site.workInProgress", "We're working to add more provinces and territories. Check back soon for expanded support across Canada.", pageLocale)}</small>
            </p>
          </div>
          <hr />
          <SeeAlso pages={["start", "guides", "birth", "health", "id"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="name" pageLocale={pageLocale} />
      </main>
    </div>
  );
}