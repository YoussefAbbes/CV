import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { I18nProvider, useTranslation } from '../i18n';

function TestComponent() {
  const { t, locale, changeLocale, locales } = useTranslation();
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="about">{t('nav.about')}</span>
      <div data-testid="locales">{locales.join(',')}</div>
      <button onClick={() => changeLocale('fr' as 'en' | 'fr' | 'ar')}>Switch to FR</button>
      <button onClick={() => changeLocale('ar' as 'en' | 'fr' | 'ar')}>Switch to AR</button>
    </div>
  );
}

describe('i18n', () => {
  it('defaults to English', () => {
    localStorage.removeItem('locale');
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>,
    );
    expect(screen.getByTestId('about')).toHaveTextContent('About');
  });

  it('supports all three locales', () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>,
    );
    expect(screen.getByTestId('locales')).toHaveTextContent('en,fr,ar');
  });

  it('switches to French', async () => {
    const user = userEvent.setup();
    localStorage.removeItem('locale');
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>,
    );
    await user.click(screen.getByText('Switch to FR'));
    expect(screen.getByTestId('locale')).toHaveTextContent('fr');
  });

  it('switches to Arabic', async () => {
    const user = userEvent.setup();
    localStorage.removeItem('locale');
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>,
    );
    await user.click(screen.getByText('Switch to AR'));
    expect(screen.getByTestId('locale')).toHaveTextContent('ar');
  });

  it('returns key for unknown translation', () => {
    render(
      <I18nProvider>
        <TestHelper />
      </I18nProvider>,
    );
    expect(screen.getByTestId('unknown')).toHaveTextContent('does.not.exist');
  });
});

function TestHelper() {
  const { t } = useTranslation();
  return <span data-testid="unknown">{t('does.not.exist')}</span>;
}
