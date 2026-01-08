import { Metadata } from 'next';
import { getBaseUrl } from '@/lib/utils';

interface MetaTagsProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  nofollow?: boolean;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateMetadata({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
  nofollow = false,
  keywords,
  author,
  publishedTime,
  modifiedTime,
}: MetaTagsProps): Metadata {
  const baseUrl = getBaseUrl();
  const canonicalUrl = canonical || baseUrl;
  const imageUrl = ogImage || `${baseUrl}/og-image.jpg`;

  return {
    title,
    description,
    keywords: keywords?.split(',').map((k) => k.trim()),
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: process.env.SITE_NAME || 'SEO Optimized Web Template',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

