import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import cv from '../data/cv';
import ErrorBoundary from './ErrorBoundary';
import './Hero.css';

const HeroScene = lazy(() => import('./HeroScene'));

/* ---------- Text overlay ---------- */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__canvas" aria-hidden="true">
        <ErrorBoundary fallback="Unable to load 3D scene." minHeight="100vh">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </ErrorBoundary>
      </div>

      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero__greeting mono" variants={childVariants}>
          Hi, I&apos;m
        </motion.p>
        <motion.h1 className="hero__name" variants={childVariants}>
          {cv.name}
        </motion.h1>
        <motion.p className="hero__title" variants={childVariants}>
          {cv.title}
        </motion.p>
        <motion.a
          href="#contact"
          className="hero__cta"
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
