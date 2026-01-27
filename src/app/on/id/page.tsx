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

export default function OnID() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.ontarioIdCards", "Ontario driver's licenses & I.D. cards", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);
  
  return (
    <div className="page">
      <main className={styles.id}>
        <h2 className="page-title">{t("Pages.ontarioIdCards", "Ontario driver's licenses & I.D. cards", pageLocale)}<Image src="/icon/photo-id.svg" alt={t("Pages.idCards", "Driver's licenses & I.D. cards", pageLocale)} width={30} height={30} /></h2>
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

          <h4 id="to-x">M to X or F to X</h4>
          {useRenderCopy()(copy["to-x"])}

          <h4 id="to-f-or-m">M to F or F to M</h4>
          {useRenderCopy()(copy["to-f-or-m"])}

          <h3 id="important-considerations">{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h3>
          {useRenderCopy()(copy["importantConsiderations"])}
          <div className={styles.imageContainer}>
            <Image src="/asset/on-driveid-example.jpeg" alt="Sample Ontario driver's license" width={300} height={500} />
            <Image src="/asset/on-photoid-example.jpeg" alt="Sample Ontario photo ID card" width={300} height={500} />
          </div>
          
          <hr />
          <SourcesList sources={sources} />
          <hr />
          <SeeAlso pages={["start", "on/resources", "on/name", "on/birth", "on/health"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="on/id" pageLocale={pageLocale} />
      </main>
    </div>
  );
}