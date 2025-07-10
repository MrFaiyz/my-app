"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei"
import CameraLens from "./CameraLens"
import TimelineRing from "./TimelineRing"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={1.5}
        />
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={5}
        />
        <Environment preset="studio" />
        <CameraLens />
        <TimelineRing />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* 🧩 Hero content, pinned on top */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="uppercase text-sm tracking-widest mb-4 text-[#3ac4ec]">Content Studio</p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-slate-900">
          Create <span className="text-[#3ac4ec]">Viral Videos</span> Effortlessly
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl">
          Zsideo turns your raw clips into high-impact shorts & reels with our AI-driven editing.
        </p>
        <button className="bg-[#3ac4ec] px-6 py-3 rounded-full font-semibold text-white hover:bg-[#ef4444] transition">
          Get Started
        </button>
      </div>
    </section>
  )
}
