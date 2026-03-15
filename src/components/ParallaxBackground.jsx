import React, { lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useScrollProgress } from '../hooks/useScrollProgress';
import ErrorBoundary from './ErrorBoundary';
import './ParallaxBackground.css';

const ParallaxScene = lazy(() => import('./ParallaxScene'));

/**
 * Fixed 3D background with parallax scroll effect
 */
export default function ParallaxBackground() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="parallax-background" aria-hidden="true">
      <ErrorBoundary fallback={null} minHeight="100vh">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            gl={{ alpha: true, antialias: false }}
            dpr={[1, 1.5]}
          >
            <ParallaxScene scrollProgress={scrollProgress} />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
