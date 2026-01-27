"use client";

import Link from 'next/link';
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import changelogData from '../changelog.json';
import sitemapData from '../sitemap.json';
import LastUpdated from "../components/LastUpdated";

type ChangelogEntry = {
  version: string;
  date?: string;
  changes: string[];
};

type SitemapEntry = {
  page: string;
  labelKey: string;
  isSection: boolean;
  children?: string[];
  parent?: string;
};

function buildSitemapTree(entries: SitemapEntry[]) {
  const map: Record<string, SitemapEntry & { childrenNodes?: SitemapEntry[] }> = {};
  entries.forEach(e => {
    map[e.page] = { ...e };
  });
  Object.values(map).forEach(e => {
    if (e.children) {
      e.childrenNodes = e.children
        .map(child => map[child])
        .filter((node): node is SitemapEntry => Boolean(node));
    }
  });
  return Object.values(map).filter(e => !e.parent);
}

function SitemapList({ pageLocale }: { pageLocale: string }) {
  const entries = sitemapData as SitemapEntry[];
  const tree = buildSitemapTree(entries);

  function renderNode(node: SitemapEntry & { childrenNodes?: SitemapEntry[] }) {
    const isAbout = node.page === "about";
    return (
      <li key={node.page || 'home'}>
        <Link href={node.page ? `/${node.page}` : "/"}>
          {t(node.labelKey, node.page || 'Home', pageLocale)}
        </Link>
        {isAbout && (
          <small> ({t("Site.youAreHere", "you are here", pageLocale)})</small>
        )}
        {node.childrenNodes && node.childrenNodes.length > 0 && (
          <ul>
            {node.childrenNodes.map(renderNode)}
          </ul>
        )}
      </li>
    );
  }

  return (
    <ul className={styles.sitemap}>
      {tree.map(renderNode)}
    </ul>
  );
}

const changelog: ChangelogEntry[] = changelogData as ChangelogEntry[];

export default function About() {
  
  const pageLocale = usePageLocale();
  
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
                  <div style={{fontWeight: 'bold', marginBottom: '0.5em'}}>{'v' + entry.version}{entry.date ? <small> ({entry.date})</small> : ""}</div>
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
            <SitemapList pageLocale={pageLocale} />
          </div>
        </div>
        <div className="stacks"></div>
        <LastUpdated page="about" pageLocale={pageLocale} />
      </main>
    </div>
  );
}