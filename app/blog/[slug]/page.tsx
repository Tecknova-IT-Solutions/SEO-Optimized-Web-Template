import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ArticleSchema } from '@/components/seo/JsonLd';
import { createMetadata } from '@/components/seo/MetaTags';
import { formatDate } from '@/lib/utils';
import { getBaseUrl } from '@/lib/utils';
import { blogPosts } from '@/lib/blog-posts';
import type { Metadata } from 'next';

// Force dynamic rendering to ensure proper SSR in production
export const dynamic = 'force-dynamic';

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

  return createMetadata({
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
      <article className="container mx-auto px-10 py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
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
