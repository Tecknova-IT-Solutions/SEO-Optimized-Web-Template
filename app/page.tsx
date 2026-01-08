import { Hero } from '@/components/common/Hero';
import { CTA } from '@/components/common/CTA';
import { Card, CardGrid } from '@/components/common/Card';
import { createMetadata } from '@/components/seo/MetaTags';
import type { Metadata } from 'next';

export const metadata: Metadata = createMetadata({
  title: 'Home',
  description:
    'Welcome to our SEO-optimized web template. Built with Next.js 14+, TypeScript, and modern best practices for performance and search engine visibility.',
  keywords: 'Next.js, SEO, Web Template, React, TypeScript, Performance',
});

export default function HomePage() {
  return (
    <>
      <Hero
        title="SEO-Optimized Web Template"
        description="A production-ready template built with Next.js 14+, TypeScript, Tailwind CSS, and Supabase integration. Optimized for performance, accessibility, and search engine visibility."
        ctaText="Get Started"
        ctaHref="/about"
        secondaryCtaText="View Blog"
        secondaryCtaHref="/blog"
      />

      <section className="container py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>
        <CardGrid>
          <Card
            title="SEO Optimized"
            description="Built with Next.js Metadata API, structured data, sitemap generation, and Open Graph tags for maximum search engine visibility."
          />
          <Card
            title="Performance First"
            description="Optimized images, lazy loading, code splitting, and minimal JavaScript bundle size for lightning-fast page loads."
          />
          <Card
            title="Type Safe"
            description="Full TypeScript support with strict mode enabled for better developer experience and fewer runtime errors."
          />
          <Card
            title="Accessible"
            description="Semantic HTML, ARIA labels, keyboard navigation, and proper heading hierarchy for WCAG compliance."
          />
          <Card
            title="Modern Stack"
            description="Next.js 14+ App Router, React 18+, Tailwind CSS, and optional Supabase integration for rapid development."
          />
          <Card
            title="Production Ready"
            description="ESLint, Prettier, error boundaries, loading states, and comprehensive documentation included."
          />
        </CardGrid>
      </section>

      <CTA
        title="Ready to Get Started?"
        description="Explore our template and customize it to fit your needs. All the tools and best practices are already configured."
        ctaText="Learn More"
        ctaHref="/about"
      />
    </>
  );
}
