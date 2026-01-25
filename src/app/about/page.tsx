"use client";

import Link from 'next/link';
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import changelogData from './changelog.json';

type ChangelogEntry = {
  version: string;
  date?: string;
  changes: string[];
};

const changelog: ChangelogEntry[] = changelogData as ChangelogEntry[];

export default function About() {
  
  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);
  
  useEffect(() => {
    document.title = `${t("Pages.about", "About", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.about}>
        <h2 className="page-title">{t("Pages.about", "About", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p><span className={styles.strong}>{t("Site.name", "I.D. Guide", pageLocale)}</span> {t("AboutPage.about-1", "is a free, community-driven resource designed to help people navigate legal name, gender marker, and identity document changes in Canada. We aim to make this process less stressful and more accessible—especially for trans, non-binary, Two-Spirit, and gender non-conforming communities.", pageLocale)}</p>

          <p>{t("AboutPage.about-2", "Everyone deserves clear, accurate, and up-to-date information—but government agencies often make these processes confusing or hard to access. I.D. Guide brings together practical, step-by-step instructions and forms in one place to help you navigate these changes confidently. While we do not provide legal advice, our goal is to empower you to make informed choices and advocate for yourself.", pageLocale)}</p>

          <p>{t("AboutPage.about-3", "The project is led by", pageLocale)} <Link href="https://danateagle.com" target="_blank" rel="noreferrer">Dana Rosamund Teagle</Link>, {t("AboutPage.about-4", "a designer and web/software developer based in Toronto. Since 2021, Dana has delivered workshops on name and gender marker changes for organizations across Ontario. To learn more or book a presentation, visit our", pageLocale)} <Link href="/workshops">{t("AboutPage.workshopsPage", "workshops page", pageLocale)}</Link>. {t("AboutPage.about-5", "If you would like to help support Dana and her work, you can send her a tip", pageLocale)} <Link href="https://danateagle.com/paypal" target='_blank'>via PayPal</Link>.</p>

          <hr/>

          <h3 id='disclaimers'>{t("Pages.disclaimers", "Disclaimers", pageLocale)}</h3>
          <p>{t("Disclaimers.disclaimer-1", "I.D. Guide is an independent project and is not affiliated with any government agency or official body. All information is provided in good faith, but users should always verify details with the relevant authorities.", pageLocale)}</p>

          <p>{t("Disclaimers.disclaimer-2", "While we strive to keep all information up to date, laws and procedures can change. Please check official sources or contact the appropriate agency for the most current requirements. The content on this site is for informational purposes only and does not constitute legal advice. For legal advice specific to your situation, consult a qualified legal professional.", pageLocale)}</p>

          <p>{t("Disclaimers.disclaimer-3", "If you spot an error, have a suggestion, or need information in a different format, please", pageLocale)} <Link href="mailto:contact@idguide.ca">{t("Disclaimers.contactUs", "contact us", pageLocale)}</Link> {t("Disclaimers.forSupport", "for support.", pageLocale)}</p>

          <p>{t("Disclaimers.disclaimer-4", "Your feedback helps keep this resource accurate and useful for everyone. For details about how your information is handled, see our", pageLocale)} {t("Disclaimers.disclaimer-5", "For details about how your information is handled, see our ", pageLocale)} <Link href="/privacy">{t("Pages.privacy", "Privacy policy", pageLocale)}</Link>.</p>
          <hr />

          <h3 id='changelog'>{t("Pages.changelog", "Changelog", pageLocale)}</h3>
          <div className={styles.changelogContainer}>
            <ul className={styles.changelogList}>
              {changelog.map((entry) => (
                <li key={entry.version}>
                  <div style={{fontWeight: 'bold', marginBottom: '0.5em'}}>{'v' + entry.version}{entry.date ? ` | ${entry.date}` : ""}</div>
                  {entry.changes.join("; ")}
                </li>
              ))}
            </ul>
          </div>
          
          <hr />
          
          <Link href="/sitemap.xml" style={{textDecoration: 'none'}}>
            <h3 id='sitemap'>{t("Pages.sitemap", "Sitemap", pageLocale)}</h3>
          </Link>
          <div className={styles.sitemapContainer}>
            <ul className={styles.sitemap}>
            <li><Link href="/">{t("Pages.home", "Home", pageLocale)}</Link></li>
            <li><Link href="/about">{t("Pages.about", "About", pageLocale)}</Link> <small>({t("Site.youAreHere", "you are here", pageLocale)})</small></li>
            <li><Link href="/start">{t("Pages.start", "Get started", pageLocale)}</Link></li>
            <li><Link href="/workshops">{t("Pages.workshops", "Workshops", pageLocale)}</Link></li>
            <li><Link href="/downloads">{t("Pages.downloads", "Downloads", pageLocale)}</Link></li>
            <li>
              <Link href="/guides">{t("Pages.guides", "Guides", pageLocale)}</Link>
              <ul>
                <li>
                  <Link href="/name">{t("Pages.nameChanges", "Name changes", pageLocale)}</Link>
                  <ul>
                    <li><Link href="/ab/name">{t("Pages.albertaNameChanges", "Alberta", pageLocale)}</Link></li>
                    <li><Link href="/mb/name">{t("Pages.manitobaNameChanges", "Manitoba", pageLocale)}</Link></li>
                    <li><Link href="/on/name">{t("Pages.ontarioNameChanges", "Ontario", pageLocale)}</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="/birth">{t("Pages.birthCertificates", "Birth certificates", pageLocale)}</Link>
                  <ul>
                    <li><Link href="/on/birth">{t("Pages.ontarioBirthCertificates", "Ontario birth certificates", pageLocale)}</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="/health">{t("Pages.healthCards", "Health cards", pageLocale)}</Link>
                  <ul>
                    <li><Link href="/on/health">{t("Pages.ontarioHealthCards", "Ontario health cards", pageLocale)}</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="/id">{t("Pages.idCards", "Driver's licenses & I.D. cards", pageLocale)}</Link>
                  <ul>
                    <li><Link href="/on/id">{t("Pages.ontarioIdCards", "Ontario driver's licenses & I.D. cards", pageLocale)}</Link></li>
                  </ul>
                </li>
                <li><Link href="/passport">{t("Pages.passports", "Canadian passports", pageLocale)}</Link></li>
                <li><Link href="/pr">{t("Pages.prCards", "Permanent resident cards", pageLocale)}</Link></li>
                <li><Link href="/sin">{t("Pages.sin", "Social Insurance Registry", pageLocale)}</Link></li>
                <li><Link href="/cra">{t("Pages.cra", "Canada Revenue Agency", pageLocale)}</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/resources">{t("Pages.resources", "Resources", pageLocale)}</Link>
              <ul>
                <li><Link href="/ab/resources">{t("Pages.albertaResources", "Alberta", pageLocale)}</Link></li>
                <li><Link href="/mb/resources">{t("Pages.manitobaResources", "Manitoba", pageLocale)}</Link></li>
                <li><Link href="/on/resources">{t("Pages.ontarioResources", "Ontario", pageLocale)}</Link></li>
              </ul>
            </li>
            <li><Link href="/ab">{t("Pages.alberta", "Alberta", pageLocale)}</Link></li>
            <li><Link href="/mb">{t("Pages.manitoba", "Manitoba", pageLocale)}</Link></li>
            <li><Link href="/on">{t("Pages.ontario", "Ontario", pageLocale)}</Link></li>
            <li><Link href="/privacy">{t("Pages.privacy", "Privacy policy", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}