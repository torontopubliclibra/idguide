"use client";

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export function LanguageToggle({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  // Helper to swap locale in path (assumes /fr/ or /en/ or no prefix)
  const getLocalePath = (lang: string) => {
    if (pathname.startsWith('/fr/')) {
      return lang === 'en' ? pathname.replace(/^\/fr/, '') || '/' : pathname;
    }
    if (lang === 'fr') {
      return '/fr' + (pathname === '/' ? '' : pathname);
    }
    return pathname;
  };

  const handleLanguageClick = (lang: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
      router.push(getLocalePath(lang));
    }
  };

  return (
    <span>
      <a
        href={getLocalePath('en')}
        style={{ textDecoration: locale === 'en' ? 'underline' : undefined }}
        onClick={e => handleLanguageClick('en', e)}
      >
        EN
      </a>
      {" / "}
      <a
        href={getLocalePath('fr')}
        style={{ textDecoration: locale === 'fr' ? 'underline' : undefined }}
        onClick={e => handleLanguageClick('fr', e)}
      >
        FR
      </a>
    </span>
  );
}