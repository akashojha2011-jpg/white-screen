import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thewhitescreen.org',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de', 'es', 'pt', 'tr', 'id', 'pl', 'nl', 'it', 'ar', 'ja', 'ko', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
