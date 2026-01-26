export async function GET() {
  const content = `User-agent: *
Disallow:
  Sitemap: https://idguide.ca/sitemap.xml
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}