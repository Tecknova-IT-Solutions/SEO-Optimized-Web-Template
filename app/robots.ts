import { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/utils';

/**
 * Dynamically generates robots.txt
 * No need for next-sitemap - Next.js 14 handles this natively!
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

