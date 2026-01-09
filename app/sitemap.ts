import { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/utils';
import { generateSitemapEntries } from '@/lib/sitemap';

/**
 * Automatically generates sitemap by discovering all routes from the app directory.
 * No manual configuration needed - just add new pages and they'll be included!
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  return await generateSitemapEntries(baseUrl);
}
