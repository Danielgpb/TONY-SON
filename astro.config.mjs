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
  redirects: {
    '/': '/fr/',

    // URLs sans préfixe de langue → FR par défaut
    '/about/': '/fr/about/',
    '/contact/': '/fr/contact/',
    '/services/': '/fr/coiffure/',

    // Ancien site WordPress — pages principales
    '/about-us/': '/fr/about/',
    '/balayage-tonyson/': '/fr/services/balayage-bruxelles/',
    '/hello-world/': '/fr/',
    '/blog/': '/fr/',
    '/fr/blog/': '/fr/',

    // Ancien WordPress — articles de blog → homepage
    '/how-salons-create-extravagant-looks/': '/fr/',
    '/achieving-the-perfect-blowout-at-home/': '/fr/',
    '/a-day-in-the-life-of-a-professional-hairdresser/': '/fr/',
    '/celebrity-inspired-hair-and-beauty-trends/': '/fr/',
    '/mastering-the-art-of-haircut-techniques/': '/fr/',
    '/the-connection-between-hairstyles-and-personal-identity/': '/fr/',
    '/the-intersection-of-hair-artistry-and-self-expression/': '/fr/',
    '/a-look-at-modern-hair-and-barbering-trends/': '/fr/',
    '/the-role-of-hair-and-beauty-salons-in-film-industry/': '/fr/',
    '/this-is-quote-post-format/': '/fr/',

    // Ancien WordPress — catégories → page coiffure ou barbier
    '/category/curling/': '/fr/coiffure/',
    '/category/extensions/': '/fr/coiffure/',
    '/category/grooming/': '/fr/barbier/',
    '/category/styling/': '/fr/coiffure/',
    '/category/trimming/': '/fr/barbier/',
    '/category/uncategorized/': '/fr/',

    // Ancien WordPress — tags → homepage
    '/tag/blowout/': '/fr/',
    '/tag/conditioning/': '/fr/',
    '/tag/coloring/': '/fr/',
    '/tag/haircut/': '/fr/',
    '/tag/extensions/': '/fr/',
    '/tag/curling/': '/fr/',
    '/tag/salon/': '/fr/',
    '/tag/scalp/': '/fr/',
    '/tag/styling/': '/fr/',
    '/tag/trimming/': '/fr/',

    // Ancien WordPress — auteur et formats
    '/author/ilyssstjr05gmail-com/': '/fr/',
    '/author/ilyssstjr05gmail-com/page/2/': '/fr/',
    '/page/2/': '/fr/',
    '/type/audio/': '/fr/',
    '/type/gallery/': '/fr/',
    '/type/link/': '/fr/',
    '/type/quote/': '/fr/',
    '/type/video/': '/fr/',

    // Ancien WordPress — admin (bloquer le crawl)
    '/wp-admin/': '/fr/',
    '/wp-login.php': '/fr/',
  },
});
