import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn, getBaseUrl } from '@/lib/utils';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const baseUrl = getBaseUrl();
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href.startsWith('http') ? item.href : `${baseUrl}${item.href}`,
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav
        aria-label="Breadcrumb"
        className={cn('flex items-center space-x-2 text-sm px-10', className)}
      >
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="mr-2 h-4 w-4 text-muted-foreground" />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

