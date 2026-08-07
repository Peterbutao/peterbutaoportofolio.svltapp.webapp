import { siteConfig } from '$lib/config/site';
import { projects } from '$lib/data/projects';
import { designs } from '$lib/data/designs';

export const prerender = true;

export async function GET() {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString().split('T')[0];

  const pages = [
    { url: '', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/projects', changefreq: 'weekly', priority: 0.9 },
    { url: '/services', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 },
    { url: '/UI/UX-designs', changefreq: 'weekly', priority: 0.8 }
  ];

  const projectUrls = projects.map((p) => ({
    url: `/projects/${p.slug}`,
    changefreq: 'monthly',
    priority: 0.8,
    image: `${baseUrl}${p.thumb}`
  }));

  const designUrls = designs.map((d) => ({
    url: `/UI/UX-designs/${d.slug}`,
    changefreq: 'monthly',
    priority: 0.8,
    image: `${baseUrl}${d.thumb}`
  }));

  const allUrls = [...pages, ...projectUrls, ...designUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allUrls
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${
      'image' in page
        ? `
    <image:image>
      <image:loc>${page.image}</image:loc>
    </image:image>`
        : ''
    }
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
