"use client"

import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function CameraLens() {
  const group = useRef<THREE.Group>(null!)
  const { scene } = useGLTF("/models/uploads_files_5084032_Cam1.glb")

  useFrame(({ mouse }) => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        mouse.x * Math.PI / 4,
        0.1
      )
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        mouse.y * Math.PI / 8,
        0.1
      )
    }
  })

  return (
    <group ref={group} position={[0, -0.3, 0]} scale={8} castShadow>
      <primitive object={scene} />
    </group>
  )
}
