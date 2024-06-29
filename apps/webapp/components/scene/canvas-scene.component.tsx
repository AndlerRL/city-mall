'use client'

import { useCallback, useEffect, useRef } from 'react';
import { useSetState } from 'react-use';
import * as THREE from 'three';

const JUMP_HEIGHT = 0.5;
const GRAVITY = 0.02;
const MOVE_SPEED = 0.05;

export default function CanvasScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const playerRef = useRef<THREE.Mesh | null>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);
  const jumpVelocityRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const playerPositionRef = useRef(new THREE.Vector3(0, 0.25, 0));

  const [{ keyState, isJumping, dragging }, setCanvasState] = useSetState<{
    keyState: Record<string, boolean>;
    isJumping: boolean;
    dragging: boolean;
  }>({
    isJumping: false,
    keyState: {},
    dragging: false
  });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    setCanvasState(prev => ({
      keyState: {
        ...prev.keyState,
        [e.code]: true
      }
    }));

    if (e.code === 'Space' && !isJumping) {
      setCanvasState({ isJumping: true });
      jumpVelocityRef.current = JUMP_HEIGHT;
    }
  }, [setCanvasState, isJumping]);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    setCanvasState(prev => ({
      keyState: {
        ...prev.keyState,
        [e.code]: false
      }
    }));
  }, [setCanvasState]);

  const updateCameraPosition = useCallback(() => {
    const offset = new THREE.Vector3(0, 2, 5);
    const camera = cameraRef.current as THREE.Camera;
    const playerPosition = playerPositionRef.current;

    camera.position.copy(playerPosition).add(offset);
    camera.lookAt(playerPosition);
  }, []);

  const animate = useCallback(() => {
    if (!playerRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    const player = playerRef.current;
    const playerPosition = playerPositionRef.current;

    // Handle horizontal movement
    let deltaX = 0;
    let deltaZ = 0;
    if (keyState['ArrowUp']) deltaZ -= MOVE_SPEED;
    if (keyState['ArrowDown']) deltaZ += MOVE_SPEED;
    if (keyState['ArrowLeft']) deltaX -= MOVE_SPEED;
    if (keyState['ArrowRight']) deltaX += MOVE_SPEED;

    // Update player position
    playerPosition.x += deltaX;
    playerPosition.z += deltaZ;

    // Handle jumping (vertical movement)
    if (isJumping) {
      playerPosition.y += jumpVelocityRef.current;
      jumpVelocityRef.current -= GRAVITY;

      if (playerPosition.y <= 0.25) {
        playerPosition.y = 0.25;
        setCanvasState({ isJumping: false });
        jumpVelocityRef.current = 0;
      }
    }

    // Update light angle
    const light = sceneRef.current.children.find(child => child instanceof THREE.DirectionalLight) as THREE.DirectionalLight;
    light.position.copy(playerPosition).add(new THREE.Vector3(0, 5, 0));

    // Clamp player position within walls
    playerPosition.x = Math.max(-14.75, Math.min(14.75, playerPosition.x));
    playerPosition.z = Math.max(-14.75, Math.min(14.75, playerPosition.z));

    // Update the actual player mesh position
    player.position.copy(playerPosition);

    // Update camera position
    updateCameraPosition();

    rendererRef.current.render(sceneRef.current, cameraRef.current);
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [keyState, isJumping, updateCameraPosition, setCanvasState]);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer();
    rendererRef.current = renderer;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Optional: for softer shadows
    renderer.setSize(window.innerWidth, window.innerHeight);

    mountRef.current?.appendChild(renderer.domElement);

    // Create scene directional light for shadows
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(20, -40, 20);

    light.shadow.mapSize.width = window.innerWidth;
    light.shadow.mapSize.height = window.innerHeight;
    light.shadow.camera.near = 0.5; // Default
    light.shadow.camera.far = 50; // Default
    light.shadow.camera.left = -30; // Adjust these to cover your scene
    light.shadow.camera.right = 30;
    light.shadow.camera.top = 30;
    light.shadow.camera.bottom = -30;

    scene.add(light);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    ambientLight.position.set(10, -40, 10);
    scene.add(ambientLight);

    // 10 spotlights to create a soft shadow effect
    // Spotlights
    const spotlights = [
      new THREE.SpotLight(0xff0000, 0.5, 100, Math.PI / 1, 0.05, 2),
      new THREE.SpotLight(0x00ff00, 0.5, 100, Math.PI / 1, 0.05, 2),
      new THREE.SpotLight(0x0000ff, 0.5, 100, Math.PI / 1, 0.05, 2),
      new THREE.SpotLight(0xff00ff, 0.5, 100, Math.PI / 1, 0.05, 2),
      new THREE.SpotLight(0xffff00, 0.5, 100, Math.PI / 1, 0.05, 2),
      new THREE.SpotLight(0x00ffff, 0.5, 100, Math.PI / 1, 0.05, 2),
      new THREE.SpotLight(0xff8000, 0.5, 100, Math.PI / 1, 0.05, 2),
      new THREE.SpotLight(0x00ff80, 0.5, 100, Math.PI / 1, 0.05, 2),
      new THREE.SpotLight(0x8000ff, 0.5, 100, Math.PI / 1, 0.05, 2),
      new THREE.SpotLight(0x80ff00, 0.5, 100, Math.PI / 1, 0.05, 2),
    ];

    spotlights.forEach((spotlight, i) => {
      // spotlight.position.set(i * 10, i * 10, -i * 10);
      spotlight.castShadow = true;
      spotlight.shadow.mapSize.width = window.innerWidth;
      spotlight.shadow.mapSize.height = window.innerHeight;
      spotlight.shadow.camera.near = 10;
      spotlight.shadow.camera.far = 200;
      spotlight.shadow.camera.fov = 30;
      scene.add(spotlight);

    });

    // Floor (green square)
    const floorGeometry = new THREE.PlaneGeometry(30, 30);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);

    // Walls (grey box boundaries)
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x808080, side: THREE.DoubleSide });
    const wallGeometry = new THREE.PlaneGeometry(30, 5);

    const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
    backWall.position.z = -15;
    backWall.position.y = 2.5;
    backWall.castShadow = true;
    backWall.receiveShadow = true;
    scene.add(backWall);

    const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
    leftWall.position.x = -15;
    leftWall.position.y = 2.5;
    leftWall.rotation.y = Math.PI / 2;
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
    rightWall.position.x = 15;
    rightWall.position.y = 2.5;
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    scene.add(rightWall);

    // Blue rectangle (player)
    const playerGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const playerMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    const player = new THREE.Mesh(playerGeometry, playerMaterial);
    playerRef.current = player;
    player.position.copy(playerPositionRef.current);
    player.castShadow = true;
    player.receiveShadow = true;
    scene.add(player);

    // Set up camera
    camera.position.set(0, 3, 7);
    updateCameraPosition();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleKeyDown, handleKeyUp, updateCameraPosition, setCanvasState]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate]);

  const dragCamera = useCallback((e: React.MouseEvent) => {
    setCanvasState({ dragging: e.type === 'mousedown' });

    if (document.pointerLockElement) {
      document.exitPointerLock();
    } else {
      mountRef.current?.requestPointerLock();
    }

    console.log('dragCamera', e.movementX, e.movementY)

    const camera = cameraRef.current as THREE.Camera;
    const mouseMoveX = e.movementX;
    const mouseMoveY = e.movementY;

    camera.rotation.y -= mouseMoveX * 0.01;
    camera.rotation.x -= mouseMoveY * 0.01;

    camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x));
  }, []);

  const rotateCamera = useCallback((e: React.MouseEvent) => {
    if (!dragging || !mountRef.current || !cameraRef.current) return;

    console.log('rotateCamera', e.movementX, e.movementY)

    const camera = cameraRef.current as THREE.Camera;
    const mouseMoveX = e.movementX;
    const mouseMoveY = e.movementY;

    camera.rotateX(mouseMoveY * 0.01);
    camera.rotateY(mouseMoveX * 0.01);
    camera.updateMatrixWorld();
  }, [dragging]);

  return (
    <div
      className="size-full fixed inset-0"
      ref={mountRef}
      onMouseDown={dragCamera}
      onMouseUp={dragCamera}
      onMouseMove={rotateCamera}
    >
    </div>
  );
}