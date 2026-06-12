"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { t } from "./lib/i18n";
import SeeAlso from "./components/SeeAlso";

export default function Home({ locale }: { locale: string }) {

  return (
    <div className={`page homePage ${styles.page}`}>
      <main id="main" className={styles.main}>
        <div className={`transBg ${styles.intro}`}>
          <div className="transBg">
            <p className={styles.headline}>
              {t("HomePage.headline", undefined, locale)} <em><small>({t("HomePage.headlineSmall", undefined, locale)})</small>.</em>
            </p>
            <p>
              {t("HomePage.intro1-1", undefined, locale)} <span className={styles.strong}>I.D. Guide</span> {t("HomePage.intro1-2", undefined, locale)} <Link href="/guides">{t("HomePage.guides", undefined, locale)}</Link>, <Link href="/downloads">{t("HomePage.downloads", undefined, locale)}</Link>, {t("HomePage.and", undefined, locale)} <Link href="/resources">{t("HomePage.resources", undefined, locale)}</Link> {t("HomePage.intro1-3", undefined, locale)}
            </p>
            <p>
              <Link href="/start">{t("HomePage.getStarted", undefined, locale)}</Link> <Image src="/icon/right.svg" style={{ marginBottom: -7, filter: 'invert(1)' }} alt={t("HomePage.getStartedImageAlt", "Get started", locale)} width={30} height={30} />
            </p>
          </div>
          <div className={`transBg ${styles.group}`}>
            <div className="stacks flipped"></div>
            <div className={`guides ${styles.guides}`}>
              <h2>{t("HomePage.assistingWith", undefined, locale)}</h2>
              <ul>
                <li>
                  <Image src="/icon/draft.svg" alt={t("HomePage.legalNameChangesIcon", "Legal Name Changes icon", locale)} width={20} height={20} />
                  <Link href="/name">{t("HomePage.legalNameChanges", undefined, locale)}</Link>
                </li>
                <li>
                  <Image src="/icon/health-card.svg" alt={t("HomePage.healthCardUpdatesIcon", "Health Card Updates icon", locale)} width={20} height={20} />
                  <Link href="/health">{t("HomePage.healthCardUpdates", undefined, locale)}</Link>
                </li>
                <li>
                  <Image src="/icon/photo-id.svg" alt={t("HomePage.idCardUpdatesIcon", "ID Card Updates icon", locale)} width={20} height={20} />
                  <Link href="/id">{t("HomePage.idCardUpdates", undefined, locale)}</Link>
                </li>
                <li>
                  <Image src="/icon/passport.svg" alt={t("HomePage.passportUpdatesIcon", "Passport Updates icon", locale)} width={20} height={20} />
                  <Link href="/passport">{t("HomePage.passportUpdates", undefined, locale)}</Link>
                </li>
                <li>
                  <Image src="/icon/guide.svg" alt={t("HomePage.andMoreIcon", "And More icon", locale)} width={20} height={20} />
                  <Link href="/guides">{t("HomePage.andMore", undefined, locale)}</Link>
                </li>
              </ul>
            </div>
            <div className="stacks"></div>
          </div>
        </div>
      </main>
      <SeeAlso pages={[]} pageLocale={locale} isHomePinned={true} />
    </div>
  );
}