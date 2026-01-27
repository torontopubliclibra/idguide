import { useEffect, useState } from "react";
import sitemap from '../sitemap.json';
import { t } from "../lib/i18n";

interface LastUpdatedProps {
  page: string;
  pageLocale: string;
  style?: React.CSSProperties | undefined;
}

export default function LastUpdated({ page, pageLocale, style }: LastUpdatedProps) {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    function fetchDate() {
      type SitemapEntry = { page?: string; lastUpdated?: string };
      const entry = (sitemap as SitemapEntry[]).find((item) => item.page === page);
      if (entry && entry.lastUpdated) {
        const d = new Date(entry.lastUpdated);
        d.setDate(d.getDate() + 1);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        setFormattedDate(d.toLocaleDateString(pageLocale, options));
      } else {
        setFormattedDate(null);
      }
    }
    fetchDate();
  }, [page, pageLocale]);

  if (!formattedDate) return null;
  return (
    <p style={{fontSize: '0.95rem', width: '100%', marginTop: '2.25rem', color: 'var(--white)', ...style}}>
      {t("Site.lastUpdated", "This page was last updated on", pageLocale)} {formattedDate}.
    </p>
  );
}