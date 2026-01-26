export async function GET() {
  const base1 = 'https://'
  const base2 = 'idguide.ca';
  const locales = ['en', 'fr'];
  const { promises: fs } = await import('fs');
  const path = await import('path');
  const sitemapPath = path.join(process.cwd(), 'src', 'app', 'sitemap.json');
  const sitemapRaw = await fs.readFile(sitemapPath, 'utf-8');
  type SitemapItem = {
    page: string;
    priority: number;
    changefreq: string;
    isSection?: boolean;
    lastUpdated?: string;
    seoInclude?: boolean;
  };
  const sitemap: SitemapItem[] = JSON.parse(sitemapRaw);
  const pagesWithPriority = sitemap
    .filter((item: SitemapItem) => !item.isSection && item.seoInclude !== false)
    .map(({ page, priority, changefreq }: { page: string; priority: number; changefreq: string }) => ({ page, priority, changefreq }));
  const lastUpdatedMap = new Map<string, string>();
  sitemap.forEach((item) => {
    if (!item.isSection) {
      lastUpdatedMap.set(item.page, item.lastUpdated || new Date().toISOString());
    }
  });
  const urls = pagesWithPriority.map(
    ({ page, priority, changefreq }: { page: string; priority: number; changefreq: string }) => {
      const alternates = locales.map(
        (lang) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${base1}${lang === 'en' ? '' : lang + '.'}${base2}/${page}" />`
      ).join('');
      const lastmod = lastUpdatedMap.get(page) || new Date().toISOString();
      return `<url><loc>${base1}${base2}/${page}</loc><lastmod>${lastmod}</lastmod><priority>${priority}</priority><changefreq>${changefreq}</changefreq>${alternates}</url>`;
    }
  ).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}