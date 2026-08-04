/**
 * SEO utilities for generating meta tags and structured data
 */

import { siteConfig } from '$lib/config/site';

export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateMetaTags(metadata: SEOMetadata) {
  const { title, description, image, url, type = 'website' } = metadata;
  const siteUrl = url || siteConfig.url;
  const fullTitle = `${title} | ${siteConfig.name}`;
  const imageUrl = image || `${siteConfig.url}/og-image.jpg`;

  return {
    title: fullTitle,
    description,
    'og:title': fullTitle,
    'og:description': description,
    'og:image': imageUrl,
    'og:url': siteUrl,
    'og:type': type,
    'og:site_name': siteConfig.name,
    'twitter:card': 'summary_large_image',
    'twitter:title': fullTitle,
    'twitter:description': description,
    'twitter:image': imageUrl,
  };
}

export function generateStructuredData(metadata: SEOMetadata) {
  const { title, description, url, type, publishedTime, modifiedTime, author, section, tags } = metadata;
  const siteUrl = url || siteConfig.url;

  const baseData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
    name: title,
    description,
    url: siteUrl,
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url
    }
  };

  if (type === 'article') {
    return {
      ...baseData,
      '@type': 'Article',
      headline: title,
      datePublished: publishedTime,
      dateModified: modifiedTime,
      author: {
        '@type': 'Person',
        name: author || siteConfig.name
      },
      articleSection: section,
      keywords: tags?.join(', ')
    };
  }

  return baseData;
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: 'Project Development Specialist, Web Designer & Software Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.contact.location,
      addressCountry: 'Malawi'
    },
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    url: siteConfig.url,
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.github,
      siteConfig.socials.twitter
    ],
    knowsAbout: [
      'Project Management',
      'Web Development',
      'Monitoring and Evaluation',
      'Stakeholder Engagement',
      'UI/UX Design'
    ]
  };
}
