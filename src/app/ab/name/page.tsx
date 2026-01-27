"use client";

import Image from 'next/image';
import { useEffect } from "react";
import { usePageLocale } from '../../hooks/usePageLocale';
import { useRenderCopy } from "../../hooks/useRenderCopy";
import styles from "./page.module.css";
import { t } from "../../lib/i18n";
import sources from './sources.json';
import copy from './copy.json';
import LastUpdated from "../../components/LastUpdated";
import JumpTo from '../../components/JumpTo';
import SeeAlso from "../../components/SeeAlso";
import SourcesList from '../../components/SourcesList';

export default function AbName() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.albertaNameChanges", "Alberta name changes", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.name}>
        <h2 className="page-title">{t("Pages.albertaNameChanges", "Alberta name changes", pageLocale)}<Image src="/icon/draft.svg" alt={t("Pages.nameChanges", "Name changes", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <JumpTo sections={["process", "requirements", "submitting", "sources"]} pageLocale={pageLocale} />
          <hr />
          <h3 id='process'>{t("Subheadings.process", "Process", pageLocale)}</h3>
          {useRenderCopy()(copy["process"])}

          <h3 id='requirements'>{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>

          <h4>{t("Subheadings.informationYoullNeedToProvide", "Information you'll need to provide", pageLocale)}</h4>
          {useRenderCopy()(copy["informationYoullNeedToProvide"])}

          <h4>{t("Subheadings.previousIdentityDocuments", "Previous identity documents", pageLocale)}</h4>
          {useRenderCopy()(copy["previousIdentityDocuments"])}

          <h4>{t("Subheadings.commissioning", "Commissioning", pageLocale)}</h4>
          {useRenderCopy()(copy["commissioning"])}

          <h3 id='submitting'>{t("Subheadings.submitting", "Submitting your application", pageLocale)}</h3>

          <h4>{t("Subheadings.inPerson", "In person", pageLocale)}</h4>
          {useRenderCopy()(copy["inPerson"])}

          <h4>{t("Subheadings.deliveryTime", "Delivery time", pageLocale)}</h4>
          {useRenderCopy()(copy["deliveryTime"])}

          <h4>{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h4>
          {useRenderCopy()(copy["importantConsiderations"])}

          <h4 id="reclaiming-indigenous-names">Reclaiming Indigenous names</h4>
          {useRenderCopy()(copy["reclaimingIndigenousNames"])}

          <hr />
          <SourcesList sources={sources} />
          <hr />
          <SeeAlso pages={["start", "ab/resources"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="ab/name" pageLocale={pageLocale} />
      </main>
    </div>
  );
}