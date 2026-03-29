"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, Float } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense } from "react";
import * as THREE from "three";
import CyberSkull from "./CyberSkull";
import EnergyDust from "./EnergyDust";

// Component that manages camera parallax based on mouse mapping
function ParallaxRig() {
  const v = new THREE.Vector3();
  useFrame((state) => {
    // Smoothly interpolate the camera position based on pointer mapping (x/y from -1 to 1)
    const targetX = (state.pointer.x * state.viewport.width) / 10;
    const targetY = (state.pointer.y * state.viewport.height) / 10;

    // We retain the base camera Z at 5, but add parallax
    v.set(targetX, targetY, 5 + state.pointer.y * 0.5);
    state.camera.position.lerp(v, 0.05);
    state.camera.lookAt(0, 0, 0); // Always focus on center (where CyberSkull is)
  });
  return null;
}

export default function CanvasScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]} // Support high-DPI displays while ensuring performance
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      {/* Global Fog for depth integration */}
      <fog attach="fog" args={["#000000", 5, 20]} />

      <Suspense fallback={null}>
        <ambientLight intensity={0.02} />
        <directionalLight position={[10, 10, 5]} intensity={0.2} color="#00f0ff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.1} color="#7a00ff" />

        {/* Subtle dynamic environment particles */}
        <EnergyDust count={1500} />

        {/* Central Intelligence Node */}
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <CyberSkull />
        </Float>

        <ParallaxRig />

        {/* Cinematic Post Processing Stack */}
        <EffectComposer multisampling={0}>
          <Bloom
            luminanceThreshold={0.5}
            mipmapBlur
            intensity={1.2}
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL} 
            offset={new THREE.Vector2(0.002, 0.002)}
            radialModulation={false}
            modulationOffset={0}
          />
          <Noise opacity={0.05} />
        </EffectComposer>

        {/* Memory leak prevention and optimization */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
