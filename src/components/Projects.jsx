import React from 'react';
import { motion } from 'framer-motion';
import cv from '../data/cv';
import './Projects.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

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
            whileHover={{ y: -8 }}
          >
            <div className="project-card__top-border" />
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.description}</p>
            <div className="project-card__tags">
              {project.tech.map((t) => (
                <span key={t} className="project-card__tag mono">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
