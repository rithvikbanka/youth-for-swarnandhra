import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Locale } from './config';
import { defaultLocale } from './config';

interface Translations {
  [key: string]: string | Translations;
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
  translations: Translations;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && ['en', 'te'].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  // Load translations when locale changes
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/locales/${locale}.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error(`Failed to load translations for ${locale}:`, error);
        // Fall back to English
        if (locale !== 'en') {
          const fallbackResponse = await fetch('/locales/en.json');
          const fallbackData = await fallbackResponse.json();
          setTranslations(fallbackData);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('locale', newLocale);
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Translations)[k];
      } else {
        return fallback ?? key;
      }
    }

    return typeof value === 'string' ? value : fallback ?? key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, translations, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

