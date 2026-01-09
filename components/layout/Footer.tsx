import Link from 'next/link';
import { getBaseUrl } from '@/lib/utils';

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Pages',
    links: [
      { title: 'Home', href: '/' },
      { title: 'About', href: '/about' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const siteUrl = getBaseUrl();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">SEO Template</h3>
            <p className="text-sm text-muted-foreground">
              A production-ready, SEO-optimized web template built with Next.js
              and modern best practices.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`${siteUrl}/sitemap.xml`}
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  href={`${siteUrl}/robots.txt`}
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Robots.txt
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} SEO Template. All rights reserved by{' '}
            <a
              href="https://tecknova.com.au"
              target="_blank"
              rel="SEO Optimized Web Template"
              className="text-primary hover:underline"
            >
              Tecknova IT Solutions
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
