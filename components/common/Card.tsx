import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  date?: Date | string;
  author?: string;
  className?: string;
}

export function Card({
  title,
  description,
  href,
  image,
  imageAlt,
  date,
  author,
  className,
}: CardProps) {
  const content = (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md',
        className
      )}
    >
      {image && (
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold leading-tight">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-sm text-muted-foreground">
          {description}
        </p>
        {(date || author) && (
          <div className="mt-auto text-xs text-muted-foreground">
            {date && <time dateTime={typeof date === 'string' ? date : date.toISOString()}>{formatDate(date)}</time>}
            {date && author && ' • '}
            {author && <span>{author}</span>}
          </div>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {content}
      </Link>
    );
  }

  return content;
}

interface CardGridProps {
  children: React.ReactNode;
  className?: string;
}

export function CardGrid({ children, className }: CardGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
}

