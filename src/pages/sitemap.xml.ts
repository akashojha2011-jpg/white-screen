import type { APIRoute } from 'astro';
import { languages } from '../i18n/ui';

export const GET: APIRoute = () => {
  const domain = 'https://thewhitescreen.org';
  const langCodes = Object.keys(languages);
  const legalPages = ['', '/about', '/contact', '/privacy-policy', '/terms-and-conditions', '/license', '/cookie-policy'];

  const urls: string[] = [];

  for (const pagePath of legalPages) {
    for (const lang of langCodes) {
      const pageUrl = lang === 'en'
        ? `${domain}${pagePath === '' ? '/' : pagePath}`
        : `${domain}/${lang}${pagePath}`;

      let hreflangTags = '';
      for (const targetLang of langCodes) {
        const altUrl = targetLang === 'en'
          ? `${domain}${pagePath === '' ? '/' : pagePath}`
          : `${domain}/${targetLang}${pagePath}`;
        hreflangTags += `\n    <xhtml:link rel="alternate" hreflang="${targetLang}" href="${altUrl}" />`;
      }
      hreflangTags += `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}${pagePath === '' ? '/' : pagePath}" />`;

      urls.push(`  <url>\n    <loc>${pageUrl}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>${pagePath === '' ? '1.0' : '0.8'}</priority>${hreflangTags}\n  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
