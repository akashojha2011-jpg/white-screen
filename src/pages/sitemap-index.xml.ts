import type { APIRoute } from 'astro';
import { ALL_LANGUAGE_CODES } from '../i18n/config';
import { SITE_ORIGIN } from '../i18n/slugs';

export const GET: APIRoute = async () => {
  const lastmod = "2026-10-23";

  const sitemaps = ALL_LANGUAGE_CODES.map((lang) => `  <sitemap>
    <loc>${SITE_ORIGIN}/sitemap-${lang}.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
