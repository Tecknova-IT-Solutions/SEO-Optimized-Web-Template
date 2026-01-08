import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export function Hero({
  title,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center',
        className
      )}
    >
      <div className="container max-w-4xl space-y-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {description}
        </p>
        {(ctaText || secondaryCtaText) && (
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {ctaText && ctaHref && (
              <Link
                href={ctaHref}
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {ctaText}
              </Link>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

