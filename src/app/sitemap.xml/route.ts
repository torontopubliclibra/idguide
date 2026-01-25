export async function GET() {
  const baseUrl = 'https://idguide.ca';
  const pages = [
    '', 'about', 'ab', 'ab/name', 'ab/resources', 'birth', 'cra', 'downloads', 'guides', 'health', 'id',
    'mb', 'mb/name', 'mb/resources', 'name', 'on', 'on/birth', 'on/health', 'on/id', 'on/name', 'on/resources',
    'passport', 'pr', 'privacy', 'resources', 'search', 'sin', 'start', 'workshops'
  ];
  const lastmod = new Date().toISOString();
  const urls = pages.map(
    (page) =>
      `<url><loc>${baseUrl}/${page}</loc><lastmod>${lastmod}</lastmod></url>`
  ).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}