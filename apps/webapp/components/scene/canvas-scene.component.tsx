'use client'

import { Bounds, Box, OrbitControls, Plane, Sky, TransformControls, useBounds } from '@react-three/drei'
import { Canvas, extend, MeshProps, useFrame, useThree } from '@react-three/fiber'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Bulbs, StoreBoxes } from '~/components/scene/bulb.component'

extend({ OrbitControls, TransformControls, Box })

const MOVE_SPEED = 0.1
const JUMP_FORCE = 0.15
const GRAVITY = -0.01
const DRAG = 0.05
const WORLD_LIMITS = 25

const Player = forwardRef(({ position }: { position: any }, ref) => {
  const { camera, gl } = useThree()
  const [playerVelocity] = useState(new THREE.Vector3())
  const [playerOnFloor, setPlayerOnFloor] = useState(false)
  const [keyStates, setKeyStates] = useState({})

  useEffect(() => {
    const handleKeyDown = (e) => setKeyStates((prev) => ({ ...prev, [e.code]: true }))
    const handleKeyUp = (e) => setKeyStates((prev) => ({ ...prev, [e.code]: false }))
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useFrame(() => {
    if (!ref.current) return

    const { position } = ref.current

    // Movement
    if (keyStates['KeyW']) {
      position.z -= MOVE_SPEED
      camera.position.set(position.x, position.y + 1.25, position.z + 4)
    }
    if (keyStates['KeyS']) {
      position.z += MOVE_SPEED
      camera.position.set(position.x, position.y + 1.25, position.z + 4)
    }

    // Stir left and right
    // if (keyStates['KeyA']) {
    //   camera.rotation.y += MOVE_SPEED
    //   camera.position.set(position.x, position.y + 1.25, position.z + 4)
    // }
    // if (keyStates['KeyD']) {
    //   camera.rotation.y -= MOVE_SPEED
    //   camera.position.set(position.x, position.y + 1.25, position.z + 4)
    // }

    if (keyStates['KeyA']) {
      position.x -= MOVE_SPEED
      camera.position.set(position.x, position.y + 1.25, position.z + 4)
    }
    if (keyStates['KeyD']) {
      position.x += MOVE_SPEED
      camera.position.set(position.x, position.y + 1.25, position.z + 4)
    }

    // Jump
    if (keyStates['Space'] && playerOnFloor) {
      playerVelocity.y = JUMP_FORCE
      setPlayerOnFloor(false)
    }

    // Apply gravity and update position
    playerVelocity.y += GRAVITY
    position.y += playerVelocity.y

    // Check floor collision
    if (position.y < 0.5) {
      position.y = 0.5
      playerVelocity.y = 0
      setPlayerOnFloor(true)
    }

    // Apply drag
    playerVelocity.x -= playerVelocity.x * DRAG
    playerVelocity.z -= playerVelocity.z * DRAG

    // Wall boundaries
    position.x = Math.max(-WORLD_LIMITS + 0.5, Math.min(WORLD_LIMITS - 0.5, position.x))
    position.z = Math.max(-WORLD_LIMITS + 0.5, Math.min(WORLD_LIMITS - 0.5, position.z))

    camera.lookAt(position.x, position.y, position.z)
  })

  return (
    <Box ref={ref} position={position} args={[0.47, 1.73, 0.32]} castShadow>
      <meshPhysicalMaterial
        color="#6060ff"
        clearcoat={0.5}
        clearcoatRoughness={0.5}
      />
    </Box>
  )
})

function Scene({ playerRef }: { playerRef: any }) {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 1.5, 4)
    camera.lookAt(0, 1.5, 0)
  }, [camera, playerRef.current])


  return (
    <>
      <axesHelper args={[25]} position={[0, 0, 0]} />
      <Bounds fit clip margin={1.2} castShadow>
        <ambientLight intensity={0.2} castShadow />
        <pointLight position={[10, 10, 10]} />
        <Player position={[0, 0.25, 0]} ref={playerRef} />
        <Bulbs positions={[
          [0, 3, 0],
          [10, 3, 0],
          [20, 3, 0],
          [0, 3, 10],
          [0, 3, 20],
          [-10, 3, 0],
          [-20, 3, 0],
          [0, 3, -10],
          [0, 3, -20],
          [-10, 3, -10],
          [-20, 3, -20],
          [10, 3, -10],
          [20, 3, -20],
          [10, 3, 10],
          [20, 3, 20],
          [-10, 3, 10],
          [-20, 3, 20],
        ]} />
        <StoreBoxes positions={[
          [0, -0.5, 0],
          [10, -0.5, 0],
          [20, -0.5, 0],
          [0, -0.5, 10],
          [0, -0.5, 20],
          [-10, -0.5, 0],
          [-20, -0.5, 0],
          [0, -0.5, -10],
          [0, -0.5, -20],
          [-10, -0.5, -10],
          [-20, -0.5, -20],
          [10, -0.5, -10],
          [20, -0.5, -20],
          [10, -0.5, 10],
          [20, -0.5, 20],
          [-10, -0.5, 10],
          [-20, -0.5, 20],
        ]} />
        <Plane
          args={[WORLD_LIMITS * 2, WORLD_LIMITS * 2]}
          position={[0, -0.25, 0]}
          rotation-x={-Math.PI / 2}
          receiveShadow
          castShadow
        >
          <meshStandardMaterial
            color="lightgreen"
            clearcoat={1}
            clearcoatRoughness={1}
            roughness={0.5}
            reflectivity={0.4}
            flatShading
            refractionRatio={0.3}
          />
        </Plane>
        {
          [-WORLD_LIMITS, WORLD_LIMITS].map((pos) => (
            <React.Fragment key={pos}>
              <Box position={[pos, 4.5, 0]} args={[0.3, 10, WORLD_LIMITS * 2]} castShadow receiveShadow>
                <meshPhysicalMaterial color="lightgray" />
              </Box>
              <Box position={[0, 4.5, pos]} args={[WORLD_LIMITS * 2, 10, 0.3]} castShadow receiveShadow>
                <meshPhysicalMaterial color="lightgray" />
              </Box>
            </React.Fragment>
          ))
        }
      </Bounds>
    </>
  )
}

export function CanvasScene() {
  const playerRef = useRef()

  return (
    <Canvas
      scene={{
        background: new THREE.Color('lightblue'),
        // fog: new THREE.Fog('lightblue', 0, 80),
      }}
      shadows={false}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      camera={{
        fov: 90,
        position: [0, 1.5, 4],
      }}
      flat
    >
      <SkyBox castShadow>
        <Scene playerRef={playerRef} />
        {/* <FlyControls movementSpeed={50} args={[camera, gl.domElement]} position={[0, 5, 0]} /> */}
        <OrbitControls
          position={playerRef.current?.position || new THREE.Vector3(0, 1.5, 4)}
          target={playerRef.current?.position || new THREE.Vector3(0, 1.5, 4)}
          maxZoom={2}
          minZoom={6}
          minPolarAngle={Math.PI / 4} // Limit how low the camera can go
          maxPolarAngle={Math.PI / 2} // Limit how high the camera can go
          enableDamping
          dampingFactor={0.1}
          rotateSpeed={0.5}
          enablePan={false}
          enableZoom={false}
        />
      </SkyBox>
    </Canvas>
  )
}

export function SkyBox({ children }: MeshProps) {
  const controlsRef = useRef(null!)
  const bounds = useBounds()

  useEffect(() => {
    if (controlsRef.current) {
      console.log('controlsRef', controlsRef.current)
    }
  }, [controlsRef.current])

  useEffect(() => {
    if (bounds) {
      bounds.refresh().clip().flip()
    }
  }, [bounds])

  return (
    <>
      <Sky
        distance={400}
        sunPosition={[-10, 15, 20]}
        rayleigh={0.75}
        mieCoefficient={0.011}
        mieDirectionalG={0.8333}
        turbidity={0.9}
        inclination={0.15}
        azimuth={0.33}
        exposure={0.4}
      />
      {children}
    </>
  )
} 
