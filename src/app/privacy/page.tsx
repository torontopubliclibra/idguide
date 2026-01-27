"use client";

import { useEffect } from "react";
import { usePageLocale } from "../hooks/usePageLocale";
import { marked } from "marked";
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import policy from './privacy.json'
import LastUpdated from "../components/LastUpdated";
import BackToTop from "../components/BackToTop";

export default function Privacy() {

  const pageLocale = usePageLocale();

  useEffect(() => {
    document.title = `${t("Pages.privacy", "Privacy policy", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);
  
  return (
    <div className="page">
      <BackToTop />
      <main className={styles.privacy}>
        <h2 className="page-title">{t("Pages.privacy", "Privacy policy", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <LastUpdated page="privacy" pageLocale={pageLocale} style={{marginTop: '0', color: 'var(--black)'}}/>
          <hr />
          <section dangerouslySetInnerHTML={{ __html: marked.parse(Array.isArray(policy) ? policy.join("\n\n") : policy) }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}></section>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}
