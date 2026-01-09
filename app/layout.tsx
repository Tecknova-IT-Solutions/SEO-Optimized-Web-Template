import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OrganizationSchema } from '@/components/seo/JsonLd';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const siteName = process.env.SITE_NAME || 'SEO Optimized Web Template';
const siteUrl = process.env.SITE_URL || 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    'A production-ready, SEO-optimized web template built with Next.js 14+ and modern best practices.',
  keywords: ['Next.js', 'SEO', 'Web Template', 'React', 'TypeScript'],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: siteName,
    description:
      'A production-ready, SEO-optimized web template built with Next.js 14+ and modern best practices.',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description:
      'A production-ready, SEO-optimized web template built with Next.js 14+ and modern best practices.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema
          name={siteName}
          url={siteUrl}
          description="A production-ready, SEO-optimized web template"
        />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

