import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Layered geometry for parallax depth effect
 * Each layer moves at different speeds based on depth
 */
function ParallaxLayer({ depth, scrollProgress, color, particleCount = 300 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 30;     // x
      arr[i + 1] = (Math.random() - 0.5) * 30; // y
      arr[i + 2] = depth;                       // z (fixed depth)
    }
    return arr;
  }, [particleCount, depth]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Parallax effect: layers closer to camera move more
      const parallaxSpeed = (6 - depth) * 0.8;
      ref.current.position.y = -scrollProgress * parallaxSpeed * 8;

      // Slow rotation for organic feel
      ref.current.rotation.y += delta * 0.02 * (1 - depth / 6);
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color={color}
        sizeAttenuation
        transparent
        opacity={0.6 - depth * 0.08}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/**
 * Floating geometric shapes for depth
 */
function FloatingShape({ position, depth, scrollProgress, type = 'box' }) {
  const ref = useRef();
  const initialY = position[1];

  useFrame((state, delta) => {
    if (ref.current) {
      const parallaxSpeed = (6 - depth) * 0.5;
      ref.current.position.y = initialY - scrollProgress * parallaxSpeed * 6;

      // Gentle rotation
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.y += delta * 0.15;
    }
  });

  const geometry = type === 'box' ?
    <boxGeometry args={[0.8, 0.8, 0.8]} /> :
    <octahedronGeometry args={[0.5, 0]} />;

  return (
    <mesh ref={ref} position={position}>
      {geometry}
      <meshStandardMaterial
        color={type === 'box' ? '#7c3aed' : '#00d4ff'}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

/**
 * Main parallax scene with multiple depth layers
 */
export default function ParallaxScene({ scrollProgress }) {
  const cameraRef = useRef();

  useFrame((state) => {
    // Move camera based on scroll
    if (state.camera) {
      state.camera.position.y = scrollProgress * 3;
      state.camera.position.z = 8 - scrollProgress * 2;
      state.camera.lookAt(0, scrollProgress * 2, 0);
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#7c3aed" />
      <pointLight position={[-10, -10, 5]} intensity={0.3} color="#00d4ff" />

      {/* Multiple particle layers at different depths */}
      <ParallaxLayer depth={-3} scrollProgress={scrollProgress} color="#00d4ff" particleCount={400} />
      <ParallaxLayer depth={-1} scrollProgress={scrollProgress} color="#7c3aed" particleCount={300} />
      <ParallaxLayer depth={1} scrollProgress={scrollProgress} color="#00d4ff" particleCount={250} />
      <ParallaxLayer depth={3} scrollProgress={scrollProgress} color="#ffffff" particleCount={200} />

      {/* Floating shapes for added depth */}
      <FloatingShape position={[-4, 2, -2]} depth={2} scrollProgress={scrollProgress} type="box" />
      <FloatingShape position={[5, -1, 0]} depth={3} scrollProgress={scrollProgress} type="octahedron" />
      <FloatingShape position={[-3, -3, 1]} depth={4} scrollProgress={scrollProgress} type="box" />
      <FloatingShape position={[4, 4, -1]} depth={1.5} scrollProgress={scrollProgress} type="octahedron" />
    </>
  );
}
