"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useSpring, a } from "@react-spring/three"
import * as THREE from "three"

export default function TimelineRing() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
    }
  })

  // Smooth appear
  const spring = useSpring({
    scale: 1,
    from: { scale: 0 },
    config: { tension: 100, friction: 20 },
  })

  const segments = 100
  const radius = 2.6 // try 2.6 if your camera is big
  const notches = []

  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius

    notches.push(
      <a.mesh
        key={i}
        position={[x, 0.05, z]}
        rotation={[0, angle, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.02, 0.2, 0.02]} />
        <meshStandardMaterial
          color="#3ac4ec"
          metalness={0.7}
          roughness={0.1}
          emissive="#3ac4ec"
          emissiveIntensity={0.2}
        />
      </a.mesh>
    )
  }

  return (
    <a.group ref={groupRef} scale={spring.scale}>
      {notches}
    </a.group>
  )
}
