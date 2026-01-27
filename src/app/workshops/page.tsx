"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import { marked } from "marked";
import { t } from "../lib/i18n";
import workshops from './workshops.json';
import LastUpdated from "../components/LastUpdated";
import SeeAlso from "../components/SeeAlso";
import BackToTop from "../components/BackToTop";

export default function Workshops() {

  const pageLocale = usePageLocale();
  
  useEffect(() => {
    document.title = `${t("Pages.workshops", "Workshops", pageLocale)} | ${t("Site.name", "Resources", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <BackToTop />
      <main className={styles.workshops}>
        <h2 className="page-title">{t("Pages.workshops", "Workshops", pageLocale)}{pageLocale === "fr" ? " (en anglais)" : ""}<Image src="/icon/workshop.svg" alt={t("Pages.idCards", "Driver's licenses & I.D. cards", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          
          <p>The <span className={styles.strong}>I.D. Guide</span> project is led by <Link href="https://danateagle.com" target="_blank" rel="noreferrer">Dana Rosamund Teagle</Link>, a designer and web/software developer based in Toronto. Since 2021, Dana has been delivering engaging and practical workshops on name and gender marker changes for organizations across Ontario. Dana has presented for groups including <Link href="https://www.youthline.ca/" target="_blank">LGBT YouthLine</Link>, <Link href="http://hackf.org/" target="_blank">Windsor Hackforge</Link>, <Link href="https://www.cupe3902.org/" target="_blank">CUPE 3902</Link>, <Link href="https://cupe3903.org/" target="_blank">CUPE 3903</Link>, and <Link href="https://www.camh.ca/" target="_blank">CAMH</Link>.</p>

          <section dangerouslySetInnerHTML={{ __html: marked.parse(Array.isArray(workshops) ? workshops.join("\n\n") : workshops) }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}></section>

          <hr />
          <SeeAlso pages={["about", "downloads"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="workshops" pageLocale={pageLocale} />
      </main>
    </div>
  );
}