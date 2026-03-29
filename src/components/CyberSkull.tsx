"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom Shader for the Neural AI Core / Skull
const neuralVertexShader = `
uniform float uTime;
uniform float uAssemble;
uniform float uDissolve;

attribute vec3 randomOffset;

varying vec2 vUv;
varying float vGlow;

void main() {
  vUv = uv;
  
  // Base position
  vec3 pos = position;
  
  // Hover / breathing effect
  float breathe = sin(uTime * 2.0 + pos.y * 5.0) * 0.05;
  pos += normal * breathe;

  // Assembly logic: Start scattered, converge to shape
  vec3 scatteredPos = pos + randomOffset * (1.0 - uAssemble) * 10.0;
  
  // Dissolve logic: explode outwards at the end
  vec3 dissolvedPos = scatteredPos + randomOffset * uDissolve * 15.0;

  vec4 mvPosition = modelViewMatrix * vec4(dissolvedPos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  
  // Point size based on distance & animation
  gl_PointSize = (15.0 * uAssemble) * (1.0 / -mvPosition.z) * (1.0 - (uDissolve * 0.8));
  vGlow = (uAssemble) - (uDissolve);
}
`;

const neuralFragmentShader = `
uniform vec3 uColor1;
uniform vec3 uColor2;

varying vec2 vUv;
varying float vGlow;

void main() {
  // Make it circular
  float dist = length(gl_PointCoord - vec2(0.5));
  if (dist > 0.5) discard;

  // Soft glowing edge
  float alpha = smoothstep(0.5, 0.1, dist) * vGlow;

  // Mix between neon cyan and electric purple based on screen position
  vec3 finalColor = mix(uColor1, uColor2, gl_PointCoord.y) * 2.5; // Boosted magnitude for PostProcessing Bloom

  gl_FragColor = vec4(finalColor, alpha);
}
`;

export default function CyberSkull() {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Generate dense geometry for the neural core
  // Using a highly detailed sphere to simulate a complex neural node structure.
  // In production, replace `IcosahedronGeometry` with your skull.glb geometry!
  const { geometry, randomOffsets } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.5, 32); 
    const count = geo.attributes.position.count;
    
    const randomOffsets = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      randomOffsets[i] = (Math.random() - 0.5) * 2;
    }
    
    geo.setAttribute('randomOffset', new THREE.BufferAttribute(randomOffsets, 3));
    return { geometry: geo, randomOffsets };
  }, []);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uAssemble: { value: 0 }, // Starts at 0 (scattered particles)
    uDissolve: { value: 0 }, // Starts at 0 (solid)
    uColor1: { value: new THREE.Color("#00f0ff") },
    uColor2: { value: new THREE.Color("#7a00ff") },
  }), []);

  useEffect(() => {
    if (!pointsRef.current || !materialRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Extremely smooth scrubbing
      },
    });

    // 1. Hero -> Clarity (Assembly)
    tl.to(uniforms.uAssemble, { value: 1, duration: 2, ease: "power2.inOut" }, 0)
      .to(pointsRef.current.position, { y: 0.5, z: 1, duration: 2 }, 0)
      .to(pointsRef.current.rotation, { y: Math.PI / 4, duration: 2 }, 0);

    // 2. Clarity -> Steps (Intelligence)
    tl.to(pointsRef.current.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 2 }, 2)
      .to(uniforms.uColor1.value, { r: 0.48, g: 0.0, b: 1.0, duration: 2 }, 2) // Shift to Purple
      .to(uniforms.uColor2.value, { r: 0.4, g: 0.0, b: 0.8, duration: 2 }, 2)
      .to(pointsRef.current.position, { x: 1.5, y: -0.5, duration: 2 }, 2);

    // 3. Steps -> Tools (Cyan AI Tooling)
    tl.to(pointsRef.current.rotation, { y: Math.PI, x: 0.2, duration: 2 }, 4)
      .to(pointsRef.current.position, { x: -1.5, y: 0.5, duration: 2 }, 4)
      .to(uniforms.uColor1.value, { r: 0.0, g: 0.94, b: 1.0, duration: 2 }, 4)
      .to(uniforms.uColor2.value, { r: 0.0, g: 0.5, b: 1.0, duration: 2 }, 4);

    // 4. Tools -> Earning (Monetization Red Phase)
    tl.to(pointsRef.current.position, { x: 1.5, y: -0.5, z: 0.5, duration: 2 }, 6)
      .to(pointsRef.current.rotation, { y: Math.PI * 1.5, duration: 2 }, 6)
      .to(uniforms.uColor1.value, { r: 1.0, g: 0.0, b: 0.23, duration: 2 }, 6) // Match #ff003c
      .to(uniforms.uColor2.value, { r: 1.0, g: 0.4, b: 0.0, duration: 2 }, 6);

    // 5. Earning -> CTA (Centering intensity)
    tl.to(pointsRef.current.position, { x: 0, y: 0, z: 2, duration: 2 }, 8)
      .to(pointsRef.current.rotation, { y: Math.PI * 2, duration: 2 }, 8)
      .to(uniforms.uColor1.value, { r: 0.48, g: 0.0, b: 1.0, duration: 2 }, 8) // Purple conversion
      .to(uniforms.uColor2.value, { r: 0.0, g: 0.94, b: 1.0, duration: 2 }, 8);

    // 6. CTA -> Footer (Dissolve)
    tl.to(uniforms.uDissolve, { value: 1, duration: 2, ease: "power3.in" }, 10)
      .to(pointsRef.current.position, { y: 3, z: -5, duration: 2 }, 10);

    return () => {
      tl.kill();
    };
  }, [uniforms]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
    if (pointsRef.current) {
      // Continuous idle
      pointsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={neuralVertexShader}
        fragmentShader={neuralFragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
