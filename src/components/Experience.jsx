import React from 'react';
import { motion } from 'framer-motion';
import cv from '../data/cv';
import './Experience.css';

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title gradient-heading">Experience</h2>

      <div className="timeline">
        <div className="timeline__line" />
        {cv.experience.map((job, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              className={`timeline__item ${isLeft ? 'timeline__item--left' : 'timeline__item--right'}`}
              key={job.company}
              variants={isLeft ? leftVariants : rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="timeline__dot" />
              <div className="timeline__card">
                <span className="timeline__period mono">{job.period}</span>
                <h3 className="timeline__role">{job.role}</h3>
                <span className="timeline__company">{job.company}</span>
                <p className="timeline__desc">{job.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
