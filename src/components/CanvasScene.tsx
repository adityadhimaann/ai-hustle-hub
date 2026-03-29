"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, Float } from "@react-three/drei";
import { Suspense } from "react";
import SkullModel from "./SkullModel";

export default function CanvasScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]} 
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        {/* Extremely dark lighting setup to ensure the background stays pitch black */}
        <ambientLight intensity={0.02} />
        <directionalLight position={[10, 10, 5]} intensity={0.15} color="#00f0ff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.1} color="#7a00ff" />
        
        {/* Adds just a tiny rim light to the 3D model */}
        <spotLight
          position={[0, 10, -5]}
          intensity={0.4}
          angle={0.6}
          penumbra={1}
          color="#ffffff"
        />

        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
          <SkullModel />
        </Float>

        <Preload all />
      </Suspense>
    </Canvas>
  );
}
