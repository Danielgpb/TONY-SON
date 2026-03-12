import fr from './fr.json';
import en from './en.json';
import nl from './nl.json';

const translations: Record<string, typeof fr> = { fr, en, nl };

export type Locale = 'fr' | 'en' | 'nl';

export function t(locale: Locale) {
  return translations[locale] || translations.fr;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en' || lang === 'nl') return lang;
  return 'fr';
}

export const locales: Locale[] = ['fr', 'en', 'nl'];
