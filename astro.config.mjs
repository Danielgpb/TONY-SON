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
