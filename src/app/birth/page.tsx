"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import LastUpdated from "../components/LastUpdated";
import SeeAlso from "../components/SeeAlso";

export default function Guides() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.birthCertificates", "Birth certificates", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.birth}>
        <h2 className="page-title">{t("Pages.birthCertificates", "Birth certificates", pageLocale)}<Image src="/icon/birth-certificate.svg" alt={t("Pages.birthCertificates", "Birth certificates", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div>
            <p>{t("birthCertificates.process", "The process for updating your birth certificate will vary depending on the province or territory in which you were born", pageLocale)}:</p>
            <ul style={{margin: '1.5rem 0'}}>
              <li>
                <Link href="/on/birth">{t("Pages.ontarioBirthCertificates", "Ontario birth certificates", pageLocale)}</Link>
              </li>
            </ul>
            <p>
              <small>{t("Site.workInProgress", "We're working to add more provinces and territories. Check back soon for expanded support across Canada.", pageLocale)}</small>
            </p>
          </div>
          <hr />
          <SeeAlso pages={["start", "guides", "name"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="birth" pageLocale={pageLocale} />
      </main>
    </div>
  );
}