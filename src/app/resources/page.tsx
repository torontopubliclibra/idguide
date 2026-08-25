"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePageLocale } from "../hooks/usePageLocale";
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import resources from "../resources.json";
import ResourceList, { collectResourceTags, ResourceTagFilters } from "../components/ResourceList";
import LastUpdated from "../components/LastUpdated";
import SeeAlso from "../components/SeeAlso";

export default function Resources() {

  const pageLocale = usePageLocale();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const pageResources = useMemo(
    () => resources.resources.filter(r => typeof r.name === 'string' && (!('region' in r) || !r.region)),
    []
  );
  const availableTags = useMemo(() => collectResourceTags(pageResources), [pageResources]);

  useEffect(() => {
    document.title = `${t("Pages.resources", "Resources", pageLocale)} | ${t("Site.name", "Resources", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.resources}>
        <h2 className="page-title">{t("Pages.resources", "Resources", pageLocale)}<Image src="/icon/resources.svg" alt={t("Pages.downloads", "Downloads", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={`main ${styles.main}`}>
          <p className={styles.intro}>
            {t("ResourcesPage.intro", "This table lists organizations offering resources and services for 2SLGBTQ+ people across Canada. You'll also find links below to our lists of region-specific resources.", pageLocale)}
          </p>
          <br />
          <ResourceTagFilters tags={availableTags} pageLocale={pageLocale} activeTag={activeTag} onTagChange={setActiveTag} />
          <ResourceList
            resources={pageResources}
            pageLocale={pageLocale}
            activeTag={activeTag}
            onTagChange={setActiveTag}
          />
          <h3>{t("ResourcesPage.byRegion", "Resources by region", pageLocale)}</h3>
          <ul>
            <li>
              <Link href="/ab/resources">{t("ResourcesPage.ab", "Alberta resources", pageLocale)}</Link>
            </li>
            <li>
              <Link href="/bc/resources">{t("ResourcesPage.bc", "British Columbia resources", pageLocale)}</Link>
            </li>
            <li>
              <Link href="/on/resources">{t("ResourcesPage.on", "Ontario resources", pageLocale)}</Link>
            </li>
            <li>
              <Link href="/mb/resources">{t("ResourcesPage.mb", "Manitoba resources", pageLocale)}</Link>
            </li>
            <li>
              <Link href="/qc/resources">{t("ResourcesPage.qc", "Québec resources", pageLocale)}</Link>
            </li>
            <li>
              <Link href="/sk/resources">{t("ResourcesPage.sk", "Saskatchewan resources", pageLocale)}</Link>
            </li>
          </ul>
          <br />
          <p>
            {t("ResourcesPage.suggestion", "If you have a resource to suggest, please", pageLocale)}{" "}
            <Link href="mailto:contact@idguide.ca">{t("ResourcesPage.contactUs", "contact us", pageLocale)}</Link>.
          </p>
          <SeeAlso pages={["start", "guides", "downloads"]} pageLocale={pageLocale} />
        </div>
        <div className="stacks"></div>
        <LastUpdated page="resources" pageLocale={pageLocale} />
      </main>
    </div>
  );
}
