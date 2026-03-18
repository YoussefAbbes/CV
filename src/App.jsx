import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Attestations from './components/Attestations';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParallaxBackground from './components/ParallaxBackground';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import Cursor from './components/Cursor';

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <Cursor />
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ParallaxBackground />
        <Nav />
        <Hero />
        <main id="main-content">
          <About />
          <Skills />
          <Timeline />
          <Attestations />
          <Projects />
          <Contact />
        </main>
        <BackToTop />
      </motion.div>
    </>
  );
}
