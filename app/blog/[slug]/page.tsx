import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ArticleSchema } from '@/components/seo/JsonLd';
import { generateMetadata } from '@/components/seo/MetaTags';
import { formatDate } from '@/lib/utils';
import { getBaseUrl } from '@/lib/utils';
import type { Metadata } from 'next';

// Example blog post data - in a real app, this would come from a CMS or database
const blogPosts: Record<
  string,
  {
    title: string;
    description: string;
    content: string;
    datePublished: string;
    dateModified?: string;
    author: string;
    image?: string;
  }
> = {
  'getting-started-with-nextjs-14': {
    title: 'Getting Started with Next.js 14',
    description:
      'Learn the fundamentals of Next.js 14 App Router and how to build modern web applications.',
    content: `
      <p>Next.js 14 introduces the App Router, a new paradigm for building React applications with improved performance and developer experience.</p>
      <h2>Key Features</h2>
      <p>The App Router brings several improvements:</p>
      <ul>
        <li>Server Components by default</li>
        <li>Improved data fetching</li>
        <li>Better performance with streaming</li>
        <li>Enhanced developer experience</li>
      </ul>
      <p>Start building your next application with Next.js 14 today!</p>
    `,
    datePublished: '2024-01-15',
    author: 'John Doe',
  },
  'seo-best-practices-nextjs': {
    title: 'SEO Best Practices for Next.js',
    description:
      'Discover how to optimize your Next.js application for search engines and improve your rankings.',
    content: `
      <p>SEO is crucial for any web application. Next.js provides excellent tools for building SEO-friendly applications.</p>
      <h2>Metadata API</h2>
      <p>The Metadata API allows you to define metadata for your pages easily.</p>
      <h2>Structured Data</h2>
      <p>Use JSON-LD to add structured data to your pages for better search engine understanding.</p>
    `,
    datePublished: '2024-01-10',
    author: 'Jane Smith',
  },
  'building-accessible-web-applications': {
    title: 'Building Accessible Web Applications',
    description:
      'A comprehensive guide to creating accessible web applications that work for everyone.',
    content: `
      <p>Accessibility is not optional. It's a requirement for building inclusive web applications.</p>
      <h2>Semantic HTML</h2>
      <p>Use semantic HTML elements to provide meaning to your content.</p>
      <h2>ARIA Labels</h2>
      <p>Add ARIA labels where necessary to provide additional context for screen readers.</p>
    `,
    datePublished: '2024-01-05',
    author: 'John Doe',
  },
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/blog/${slug}`;

  return generateMetadata({
    title: post.title,
    description: post.description,
    canonical: url,
    ogType: 'article',
    ogImage: post.image,
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    author: post.author,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const baseUrl = getBaseUrl();
  const imageUrl = post.image || `${baseUrl}/og-image.jpg`;

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.description}
        image={imageUrl}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        author={{ name: post.author }}
        publisher={{
          name: process.env.SITE_NAME || 'SEO Template',
          logo: `${baseUrl}/logo.png`,
        }}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${slug}` },
        ]}
        className="container py-4"
      />
      <article className="container py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <time dateTime={post.datePublished}>
                {formatDate(post.datePublished)}
              </time>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </header>
          <div
            className="prose prose-lg dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

