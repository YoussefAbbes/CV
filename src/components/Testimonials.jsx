import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';
import cv from '../data/cv';
import './Testimonials.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return <div className="testimonial-card__avatar">{initials}</div>;
}

export default function Testimonials() {
  const { t, localize } = useTranslation();

  if (!cv.testimonials || cv.testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section">
      <motion.h2
        className="section-title gradient-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t('testimonials.title')}
      </motion.h2>

      <div className="testimonials__grid">
        {cv.testimonials.map((item, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="testimonial-card__quote-mark">&ldquo;</div>
            <blockquote className="testimonial-card__quote">
              {localize(item.quote)}
            </blockquote>
            <div className="testimonial-card__author">
              {item.avatar ? (
                <img
                  className="testimonial-card__avatar-img"
                  src={item.avatar}
                  alt={item.name}
                />
              ) : (
                <Avatar name={item.name} />
              )}
              <div className="testimonial-card__info">
                <span className="testimonial-card__name">{item.name}</span>
                <span className="testimonial-card__role">{localize(item.role)}</span>
                <span className="testimonial-card__relationship">
                  {localize(item.relationship)}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
