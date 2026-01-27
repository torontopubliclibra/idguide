"use client";

import Link from 'next/link';
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import { useRenderCopy } from '../hooks/useRenderCopy';
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import sources from './sources.json';
import copy from './copy.json';
import LastUpdated from "../components/LastUpdated";
import JumpTo from '../components/JumpTo';
import SeeAlso from '../components/SeeAlso';
import SourcesList from '../components/SourcesList';

export default function Passport() {
  
  const pageLocale = usePageLocale();

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
          {useRenderCopy()(copy["options"])}

          <h3 id="process">{t("Subheadings.process", "Process", pageLocale)}</h3>
          <h4>{t("Subheadings.withSupportingDocuments", "With supporting documents", pageLocale)}</h4>
          {useRenderCopy()(copy["withSupportingDocuments"])}

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