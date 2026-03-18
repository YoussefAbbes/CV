import { describe, expect, it } from 'vitest';
import { emailjsConfig, isEmailjsConfigured } from '../utils/emailjsConfig';

describe('emailjsConfig', () => {
  it('uses safe empty defaults when environment variables are missing', () => {
    expect(typeof emailjsConfig.serviceId).toBe('string');
    expect(typeof emailjsConfig.templateId).toBe('string');
    expect(typeof emailjsConfig.publicKey).toBe('string');
  });

  it('is not considered configured when any required variable is missing', () => {
    expect(isEmailjsConfigured).toBe(false);
  });
});
