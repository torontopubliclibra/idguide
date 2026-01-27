"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import { marked } from 'marked';
import changelogData from '../changelog.json';
import sitemapData from '../sitemap.json';
import attributions from './attributions.json';
import disclaimers from './disclaimers.json';
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
        <h2 className="page-title">{t("Pages.about", "About", pageLocale)}<Image src="/icon/info.svg" alt={t("Pages.about", "About", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p><span className={styles.strong}>{t("Site.name", "I.D. Guide", pageLocale)}</span> {t("AboutPage.about-1", "is a free, community-driven resource designed to help people navigate legal name, gender marker, and identity document changes in Canada. We aim to make this process less stressful and more accessible—especially for trans, non-binary, Two-Spirit, and gender non-conforming communities.", pageLocale)}</p>

          <p>{t("AboutPage.about-2", "Everyone deserves clear, accurate, and up-to-date information—but government agencies often make these processes confusing or hard to access. I.D. Guide brings together practical, step-by-step instructions and forms in one place to help you navigate these changes confidently. While we do not provide legal advice, our goal is to empower you to make informed choices and advocate for yourself.", pageLocale)}</p>

          <p>{t("AboutPage.about-3", "The project is led by", pageLocale)} <Link href="https://danateagle.com" target="_blank" rel="noreferrer">Dana Rosamund Teagle</Link>, {t("AboutPage.about-4", "a designer and web/software developer based in Toronto. Since 2021, Dana has delivered workshops on name and gender marker changes for organizations across Ontario. To learn more or book a presentation, visit our", pageLocale)} <Link href="/workshops">{t("AboutPage.workshopsPage", "workshops page", pageLocale)}</Link>. {t("AboutPage.about-5", "If you would like to help support Dana and her work, you can send her a tip", pageLocale)} <Link href="https://danateagle.com/paypal" target='_blank'>via PayPal</Link>.</p>

          <hr/>

          <h3 id='disclaimers'>{t("Pages.disclaimers", "Disclaimers", pageLocale)}</h3>
          {disclaimers.map((disc, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: marked.parse(disc) }}></div>
          ))}

          <hr />
          <h3>License</h3>
          <p>
            Unless otherwise noted, all original content on this site is licensed under <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</Link> (Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International). This means you are free to share and adapt the material for non-commercial purposes, as long as you give appropriate credit and share any changes under the same license.
          </p>

          <hr />
          <h3>Attributions</h3>
          <ul>
            {attributions.map((attr, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: marked.parse(attr) }}></li>
            ))}
          </ul>

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