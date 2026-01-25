"use client";
import React from 'react';

export function LanguageToggle({ locale }: { locale: string }) {
  const getLocaleUrl = (lang: string) => {
    if (typeof window === 'undefined') return '#';
    const { host, pathname, search, hash } = window.location;
    let newHost = host;
    if (lang === 'fr') {
      if (!host.startsWith('fr.')) {
        newHost = 'fr.' + host.replace(/^en\./, '');
      }
    } else {
      newHost = host.replace(/^fr\./, '');
    }
    return `${window.location.protocol}//${newHost}${pathname}${search}${hash}`;
  };

  const handleLanguageClick = (lang: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
      window.location.href = getLocaleUrl(lang);
    }
  };

  return (
    <span>
      <a
        href="#"
        style={{ textDecoration: locale === 'en' ? 'underline' : undefined }}
        onClick={e => handleLanguageClick('en', e)}
      >
        EN
      </a>
      {" / "}
      <a
        href="#"
        style={{ textDecoration: locale === 'fr' ? 'underline' : undefined }}
        onClick={e => handleLanguageClick('fr', e)}
      >
        FR
      </a>
    </span>
  );
}