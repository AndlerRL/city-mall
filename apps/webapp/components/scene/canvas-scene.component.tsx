'use client'

import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

export default function CanvasScene() {
  return (
    <Canvas className="min-w-screen min-h-screen" style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, -10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[10, 10, 10]} />
      <BoundaryScene />
      <MovingModel />
      <OrbitControls />
    </Canvas>
  );
};

function MovingModel() {
  const ref = useRef();
  const [position, setPosition] = useState([0, 1, 0]);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        setPosition((prev) => [prev[0], prev[1], prev[2] - 1]);
        break;
      case 'ArrowDown':
        setPosition((prev) => [prev[0], prev[1], prev[2] + 1]);
        break;
      case 'ArrowLeft':
        setPosition((prev) => [prev[0] - 1, prev[1], prev[2]]);
        break;
      case 'ArrowRight':
        setPosition((prev) => [prev[0] + 1, prev[1], prev[2]]);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useFrame((state, delta) => {
    // Add simple animation or controls here
    ref.current.rotation.y += delta * 0.1;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

function BoundaryScene() {
  // Define stadium dimensions (average NFL stadium is about 360 feet long and 160 feet wide)
  const length = 360;
  const width = 160;

  return (
    <mesh>
      <boxGeometry args={[length, -10, width]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};
