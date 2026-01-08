import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
}

interface HeaderProps {
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
];

export function Header({ navItems = defaultNavItems }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-10">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">SEO Template</span>
        </Link>
        <nav className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

