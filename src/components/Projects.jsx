import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cv from '../data/cv';
import { useTranslation } from '../i18n';
import './Projects.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
};

const techVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3 + i * 0.06, duration: 0.35 },
  }),
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.85, y: 30, transition: { duration: 0.2 } },
};

/* Arrow icon for links */
const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const { t, localize } = useTranslation();

  const closeModal = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const handleEsc = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [selected, closeModal]);

  return (
    <section id="projects" className="section">
      <h2 className="section-title gradient-heading">{t('projects.title')}</h2>

      <div className="projects__grid">
        {cv.projects.map((project, i) => (
          <motion.div
            className="project-card"
            key={project.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ '--accent': project.color }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            onClick={() => setSelected(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setSelected(project); }}
          >
            <div className="project-card__glow" />
            <div className="project-card__top-border" />
            <div className="project-card__header">
              <h3 className="project-card__title">{localize(project.title)}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__github-link"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                aria-label={`View ${localize(project.title)} on GitHub`}
              >
                <ArrowIcon />
              </a>
            </div>
            <p className="project-card__desc">{localize(project.description)}</p>
            <div className="project-card__tags">
              {project.tech.map((t, ti) => (
                <motion.span
                  key={t}
                  className="project-card__tag mono"
                  custom={ti}
                  variants={techVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="project-modal"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              className="project-modal__content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="project-modal__close"
                onClick={closeModal}
                aria-label="Close project details"
              >
                ✕
              </button>

              {/* Image gallery */}
              <div className="project-modal__gallery">
                {selected.images && selected.images.length > 0 ? (
                  selected.images.map((img, idx) => (
                    <img key={idx} src={img} alt={`${localize(selected.title)} screenshot ${idx + 1}`} className="project-modal__image" />
                  ))
                ) : (
                  <div className="project-modal__placeholder">
                    <span>{t('projects.screenshotsComing')}</span>
                  </div>
                )}
              </div>

              <h3 className="project-modal__title">{localize(selected.title)}</h3>
              <p className="project-modal__desc">{localize(selected.description)}</p>

              {/* Tech tags */}
              <div className="project-modal__tags">
                {selected.tech.map((t) => (
                  <span key={t} className="project-modal__tag mono">{t}</span>
                ))}
              </div>

              {/* Features */}
              {selected.features && selected.features.length > 0 && (
                <div className="project-modal__section">
                  <h4 className="project-modal__section-title">{t('projects.keyFeatures')}</h4>
                  <ul className="project-modal__features">
                    {selected.features.map((f, idx) => (
                      <li key={idx}>{localize(f)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {selected.challenges && (
                <div className="project-modal__section">
                  <h4 className="project-modal__section-title">{t('projects.challenges')}</h4>
                  <p className="project-modal__text">{localize(selected.challenges)}</p>
                </div>
              )}

              {/* Architecture */}
              {selected.architecture && (
                <div className="project-modal__section">
                  <h4 className="project-modal__section-title">{t('projects.architecture')}</h4>
                  <p className="project-modal__text">{localize(selected.architecture)}</p>
                </div>
              )}

              {/* Links */}
              <div className="project-modal__links">
                <a href={selected.link} target="_blank" rel="noopener noreferrer" className="project-modal__link">
                  {t('projects.github')}
                </a>
                {selected.demo && (
                  <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="project-modal__link project-modal__link--demo">
                    {t('projects.liveDemo')}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
