import type { APIRoute } from 'astro';
import { ALL_LANGUAGE_CODES, type LanguageCode } from '../i18n/config';
import { SLUG_REGISTRY, getCanonicalUrl, getHreflangs } from '../i18n/slugs';

export async function getStaticPaths() {
  return ALL_LANGUAGE_CODES.map((lang) => ({
    params: { lang },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as LanguageCode;
  const lastmod = "2026-10-23";

  // Filter pages that exist in this language
  const pagesForLang = SLUG_REGISTRY.filter((p) => p.slugs[lang] !== undefined || p.type === 'home');

  const urlEntries = pagesForLang.map((p) => {
    const loc = getCanonicalUrl(p.id, lang);
    const hreflangs = getHreflangs(p.id);

    let priority = "0.8";
    let changefreq = "weekly";
    if (p.type === 'home') {
      priority = "1.0";
      changefreq = "daily";
    } else if (p.type === 'color' || p.type === 'tool') {
      priority = "0.9";
      changefreq = "weekly";
    } else if (p.type === 'legal') {
      priority = "0.5";
      changefreq = "monthly";
    }

    const xhtmlLinks = hreflangs
      .map((h) => `    <xhtml:link rel="alternate" hreflang="${h.lang}" href="${h.href}" />`)
      .join('\n');

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${xhtmlLinks}
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
