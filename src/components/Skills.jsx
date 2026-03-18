import React from 'react';
import { motion } from 'framer-motion';
import cv from '../data/cv';
import { useTranslation } from '../i18n';
import './Skills.css';

// Base URL for devicon SVGs (colored originals)
const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
// Simple Icons CDN for brands not in devicon
const SI = 'https://cdn.simpleicons.org';

// Maps skill name → devicon SVG path or fallback initial
const SKILL_META = {
  // Frontend
  'React':             { icon: `${DI}/react/react-original.svg`,               color: '#61dafb' },
  'HTML/CSS':          { icon: `${DI}/html5/html5-original.svg`,               color: '#e34f26' },
  'Three.js':          { icon: `${DI}/threejs/threejs-original.svg`,           color: '#049ef4' },
  'Framer Motion':     { icon: `${DI}/framermotion/framermotion-original.svg`, color: '#0055ff' },
  'JavaFX':            { icon: `${DI}/java/java-original.svg`,                color: '#f89820' },
  // Backend
  'Java':              { icon: `${DI}/java/java-original.svg`,                color: '#f89820' },
  'Node.js':           { icon: `${DI}/nodejs/nodejs-original.svg`,            color: '#339933' },
  'Python':            { icon: `${DI}/python/python-original.svg`,            color: '#3776ab' },
  'Spring Boot':       { icon: `${DI}/spring/spring-original.svg`,            color: '#6db33f' },
  'Django':            { icon: `${SI}/django/44b78b`,                         color: '#44b78b' },
  'MySQL':             { icon: `${DI}/mysql/mysql-original.svg`,              color: '#4479a1' },
  'PostgreSQL':        { icon: `${DI}/postgresql/postgresql-original.svg`,    color: '#336791' },
  'Supabase':          { icon: `${DI}/supabase/supabase-original.svg`,        color: '#3ecf8e' },
  // Mobile
  'Flutter':           { icon: `${DI}/flutter/flutter-original.svg`,          color: '#54c5f8' },
  'Dart':              { icon: `${DI}/dart/dart-original.svg`,                color: '#0175c2' },
  'Firebase':          { icon: `${DI}/firebase/firebase-original.svg`,        color: '#ffca28' },
  'Android':           { icon: `${DI}/android/android-original.svg`,          color: '#3ddc84' },
  'iOS':               { icon: `${DI}/apple/apple-original.svg`,              color: '#a2a2a2' },
  // IDEs & Editors
  'IntelliJ IDEA':     { icon: `${DI}/intellij/intellij-original.svg`,        color: '#fc801d' },
  'Fleet':             { icon: `${DI}/jetbrains/jetbrains-original.svg`,      color: '#21d789' },
  'Qt Creator':        { icon: `${DI}/qt/qt-original.svg`,                    color: '#41cd52' },
  'VS Code':           { icon: `${DI}/vscode/vscode-original.svg`,            color: '#007acc' },
  'Figma':             { icon: `${DI}/figma/figma-original.svg`,              color: '#f24e1e' },
  'Antigravity':       { icon: '/CV/icons/antigravity.png',                    color: '#a855f7' },
  // DevOps & Tools
  'Git':               { icon: `${DI}/git/git-original.svg`,                  color: '#f05032' },
  'Maven':             { icon: `${SI}/apachemaven/c71a36`,                    color: '#c71a36' },
  'Docker':            { icon: `${DI}/docker/docker-original.svg`,            color: '#2496ed' },
  'Linux':             { icon: `${DI}/linux/linux-original.svg`,              color: '#fcc624' },
  // AI Tools
  'Claude':            { icon: `${SI}/anthropic/d97706`,                       color: '#d97706' },
  'ChatGPT':           { icon: '/CV/icons/chatgpt.svg',                        color: '#10a37f' },
  'Copilot':           { icon: `${SI}/githubcopilot/8b5cf6`,                   color: '#8b5cf6' },
  'Gemini':            { icon: `${SI}/googlegemini/4285f4`,                    color: '#4285f4' },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

function SkillIcon({ name, meta }) {
  if (meta.icon) {
    return (
      <img
        src={meta.icon}
        alt={name}
        className="skills__chip-icon"
        width="18"
        height="18"
        loading="lazy"
      />
    );
  }
  return (
    <span className="skills__chip-initial">
      {meta.initial ?? name.charAt(0)}
    </span>
  );
}

export default function Skills() {
  const { t, localize } = useTranslation();

  return (
    <section id="skills" className="section">
      <h2 className="section-title gradient-heading">{t('skills.title')}</h2>

      <div className="skills__grid">
        {cv.skills.map((group) => (
          <motion.div
            className="skills__card"
            key={group.category.en}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ '--accent': group.color }}
          >
            <h3 className="skills__category mono">{localize(group.category)}</h3>
            <div className="skills__chips">
              {group.items.map((item, i) => {
                const meta = SKILL_META[item.name] || { icon: null, color: group.color };
                return (
                  <motion.div
                    className="skills__chip"
                    key={item.name}
                    custom={i}
                    variants={chipVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    style={{ '--chip-color': meta.color }}
                  >
                    <SkillIcon name={item.name} meta={meta} />
                    <span className="skills__chip-name">{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
