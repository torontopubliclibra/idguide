"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { t } from "./lib/i18n";
import SeeAlso from "./components/SeeAlso";
import CanadaMap, { ProvinceCustomizations, Provinces } from "react-canada-map";

interface HomeProps {
  locale: string;
}

export default function Home({ locale }: HomeProps) {
  const router = useRouter();
  const [isTextModeEnabled, setIsTextModeEnabled] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (!body) {
      return;
    }

    const syncTextMode = () => {
      setIsTextModeEnabled(body.classList.contains("text-mode"));
    };

    syncTextMode();

    const observer = new MutationObserver(syncTextMode);
    observer.observe(body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("storage", syncTextMode);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", syncTextMode);
    };
  }, []);

  const provinceRoutes: Partial<Record<Provinces, string>> = {
    [Provinces.ON]: "/on",
    [Provinces.MB]: "/mb",
    [Provinces.AB]: "/ab",
    [Provinces.QC]: "/qc/resources",
    [Provinces.BC]: "/bc/resources",
    [Provinces.SK]: "/sk/resources",
  };

  const mapClickHandler = (province: Provinces): void => {
    const route = provinceRoutes[province];
    if (route) {
      router.push(route);
    }
  };

  const plainTextProvinceButtons = [
    { href: "/ab", label: "Alberta" },
    { href: "/bc", label: "British Columbia" },
    { href: "/sk", label: "Saskatchewan" },
    { href: "/mb", label: "Manitoba" },
    { href: "/on", label: "Ontario" },
    { href: "/qc", label: "Quebec" },
  ];

  const customizeProvince = (): { [key in Provinces]?: ProvinceCustomizations } => {
    return {
      [Provinces.ON]: {
        fillColor: "rgb(180, 179, 219)",
        onHoverColor: "#f4f2f9c8",
      },
      [Provinces.MB]: {
        fillColor: "#bda2bf",
        onHoverColor: "#f4f2f9c8",
      },
      [Provinces.AB]: {
        fillColor: "#bda2bf",
        onHoverColor: "#f4f2f9c8",
      },
      [Provinces.QC]: {
        fillColor: "#abbfa2",
        onHoverColor: "#f4f2f9c8",
      },
      [Provinces.BC]: {
        fillColor: "#abbfa2",
        onHoverColor: "#f4f2f9c8",
      },
      [Provinces.SK]: {
        fillColor: "#abbfa2",
        onHoverColor: "#f4f2f9c8",
      },
      [Provinces.NT]: {
        fillColor: "#1b1b1ee4",
        onHoverColor: "#1b1b1ee4"
      },
      [Provinces.NU]: {
        fillColor: "#1b1b1ee4",
        onHoverColor: "#1b1b1ee4"
      },
      [Provinces.YT]: {
        fillColor: "#1b1b1ee4",
        onHoverColor: "#1b1b1ee4"
      },
      [Provinces.PE]: {
        fillColor: "#1b1b1ee4",
        onHoverColor: "#1b1b1ee4"
      },
      [Provinces.NB]: {
        fillColor: "#1b1b1ee4",
        onHoverColor: "#1b1b1ee4"
      },
      [Provinces.NS]: {
        fillColor: "#1b1b1ee4",
        onHoverColor: "#1b1b1ee4"
      },
      [Provinces.NL]: {
        fillColor: "#1b1b1ee4",
        onHoverColor: "#1b1b1ee4"
      },
    };
  };

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
            <p className={styles.getStartedRow}>
              <Link href="/start" className={styles.getStarted + " getStarted"}>{t("HomePage.getStarted", undefined, locale)} <Image src="/icon/right.svg" alt={t("HomePage.getStartedImageAlt", "Get started", locale)} width={25} height={25} /></Link>
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
      <section className={styles.mapSection + " mapSection"}>
        <h2>Provinces and territories currently supported:</h2>
        {isTextModeEnabled ? (
          <div className={styles.provinceButtons} aria-label="Supported province pages">
            {plainTextProvinceButtons.map((province) => (
              <Link
                key={province.href}
                href={province.href}
                className={`${styles.getStarted} getStarted ${styles.provinceButton}`}
              >
                {province.label}
              </Link>
            ))}
          </div>
        ) : (
          <>
            <div className={styles.mapLegend} aria-label="Canada map support legend">
              <ul className={styles.mapLegendList}>
                <li>
                  <span className={`${styles.legendSwatch} ${styles.legendFull}`} aria-hidden="true"></span>
                  Full support
                </li>
                <li>
                  <span className={`${styles.legendSwatch} ${styles.legendPartial}`} aria-hidden="true"></span>
                  Partial support
                </li>
                <li>
                  <span className={`${styles.legendSwatch} ${styles.legendResources}`} aria-hidden="true"></span>
                  Resources only
                </li>
                <li>
                  <span className={`${styles.legendSwatch} ${styles.legendNotYet}`} aria-hidden="true"></span>
                  Not yet supported
                </li>
              </ul>
            </div>
            <div className={styles.mapContainer}>
              <CanadaMap
                customize={customizeProvince()}
                onClick={mapClickHandler}
              ></CanadaMap>
            </div>
          </>
        )}
      </section>
      <SeeAlso pages={[]} pageLocale={locale} isHomePinned={true} />
    </div>
  );
}