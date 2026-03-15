import React from 'react';
import { motion } from 'framer-motion';
import cv from '../data/cv';
import './About.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const textVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title gradient-heading">About Me</h2>

      <div className="about__grid">
        <div className="about__stats">
          {cv.stats.map((stat, i) => (
            <motion.div
              className="about__stat-card"
              key={stat.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="about__stat-value mono">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="about__bio"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>{cv.bio}</p>
        </motion.div>
      </div>
    </section>
  );
}
