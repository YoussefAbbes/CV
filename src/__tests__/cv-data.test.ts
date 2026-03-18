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

  it('has testimonials with required fields', () => {
    expect(cv.testimonials.length).toBeGreaterThan(0);
    cv.testimonials.forEach((t) => {
      expect(t.name).toBeTruthy();
      expect(t.role.en).toBeTruthy();
      expect(t.quote.en).toBeTruthy();
      expect(t.relationship.en).toBeTruthy();
    });
  });

  it('has status with availability flag', () => {
    expect(cv.status).toBeDefined();
    expect(typeof cv.status.available).toBe('boolean');
    expect(cv.status.text.en).toBeTruthy();
  });
});
