"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkullModel() {
  const meshRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  // Use a custom geometry to simulate an abstract high-tech "Skull/Brain"
  // For production, replace this with `const { scene } = useGLTF('/path/to/skull.glb')`
  const geometry = new THREE.IcosahedronGeometry(1.2, 4);

  useEffect(() => {
    // We bind the scroll to the GSAP animations using matchMedia or global contexts
    // Creating a ScrollTrigger timeline that scrubs through scroll
    if (!meshRef.current || !materialRef.current) return;

    const sections = ["#hero", "#discovery", "#transformation", "#monetization", "#cta"];
    
    // We create a singular global timeline for the mesh, driven by body scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrubbing
      },
    });

    // 1. From Hero -> Discovery
    tl.to(meshRef.current.position, { x: 1.5, y: -0.5, z: 1, duration: 1 }, 0)
      .to(meshRef.current.rotation, { y: Math.PI / 4, x: -0.2, duration: 1 }, 0)
      .to(materialRef.current, { wireframe: true, emissiveIntensity: 2, duration: 1 }, 0);

    // 2. Discovery -> Transformation
    tl.to(meshRef.current.position, { x: 0, y: 1, z: 2, duration: 1 }, 1)
      .to(meshRef.current.rotation, { y: -Math.PI / 2, x: 0.5, duration: 1 }, 1)
      .to(materialRef.current.color, { r: 0.48, g: 0.0, b: 1.0, duration: 1 }, 1) // Purple tint (#7a00ff)
      .to(materialRef.current.emissive, { r: 0.48, g: 0.0, b: 1.0, duration: 1 }, 1);

    // 3. Transformation -> Monetization
    tl.to(meshRef.current.position, { x: -1.5, y: -1, z: 0.5, duration: 1 }, 2)
      .to(meshRef.current.rotation, { y: Math.PI, x: 0.1, duration: 1 }, 2)
      .to(materialRef.current, { wireframe: false, roughness: 0.1, metalness: 1, duration: 1 }, 2)
      .to(materialRef.current.color, { r: 0.0, g: 0.94, b: 1.0, duration: 1 }, 2) // Cyan tint

    // 4. Monetization -> CTA
    tl.to(meshRef.current.position, { x: 0, y: 0, z: 3, duration: 1 }, 3)
      .to(meshRef.current.rotation, { y: Math.PI * 2, x: 0, duration: 1 }, 3)
      .to(materialRef.current.emissive, { r: 1.0, g: 1.0, b: 1.0, duration: 1 }, 3);

    return () => {
      tl.kill();
    };
  }, []);

  // Continuous subtle idle animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.002;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          ref={materialRef}
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
          transmission={0.5}
          thickness={1}
        />
      </mesh>
      {/* Abstract particle orbit or halo could be added here */}
    </group>
  );
}
