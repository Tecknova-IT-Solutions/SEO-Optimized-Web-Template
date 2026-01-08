# SEO-Optimized Web Template

A production-ready, SEO-friendly web template built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, and optional Supabase integration. This template is optimized for performance, accessibility, and search engine visibility.

## 🚀 Features

### Core Features
- **Next.js 14+** with App Router for optimal performance
- **TypeScript** with strict mode for type safety
- **Tailwind CSS** with custom configuration
- **Supabase Integration** (optional) for backend functionality
- **Server-Side Rendering** and Static Site Generation for SEO

### SEO Features
- ✅ Next.js Metadata API for dynamic meta tags
- ✅ Automatic sitemap generation with `next-sitemap`
- ✅ Structured data (JSON-LD) for Schema.org markup
- ✅ Open Graph and Twitter Card support
- ✅ Canonical URLs
- ✅ Robots.txt configuration
- ✅ Breadcrumb navigation with schema markup

### Performance Optimizations
- ✅ Image optimization with Next.js Image component
- ✅ Font optimization with `next/font`
- ✅ Code splitting and lazy loading
- ✅ Minimal JavaScript bundle size
- ✅ Compression enabled
- ✅ Optimized package imports

### Accessibility
- ✅ Semantic HTML structure
- ✅ ARIA labels where necessary
- ✅ Keyboard navigation support
- ✅ Proper heading hierarchy
- ✅ Focus management
- ✅ Screen reader friendly

### Developer Experience
- ✅ ESLint configuration
- ✅ Prettier configuration
- ✅ TypeScript strict mode
- ✅ Error boundaries
- ✅ Loading states
- ✅ Comprehensive documentation

## 📁 Project Structure

```
/app
  /(routes)
    /page.tsx (homepage)
    /about/page.tsx
    /blog/page.tsx
    /blog/[slug]/page.tsx
    /contact/page.tsx
    /layout.tsx (root layout)
  /api (API routes if needed)
/components
  /seo (SEO components)
    /JsonLd.tsx
    /MetaTags.tsx
  /layout (Layout components)
    /Header.tsx
    /Footer.tsx
    /Breadcrumbs.tsx
  /common (Reusable components)
    /Hero.tsx
    /CTA.tsx
    /Card.tsx
/lib
  /supabase (Supabase clients)
    /client.ts
    /server.ts
    /middleware.ts
  /utils.ts
/public
  /images
  /fonts
/styles
  globals.css
```

## 🛠️ Installation

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Setup Steps

1. **Clone or download this template**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional packages** (if not already installed)
   ```bash
   npm install @supabase/supabase-js @supabase/ssr
   npm install -D next-sitemap
   ```

4. **Set up environment variables**
   
   Copy `.env.example` to `.env.local` and fill in your values:
   ```bash
   cp .env.example .env.local
   ```
   
   Required variables:
   ```env
   SITE_URL=https://yourdomain.com
   SITE_NAME=Your Site Name
   
   # Optional: Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run postbuild` - Generate sitemap (runs automatically after build)

## 🎨 Customization

### Styling

The template uses Tailwind CSS with a custom theme. You can customize colors, fonts, and other design tokens in `tailwind.config.ts`.

### SEO Configuration

1. **Update site metadata** in `app/layout.tsx`
2. **Configure sitemap** in `next-sitemap.config.js`
3. **Add structured data** using components in `components/seo/JsonLd.tsx`
4. **Set up meta tags** using `generateMetadata` from `components/seo/MetaTags.tsx`

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key
3. Add them to your `.env.local` file
4. Uncomment the middleware in `middleware.ts` if you need authentication

## 📄 Pages Included

- **Homepage** (`/`) - Hero section with feature cards
- **About** (`/about`) - About page with content
- **Blog** (`/blog`) - Blog listing page
- **Blog Post** (`/blog/[slug]`) - Individual blog post template
- **Contact** (`/contact`) - Contact form page
- **404** - Custom not found page

## 🔍 SEO Best Practices

### For Content Editors

1. **Page Titles**: Keep titles under 60 characters and include keywords
2. **Meta Descriptions**: Write compelling descriptions (150-160 characters)
3. **Headings**: Use proper heading hierarchy (H1 → H2 → H3)
4. **Images**: Always include descriptive alt text
5. **URLs**: Use clean, descriptive URLs with keywords
6. **Content**: Write high-quality, original content
7. **Internal Linking**: Link to related pages within your site
8. **Structured Data**: Use the provided JSON-LD components

### Technical SEO

- All pages are server-rendered or statically generated
- Automatic sitemap generation
- Canonical URLs on all pages
- Robots.txt configured
- Image optimization enabled
- Fast page load times

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically:
- Build your Next.js application
- Generate the sitemap
- Optimize images
- Set up CDN

### Other Platforms

This template works with any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

Make sure to:
1. Set environment variables
2. Run `npm run build` during deployment
3. Configure your domain in the platform settings

## 📚 Documentation

### Using SEO Components

#### MetaTags
```typescript
import { generateMetadata } from '@/components/seo/MetaTags';

export const metadata = generateMetadata({
  title: 'Page Title',
  description: 'Page description',
  keywords: 'keyword1, keyword2',
  canonical: '/page-url',
});
```

#### JSON-LD Structured Data
```typescript
import { OrganizationSchema, ArticleSchema } from '@/components/seo/JsonLd';

// In your page component
<OrganizationSchema
  name="Your Company"
  url="https://yourdomain.com"
  logo="https://yourdomain.com/logo.png"
/>
```

### Using Supabase

#### Client-side
```typescript
import { createClient } from '@/lib/supabase/client';

const supabase = createClient();
const { data } = await supabase.from('table').select('*');
```

#### Server-side
```typescript
import { createClient } from '@/lib/supabase/server';

const supabase = await createClient();
const { data } = await supabase.from('table').select('*');
```

## 🐛 Troubleshooting

### Sitemap not generating
- Make sure `SITE_URL` is set in your environment variables
- Check that `next-sitemap.config.js` is configured correctly
- Run `npm run postbuild` manually after build

### Supabase connection issues
- Verify your environment variables are set correctly
- Check that your Supabase project is active
- Ensure CORS is configured in Supabase dashboard

### Build errors
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`
- Check TypeScript errors: `npm run lint`
- Verify all dependencies are installed: `npm install`

## 📄 License

This template is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

