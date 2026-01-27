"use client";

import Image from 'next/image';
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

export default function PR() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.prCards", "Permanent resident cards", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.pr}>
        <h2 className="page-title">{t("Pages.prCards", "Permanent resident cards", pageLocale)}<Image src="/icon/passport.svg" alt={t("Pages.passports", "Canadian passports", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <JumpTo pageLocale={pageLocale} sections={["process", "requirements", "important-considerations", "sources"]} />
          <hr />

          <h3 id="process">{t("Subheadings.process", "Process", pageLocale)}</h3>
          {useRenderCopy()(copy["process"])}

          <h3 id="requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>
          {useRenderCopy()(copy["requirements"])}
          <br/>

          <h4>{t("Subheadings.inExceptionalCases", "In exceptional cases", pageLocale)}</h4>
          {useRenderCopy()(copy["inExceptionalCases"])}
          <br/>

          <h4>{t("Subheadings.translations", "Translations", pageLocale)}</h4>
          {useRenderCopy()(copy["translations"])}

          <h3 id="important-considerations">{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h3>
          {useRenderCopy()(copy["importantConsiderations"])}

          <hr/>
          <SourcesList sources={sources} />
          <hr/>
          <SeeAlso pages={["passport", "sin", "cra"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="pr" pageLocale={pageLocale} />
      </main>
    </div>
  );
}
