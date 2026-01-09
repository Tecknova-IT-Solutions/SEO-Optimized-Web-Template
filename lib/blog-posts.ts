/**
 * Blog posts data - in a real app, this would come from a CMS or database
 * This is exported so it can be used by both the blog page and sitemap generator
 */
export const blogPosts: Record<
  string,
  {
    title: string;
    description: string;
    content: string;
    datePublished: string;
    dateModified?: string;
    author: string;
    image?: string;
  }
> = {
  'getting-started-with-nextjs-14': {
    title: 'Getting Started with Next.js 14',
    description:
      'Learn the fundamentals of Next.js 14 App Router and how to build modern web applications.',
    content: `
      <p>Next.js 14 introduces the App Router, a new paradigm for building React applications with improved performance and developer experience.</p>
      <h2>Key Features</h2>
      <p>The App Router brings several improvements:</p>
      <ul>
        <li>Server Components by default</li>
        <li>Improved data fetching</li>
        <li>Better performance with streaming</li>
        <li>Enhanced developer experience</li>
      </ul>
      <p>Start building your next application with Next.js 14 today!</p>
    `,
    datePublished: '2024-01-15',
    author: 'John Doe',
  },
  'seo-best-practices-nextjs': {
    title: 'SEO Best Practices for Next.js',
    description:
      'Discover how to optimize your Next.js application for search engines and improve your rankings.',
    content: `
      <p>SEO is crucial for any web application. Next.js provides excellent tools for building SEO-friendly applications.</p>
      <h2>Metadata API</h2>
      <p>The Metadata API allows you to define metadata for your pages easily.</p>
      <h2>Structured Data</h2>
      <p>Use JSON-LD to add structured data to your pages for better search engine understanding.</p>
    `,
    datePublished: '2024-01-10',
    author: 'Jane Smith',
  },
  'building-accessible-web-applications': {
    title: 'Building Accessible Web Applications',
    description:
      'A comprehensive guide to creating accessible web applications that work for everyone.',
    content: `
      <p>Accessibility is not optional. It's a requirement for building inclusive web applications.</p>
      <h2>Semantic HTML</h2>
      <p>Use semantic HTML elements to provide meaning to your content.</p>
      <h2>ARIA Labels</h2>
      <p>Add ARIA labels where necessary to provide additional context for screen readers.</p>
    `,
    datePublished: '2024-01-05',
    author: 'John Doe',
  },
};
