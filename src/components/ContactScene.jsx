import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function ContactParticles({ count = 600 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 16;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.015;
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
      <pointsMaterial size={0.015} color="#7c3aed" sizeAttenuation transparent opacity={0.5} />
    </points>
  );
}

export default function ContactScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ContactParticles />
    </Canvas>
  );
}
