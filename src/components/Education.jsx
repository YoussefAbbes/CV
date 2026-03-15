import React from 'react';
import { motion } from 'framer-motion';
import cv from '../data/cv';
import './Education.css';

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title gradient-heading">Education</h2>

      <div className="edu-timeline">
        <div className="edu-timeline__line" />
        {cv.education.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              className={`edu-timeline__item ${isLeft ? 'edu-timeline__item--left' : 'edu-timeline__item--right'}`}
              key={item.school + item.degree}
              variants={isLeft ? leftVariants : rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="edu-timeline__dot" />
              <div className="edu-timeline__card">
                <span className="edu-timeline__period mono">{item.period}</span>
                <h3 className="edu-timeline__degree">{item.degree}</h3>
                <span className="edu-timeline__school">{item.school}</span>
                <p className="edu-timeline__desc">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
