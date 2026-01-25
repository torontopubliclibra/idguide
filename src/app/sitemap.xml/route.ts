import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://idguide.ca';
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/ab`, lastModified: new Date() },
    { url: `${baseUrl}/ab/name`, lastModified: new Date() },
    { url: `${baseUrl}/ab/resources`, lastModified: new Date() },
    { url: `${baseUrl}/birth`, lastModified: new Date() },
    { url: `${baseUrl}/cra`, lastModified: new Date() },
    { url: `${baseUrl}/downloads`, lastModified: new Date() },
    { url: `${baseUrl}/guides`, lastModified: new Date() },
    { url: `${baseUrl}/health`, lastModified: new Date() },
    { url: `${baseUrl}/id`, lastModified: new Date() },
    { url: `${baseUrl}/mb`, lastModified: new Date() },
    { url: `${baseUrl}/mb/name`, lastModified: new Date() },
    { url: `${baseUrl}/mb/resources`, lastModified: new Date() },
    { url: `${baseUrl}/name`, lastModified: new Date() },
    { url: `${baseUrl}/on`, lastModified: new Date() },
    { url: `${baseUrl}/on/birth`, lastModified: new Date() },
    { url: `${baseUrl}/on/health`, lastModified: new Date() },
    { url: `${baseUrl}/on/id`, lastModified: new Date() },
    { url: `${baseUrl}/on/name`, lastModified: new Date() },
    { url: `${baseUrl}/on/resources`, lastModified: new Date() },
    { url: `${baseUrl}/passport`, lastModified: new Date() },
    { url: `${baseUrl}/pr`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    { url: `${baseUrl}/resources`, lastModified: new Date() },
    { url: `${baseUrl}/search`, lastModified: new Date() },
    { url: `${baseUrl}/sin`, lastModified: new Date() },
    { url: `${baseUrl}/start`, lastModified: new Date() },
    { url: `${baseUrl}/workshops`, lastModified: new Date() },
  ];
}
