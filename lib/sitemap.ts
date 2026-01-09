import { MetadataRoute } from 'next';
import { readdirSync, existsSync } from 'fs';
import { join } from 'path';
import { blogPosts } from '@/lib/blog-posts';

/**
 * Automatically discovers all static routes from the app directory
 */
export async function discoverRoutes(): Promise<string[]> {
  const routes: string[] = [];
  const appDir = join(process.cwd(), 'app');

  if (!existsSync(appDir)) {
    return routes;
  }

  /**
   * Recursively scan directory for page.tsx files
   */
  function scanDirectory(dir: string, basePath: string = ''): void {
    try {
      const entries = readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        const routePath = basePath ? `${basePath}/${entry.name}` : entry.name;

        // Skip special files and directories
        if (
          entry.name.startsWith('_') ||
          entry.name.startsWith('.') ||
          entry.name === 'api' ||
          entry.name === 'sitemap.ts' ||
          entry.name === 'robots.ts' ||
          entry.name === 'layout.tsx' ||
          entry.name === 'loading.tsx' ||
          entry.name === 'error.tsx' ||
          entry.name === 'not-found.tsx' ||
          entry.name === 'globals.css' ||
          entry.name.startsWith('[') // Skip dynamic route directories
        ) {
          continue;
        }

        if (entry.isDirectory()) {
          // Check if this directory has a page.tsx
          const pagePath = join(fullPath, 'page.tsx');
          if (existsSync(pagePath)) {
            routes.push(`/${routePath}`);
          }
          // Recursively scan subdirectories
          scanDirectory(fullPath, routePath);
        } else if (entry.name === 'page.tsx' && basePath === '') {
          // Root page
          routes.push('/');
        }
      }
    } catch (error) {
      // Silently fail if directory can't be read (e.g., in edge runtime)
      console.error(error);
    }
  }

  scanDirectory(appDir);
  return routes.sort();
}

/**
 * Get dynamic routes (like blog posts)
 */
export function getDynamicRoutes(): string[] {
  // Get blog post slugs from the exported blogPosts
  return Object.keys(blogPosts).map((slug) => `/blog/${slug}`);
}

/**
 * Generate sitemap entries for all discovered routes
 */
export async function generateSitemapEntries(
  baseUrl: string
): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = await discoverRoutes();
  const dynamicRoutes = await getDynamicRoutes();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];
  const currentDate = new Date().toISOString();

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route === '/' ? '' : route}`,
    lastModified: currentDate,
  }));
}
