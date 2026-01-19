"use client";

import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";
import "./skip-link.css";
import { t } from "./lib/i18n";

export default function Home({ locale }: { locale: string }) {

  return (
    <div className={`page ${styles.page}`}>
      <a href="#main" className="skip-link">{t("Site.skipToMain", undefined, locale)}</a>
      <main id="main" className={styles.main}>
        <div className={styles.intro}>
          <div>
            <p className={styles.headline}>
              {t("HomePage.headline", undefined, locale)} <em><small>({t("HomePage.headlineSmall", undefined, locale)})</small>.</em>
            </p>
            <p>
              {t("HomePage.intro1-1", undefined, locale)} <span className={styles.strong}>I.D. Guide</span> {t("HomePage.intro1-2", undefined, locale)} <Link href="/guides">{t("HomePage.guides", undefined, locale)}</Link>, <Link href="/downloads">{t("HomePage.downloads", undefined, locale)}</Link>, {t("HomePage.and", undefined, locale)} <Link href="/resources">{t("HomePage.resources", undefined, locale)}</Link> {t("HomePage.intro1-3", undefined, locale)}
            </p>
            <p>
              <Link href="/start">{t("HomePage.getStarted", undefined, locale)}</Link>.
            </p>
          </div>
          <div className={styles.group}>
            <div className="stacks flipped"></div>
            <div className={styles.guides}>
              <h2>{t("HomePage.assistingWith", undefined, locale)}</h2>
              <ul>
                <li>
                  <Link href="/name">{t("HomePage.legalNameChanges", undefined, locale)}</Link>
                </li>
                <li>
                  <Link href="/health">{t("HomePage.healthCardUpdates", undefined, locale)}</Link>
                </li>
                <li>
                  <Link href="/id">{t("HomePage.idCardUpdates", undefined, locale)}</Link>
                </li>
                <li>
                  <Link href="/passport">{t("HomePage.passportUpdates", undefined, locale)}</Link>
                </li>
                <li>
                  <Link href="/pr">{t("HomePage.prCardUpdates", undefined, locale)}</Link>
                </li>
                <li>
                  <Link href="/guides">{t("HomePage.andMore", undefined, locale)}</Link>
                </li>
              </ul>
            </div>
            <div className="stacks"></div>
          </div>
        </div>
      </main>
    </div>
  );
}