"use client";

import Image from 'next/image';
import { useEffect } from "react";
import { usePageLocale } from '../../hooks/usePageLocale';
import { useRenderCopy } from '../../hooks/useRenderCopy';
import styles from "./page.module.css";
import { t } from "../../lib/i18n";
import sources from './sources.json';
import copy from './copy.json';
import LastUpdated from "../../components/LastUpdated";
import JumpTo from '../../components/JumpTo';
import SeeAlso from '../../components/SeeAlso';
import SourcesList from '../../components/SourcesList';

export default function OnHealth() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.ontarioHealthCards", "Ontario health cards", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.health}>
        <h2 className="page-title">{t("Pages.ontarioHealthCards", "Ontario health cards", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <JumpTo pageLocale={pageLocale} sections={[
            "process",
            "important-considerations",
            "sources"
          ]} />
          <hr />

          <h3 id="process">{t("Subheadings.process", "Process", pageLocale)}</h3>
          {useRenderCopy()(copy["process"])}

          <h3 id="important-considerations">{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h3>
          {useRenderCopy()(copy["importantConsiderations"])}
          <div className={styles.imageContainer}>
            <Image src="/asset/on-health-example.jpeg" alt="Sample Ontario health card showing no sex designation" width={400} height={500} />
          </div>

          <h4>{t("Subheadings.frenchLanguageCharacters", "French language characters", pageLocale)}</h4>
          {useRenderCopy()(copy["frenchLanguageCharacters"])}

          <hr />
          <SourcesList sources={sources} />
          <hr />
          <SeeAlso pages={["start", "on/resources", "on/name", "on/birth", "on/id"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="on/health" pageLocale={pageLocale} />
      </main>
    </div>
  );
}