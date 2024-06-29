import { Instance, Instances } from '@react-three/drei'

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