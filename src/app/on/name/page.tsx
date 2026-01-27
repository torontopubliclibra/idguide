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

export default function OnName() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.ontarioNameChanges", "Ontario name changes", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.name}>
        <h2 className="page-title">{t("Pages.ontarioNameChanges", "Ontario name changes", pageLocale)}<Image src="/icon/draft.svg" alt={t("Pages.nameChanges", "Name changes", pageLocale)} width={30} height={30} /></h2>
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

          <h3 id='requirements'>{t("Subheadings.requirements", "Requirements", pageLocale)}</h3>

          <h4 id='birth-certificate-details'>Birth certificate details</h4>
          {useRenderCopy()(copy["birthCertificateDetails"])}

          <h4>{t("Subheadings.informationYoullNeedToProvide", "Information you'll need to provide", pageLocale)}</h4>
          {useRenderCopy()(copy["informationYoullNeedToProvide"])}

          <h4>{t("Subheadings.extraSectionsAndDocuments", "Extra sections and documents", pageLocale)}</h4>
          {useRenderCopy()(copy["extraSectionsAndDocuments"])}

          <h4>{t("Subheadings.guarantorStatement", "Guarantor statement", pageLocale)}</h4>
          {useRenderCopy()(copy["guarantorStatement"])}

          <h4>{t("Subheadings.previousIdentityDocuments", "Previous identity documents", pageLocale)}</h4>
          {useRenderCopy()(copy["previousIdentityDocuments"])}

          <h4>{t("Subheadings.requestForNonPublication", "Request for non-publication", pageLocale)}</h4>
          {useRenderCopy()(copy["requestForNonPublication"])}

          <h4>Indigenous applicants and single name changes</h4>
          {useRenderCopy()(copy["indigenousApplicantsAndSingleNameChanges"])
          }
          <h4>Refugees and permanent residents</h4>
          {useRenderCopy()(copy["refugeesAndPermanentResidents"])}

          <h4>{t("Subheadings.commissioning", "Commissioning", pageLocale)}</h4>
          {useRenderCopy()(copy["commissioning"])}

          <h3 id="submitting">{t("Subheadings.submittingYourApplication", "Submitting your application", pageLocale)}</h3>
          <h4>{t("Subheadings.byMail", "By mail", pageLocale)}</h4>
          {useRenderCopy()(copy["byMail-1"])}

          <textarea readOnly name="address" id="address" value={
            `ServiceOntario, Office of the Registrar General, P.O. Box 3000, 189 Red River Road, Thunder Bay, ON, P7B 5W0`}
          />
          {useRenderCopy()(copy["byMail-2"])}

          <h4>{t("Subheadings.inPerson", "In person", pageLocale)}</h4>
          {useRenderCopy()(copy["inPerson"])}

          <textarea readOnly name="address" id="address" value={
            `ServiceOntario, 47 Sheppard Avenue East, Unit 417, 4th Floor, Toronto, ON, M2N 5N1 `}
          />
          <h4>{t("Subheadings.importantConsiderations", "Important considerations", pageLocale)}</h4>
          {useRenderCopy()(copy["importantConsiderations"])}

          <h4>{t("Subheadings.deliveryTime", "Delivery time", pageLocale)}</h4>
          {useRenderCopy()(copy["deliveryTime"])}
          <div className={styles.imageContainer}>
            <Image src="/asset/on-name-example.jpeg" alt="Sample Ontario change of name certificate showing old and new names" width={1200} height={500} />
          </div>

          <hr />
          <SourcesList sources={sources} />
          <hr />
          <SeeAlso pages={["start", "on/resources", "on/birth", "on/health", "on/id"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="on/name" pageLocale={pageLocale} />
      </main>
    </div>
  );
}