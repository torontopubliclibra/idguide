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
    document.title = `${t("Pages.healthCards", "Health cards", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.health}>
        <h2 className="page-title">{t("Pages.healthCards", "Health cards", pageLocale)}<Image src="/icon/health-card.svg" alt={t("Pages.healthCards", "Health cards", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={`main ${styles.main}`}>
          <div className={styles.content}>
            <p>{t("HealthCards.process", "The process for updating your health card will vary depending on your province or territory of residency", pageLocale)}:</p>
            <h3>Ontario</h3>
            <ul style={{ margin: '1.5rem 0' }}>
              <li>
                <Link href="/on/health">{t("Pages.ontarioHealthCards", "Ontario health card updates", pageLocale)}</Link>
              </li>
              <li style={{ marginLeft: '1.5rem', textDecoration: "none" }}>
                For further assistance with Ontario health cards check out our <Link href="/on/resources" >
                  Ontario Resources
                </Link>.
              </li>
            </ul>
            <p>
              <small>{t("Site.workInProgress", "We're working to add more provinces and territories. Check back soon for expanded support across Canada.", pageLocale)}</small>
            </p>
          </div>
          <hr style={{ marginTop: '1.5rem' }} />
          <ul style={{ lineHeight: '2rem', fontSize: '1.1rem' }}>
            <li>
              For assistance with Alberta health cards check out <a href="/public/download/Trans+ID+Alberta+(third+edition).pdf" target="_blank" rel="noreferrer">
                Skipping Stone&apos;s Trans I.D. Alberta Guide (3rd edition, Feb 2023)
              </a> and our <Link href="/ab/resources" >
                Alberta Resources
              </Link>.
            </li>
            <li>
              For assistance with British Columbia health cards check out <a href="https://www.transcarebc.ca/explore-transition/id-change" target="_blank" rel="noreferrer">
                Trans Care BC&apos;s I.D. Change Guide
              </a> and our <Link href="/bc/resources" >
                British Columbia Resources
              </Link>.
            </li>
          </ul>
          <SeeAlso pages={["start", "guides", "name", "birth", "id"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="health" pageLocale={pageLocale} />
      </main>
    </div>
  );
}