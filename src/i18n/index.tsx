import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { LocalizedString } from '../types/cv';
import en from './locales/en';
import fr from './locales/fr';
import ar from './locales/ar';

type LocaleCode = 'en' | 'fr' | 'ar';

interface LocaleData {
  lang: string;
  dir: string;
  [key: string]: unknown;
}

const locales: Record<LocaleCode, LocaleData> = { en, fr, ar };

interface I18nContextValue {
  locale: LocaleCode;
  t: (key: string) => string;
  localize: (obj: LocalizedString | string) => string;
  changeLocale: (code: LocaleCode) => void;
  locales: LocaleCode[];
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<LocaleCode>(() => {
    const saved = localStorage.getItem('locale') as LocaleCode | null;
    if (saved && locales[saved]) return saved;
    const browserLang = navigator.language.split('-')[0] as LocaleCode;
    if (locales[browserLang]) return browserLang;
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('locale', locale);
    document.documentElement.setAttribute('lang', locales[locale].lang);
    document.documentElement.setAttribute('dir', locales[locale].dir);
  }, [locale]);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.');
      let value: unknown = locales[locale];
      for (const k of keys) {
        value = (value as Record<string, unknown>)?.[k];
      }
      return (typeof value === 'string' ? value : key);
    },
    [locale],
  );

  const localize = useCallback(
    (obj: LocalizedString | string): string => {
      if (typeof obj === 'string') return obj;
      if (obj && typeof obj === 'object' && obj[locale]) return obj[locale];
      if (obj && typeof obj === 'object' && obj.en) return obj.en;
      return String(obj);
    },
    [locale],
  );

  const changeLocale = useCallback((newLocale: LocaleCode) => {
    if (locales[newLocale]) setLocale(newLocale);
  }, []);

  return (
    <I18nContext.Provider value={{ locale, t, localize, changeLocale, locales: Object.keys(locales) as LocaleCode[] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider');
  return ctx;
}
