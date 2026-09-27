import { describe, it, expect } from 'vitest';
import cv from '../data/cv';

describe('CV Data Validation', () => {
  it('has a name', () => {
    expect(cv.name).toBeTruthy();
    expect(typeof cv.name).toBe('string');
  });

  it('has a localized title', () => {
    expect(cv.title.en).toBeTruthy();
    expect(cv.title.fr).toBeTruthy();
    expect(cv.title.ar).toBeTruthy();
  });

  it('has valid email', () => {
    expect(cv.email).toMatch(/@/);
  });

  it('has phone and localized location', () => {
    expect(cv.phone).toMatch(/^\+?[\d\s]+$/);
    expect(cv.location.en).toBeTruthy();
    expect(cv.location.fr).toBeTruthy();
    expect(cv.location.ar).toBeTruthy();
  });

  it('has languages and activities with localized fields', () => {
    expect(cv.languages.length).toBeGreaterThan(0);
    cv.languages.forEach((lang) => {
      expect(lang.name.en).toBeTruthy();
      expect(lang.level.en).toBeTruthy();
    });
    expect(cv.activities.length).toBeGreaterThan(0);
    cv.activities.forEach((a) => {
      expect(a.role.en).toBeTruthy();
      expect(a.organization).toBeTruthy();
      expect(a.period).toBeTruthy();
    });
  });

  it('has skills with categories and items', () => {
    expect(cv.skills.length).toBeGreaterThan(0);
    cv.skills.forEach((group) => {
      expect(group.category.en).toBeTruthy();
      expect(group.items.length).toBeGreaterThan(0);
      group.items.forEach((item) => {
        expect(item.name).toBeTruthy();
        expect(item.level).toBeGreaterThanOrEqual(0);
        expect(item.level).toBeLessThanOrEqual(100);
      });
    });
  });

  it('has experience entries with localized fields', () => {
    expect(cv.experience.length).toBeGreaterThan(0);
    cv.experience.forEach((exp) => {
      expect(exp.role.en).toBeTruthy();
      expect(exp.company).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.description.en).toBeTruthy();
    });
  });

  it('has projects with required fields', () => {
    expect(cv.projects.length).toBeGreaterThan(0);
    cv.projects.forEach((project) => {
      expect(project.title.en).toBeTruthy();
      expect(project.description.en).toBeTruthy();
      expect(project.tech.length).toBeGreaterThan(0);
      expect(project.color).toMatch(/^#/);
    });
  });

  it('has blog posts with required fields', () => {
    expect(cv.blog.length).toBeGreaterThan(0);
    cv.blog.forEach((post) => {
      expect(post.id).toBeTruthy();
      expect(post.title.en).toBeTruthy();
      expect(post.excerpt.en).toBeTruthy();
      expect(post.content.en).toBeTruthy();
      expect(post.readTime).toBeGreaterThan(0);
      expect(post.tags.length).toBeGreaterThan(0);
    });
  });

  it('has status with availability flag', () => {
    expect(cv.status).toBeDefined();
    expect(typeof cv.status.available).toBe('boolean');
    expect(cv.status.text.en).toBeTruthy();
  });
});
