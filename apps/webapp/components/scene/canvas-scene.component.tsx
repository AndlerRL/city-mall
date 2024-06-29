'use client'

import { Box, OrbitControls, Plane } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const MOVE_SPEED = 0.1
const JUMP_FORCE = 0.15
const GRAVITY = -0.01
const DRAG = 0.05
const WORLD_LIMITS = 25

function Player({ position, camera }: { position: any, camera: THREE.Camera }) {
  const meshRef = useRef()
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
    if (!meshRef.current) return

    const { position } = meshRef.current

    // Movement
    if (keyStates['KeyW']) {
      position.z -= MOVE_SPEED
      camera.position.set(position.x, position.y + 1, position.z + 4)
    }
    if (keyStates['KeyS']) {
      position.z += MOVE_SPEED
      camera.position.set(position.x, position.y + 1, position.z + 4)
    }

    // Stir left and right
    // if (keyStates['KeyA']) {
    //   camera.rotation.y += MOVE_SPEED
    //   camera.position.set(position.x, position.y + 1, position.z + 4)
    // }
    // if (keyStates['KeyD']) {
    //   camera.rotation.y -= MOVE_SPEED
    //   camera.position.set(position.x, position.y + 1, position.z + 4)
    // }

    if (keyStates['KeyA']) {
      position.x -= MOVE_SPEED
      camera.position.set(position.x, position.y + 1, position.z + 4)
    }
    if (keyStates['KeyD']) {
      position.x += MOVE_SPEED
      camera.position.set(position.x, position.y + 1, position.z + 4)
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
    <Box ref={meshRef} args={[1, 1, 1]} position={position} castShadow>
      <meshStandardMaterial color="blue" />
    </Box>
  )
}

function Scene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 1.5, 4)
    camera.lookAt(0, 1.5, 4)
  }, [])

  return (
    <>
      <ambientLight intensity={0.9} castShadow />
      <pointLight position={[0, 30, 0]} distance={5} castShadow />
      <Player position={[0, 0.5, 0]} camera={camera} />
      <Plane args={[WORLD_LIMITS * 2, WORLD_LIMITS * 2]} rotation-x={-Math.PI / 2}>
        <meshStandardMaterial color="green" />
      </Plane>
      {[-WORLD_LIMITS, WORLD_LIMITS].map((pos) => (
        <React.Fragment key={pos}>
          <Box position={[pos, 2.5, 0]} args={[0.3, 5, WORLD_LIMITS * 2]} castShadow>
            <meshStandardMaterial color="gray" clipShadows />
          </Box>
          <Box position={[0, 2.5, pos]} args={[WORLD_LIMITS * 2, 5, 0.3]} castShadow>
            <meshStandardMaterial color="gray" clipShadows />
          </Box>
        </React.Fragment>
      ))}
    </>
  )
}

export function CanvasScene() {
  return (
    <Canvas
      scene={{
        background: new THREE.Color('lightblue'),
        fog: new THREE.Fog('lightblue', 0, 40),
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      shadows="basic"
    >
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}
