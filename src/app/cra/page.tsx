"use client";

import Image from 'next/image';
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import { useRenderCopy } from "../hooks/useRenderCopy";
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import sources from './sources.json';
import copy from './copy.json';
import LastUpdated from "../components/LastUpdated";
import JumpTo from "../components/JumpTo";
import SeeAlso from "../components/SeeAlso";
import SourcesList from '../components/SourcesList';
import BackToTop from "../components/BackToTop";

export default function CRA() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.cra", "Canada Revenue Agency", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <BackToTop />
      <main className={styles.cra}>
        <h2 className="page-title">{t("Pages.cra", "Canada Revenue Agency", pageLocale)}<Image src="/icon/cra.svg" alt={t("Pages.cra", "Canada Revenue Agency", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <JumpTo pageLocale={pageLocale} sections={["process", "requirements", "sources"]} />
          <hr />

          <h3 id="process">{t("Subheadings.process", "Process", pageLocale)}</h3>
          {useRenderCopy()(copy["process"])}

          <h3 id="requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>
          {useRenderCopy()(copy["requirements"])}

          <hr/>
          <SourcesList sources={sources} />
          <hr/>
          <SeeAlso pages={["sin", "passport", "pr"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="cra" pageLocale={pageLocale} />
      </main>
    </div>
  );
}
