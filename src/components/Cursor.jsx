import React, { useEffect, useRef, useState } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const glow = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide custom cursor on touch devices
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // Smooth trailing glow
    let raf;
    const animateGlow = () => {
      glow.current.x += (pos.current.x - glow.current.x) * 0.15;
      glow.current.y += (pos.current.y - glow.current.y) * 0.15;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glow.current.x}px, ${glow.current.y}px)`;
      }
      raf = requestAnimationFrame(animateGlow);
    };
    raf = requestAnimationFrame(animateGlow);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [visible]);

  // Respect reduced motion
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }

  return (
    <div className={`cursor ${visible ? 'cursor--visible' : ''}`} aria-hidden="true">
      <div ref={dotRef} className="cursor__dot" />
      <div ref={glowRef} className="cursor__glow" />
    </div>
  );
}
