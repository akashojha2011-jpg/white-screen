export interface LanguageInfo {
  code: string;
  name: string; // Native endonym
  dir: 'ltr' | 'rtl';
  isDefault?: boolean;
}

export const PUBLISHED_LANGUAGES: Record<string, LanguageInfo> = {
  en: { code: 'en', name: 'English', dir: 'ltr', isDefault: true },
  es: { code: 'es', name: 'Español', dir: 'ltr' },
  fr: { code: 'fr', name: 'Français', dir: 'ltr' },
  de: { code: 'de', name: 'Deutsch', dir: 'ltr' },
  pt: { code: 'pt', name: 'Português', dir: 'ltr' },
  id: { code: 'id', name: 'Bahasa Indonesia', dir: 'ltr' },
};

export const DEFAULT_LANGUAGE = 'en';

export type LanguageCode = keyof typeof PUBLISHED_LANGUAGES;

export const ALL_LANGUAGE_CODES = Object.keys(PUBLISHED_LANGUAGES) as LanguageCode[];
export const NON_DEFAULT_LANGUAGES = ALL_LANGUAGE_CODES.filter(l => l !== DEFAULT_LANGUAGE);
