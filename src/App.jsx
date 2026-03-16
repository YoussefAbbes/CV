import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Attestations from './components/Attestations';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParallaxBackground from './components/ParallaxBackground';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ParallaxBackground />
      <Nav />
      <Hero />
      <main id="main-content">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Attestations />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
