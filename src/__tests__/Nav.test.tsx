import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { I18nProvider } from '../i18n';
import { ThemeProvider } from '../contexts/ThemeContext';
import Nav from '../components/Nav';

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <I18nProvider>
      <ThemeProvider>{ui}</ThemeProvider>
    </I18nProvider>,
  );
}

describe('Nav', () => {
  it('renders navigation links', () => {
    renderWithProviders(<Nav />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    renderWithProviders(<Nav />);
    const toggle = screen.getByLabelText(/switch to (light|dark) mode/i);
    expect(toggle).toBeInTheDocument();
  });

  it('renders hamburger menu button', () => {
    renderWithProviders(<Nav />);
    const hamburger = screen.getByLabelText('Toggle menu');
    expect(hamburger).toBeInTheDocument();
  });

  it('toggles menu on hamburger click', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Nav />);
    const hamburger = screen.getByLabelText('Toggle menu');
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    await user.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');
  });
});
