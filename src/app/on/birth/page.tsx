"use client";

import Image from 'next/image';
import { useEffect } from "react";
import { usePageLocale } from '../../hooks/usePageLocale';
import { useRenderCopy } from '../../hooks/useRenderCopy';
import styles from "./page.module.css";
import { t } from "../../lib/i18n";
import LastUpdated from "../../components/LastUpdated";
import JumpTo from '../../components/JumpTo';
import SeeAlso from '../../components/SeeAlso';
import sources from './sources.json';
import copy from './copy.json';
import SourcesList from '../../components/SourcesList';
import BackToTop from "../../components/BackToTop";

export default function BirthPage() {
  
  const pageLocale = usePageLocale();
  
  useEffect(() => {
    document.title = `${t("Pages.ontarioBirthCertificates", "Ontario birth certificates", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <BackToTop />
      <main className={styles.birth}>
        <h2 className="page-title">{t("Pages.ontarioBirthCertificates", "Ontario birth certificates", pageLocale)}<Image src="/icon/birth-certificate.svg" alt={t("Pages.birthCertificates", "Birth certificates", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <JumpTo pageLocale={pageLocale} sections={[
            "process",
            "requirements",
            "submitting",
            "sources"
          ]} />
          <hr />

          <h3 id='process'>{t("Subheadings.process", "Process", pageLocale)}</h3>
          {useRenderCopy()(copy["process"])}

          <h3 id="requirements">{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>
          {useRenderCopy()(copy["requirements"])}

          <h4>{t("Subheadings.commissioning", "Commissioning", pageLocale)}</h4>
          {useRenderCopy()(copy["commissioning"])}

          <h3 id="submitting">{t("Subheadings.submittingYourApplication", "Submitting your application", pageLocale)}</h3>

          <h4>{t("Subheadings.fees", "Fees", pageLocale)}</h4>
          {useRenderCopy()(copy["fees"])}

          <h4>{t("Subheadings.byMail", "By mail", pageLocale)}</h4>
          {useRenderCopy()(copy["byMail-1"])}
          <textarea readOnly name="address" id="address" value={
            `Office of the Registrar General, P.O. Box 3000, 189 Red River Road, Thunder Bay, ON, P7B 5W0`}
          />
          {useRenderCopy()(copy["byMail-2"])}

          <h4>{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h4>
          {useRenderCopy()(copy["importantConsiderations"])}
          
          <h4>{t("Subheadings.deliveryTime", "Delivery time", pageLocale)}</h4>
          {useRenderCopy()(copy["deliveryTime"])}
          <div className={styles.imageContainer}>
            <Image src="/asset/on-birth-example.jpeg" alt="Sample Ontario birth certificate showing updated name and gender marker" width={350} height={500} />
          </div>
          
          <hr />
          <SourcesList sources={sources} />
          <hr />
          <SeeAlso pages={["start", "on/resources", "on/name", "on/health", "on/id"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="on/birth" pageLocale={pageLocale} />
      </main>
    </div>
  );
}