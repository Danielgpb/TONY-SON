// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tonyandson.be',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/': '/fr/',
  },
});
