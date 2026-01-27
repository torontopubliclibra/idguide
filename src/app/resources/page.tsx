"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePageLocale } from "../hooks/usePageLocale";
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import resources from "../resources.json";
import ResourceList from "../components/ResourceList";
import LastUpdated from "../components/LastUpdated";
import SeeAlso from "../components/SeeAlso";

export default function Resources() {
  
  const pageLocale = usePageLocale();
  
  useEffect(() => {
    document.title = `${t("Pages.resources", "Resources", pageLocale)} | ${t("Site.name", "Resources", pageLocale)}`;
  }, [pageLocale]);
  
  return (
    <div className="page">
      <main className={styles.resources}>
        <h2 className="page-title">{t("Pages.resources", "Resources", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p className={styles.intro}>
            {t("ResourcesPage.intro", "This table lists organizations offering trans I.D. clinics, legal support, healthcare, peer groups, and other resources for 2SLGBTQ+ people across Canada. You'll also find links below to our lists of region-specific resources.", pageLocale)}
          </p>
          <p>
            {t("ResourcesPage.suggestion", "If you have a resource to suggest, please", pageLocale)}{" "}
            <Link href="mailto:contact@idguide.ca">{t("ResourcesPage.contactUs", "contact us", pageLocale)}</Link>.
          </p>
          <br />
          <ResourceList
            resources={resources.resources.filter(r => typeof r.name === 'string' && (!('region' in r) || !r.region))}
            pageLocale={pageLocale}
          />
          <hr />
          <h3>{t("ResourcesPage.byRegion", "Resources by region", pageLocale)}</h3>
          <ul>
            <li>
              <Link href="/ab/resources">{t("ResourcesPage.ab", "Alberta resources", pageLocale)}</Link>
            </li>
            <li>
              <Link href="/on/resources">{t("ResourcesPage.on", "Ontario resources", pageLocale)}</Link>
            </li>
            <li>
              <Link href="/mb/resources">{t("ResourcesPage.mb", "Manitoba resources", pageLocale)}</Link>
            </li>
          </ul>
          <hr />
          <SeeAlso pages={["start", "guides", "downloads"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="resources" pageLocale={pageLocale} />
      </main>
    </div>
  );
}
