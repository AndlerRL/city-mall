import { Instance, Instances } from '@react-three/drei';
import * as THREE from 'three';

export function Bulbs({ positions }: { positions: number[][] }) {
  return (
    <>
      <Instances limit={positions.length}>
        <cylinderGeometry args={[0.015, 0.015, 1.3]} />
        <meshStandardMaterial color="#333" />
        {positions.map((position, index) => (
          <Instance key={`pole-${index}`} position={[position[0], position[1] + 0.66, position[2]]} />
        ))}
      </Instances>

      <Instances limit={positions.length}>
        <cylinderGeometry args={[0.03, 0.03, 0.2]} />
        <meshStandardMaterial color="#333" />
        {positions.map((position, index) => (
          <Instance key={`base-${index}`} position={[position[0], position[1] + 0.18, position[2]]} />
        ))}
      </Instances>

      <Instances limit={positions.length}>
        <cylinderGeometry args={[0.01, 0.26, 0.2]} />
        <meshStandardMaterial color="#333" />
        {positions.map((position, index) => (
          <Instance key={`connector-${index}`} position={[position[0], position[1] + 0.10, position[2]]} />
        ))}
      </Instances>

      <Instances limit={positions.length}>
        <sphereGeometry args={[0.15, 20, 20]} />
        <meshPhongMaterial emissive="#FFFFA7" />
        {positions.map((position, index) => (
          <Instance key={`bulb-${index}`} position={position}>
            <pointLight
              castShadow
              shadow-mapSize-width={128}
              shadow-mapSize-height={128}
              intensity={0.95}
              distance={10}
            />
          </Instance>
        ))}
      </Instances>
    </>
  )
}

export function StoreBoxes({ positions }: { positions: number[][] }) {
  return (
    <>
      {positions.map((position, index) => (
        <StoreBox key={`box-${index}`} position={position} />
      ))}
    </>
  );
}

function StoreBox({ position }: { position: number[] }) {
  const thickness = 0.2; // Thickness of the walls
  const width = 5;
  const height = 4.5;
  const depth = 10;

  return (
    <group position={new THREE.Vector3(...position)}>
      {/* Front Wall */}
      <mesh position={[0, height / 2, depth / 2 - thickness / 2]} receiveShadow castShadow>
        <boxGeometry args={[width, height, thickness]} />
        <meshPhysicalMaterial color="#333" />
      </mesh>
      {/* Back Wall */}
      <mesh position={[0, height / 2, -depth / 2 + thickness / 2]} receiveShadow castShadow>
        <boxGeometry args={[width, height, thickness]} />
        <meshPhysicalMaterial color="#333" />
      </mesh>
      {/* Left Wall */}
      <mesh position={[-width / 2 + thickness / 2, height / 2, 0]} receiveShadow castShadow>
        <boxGeometry args={[thickness, height, depth]} />
        <meshPhysicalMaterial color="#333" />
      </mesh>
      {/* Right Wall */}
      <mesh position={[width / 2 - thickness / 2, height / 2, 0]} receiveShadow castShadow>
        <boxGeometry args={[thickness, height, depth]} />
        <meshPhysicalMaterial color="#333" />
      </mesh>
      {/* Top Wall */}
      <mesh position={[0, height - thickness / 2, 0]} receiveShadow castShadow>
        <boxGeometry args={[width, thickness, depth]} />
        <meshPhysicalMaterial color="#333" />
      </mesh>
      {/* Bottom Wall */}
      <mesh position={[0, thickness / 2, 0]} receiveShadow castShadow>
        <boxGeometry args={[width, thickness, depth]} />
        <meshPhysicalMaterial color="#333" />
      </mesh>
    </group>
  );
}