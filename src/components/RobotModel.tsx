"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RobotModel() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const visorRef = useRef<THREE.MeshBasicMaterial>(null);
  const coreRef = useRef<THREE.MeshBasicMaterial>(null);

  useEffect(() => {
    if (!groupRef.current || !visorRef.current || !coreRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    // Initial setup
    groupRef.current.position.set(0, -6, -2); // Start off-screen (assembly/rise effect)
    
    // 1. Hero -> Clarity (Rise up into view)
    tl.to(groupRef.current.position, { y: 0.5, z: 1, duration: 2, ease: "power2.out" }, 0)
      .to(groupRef.current.rotation, { y: Math.PI / 6, duration: 2 }, 0);

    // 2. Clarity -> Steps (Intelligence / Process)
    tl.to(groupRef.current.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 2 }, 2)
      .to(groupRef.current.position, { x: 1.5, y: -0.5, duration: 2 }, 2)
      .to([visorRef.current.color, coreRef.current.color], { r: 1.0, g: 1.0, b: 1.0, duration: 2 }, 2); // White glow

    // 3. Steps -> Tools (Cyan AI Tooling)
    tl.to(groupRef.current.rotation, { y: -Math.PI / 6, duration: 2 }, 4)
      .to(groupRef.current.position, { x: -1.5, y: 0.5, duration: 2 }, 4)
      .to([visorRef.current.color, coreRef.current.color], { r: 0.0, g: 0.94, b: 1.0, duration: 2 }, 4); // Blue glow

    // 4. Tools -> Earning (Deep Blue/Black Phase)
    tl.to(groupRef.current.position, { x: 1.5, y: -0.5, z: 0.5, duration: 2 }, 6)
      .to(groupRef.current.rotation, { y: Math.PI + Math.PI / 4, duration: 2 }, 6)
      .to([visorRef.current.color, coreRef.current.color], { r: 0.0, g: 0.2, b: 1.0, duration: 2 }, 6); // Deep blue

    // 5. Earning -> CTA (Centering intensity)
    tl.to(groupRef.current.position, { x: 0, y: 0, z: 2, duration: 2 }, 8)
      .to(groupRef.current.rotation, { y: Math.PI * 2, duration: 2 }, 8)
      .to([visorRef.current.color, coreRef.current.color], { r: 0.0, g: 0.94, b: 1.0, duration: 2 }, 8); // Cyan conversion

    // 6. CTA -> Footer (Dissolve / Sink back)
    tl.to(groupRef.current.position, { y: -8, z: -10, duration: 2, ease: "power3.in" }, 10)
      .to(groupRef.current.scale, { x: 0.1, y: 0.1, z: 0.1, duration: 2 }, 10);

    return () => {
      tl.kill();
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Continuous floating
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5) * 0.002;
    }
    // Subtle head tracking/looking around
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
      headRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 1.2) * 0.05;
    }
  });

  // Reusable Materials
  const blackMetal = <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.8} />;
  const whiteArmor = <meshStandardMaterial color="#eeeeee" roughness={0.1} metalness={0.4} />;

  return (
    <group ref={groupRef}>
      {/* Torso */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.8, 0.6, 1.5, 8]} />
        {blackMetal}
      </mesh>
      
      {/* Chest White Armor Plate */}
      <mesh position={[0, -1.0, 0.6]}>
        <boxGeometry args={[1.0, 0.8, 0.5]} />
        {whiteArmor}
      </mesh>
      
      {/* Chest Blue Glow Core */}
      <mesh position={[0, -1.0, 0.86]}>
        <circleGeometry args={[0.2, 32]} />
        <meshBasicMaterial ref={coreRef} color="#00f0ff" />
      </mesh>

      {/* Neck */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 0.4, 16]} />
        {blackMetal}
      </mesh>

      {/* Head Group */}
      <group ref={headRef} position={[0, 0.4, 0]}>
        {/* Main Head Black Chassis */}
        <mesh>
          <boxGeometry args={[1.0, 1.0, 1.1]} />
          {blackMetal}
        </mesh>
        
        {/* White Armor Top */}
        <mesh position={[0, 0.55, 0]}>
          <boxGeometry args={[1.05, 0.1, 1.15]} />
          {whiteArmor}
        </mesh>
        
        {/* White Armor Sides */}
        <mesh position={[-0.55, 0, 0]}>
          <boxGeometry args={[0.1, 0.8, 0.9]} />
          {whiteArmor}
        </mesh>
        <mesh position={[0.55, 0, 0]}>
          <boxGeometry args={[0.1, 0.8, 0.9]} />
          {whiteArmor}
        </mesh>

        {/* Visor Area (Dark Indent) */}
        <mesh position={[0, 0.1, 0.56]}>
          <boxGeometry args={[0.9, 0.4, 0.05]} />
          <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.9} />
        </mesh>

        {/* Glowing Blue Eye Visor (Cylon/RoboCop style) */}
        <mesh position={[0, 0.1, 0.59]}>
          <boxGeometry args={[0.7, 0.08, 0.02]} />
          <meshBasicMaterial ref={visorRef} color="#00f0ff" />
        </mesh>

        {/* Ear Antennas / Nodes */}
        <mesh position={[-0.65, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.15, 0.15, 0.2, 16]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>
        <mesh position={[0.65, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.15, 0.15, 0.2, 16]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>
      </group>

      {/* Shoulders */}
      <mesh position={[-1.2, -0.8, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        {whiteArmor}
      </mesh>
      <mesh position={[1.2, -0.8, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        {whiteArmor}
      </mesh>
      
      {/* Upper Arms */}
      <mesh position={[-1.3, -1.6, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 1, 8]} />
        {blackMetal}
      </mesh>
      <mesh position={[1.3, -1.6, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 1, 8]} />
        {blackMetal}
      </mesh>
    </group>
  );
}
