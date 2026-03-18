import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import en from './locales/en';
import fr from './locales/fr';
import ar from './locales/ar';

const locales = { en, fr, ar };
const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    const saved = localStorage.getItem('locale');
    if (saved && locales[saved]) return saved;
    const browserLang = navigator.language.split('-')[0];
    if (locales[browserLang]) return browserLang;
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('locale', locale);
    document.documentElement.setAttribute('lang', locales[locale].lang);
    document.documentElement.setAttribute('dir', locales[locale].dir);
  }, [locale]);

  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let value = locales[locale];
      for (const k of keys) {
        value = value?.[k];
      }
      return value ?? key;
    },
    [locale],
  );

  const localize = useCallback(
    (obj) => {
      if (typeof obj === 'string') return obj;
      if (obj && typeof obj === 'object' && obj[locale]) return obj[locale];
      if (obj && typeof obj === 'object' && obj.en) return obj.en;
      return String(obj);
    },
    [locale],
  );

  const changeLocale = useCallback((newLocale) => {
    if (locales[newLocale]) setLocale(newLocale);
  }, []);

  return (
    <I18nContext.Provider value={{ locale, t, localize, changeLocale, locales: Object.keys(locales) }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider');
  return ctx;
}
