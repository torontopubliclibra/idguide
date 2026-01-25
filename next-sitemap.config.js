/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: 'https://idguide.ca',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 1.0,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://idguide.ca/sitemap.xml',
    ],
  },
};

module.exports = config;