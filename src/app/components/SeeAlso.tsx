import Link from "next/link";
import { t } from "../lib/i18n";
import sitemap from "../sitemap.json";

const typedSitemap: Array<{ page: string; labelKey: string }> = sitemap;

interface SeeAlsoProps {
  pages: string[];
  pageLocale: string;
}

export default function SeeAlso({ pages, pageLocale }: SeeAlsoProps) {
  return (
    <div className="pageNav">
      <p>{t("Site.seeAlso", "See also", pageLocale)}:</p>
      <ul style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}>
        {pages.map((page) => {
          const entry = Array.isArray(typedSitemap)
            ? typedSitemap.find((item) => item.page === page)
            : undefined;
          const labelKey = entry?.labelKey || page;
          return (
            <li key={page}>
              <Link href={`/${page}`}>
                {t(labelKey, labelKey, pageLocale)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}