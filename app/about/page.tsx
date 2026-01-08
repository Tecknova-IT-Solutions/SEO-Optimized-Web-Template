import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { createMetadata } from '@/components/seo/MetaTags';
import type { Metadata } from 'next';

export const metadata: Metadata = createMetadata({
  title: 'About Us',
  description:
    'Learn more about our SEO-optimized web template, its features, and how it can help you build fast, accessible, and search-engine-friendly websites.',
  keywords: 'About, Web Template, Next.js, SEO, Web Development',
  canonical: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
        className="container py-4"
      />
      <div className="container py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tight">
            About This Template
          </h1>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              This SEO-optimized web template is designed to provide a solid
              foundation for building modern, performant websites. It combines
              the power of Next.js 14+ with best practices for SEO, performance,
              and accessibility.
            </p>
            <h2>Built with Modern Technologies</h2>
            <p>
              The template leverages Next.js 14+ App Router for server-side
              rendering and static site generation, ensuring optimal performance
              and SEO. TypeScript provides type safety, while Tailwind CSS
              enables rapid UI development with a utility-first approach.
            </p>
            <h2>SEO Features</h2>
            <ul>
              <li>Next.js Metadata API for dynamic meta tags</li>
              <li>Automatic sitemap generation with next-sitemap</li>
              <li>Structured data (JSON-LD) for Schema.org markup</li>
              <li>Open Graph and Twitter Card support</li>
              <li>Canonical URLs and robots.txt configuration</li>
            </ul>
            <h2>Performance Optimizations</h2>
            <ul>
              <li>Image optimization with Next.js Image component</li>
              <li>Font optimization with next/font</li>
              <li>Code splitting and lazy loading</li>
              <li>Minimal JavaScript bundle size</li>
              <li>Compression and caching strategies</li>
            </ul>
            <h2>Accessibility</h2>
            <p>
              The template follows WCAG guidelines with semantic HTML, proper
              ARIA labels, keyboard navigation support, and a logical heading
              hierarchy. All interactive elements are focusable and provide
              clear feedback.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
