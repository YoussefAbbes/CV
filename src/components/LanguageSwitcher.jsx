import React from 'react';
import { useTranslation } from '../i18n';
import './LanguageSwitcher.css';

const flags = { en: '🇬🇧', fr: '🇫🇷', ar: '🇹🇳' };

export default function LanguageSwitcher() {
  const { locale, changeLocale, locales } = useTranslation();

  return (
    <div className="lang-switcher">
      {locales.map((loc) => (
        <button
          key={loc}
          className={`lang-switcher__btn ${locale === loc ? 'lang-switcher__btn--active' : ''}`}
          onClick={() => changeLocale(loc)}
          aria-label={`Switch to ${loc}`}
        >
          {flags[loc]}
        </button>
      ))}
    </div>
  );
}
