import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cv from '../data/cv';
import './Attestations.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

export default function Attestations() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="attestations" className="section">
      <h2 className="section-title gradient-heading">Certifications & Attestations</h2>

      <div className="attestations__grid">
        {cv.attestations.map((item, i) => (
          <motion.div
            className="attestation-card"
            key={item.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(124, 58, 237, 0.25)' }}
            onClick={() => setSelected(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setSelected(item); }}
            aria-label={`View ${item.title}`}
          >
            <div className="attestation-card__shimmer" />
            <div className="attestation-card__image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="attestation-card__image"
                loading="lazy"
              />
            </div>
            <h3 className="attestation-card__title">{item.title}</h3>
            <span className="attestation-card__view mono">Click to view ↗</span>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="attestation-modal"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="attestation-modal__content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="attestation-modal__close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ✕
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="attestation-modal__image"
              />
              <h3 className="attestation-modal__title">{selected.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
