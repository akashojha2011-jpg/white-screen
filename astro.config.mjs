import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.thewhitescreen.org',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
