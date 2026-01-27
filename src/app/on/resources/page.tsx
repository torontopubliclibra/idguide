"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePageLocale } from '../../hooks/usePageLocale';
import styles from "./page.module.css";
import { t } from "../../lib/i18n";
import resources from "../../resources.json";
import LastUpdated from "../../components/LastUpdated";
import JumpTo from '../../components/JumpTo';
import SeeAlso from '../../components/SeeAlso';
import ResourceList from '../../components/ResourceList';

export default function OnResources() {

  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.ontarioResources", "Ontario resources", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.resources}>
        <h2 className="page-title">{t("Pages.ontarioResources", "Ontario resources", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p className={styles.intro}>
            {t("ResourcesPage.ontarioIntro", "This table lists organizations offering trans I.D. clinics, legal support, healthcare, peer groups, and other resources for 2SLGBTQ+ people in Ontario.", pageLocale)}
          </p>
          <p>
            {t("ResourcesPage.suggestion", "If you have a resource to suggest, please", pageLocale)}{" "}
            <Link href="mailto:contact@idguide.ca">{t("ResourcesPage.contactUs", "contact us", pageLocale)}</Link>.
          </p>
          <hr />
          <JumpTo pageLocale={pageLocale} sections={[
            "province-wide",
            "gta",
            "windsor",
            "hamilton",
            "ottawa",
            "kitchener-waterloo",
            "thunder-bay"
          ]} />
          <hr />

          <h3 id="province-wide">{t("Subheadings.provinceWide", "Province-wide", pageLocale)}</h3>
          <ResourceList
            resources={resources.onResources.filter(r => typeof r.name === 'string' && !r.region)}
            pageLocale={pageLocale}
          />
          <ResourceList
            resources={[]}
            pageLocale={pageLocale}
            showRegionHeaders={true}
            regionalResources={resources.onResources.filter(r => typeof r.region === 'string').map(region => ({
              id: region.id || "",
              region: region.region || "",
              resources: region.resources || []
            }))}
          />
          <hr />
          <SeeAlso pages={["start", "ab/resources", "mb/resources", "resources"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="on/resources" pageLocale={pageLocale} />
      </main>
    </div>
  );
}
