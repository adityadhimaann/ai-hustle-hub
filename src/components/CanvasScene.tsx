"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Preload, Float } from "@react-three/drei";
import { Suspense } from "react";
import SkullModel from "./SkullModel";

export default function CanvasScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]} // Support high-DPI displays
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00f0ff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#7a00ff" />
        <spotLight
          position={[0, 10, 0]}
          intensity={1.5}
          angle={0.5}
          penumbra={1}
          color="#0ff0fc"
        />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <SkullModel />
        </Float>

        <Environment preset="city" />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
