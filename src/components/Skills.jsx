import React from 'react';
import { motion } from 'framer-motion';
import cv from '../data/cv';
import './Skills.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.35 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title gradient-heading">Skills</h2>

      <div className="skills__grid">
        {cv.skills.map((group) => (
          <motion.div
            className="skills__card"
            key={group.category}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ '--accent': group.color }}
          >
            <h3 className="skills__category mono">{group.category}</h3>
            <div className="skills__tags">
              {group.items.map((item, i) => (
                <motion.span
                  className="skills__tag"
                  key={item}
                  custom={i}
                  variants={tagVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
