import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.thewhitescreen.org',
  trailingSlash: 'always',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de', 'es', 'pt', 'tr', 'id', 'pl', 'nl', 'it', 'ar', 'ja', 'ko', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
