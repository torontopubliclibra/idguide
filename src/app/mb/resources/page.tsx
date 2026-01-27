"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePageLocale } from '../../hooks/usePageLocale';
import styles from "./page.module.css";
import { t } from "../../lib/i18n";
import resources from "../../resources.json";
import ResourceList from "../../components/ResourceList";
import LastUpdated from "../../components/LastUpdated";
import JumpTo from "../../components/JumpTo";
import SeeAlso from "../../components/SeeAlso";
import BackToTop from "../../components/BackToTop";

export default function MbResources() {
  
  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.manitobaResources", "Manitoba resources", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);
  
  return (
    <div className="page">
      <BackToTop />
      <main className={styles.resources}>
        <h2 className="page-title">{t("Pages.manitobaResources", "Manitoba resources", pageLocale)}<Image src="/icon/resources.svg" alt={t("Pages.downloads", "Downloads", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p className={styles.intro}>
            {t("ResourcesPage.manitobaIntro", "This table lists organizations offering trans I.D. clinics, legal support, healthcare, peer groups, and other resources for 2SLGBTQ+ people in Manitoba.", pageLocale)}
          </p>
          <p>{t("ResourcesPage.suggestion", "If you have a suggestion for this page, or you spot an error, please", pageLocale)} <Link href="mailto:contact@idguide.ca">{t("ResourcesPage.contactUs", "contact us", pageLocale)}</Link>.</p>
          <hr />
          
          <JumpTo pageLocale={pageLocale} sections={["province-wide", "winnipeg"]} />
          <hr />

          <h3 id="province-wide">{t("Subheadings.provinceWide", "Province-wide", pageLocale)}</h3>
          <ResourceList
            resources={resources.mbResources.filter(r => typeof r.name === 'string' && !r.region)}
            pageLocale={pageLocale}
          />
          <ResourceList
            resources={[]}
            pageLocale={pageLocale}
            showRegionHeaders={true}
            regionalResources={resources.mbResources.filter(r => typeof r.region === 'string').map(region => ({
              id: region.id || '',
              region: region.region || "",
              resources: region.resources || []
            }))}
          />
          <hr />
          <SeeAlso pages={["start", "ab/resources", "on/resources", "resources"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="mb/resources" pageLocale={pageLocale} />
      </main>
    </div>
  );
}