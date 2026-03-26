// Mapping of equivalent pages across FR/EN/NL
// Used for hreflang generation in Layout.astro

export const slugMap: Record<string, { fr: string; en: string; nl: string }> = {
  // Homepage
  '/': { fr: '/fr/', en: '/en/', nl: '/nl/' },

  // Category pages
  'coiffure': { fr: '/fr/coiffure/', en: '/en/hairdresser/', nl: '/nl/kapsalon/' },
  'barbier': { fr: '/fr/barbier/', en: '/en/barber/', nl: '/nl/barbier/' },

  // Static pages
  'about': { fr: '/fr/about/', en: '/en/about/', nl: '/nl/about/' },
  'contact': { fr: '/fr/contact/', en: '/en/contact/', nl: '/nl/contact/' },

  // Service pages
  'colorations-capillaires-bruxelles': { fr: '/fr/services/colorations-capillaires-bruxelles/', en: '/en/services/hair-coloring-brussels/', nl: '/nl/services/haarkleuring-brussel/' },
  'balayage-bruxelles': { fr: '/fr/services/balayage-bruxelles/', en: '/en/services/balayage-brussels/', nl: '/nl/services/balayage-brussel/' },
  'meches-bruxelles': { fr: '/fr/services/meches-bruxelles/', en: '/en/services/highlights-brussels/', nl: '/nl/services/highlights-brussel/' },
  'coloration-degrade-bruxelles': { fr: '/fr/services/coloration-degrade-bruxelles/', en: '/en/services/ombre-hair-color-brussels/', nl: '/nl/services/ombre-kleuring-brussel/' },
  'brushing-bruxelles': { fr: '/fr/services/brushing-bruxelles/', en: '/en/services/blowout-brussels/', nl: '/nl/services/fohn-brussel/' },
  'lissage-cheveux-bruxelles': { fr: '/fr/services/lissage-cheveux-bruxelles/', en: '/en/services/hair-straightening-brussels/', nl: '/nl/services/haar-stijlen-brussel/' },
  'traitement-keratine-bruxelles': { fr: '/fr/services/traitement-keratine-bruxelles/', en: '/en/services/keratin-treatment-brussels/', nl: '/nl/services/keratine-behandeling-brussel/' },
  'extensions-cheveux-bruxelles': { fr: '/fr/services/extensions-cheveux-bruxelles/', en: '/en/services/hair-extensions-brussels/', nl: '/nl/services/hair-extensions-brussel/' },
  'permanentes-bruxelles': { fr: '/fr/services/permanentes-bruxelles/', en: '/en/services/perm-brussels/', nl: '/nl/services/permanent-brussel/' },
  'repousse-capillaire-bruxelles': { fr: '/fr/services/repousse-capillaire-bruxelles/', en: '/en/services/hair-regrowth-brussels/', nl: '/nl/services/haar-hergroei-brussel/' },
  'coupes-enfants-bruxelles': { fr: '/fr/services/coupes-enfants-bruxelles/', en: '/en/services/kids-haircut-brussels/', nl: '/nl/services/kinderkapsels-brussel/' },
  'taille-barbe-bruxelles': { fr: '/fr/services/taille-barbe-bruxelles/', en: '/en/services/beard-trim-brussels/', nl: '/nl/services/baardtrimmen-brussel/' },
  'coupe-homme-bruxelles': { fr: '/fr/services/coupe-homme-bruxelles/', en: '/en/services/mens-haircut-brussels/', nl: '/nl/services/herenkapsel-brussel/' },
  'teinture-sourcils-bruxelles': { fr: '/fr/services/teinture-sourcils-bruxelles/', en: '/en/services/eyebrow-tinting-brussels/', nl: '/nl/services/wenkbrauwkleuring-brussel/' },
  'epilation-cire-bruxelles': { fr: '/fr/services/epilation-cire-bruxelles/', en: '/en/services/facial-waxing-brussels/', nl: '/nl/services/gezichtsontharing-brussel/' },
};

/**
 * Given a pathname like /fr/services/balayage-bruxelles/
 * Returns { fr: '/fr/services/balayage-bruxelles/', en: '/en/services/balayage-brussels/', nl: '/nl/services/balayage-brussel/' }
 */
export function getAlternateUrls(pathname: string): { fr: string; en: string; nl: string } {
  // Try to find the page in the slug map
  for (const [_key, urls] of Object.entries(slugMap)) {
    if (urls.fr === pathname || urls.en === pathname || urls.nl === pathname) {
      return urls;
    }
  }
  // Fallback: simple locale swap (for pages not in the map)
  const pathAfterLocale = pathname.replace(/^\/(fr|en|nl)\//, '');
  return {
    fr: `/fr/${pathAfterLocale}`,
    en: `/en/${pathAfterLocale}`,
    nl: `/nl/${pathAfterLocale}`,
  };
}
