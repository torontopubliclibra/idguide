"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { t } from "../lib/i18n";
import LastUpdated from "../components/LastUpdated";
import SeeAlso from "../components/SeeAlso";

export default function Workshops() {
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);
  
  useEffect(() => {
    document.title = `${t("Pages.workshops", "Workshops", pageLocale)} | ${t("Site.name", "Resources", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.workshops}>
        <h2 className="page-title">{t("Pages.workshops", "Workshops", pageLocale)}{pageLocale === "fr" ? " (en anglais)" : ""}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p>The <span className={styles.strong}>I.D. Guide</span> project is led by <Link href="https://danateagle.com" target="_blank" rel="noreferrer">Dana Rosamund Teagle</Link>, a designer and web/software developer based in Toronto. Since 2021, Dana has been delivering engaging and practical workshops on name and gender marker changes for organizations across Ontario. Dana has presented for groups including <Link href="https://www.youthline.ca/" target="_blank">LGBT YouthLine</Link>, <Link href="http://hackf.org/" target="_blank">Windsor Hackforge</Link>, <Link href="https://www.cupe3902.org/" target="_blank">CUPE 3902</Link>, <Link href="https://cupe3903.org/" target="_blank">CUPE 3903</Link>, and <Link href="https://www.camh.ca/" target="_blank">CAMH</Link>.</p>
          <p>To book a workshop or discuss your group&#39;s needs, please <Link href="mailto:contact@idguide.ca">reach out by email</Link>.</p>
          <hr/>
          <h3>Workshop topics</h3>
          <ul>
            <li>Step-by-step guidance on legal name and gender marker changes in Ontario</li>
            <li>Designing considerate and informed technologies for trans communities</li>
            <li>Imagining futures beyond gender markers and legal recognition</li>
            <li>Custom topics by request</li>
          </ul>
          <h3>Format & accessibility</h3>
          <ul>
            <li>Workshops are typically 45-90 minutes, with flexible timing to fit your needs</li>
            <li>Available in-person (Toronto), virtually, or hybrid</li>
            <li>Interactive Q&A can be included</li>
            <li>Materials can be provided in advance or in accessible formats upon request</li>
          </ul>
          <h3>Booking & honourarium</h3>
          <ul>
            <li>Honourarium rates are flexible and can be adjusted to fit your organization&#39;s budget</li>
            <li>Workshops are available for community groups, labour unions, schools, health providers, and more...</li>
            <li>While commissioning services are not provided, Dana is happy to recommend supportive notaries or resources</li>
          </ul>
          <hr />
          <SeeAlso pages={["about", "downloads"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="workshops" pageLocale={pageLocale} />
      </main>
    </div>
  );
}