"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePageLocale } from '../hooks/usePageLocale';
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import index from "../index.json";
import { useState, useCallback } from "react";
import BackToTop from "../components/BackToTop";

interface SearchItem {
  route: string;
  title: string;
  summary: string;
  keywords?: string[];
  images?: string[];
}

export default function Search() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [results, setResults] = useState<SearchItem[]>([]);

  const pageLocale = usePageLocale();

  interface InputChangeEvent {
    target: { value: string };
  }

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | InputChangeEvent) => {
    const value = e.target.value;
    setSearchInput(value);
    if (!index || !value.trim()) {
      setResults([]);
      return;
    }
    const words = value.toLowerCase().split(/\s+/).filter(Boolean);
    const regionList = [
      'Ontario', 'Manitoba', 'Alberta', 'Quebec', 'British Columbia', 'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Newfoundland', 'Prince Edward Island', 'Yukon', 'Nunavut', 'Northwest Territories', 'Canada'
    ];
    const isRegional = (item: SearchItem) => {
      const title = item.title.toLowerCase();
      const keywordsString = (item.keywords ? item.keywords.join(' ') : '').toLowerCase();
      return regionList.some(region => title.includes(region.toLowerCase()) || keywordsString.includes(region.toLowerCase()));
    };
    const scored = index
      .map((item: SearchItem) => {
        const title = item.title.toLowerCase();
        const keywordsString = item.keywords ? item.keywords.join(" ").toLowerCase() : "";
        const summary = item.summary.toLowerCase();
        const titleMatch = words.every(word => title.includes(word));
        const keywordMatch = words.every(word => keywordsString.includes(word));
        const summaryMatch = words.every(word => summary.includes(word));
        let score = 0;
        if (titleMatch) score = 4;
        else if (keywordMatch) score = 3;
        else if (summaryMatch) score = 2;

        const routes1 = [
          "/resources",
          "/guides",
          "/about"
        ];
        if (routes1.includes(item.route)) {
          score += 1;
        }
        const routes2 = [
          "/downloads"
        ];
        if (routes2.includes(item.route)) {
          score += 0.5;
        }

        if (score > 0 && isRegional(item)) score -= 0.5;
        return score > 0 ? { ...item, _score: score } : null;
      })
      .filter(Boolean) as (SearchItem & { _score: number })[];
    scored.sort((a, b) => b._score - a._score);
    setResults(scored);
  }, []);

  useEffect(() => {
    document.title = `${t("Pages.search", "Search", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <BackToTop />
      <main className={styles.search}>
        <h2 className="page-title">{t("Pages.search", "Search", pageLocale)}<Image src="/icon/search.svg" alt={t("Pages.search", "Search", pageLocale)} width={30} height={30} /></h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder={t("Search.placeholder", "Type any keyword...", pageLocale)}
                className={styles.searchInput}
                value={searchInput}
                onChange={handleInputChange}
                aria-label={t("Search.placeholder", "Type any keyword...", pageLocale)}
              />
              <button className={searchInput.length > 0 ? styles.active : styles.disabled} onClick={searchInput.length > 0 ? () => handleInputChange({target: {value: ""}}) : undefined} aria-label={t("Search.clear", "Clear search input", pageLocale)} title="Clear search input">
                <Image src="/icon/close.svg" alt="Site exit icon" width={30} height={30} />
              </button>
            </div>
            <div className={styles.results} style={{marginBottom: '-1.75rem'}}>
              {searchInput && results.length === 0 && (
                <>
                  <div style={{color: '#888', marginTop: '2rem', marginBottom: '1.5rem'}}>{t("Search.noResults", "No results for ", pageLocale)}&quot;{searchInput}&quot;{t("Search.noResults-2", " found", pageLocale)}.</div>
                </>
              )}
              {results.map((item, index) => (
                <div key={item.route} style={{margin: '1.5rem 0'}}>
                  <hr className={styles.resultSeparator} style={{marginBottom: '1.5rem', opacity: index === 0 ? 1 : 0.3}}/>
                  <Link href={item.route} style={{fontFamily: 'var(--font-special-gothic-expanded-one)', fontSize: '1.5rem'}}>{item.title}</Link>
                  <div style={{marginTop: '0.5rem', fontSize: '0.9em'}}>{item.summary}</div>
                  {Array.isArray(item.images) && item.images.length > 0 && (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '0.5rem',
                      paddingTop: '1rem',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                      {item.images.map((img: string, idx: number) => (
                        <Image
                          key={img + idx}
                          src={img}
                          alt={item.title + ' thumbnail'}
                          width={100}
                          height={100}
                          style={{ objectFit: 'contain', width: 'auto', height: '100%' }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}