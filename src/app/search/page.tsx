"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import styles from "./page.module.css";
import { t } from "../lib/i18n";
import { useState, useCallback } from "react";

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
  const [index, setIndex] = useState<SearchItem[] | null>(null);

  const pageLocale = useMemo(() => {
    if (typeof window === "undefined") return "en";
    const subdomain = window.location.hostname.split('.')[0];
    if (subdomain === "fr") return "fr";
    if (window.navigator.language.startsWith("fr")) return "fr";
    return "en";
  }, []);

  // Load index.json on mount
  useEffect(() => {
    fetch("/search/index.json")
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => setIndex(data))
      .catch(() => {
        // Try fallback path
        fetch("/public/search/index.json")
          .then((res) => {
            if (!res.ok) throw new Error("Not found");
            return res.json();
          })
          .then((data) => setIndex(data))
          .catch((err) => {
            setIndex([]);
            // For debugging
            if (typeof window !== "undefined") {
              // eslint-disable-next-line no-console
              console.error("Failed to load index.json", err);
            }
          });
      });
  }, []);

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
      // Check if title or keywords contain a region name
      const title = item.title.toLowerCase();
      const keywordsString = (item.keywords ? item.keywords.join(' ') : '').toLowerCase();
      return regionList.some(region => title.includes(region.toLowerCase()) || keywordsString.includes(region.toLowerCase()));
    };
    const scored = index
      .map((item: SearchItem) => {
        const title = item.title.toLowerCase();
        const keywordsString = item.keywords ? item.keywords.join(" ").toLowerCase() : "";
        const summary = item.summary.toLowerCase();
        // Check if all words are in title, keywords, or summary
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
          score += 1.5;
        }
        const routes2 = [
          "/downloads"
        ];
        if (routes2.includes(item.route)) {
          score += 1;
        }

        // Lower score for regional pages
        if (score > 0 && isRegional(item)) score -= 0.5;
        return score > 0 ? { ...item, _score: score } : null;
      })
      .filter(Boolean) as (SearchItem & { _score: number })[];
    scored.sort((a, b) => b._score - a._score);
    setResults(scored);
  }, [index]);

  useEffect(() => {
    document.title = `${t("Pages.search", "Search", pageLocale)} | ${t("Site.name", "I.D. Guide", pageLocale)}`;
  }, [pageLocale]);

  return (
    <div className="page">
      <main className={styles.search}>
        <h2 className="page-title">{t("Pages.search", "Search", pageLocale)}</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder={t("Search.placeholder", "Type any keyword to search...", pageLocale)}
                className={styles.searchInput}
                value={searchInput}
                onChange={handleInputChange}
                aria-label={t("Search.placeholder", "Type any keyword to search...", pageLocale)}
              />
              <button className={searchInput.length > 0 ? styles.active : styles.disabled} onClick={searchInput.length > 0 ? () => handleInputChange({target: {value: ""}}) : undefined} aria-label={t("Search.clear", "Clear search input", pageLocale)} title="Clear search input">
                <Image src="/close.svg" alt="Site exit icon" width={30} height={30} />
              </button>
            </div>
            <div className={styles.results} style={{marginBottom: '-1.75rem'}}>
              {searchInput && results.length === 0 && (
                <>
                  <hr />
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
          <hr />
          <div className="pageNav">
            <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
            <ul>
              <li><Link href="/start">{t("Pages.start", "Get started", pageLocale)}</Link></li>
              <li><Link href="/guides">{t("Pages.guides", "Guides", pageLocale)}</Link></li>
              <li><Link href="/about">{t("Pages.about", "About", pageLocale)}</Link></li>
            </ul>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}