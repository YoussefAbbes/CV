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

describe('Theme Toggle', () => {
  it('renders with a theme toggle button', () => {
    renderWithProviders(<Nav />);
    const toggle = screen.getByLabelText(/switch to (light|dark) mode/i);
    expect(toggle).toBeInTheDocument();
  });

  it('changes aria-label on toggle click', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Nav />);
    const toggle = screen.getByLabelText(/switch to (light|dark) mode/i);
    const initialLabel = toggle.getAttribute('aria-label');
    await user.click(toggle);
    const newLabel = screen.getByLabelText(/switch to (light|dark) mode/i).getAttribute('aria-label');
    expect(newLabel).not.toBe(initialLabel);
  });
});
