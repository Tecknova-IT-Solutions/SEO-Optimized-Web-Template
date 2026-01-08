import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardGrid } from '@/components/common/Card';
import { createMetadata } from '@/components/seo/MetaTags';
import type { Metadata } from 'next';

export const metadata: Metadata = createMetadata({
  title: 'Blog',
  description:
    'Read our latest articles and insights on web development, SEO, and modern web technologies.',
  keywords: 'Blog, Articles, Web Development, SEO, Next.js',
  canonical: '/blog',
});

// Example blog posts - in a real app, these would come from a CMS or database
const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    description:
      'Learn the fundamentals of Next.js 14 App Router and how to build modern web applications.',
    href: '/blog/getting-started-with-nextjs-14',
    date: '2024-01-15',
    author: 'John Doe',
  },
  {
    id: '2',
    title: 'SEO Best Practices for Next.js',
    description:
      'Discover how to optimize your Next.js application for search engines and improve your rankings.',
    href: '/blog/seo-best-practices-nextjs',
    date: '2024-01-10',
    author: 'Jane Smith',
  },
  {
    id: '3',
    title: 'Building Accessible Web Applications',
    description:
      'A comprehensive guide to creating accessible web applications that work for everyone.',
    href: '/blog/building-accessible-web-applications',
    date: '2024-01-05',
    author: 'John Doe',
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
        ]}
        className="container py-4"
      />
      <div className="container mx-auto py-16 px-10">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Latest articles and insights on web development and SEO.
          </p>
        </div>
        <CardGrid>
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              description={post.description}
              href={post.href}
              date={post.date}
              author={post.author}
            />
          ))}
        </CardGrid>
      </div>
    </>
  );
}
