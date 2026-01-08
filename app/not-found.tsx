import Link from 'next/link';
import { generateMetadata } from '@/components/seo/MetaTags';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
  noindex: true,
  nofollow: true,
});

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

