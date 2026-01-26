"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import SeeAlso from "../components/SeeAlso";
import LastUpdated from "../components/LastUpdated";

export default function Ontario() {
  
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.ontario", "Ontario", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.ontario}>
        <h2 className="page-title">{t("Pages.ontario", "Ontario", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className={styles.content}>
            <p>{t("Province.ontario", "This is a full list of pages specific to Ontario", pageLocale)}:</p>
            <ul style={{margin: '1.5rem 0'}}>
              <li>
                <Link href="/on/name">{t("Pages.ontarioNameChanges", "Ontario name changes", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/on/birth">{t("Pages.ontarioBirthCertificates", "Ontario birth certificates", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/on/health">{t("Pages.ontarioHealthCards", "Ontario health cards", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/on/id">{t("Pages.ontarioIDCards", "Ontario driver's licenses & I.D. cards", pageLocale)}</Link>
              </li>
              <li>
                <Link href="/on/resources">{t("Pages.ontarioResources", "Ontario resources", pageLocale)}</Link>
              </li>
            </ul>
          </div>
          <hr />
          <SeeAlso pages={["start", "guides", "resources", "ab", "mb"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="on" pageLocale={pageLocale} />
      </main>
    </div>
  );
}