import React from 'react';
import { motion } from 'framer-motion';
import cv from '../data/cv';
import { useTranslation } from '../i18n';
import './Timeline.css';

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const typeConfig = {
  work:        { color: '#7c3aed', icon: '💼', labelKey: 'timeline.work' },
  education:   { color: '#00d4ff', icon: '🎓', labelKey: 'timeline.education' },
  achievement: { color: '#ffd700', icon: '🏆', labelKey: 'timeline.achievement' },
};

function parsePeriodEnd(period) {
  if (period.toLowerCase().includes('present')) return 9999;
  const years = period.match(/\d{4}/g);
  if (!years) return 0;
  return Math.max(...years.map(Number));
}

function buildTimeline() {
  const items = [];

  cv.experience.forEach((e) => items.push({
    type: 'work',
    title: e.role,
    subtitle: e.company,
    period: e.period,
    description: e.description,
    sortKey: parsePeriodEnd(e.period),
  }));

  cv.education.forEach((e) => items.push({
    type: 'education',
    title: e.degree,
    subtitle: e.school,
    period: e.period,
    description: e.description,
    sortKey: parsePeriodEnd(e.period),
  }));

  cv.achievements.forEach((e) => items.push({
    type: 'achievement',
    title: e.title,
    subtitle: e.event,
    period: e.year,
    description: e.description,
    sortKey: parseInt(e.year, 10),
  }));

  items.sort((a, b) => b.sortKey - a.sortKey);
  return items;
}

export default function Timeline() {
  const { t, localize } = useTranslation();
  const items = buildTimeline();

  return (
    <section id="timeline" className="section">
      <h2 className="section-title gradient-heading">{t('timeline.title')}</h2>

      <div className="timeline">
        <div className="timeline__line" />
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          const config = typeConfig[item.type];
          return (
            <motion.div
              className={`timeline__item ${isLeft ? 'timeline__item--left' : 'timeline__item--right'}`}
              key={`${item.type}-${item.title}`}
              variants={isLeft ? leftVariants : rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className="timeline__dot"
                style={{ background: config.color }}
              />
              <div className="timeline__card">
                <div
                  className="timeline__badge"
                  style={{
                    background: `${config.color}1a`,
                    color: config.color,
                  }}
                >
                  <span className="timeline__badge-icon">{config.icon}</span>
                  <span className="timeline__badge-label mono">{t(config.labelKey)}</span>
                </div>
                <span className="timeline__period mono">{item.period}</span>
                <h3 className="timeline__role">{localize(item.title)}</h3>
                <span className="timeline__company">{item.subtitle}</span>
                <p className="timeline__desc">{localize(item.description)}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
