import React, { lazy, Suspense, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import cv from '../data/cv';
import { useTranslation } from '../i18n';
import ErrorBoundary from './ErrorBoundary';
import { emailjsConfig, isEmailjsConfigured } from '../utils/emailjsConfig';
import './Contact.css';

const ContactScene = lazy(() => import('./ContactScene'));

/* Icons */
const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 7L2 7" />
  </svg>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const formRef = useRef(null);
  const { t } = useTranslation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmailjsConfigured) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey,
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__canvas" aria-hidden="true">
        <ErrorBoundary fallback="Unable to load 3D scene.">
          <Suspense fallback={null}>
            <ContactScene />
          </Suspense>
        </ErrorBoundary>
      </div>

      <motion.div
        className="section contact__inner"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="section-title gradient-heading">{t('contact.title')}</h2>

        <div className="contact__links">
          <a href={`mailto:${cv.email}`} className="contact__icon-link" aria-label="Email">
            <MailIcon />
          </a>
          <a href={cv.github} target="_blank" rel="noopener noreferrer" className="contact__icon-link" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={cv.linkedin} target="_blank" rel="noopener noreferrer" className="contact__icon-link" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>

        <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name" className="sr-only">{t('contact.namePlaceholder')}</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder={t('contact.namePlaceholder')}
            value={form.name}
            onChange={handleChange}
            required
            className="contact__input"
          />
          <label htmlFor="contact-email" className="sr-only">{t('contact.emailPlaceholder')}</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder={t('contact.emailPlaceholder')}
            value={form.email}
            onChange={handleChange}
            required
            className="contact__input"
          />
          <label htmlFor="contact-message" className="sr-only">{t('contact.messagePlaceholder')}</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder={t('contact.messagePlaceholder')}
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="contact__input contact__textarea"
          />
          <button type="submit" className="contact__submit" disabled={status === 'sending'}>
            {status === 'sending' ? t('contact.sending') : t('contact.send')}
          </button>

          {status === 'success' && (
            <p className="contact__feedback contact__feedback--success">{t('contact.successMessage')}</p>
          )}
          {status === 'error' && (
            <p className="contact__feedback contact__feedback--error">{t('contact.errorMessage')}</p>
          )}
        </form>

        <p className="contact__footer mono">
          © {new Date().getFullYear()} {cv.name}. {t('contact.footer')}
        </p>
      </motion.div>
    </section>
  );
}
