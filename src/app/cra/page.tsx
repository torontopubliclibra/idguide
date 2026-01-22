"use client";

import Link from 'next/link';
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../lib/i18n";

export default function CRA() {
  
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.cra", "Canada Revenue Agency", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.cra}>
        <h2 className="page-title">{t("Pages.cra", "Canada Revenue Agency", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className="pageNav">
            <p>{t("Site.jumpTo", "Jump to", pageLocale)}:</p>
            <ul>
              <li><Link href="#process">{t("Subheadings.process", "Process", pageLocale)}</Link></li>
              <li><Link href="#requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</Link></li>
              <li><Link href="#sources">{t("Subheadings.sources", "Sources", pageLocale)}</Link></li>
            </ul>
          </div>
          <hr />

          <h3 id="process">{t("Subheadings.process", "Process", pageLocale)}</h3>
          <p>You must notify the Canada Revenue Agency (CRA) of any name changes.</p>
          <p>If you have changed both your first and last name, you must send a letter by mail or fax. If you have only changed either your first or last name (and have not previously changed your name), you may also notify the CRA by phone.</p>
          <p>For information on the different processes for submission via phone, mail, or fax, and to find the location of your tax centre, we recommend visiting <Link href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/should-you-tell-cra-about-your-change-name" target="_blank" rel="noreferrer">the online portal</Link> for addresses and phone numbers relevant to your area.</p>

          <h3 id="requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>
          <p>If you are notifying the CRA by mail or fax, your letter should include:</p>
          <ul>
            <li>Original or certified true copy of one of the following documents:
              <ul>
                <li>Name change certificate from a provincial/territorial vital statistics department</li>
                <li>Court order issued under an act on change of name</li>
              </ul>
            </li>
            <li>Your old and new names</li>
            <li>Your social insurance number</li>
            <li>Your signature</li>
          </ul>
        <hr/>
          <h3 id="sources">{t("Subheadings.sources", "Sources", pageLocale)}</h3>
          <ul>
            <li><Link href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/should-you-tell-cra-about-your-change-name" target="_blank" rel="noreferrer">Government of Canada - Should you tell the CRA about your change of name?</Link></li>
          </ul>
                    <hr/>
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/sin">{t("Pages.sin", "Social Insurance Registry", pageLocale)}</Link></li>
              <li><Link href="/passport">{t("Pages.passports", "Canadian passports", pageLocale)}</Link></li>
              <li><Link href="/pr">{t("Pages.prCards", "Permanent residency cards", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
