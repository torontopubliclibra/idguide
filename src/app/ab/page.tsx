"use client";

import Link from "next/link";
import Image from "next/image";
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
        <h2 className="page-title">{t("Pages.alberta", "Alberta", pageLocale)}<Image src="/icon/region.svg" alt={t("Pages.idCards", "Driver's licenses & I.D. cards", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={`main ${styles.main}`}>
          <div className={styles.content}>
            <p>{t("Province.alberta", "This is a full list of pages specific to Alberta", pageLocale)}:</p>
            <ul className="button-list">
              <li>
                <Link href="/ab/name">{t("Pages.albertaNameChanges", "Alberta name changes", pageLocale)}</Link>
              </li>
              <li className="sub-item">
                For further assistance with Alberta name changes check out <a href="/download/Trans+ID+Alberta+(third+edition).pdf" target="_blank" rel="noreferrer">
                  Skipping Stone&apos;s Trans I.D. Alberta Guide (3rd edition, Feb 2023)
                </a>.
              </li>
              <li>
                <Link href="/ab/resources">{t("Pages.albertaResources", "Alberta resources", pageLocale)}</Link>
              </li>
            </ul>
          </div>
          <SeeAlso pages={["start", "guides", "resources", "mb", "on"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="ab" pageLocale={pageLocale} />
      </main>
    </div>
  );
}