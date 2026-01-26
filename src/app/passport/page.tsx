"use client";

import Link from 'next/link';
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import sources from './sources.json';
import LastUpdated from "../components/LastUpdated";
import JumpTo from '../components/JumpTo';
import SeeAlso from '../components/SeeAlso';
import SourcesList from '../components/SourcesList';

export default function Passport() {
  
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.passports", "Canadian passports", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.passport}>
        <h2 className="page-title">{t("Pages.passports", "Canadian passports", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>

          <JumpTo pageLocale={pageLocale} sections={[
            "options",
            "process",
            "important-considerations",
            "sources"
          ]} />
          <hr />

          <h3 id="options">{t("Subheadings.optionsForGenderSexIdentifier", "Options for gender/sex identifier", pageLocale)}</h3>
          <p>There are 3 options for gender/sex identification on Canadian passports: F, M, and X.</p>
				  <p>Depending on whether your supporting documents have the gender/sex identifier you want, the application process for your passport will vary.</p>

          <h3 id="process">{t("Subheadings.process", "Process", pageLocale)}</h3>
          <h4>{t("Subheadings.withSupportingDocuments", "With supporting documents", pageLocale)}</h4>
          <p>If your name or gender/sex identifier have already been changed on your proof of citizenship, you are not eligible for the Canadian passport renewal process and will need to apply for a brand new passport.</p>
          <p>You can do so by filling out the <Link href="/downloads#passport">Adult General Paspport Application (PPTC-153)</Link> and providing the required proof of citizenship. Learn more about passport applications at <Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/new-adult-passport/required-documents-photos" target="_blank" rel="norefferer">this link</Link>.</p>
          <p>You will not need to provide any additional documentation of your new gender/sex identifier if:</p>
          <ul>
            <li>your proof of citizenship (such as a <Link href="/on/birth">Canadian birth certificate</Link> or Canadian citizenship certificate), your proof of immigration status, or your previous passport has the gender/sex identifier that you want for your new passport</li>
            <li>your previous passport has the X marker</li>
          </ul>

				  <h4>{t("Subheadings.withoutSupportingDocuments", "Without supporting documents", pageLocale)}</h4>
				  <p>If your gender/sex identifier has not been updated on your proof of citizenship, you will need to provide a completed <Link href="/downloads#passport">Sex or Gender Identifier Update Request Form (PPTC-643)</Link> along with your application.</p>

          <h3 id="important-considerations">{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h3>
				  <p>Unfortunately, the Government of Canada states they cannot guarantee that other countries you visit or travel through will accept the sex or gender identifier on your Canadian passport, especially in regards to the X marker, and you may still be asked to provide your sex as either male or female when travelling. Find more information at <Link href="https://travel.gc.ca/travelling/health-safety/lgbt-travel" target="_blank" rel="norefferer">this link</Link> about travelling abroad as a 2SLGBTQI+ Canadian.</p>

          <hr />
          <SourcesList sources={sources} />
          <hr />
          <SeeAlso pages={["pr", "sin", "cra"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="passport" pageLocale={pageLocale} />
      </main>
    </div>
  );
}