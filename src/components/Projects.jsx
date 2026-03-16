import React from 'react';
import { motion } from 'framer-motion';
import cv from '../data/cv';
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

/* Arrow icon for links */
const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="project-card__arrow">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title gradient-heading">Projects</h2>

      <div className="projects__grid">
        {cv.projects.map((project, i) => (
          <motion.a
            className="project-card"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ '--accent': project.color }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="project-card__glow" />
            <div className="project-card__top-border" />
            <div className="project-card__header">
              <h3 className="project-card__title">{project.title}</h3>
              <ArrowIcon />
            </div>
            <p className="project-card__desc">{project.description}</p>
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
          </motion.a>
        ))}
      </div>
    </section>
  );
}
