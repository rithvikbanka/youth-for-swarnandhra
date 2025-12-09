export const defaultLocale = 'en' as const;
export const locales = ['en', 'te'] as const;
export const localeNames = {
  en: 'English',
  te: 'తెలుగు'
} as const;

export type Locale = typeof locales[number];

