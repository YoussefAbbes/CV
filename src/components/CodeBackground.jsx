import React, { useMemo } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import './CodeBackground.css';

// Code snippets and symbols for the floating elements
const CODE_ELEMENTS = [
  { text: 'const', type: 'keyword' },
  { text: 'function', type: 'keyword' },
  { text: 'return', type: 'keyword' },
  { text: 'import', type: 'keyword' },
  { text: 'export', type: 'keyword' },
  { text: 'async', type: 'keyword' },
  { text: 'await', type: 'keyword' },
  { text: '{ }', type: 'bracket' },
  { text: '[ ]', type: 'bracket' },
  { text: '( )', type: 'bracket' },
  { text: '< />', type: 'bracket' },
  { text: '=>', type: 'operator' },
  { text: '===', type: 'operator' },
  { text: '...', type: 'operator' },
  { text: '//', type: 'comment' },
  { text: '/*', type: 'comment' },
  { text: '*/', type: 'comment' },
  { text: 'null', type: 'value' },
  { text: 'true', type: 'value' },
  { text: '0x1F', type: 'value' },
];

/**
 * Generate deterministic positions for code elements
 * Using a seeded approach for consistent layout across renders
 */
function generateElements(count) {
  const elements = [];

  for (let i = 0; i < count; i++) {
    const codeEl = CODE_ELEMENTS[i % CODE_ELEMENTS.length];

    elements.push({
      id: i,
      ...codeEl,
      // Position across the viewport
      x: 5 + ((i * 17) % 90),
      y: 5 + ((i * 23) % 85),
      // Parallax speed multiplier (0.2 to 1.2 for varied depth)
      speed: 0.2 + (i % 5) * 0.25,
      // Size variation
      size: 0.7 + (i % 3) * 0.2,
      // Initial rotation
      rotation: -15 + ((i * 7) % 30),
      // Opacity variation (more visible)
      opacity: 0.25 + (i % 4) * 0.1,
    });
  }

  return elements;
}

/**
 * Floating code elements that move with scroll
 * Creates a subtle developer-themed parallax background with 3D motion
 */
export default function CodeBackground() {
  const scrollProgress = useScrollProgress();

  // Generate elements once
  const elements = useMemo(() => generateElements(20), []);

  return (
    <div className="code-background" aria-hidden="true">
      {elements.map((el) => {
        // Calculate Y offset based on scroll (moves up as you scroll down)
        const yOffset = scrollProgress * el.speed * 400;

        return (
          <div
            key={el.id}
            className="code-element-wrapper"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              transform: `translateY(-${yOffset}px)`,
            }}
          >
            <span
              className={`code-element code-element--${el.type}`}
              style={{
                '--base-rotation': `${el.rotation}deg`,
                '--base-scale': el.size,
                opacity: el.opacity,
              }}
            >
              {el.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}
