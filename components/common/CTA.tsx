import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CTAProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  variant?: 'default' | 'outline';
  className?: string;
}

export function CTA({
  title,
  description,
  ctaText,
  ctaHref,
  variant = 'default',
  className,
}: CTAProps) {
  return (
    <section
      className={cn(
        'relative flex flex-col items-center justify-center px-4 py-16 text-center',
        className
      )}
    >
      <div className="container max-w-3xl space-y-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
        <Link
          href={ctaHref}
          className={cn(
            'inline-flex h-11 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            variant === 'default'
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
          )}
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}

