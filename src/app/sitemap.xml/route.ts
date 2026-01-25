export async function GET() {
  const baseUrl = 'https://idguide.ca';
  const locales = ['en', 'fr'];
  const pagesWithPriority = [
    { page: '', priority: 1.0, changefreq: 'weekly' },
    { page: 'about', priority: 0.8, changefreq: 'weekly' },
    { page: 'ab', priority: 0.7, changefreq: 'monthly' },
    { page: 'ab/name', priority: 0.6, changefreq: 'monthly' },
    { page: 'ab/resources', priority: 0.6, changefreq: 'monthly' },
    { page: 'birth', priority: 0.8, changefreq: 'monthly' },
    { page: 'cra', priority: 0.7, changefreq: 'monthly' },
    { page: 'downloads', priority: 0.6, changefreq: 'monthly' },
    { page: 'guides', priority: 0.7, changefreq: 'monthly' },
    { page: 'health', priority: 0.7, changefreq: 'monthly' },
    { page: 'id', priority: 0.8, changefreq: 'monthly' },
    { page: 'mb', priority: 0.7, changefreq: 'monthly' },
    { page: 'mb/name', priority: 0.6, changefreq: 'monthly' },
    { page: 'mb/resources', priority: 0.6, changefreq: 'monthly' },
    { page: 'name', priority: 0.7, changefreq: 'monthly' },
    { page: 'on', priority: 0.7, changefreq: 'monthly' },
    { page: 'on/birth', priority: 0.6, changefreq: 'monthly' },
    { page: 'on/health', priority: 0.6, changefreq: 'monthly' },
    { page: 'on/id', priority: 0.6, changefreq: 'monthly' },
    { page: 'on/name', priority: 0.6, changefreq: 'monthly' },
    { page: 'on/resources', priority: 0.6, changefreq: 'monthly' },
    { page: 'passport', priority: 0.8, changefreq: 'monthly' },
    { page: 'pr', priority: 0.7, changefreq: 'monthly' },
    { page: 'search', priority: 0.5, changefreq: 'monthly' },
    { page: 'sin', priority: 0.7, changefreq: 'monthly' },
    { page: 'start', priority: 0.9, changefreq: 'weekly' },
    { page: 'workshops', priority: 0.6, changefreq: 'monthly' },
  ];
  const lastmod = new Date().toISOString();
  const urls = pagesWithPriority.map(
    ({ page, priority, changefreq }) => {
      const alternates = locales.map(
        (lang) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}${lang === 'en' ? '' : '/' + lang}/${page}" />`
      ).join('');
      return `<url><loc>${baseUrl}/${page}</loc><lastmod>${lastmod}</lastmod><priority>${priority}</priority><changefreq>${changefreq}</changefreq>${alternates}</url>`;
    }
  ).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}