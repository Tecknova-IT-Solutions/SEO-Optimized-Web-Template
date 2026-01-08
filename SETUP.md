# Setup Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create environment file**
   
   Create a `.env.local` file in the root directory with the following variables:
   
   ```env
   # Required
   SITE_URL=https://yourdomain.com
   SITE_NAME=Your Site Name
   
   # Optional: Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

## Environment Variables

### Required Variables

- `SITE_URL`: Your website's URL (e.g., `https://example.com`)
- `SITE_NAME`: Your website's name (used in metadata and structured data)

### Optional Variables (Supabase)

If you're using Supabase, add these variables:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (server-side only)

## Next Steps

1. Update `app/layout.tsx` with your site information
2. Customize the theme in `tailwind.config.ts`
3. Update navigation items in `components/layout/Header.tsx`
4. Add your content to the pages
5. Configure sitemap in `next-sitemap.config.js`
6. Add your logo and images to `/public`

## Building for Production

```bash
npm run build
```

This will:
- Build your Next.js application
- Generate the sitemap automatically (via postbuild script)

## Deployment

See the main README.md for deployment instructions.

