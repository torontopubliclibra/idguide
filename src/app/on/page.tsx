"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import SeeAlso from "../components/SeeAlso";
import LastUpdated from "../components/LastUpdated";

export default function Ontario() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.ontario", "Ontario", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  const ontarioPages = [
    { href: "/on/name", label: t("Pages.ontarioNameChanges", "Ontario name changes", pageLocale) },
    { href: "/on/birth", label: t("Pages.ontarioBirthCertificates", "Ontario birth certificates", pageLocale) },
    { href: "/on/health", label: t("Pages.ontarioHealthCards", "Ontario health cards", pageLocale) },
    { href: "/on/id", label: t("Pages.ontarioIDCards", "Ontario driver's licenses & I.D. cards", pageLocale) },
    { href: "/on/resources", label: t("Pages.ontarioResources", "Ontario resources", pageLocale) },
  ];

  return (
    <div className="page">
      <main className={styles.ontario}>
        <h2 className="page-title">{t("Pages.ontario", "Ontario", pageLocale)}<Image src="/icon/region.svg" alt={t("Pages.idCards", "Driver's licenses & I.D. cards", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className={styles.content}>
            <p>{t("Province.ontario", "This is a full list of pages specific to Ontario", pageLocale)}:</p>
            <ul style={{margin: '1.5rem 0'}}>
              {ontarioPages.map(page => (
                <li key={page.href}>
                  <Link href={page.href}>{page.label}</Link>
                </li>
              ))}
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