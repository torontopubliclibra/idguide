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
        <div className={`main ${styles.main}`}>
          <div>
            <p>{t("birthCertificates.process", "The process for updating your birth certificate will vary depending on the province or territory in which you were born", pageLocale)}:</p>
            <h3>Ontario</h3>
            <ul style={{ margin: '1.5rem 0', lineHeight: '2.3rem' }}>
              <li>
                <Link href="/on/birth">{t("Pages.ontarioBirthCertificates", "Ontario birth certificates", pageLocale)}</Link>
              </li>
              <li style={{ marginLeft: '1.5rem', textDecoration: "none" }}>
                For further assistance with Ontario birth certificates check out our <Link href="/on/resources" >
                  Ontario Resources
                </Link>.
              </li>
            </ul>
            <p>
              <small>{t("Site.workInProgress", "We're working to add full support for more provinces and territories. Check back soon for expanded support across Canada.", pageLocale)}</small>
            </p>
            <hr style={{ marginTop: '1.5rem' }} />
            <ul style={{ marginTop: '1.5rem', lineHeight: '2rem', fontSize: '1.1rem' }}>
              <li>
                For assistance with Alberta birth certificates check out <a href="/public/download/Trans+ID+Alberta+(third+edition).pdf" target="_blank" rel="noreferrer">
                  Skipping Stone&apos;s Trans I.D. Alberta Guide (3rd edition, Feb 2023)
                </a> and our <Link href="/ab/resources" >
                  Alberta Resources
                </Link>.
              </li>
              <li>
                For assistance with British Columbia birth certificates check out <a href="https://www.transcarebc.ca/explore-transition/id-change" target="_blank" rel="noreferrer">
                  Trans Care BC&apos;s I.D. Change Guide
                </a> and our <Link href="/bc/resources" >
                  British Columbia Resources
                </Link>.
              </li>
            </ul>
          </div>
          <SeeAlso pages={["start", "guides", "name"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="birth" pageLocale={pageLocale} />
      </main>
    </div>
  );
}