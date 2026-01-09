
interface JsonLdProps {
  type?: string;
  data: Record<string, unknown>;
}

export function JsonLd({ type = 'WebSite', data }: JsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    telephone?: string;
    contactType?: string;
    email?: string;
  };
  sameAs?: string[];
}

export function OrganizationSchema({
  name,
  url,
  logo,
  description,
  contactPoint,
  sameAs,
}: OrganizationSchemaProps) {
  const data: Record<string, unknown> = {
    name,
    url,
  };

  if (logo) {
    data.logo = logo;
  }

  if (description) {
    data.description = description;
  }

  if (contactPoint) {
    data.contactPoint = {
      '@type': 'ContactPoint',
      ...contactPoint,
    };
  }

  if (sameAs && sameAs.length > 0) {
    data.sameAs = sameAs;
  }

  return <JsonLd type="Organization" data={data} />;
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo?: string;
  };
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
}: ArticleSchemaProps) {
  const data: Record<string, unknown> = {
    headline,
    description,
    datePublished,
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      ...(publisher.logo && {
        logo: {
          '@type': 'ImageObject',
          url: publisher.logo,
        },
      }),
    },
  };

  if (image) {
    data.image = image;
  }

  if (dateModified) {
    data.dateModified = dateModified;
  }

  return <JsonLd type="Article" data={data} />;
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const data = {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd type="BreadcrumbList" data={data} />;
}

