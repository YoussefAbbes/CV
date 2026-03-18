import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import cv from '../data/cv';
import { useTranslation } from '../i18n';
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

/* ---------- Animated counter hook ---------- */
function useCountUp(target, duration = 1.5, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start || target === 0) return;
    let startTime = null;
    let raf;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

/* Parse a stat value like "3rd" -> { number: 3, suffix: "rd" } or "5+" -> { number: 5, suffix: "+" } */
function parseStatValue(value) {
  const match = String(value).match(/^(\d+)(.*)$/);
  if (match) {
    return { number: parseInt(match[1], 10), suffix: match[2] };
  }
  return null;
}

function AnimatedStat({ stat, index }) {
  const { localize } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const parsed = parseStatValue(stat.value);
  const count = useCountUp(parsed ? parsed.number : 0, 1.2, isInView);

  return (
    <motion.div
      ref={ref}
      className="about__stat-card"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <span className="about__stat-value mono">
        {parsed ? `${count}${parsed.suffix}` : stat.value}
      </span>
      <span className="about__stat-label">{localize(stat.label)}</span>
    </motion.div>
  );
}

export default function About() {
  const { t, localize } = useTranslation();

  return (
    <section id="about" className="section">
      <h2 className="section-title gradient-heading">{t('about.title')}</h2>

      <div className="about__grid">
        <div className="about__stats">
          {cv.stats.map((stat, i) => (
            <AnimatedStat key={i} stat={stat} index={i} />
          ))}
        </div>

        <motion.div
          className="about__bio"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>{localize(cv.bio)}</p>
        </motion.div>
      </div>

      {/* What I'm Learning */}
      <motion.div
        className="about__learning"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="about__subtitle">{t('about.learning')}</h3>
        <div className="about__learning-cards">
          {cv.learning.map((item, i) => (
            <motion.div
              key={i}
              className="about__learning-card"
              style={{ borderColor: item.color }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <span className="about__learning-icon">{item.icon}</span>
              <span className="about__learning-name">{localize(item.name)}</span>
              <div className="about__learning-glow" style={{ background: item.color }} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
