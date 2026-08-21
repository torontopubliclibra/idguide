"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import LastUpdated from "../components/LastUpdated";
import SeeAlso from "../components/SeeAlso";

export default function BritishColumbia() {

  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.britishColumbia", "British Columbia", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.britishColumbia}>
        <h2 className="page-title">{t("Pages.britishColumbia", "British Columbia", pageLocale)}<Image src="/icon/region.svg" alt={t("Pages.idCards", "Driver's licenses & I.D. cards", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={`main ${styles.main}`}>
          <div className={styles.content}>
            <p>{t("Province.britishColumbia", "This is a full list of pages specific to British Columbia", pageLocale)}:</p>
            <ul className="button-list">
              <li>
                <Link href="/bc/resources">{t("Pages.britishColumbiaResources", "British Columbia resources", pageLocale)} <Image alt="Resources icon" width={20} height={20} src="/icon/resources.svg" style={{ filter: "invert(1)" }} /></Link>
              </li>
            </ul>
          </div>
          <SeeAlso pages={["start", "guides", "resources", "ab", "mb", "on"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="bc" pageLocale={pageLocale} />
      </main>
    </div>
  );
}