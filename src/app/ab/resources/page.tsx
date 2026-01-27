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

export default function AbResources() {

  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.albertaResources", "Alberta resources", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.resources}>
        <h2 className="page-title">{t("Pages.albertaResources", "Alberta resources", pageLocale)}<Image src="/icon/resources.svg" alt={t("Pages.downloads", "Downloads", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p className={styles.intro}>
            {t("ResourcesPage.albertaIntro", "This table lists organizations offering trans I.D. clinics, legal support, peer groups, and other resources for 2SLGBTQ+ people in Alberta. You'll find options for major cities, province-wide services, and online support.", pageLocale)}
          </p>
          <p>{t("ResourcesPage.suggestion", "If you have a suggestion for this page, or you spot an error, please", pageLocale)} <Link href="mailto:contact@idguide.ca">{t("ResourcesPage.contactUs", "contact us", pageLocale)}</Link>.</p>
          <hr />
          <JumpTo pageLocale={pageLocale} sections={["province-wide", "edmonton", "calgary"]} />
          <hr />
          <h3 id="province-wide">{t("Subheadings.provinceWide", "Province-wide", pageLocale)}</h3>
          <ResourceList
            resources={resources.abResources.filter(r => typeof r.name === 'string' && !r.region)}
            pageLocale={pageLocale}
          />
          <ResourceList
            resources={[]}
            pageLocale={pageLocale}
            showRegionHeaders={true}
            regionalResources={resources.abResources.filter(r => typeof r.region === 'string').map(region => ({
              region: region.region || "",
              id: region.id || '',
              resources: region.resources || []
            }))}
          />
          <hr />
          <p>{t("ResourcesPage.suggestion", "If you have a suggestion for a resource to add, or you spot an error, please", pageLocale)} <Link href="mailto:contact@idguide.ca">{t("ResourcesPage.contactUs", "contact us", pageLocale)}</Link>. {t("Disclaimers.disclaimer-4", "Your feedback helps keep this resource accurate and useful for everyone.", pageLocale)}</p>
          <hr />
          <SeeAlso pages={["start", "mb/resources", "on/resources", "resources"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="ab/resources" pageLocale={pageLocale} />
      </main>
    </div>
  );
}
