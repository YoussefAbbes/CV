import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function Icosahedron() {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#7c3aed"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

function OrbitingTorus() {
  const ref = useRef();
  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime() * 0.4;
    ref.current.position.x = Math.cos(t) * 3.5;
    ref.current.position.z = Math.sin(t) * 3.5;
    ref.current.position.y = Math.sin(t * 0.7) * 0.8;
    ref.current.rotation.x += delta * 0.6;
    ref.current.rotation.y += delta * 0.9;
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[0.6, 0.2, 80, 16]} />
      <meshStandardMaterial color="#00d4ff" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

function Particles({ count = 2000 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00d4ff" sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#7c3aed" />
      <pointLight position={[-5, -3, 3]} intensity={0.5} color="#00d4ff" />
      <Icosahedron />
      <OrbitingTorus />
      <Particles />
    </Canvas>
  );
}
