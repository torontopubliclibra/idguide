export async function GET() {
  const xsl = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap | I.D. Guide</title>
        <style>
        @font-face {
            font-family: 'Special Gothic';
            src: url('/Special_Gothic/SpecialGothic.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
            }
        @font-face {
            font-family: 'Special Gothic Expanded One';
            src: url('/Special_Gothic_Expanded_One/SpecialGothicExpandedOne.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
            }
          body { font-family: 'Special Gothic', Arial, sans-serif; background: #2c3a50; color: #1b1b1e; margin: 0; padding: 2rem; }
          h1 { color: #f4f2f9; font-family: 'Special Gothic Expanded One', Arial, sans-serif; margin-top: 0; }
          a { color: #1b1b1e; }
          p, p a { color: #f4f2f9; }
          table { border-collapse: collapse; width: 100%; background: #f4f2f9f7; box-shadow: 0 2px 8px #0001; }
          th, td { border: 1px solid #e0e0e0; padding: 0.75rem 1rem; text-align: left; }
          th { font-weight: 400; font-size: 0.9rem; font-family: 'Special Gothic Expanded One', Arial, sans-serif; }
          tr:nth-child(even) { background: #f4f8fb; }
          .alt-links { font-size: 0.95em; color: #555; }
        </style>
      </head>
      <body>
        <h1>I.D. Guide sitemap</h1>
        <p style="margin-bottom: 2rem;">This is an XML sitemap for the <a href="https://idguide.ca" target="_blank" rel="noopener noreferrer">I.D. Guide</a> website, meant for consumption by search engines. You can find more info about XML sitemaps on <a href="https://www.sitemaps.org" target="_blank" rel="noopener noreferrer">sitemaps.org</a>.</p>
        <table>
          <tr>
            <th>Page URL</th>
            <th>Last Modified</th>
            <th>Priority</th>
            <th>Change Freq</th>
            <th>Alternates</th>
          </tr>
          <xsl:for-each select="sm:urlset/sm:url">
            <tr>
              <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
              <td>
                <xsl:variable name="iso" select="sm:lastmod"/>
                <xsl:choose>
                  <xsl:when test="string-length($iso) &gt;= 10">
                    <xsl:value-of select="substring($iso, 1, 10)"/>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:value-of select="$iso"/>
                  </xsl:otherwise>
                </xsl:choose>
              </td>
              <td><xsl:value-of select="sm:priority"/></td>
              <td><xsl:value-of select="sm:changefreq"/></td>
              <td class="alt-links">
                <xsl:for-each select="xhtml:link">
                  <div>
                    <xsl:value-of select="@hreflang"/>: <a href="{@href}"><xsl:value-of select="@href"/></a>
                  </div>
                </xsl:for-each>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
  return new Response(xsl, {
    headers: {
      'Content-Type': 'text/xsl; charset=UTF-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}