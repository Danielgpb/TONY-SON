// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { slugMap } from './src/data/slug-map.ts';

const SITE = 'https://tonyandson.be';

// Build a reverse index: { fullUrl -> { fr, en, nl } }
// so the sitemap serializer can emit xhtml:link annotations even for slug-divergent translations.
const altIndex = new Map();
for (const urls of Object.values(slugMap)) {
  const links = {
    'fr-BE': SITE + urls.fr,
    'en-BE': SITE + urls.en,
    'nl-BE': SITE + urls.nl,
  };
  altIndex.set(SITE + urls.fr, links);
  altIndex.set(SITE + urls.en, links);
  altIndex.set(SITE + urls.nl, links);
}

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-BE',
          en: 'en-BE',
          nl: 'nl-BE',
        },
      },
      serialize(item) {
        const links = altIndex.get(item.url);
        if (links) {
          item.links = Object.entries(links).map(([hreflang, url]) => ({ lang: hreflang, url }));
          // x-default → French
          item.links.push({ lang: 'x-default', url: links['fr-BE'] });
        }
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  // Redirections gérées côté Netlify (public/_redirects) en 301 serveur,
  // pour éviter qu'Astro ne matérialise des fichiers HTML meta-refresh
  // que GSC classerait en "Page avec redirection".
});
