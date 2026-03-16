import React from 'react';
import { motion } from 'framer-motion';
import cv from '../data/cv';
import './Achievements.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <h2 className="section-title gradient-heading">Achievements</h2>

      <div className="achievements__grid">
        {cv.achievements.map((item) => (
          <motion.div
            className="achievement-card"
            key={item.title}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6, boxShadow: '0 12px 50px rgba(0, 212, 255, 0.2)' }}
          >
            <div className="achievement-card__glow" />
            <span className="achievement-card__icon">{item.icon}</span>
            <h3 className="achievement-card__title">{item.title}</h3>
            <span className="achievement-card__event mono">{item.event}</span>
            <span className="achievement-card__year mono">{item.year}</span>
            <p className="achievement-card__desc">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
