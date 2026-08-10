/**
 * SEO utilities for generating meta tags and structured data
 */

import { siteConfig } from '$lib/config/site';

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path, siteConfig.url).href;
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
    alternateName: 'Peter Butao',
    jobTitle: 'Project Development Specialist, Web Designer & Software Developer',
    description:
      'Communications and stakeholder engagement professional and software developer based in Lilongwe, Malawi, specialising in monitoring & evaluation, project development, web design, and software development.',
    image: `${siteConfig.url}/profile.webp`,
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
      siteConfig.socials.github
    ],
    knowsAbout: [
      'Project Management',
      'Web Development',
      'Monitoring and Evaluation',
      'Stakeholder Engagement',
      'UI/UX Design',
      'Communications',
      'Data Analysis'
    ]
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.contact.location,
      addressCountry: 'Malawi'
    },
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.github
    ]
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url
    },
    inLanguage: 'en'
  };
}

export function generateItemListSchema(
  items: Array<{ name: string; description: string; url: string; image?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portfolio',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      description: item.description,
      url: item.url,
      ...(item.image ? { image: item.image } : {})
    }))
  };
}

export function generateCreativeWorkSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
  dateCreated?: string;
  keywords?: string[];
  type?: 'CreativeWork' | 'VisualArtwork';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': input.type || 'CreativeWork',
    name: input.name,
    headline: input.name,
    description: input.description,
    url: input.url,
    ...(input.image ? { image: input.image, thumbnailUrl: input.image } : {}),
    ...(input.dateCreated ? { dateCreated: input.dateCreated } : {}),
    ...(input.keywords?.length ? { keywords: input.keywords.join(', ') } : {}),
    creator: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url
    },
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url
    }
  };
}

export function generateServiceSchema(input: { name: string; description: string; url?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: input.url || siteConfig.url,
    serviceType: input.name,
    provider: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: 'Malawi',
    availableLanguage: 'en'
  };
}

export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Peter Rodrigues Butao',
    description:
      'Contact Peter Rodrigues Butao for project development, monitoring & evaluation, web design, and software development in Lilongwe, Malawi.',
    url: `${siteConfig.url}/contact`,
    mainEntity: generatePersonSchema()
  };
}
