import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thewhitescreen.org',
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        fr: 'fr',
        de: 'de',
        es: 'es',
        pt: 'pt',
        tr: 'tr',
        id: 'id',
        pl: 'pl',
        nl: 'nl',
        it: 'it',
        ar: 'ar',
        ja: 'ja',
        ko: 'ko',
        ru: 'ru'
      }
    }
  })],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de', 'es', 'pt', 'tr', 'id', 'pl', 'nl', 'it', 'ar', 'ja', 'ko', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
