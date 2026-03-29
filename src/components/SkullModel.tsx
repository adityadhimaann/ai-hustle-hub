"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkullModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Material refs for animating
  const craniumMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const eyeMatRefLeft = useRef<THREE.MeshBasicMaterial>(null);
  const eyeMatRefRight = useRef<THREE.MeshBasicMaterial>(null);
  const wireMatRef = useRef<THREE.MeshStandardMaterial>(null);

  useEffect(() => {
    if (!groupRef.current || !eyeMatRefLeft.current || !eyeMatRefRight.current || !craniumMatRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // 1. Hero -> Discovery
    tl.to(groupRef.current.position, { x: 1.5, y: -0.5, z: 1, duration: 1 }, 0)
      .to(groupRef.current.rotation, { y: Math.PI / 6, x: -0.1, duration: 1 }, 0)
      .to([eyeMatRefLeft.current.color, eyeMatRefRight.current.color], { r: 0.0, g: 0.94, b: 1.0, duration: 1 }, 0); // Cyan

    // 2. Discovery -> Transformation
    tl.to(groupRef.current.position, { x: 0, y: 1, z: 1.5, duration: 1 }, 1)
      .to(groupRef.current.rotation, { y: -Math.PI / 4, x: 0.2, duration: 1 }, 1)
      .to([eyeMatRefLeft.current.color, eyeMatRefRight.current.color], { r: 0.48, g: 0.0, b: 1.0, duration: 1 }, 1) // Purple
      .to(craniumMatRef.current, { wireframe: true, duration: 1 }, 1); // Reveal internal structure mindset

    // 3. Transformation -> Monetization
    tl.to(groupRef.current.position, { x: -1.5, y: -1, z: 0.5, duration: 1 }, 2)
      .to(groupRef.current.rotation, { y: Math.PI / 2, x: 0.1, duration: 1 }, 2)
      .to(craniumMatRef.current, { wireframe: false, roughness: 0.1, duration: 1 }, 2)
      .to([eyeMatRefLeft.current.color, eyeMatRefRight.current.color], { r: 1.0, g: 0.0, b: 0.3, duration: 1 }, 2); // Aggressive Neon Red/Pink

    // 4. Monetization -> CTA
    tl.to(groupRef.current.position, { x: 0, y: 0, z: 2.5, duration: 1 }, 3)
      .to(groupRef.current.rotation, { y: Math.PI * 2, x: 0, duration: 1 }, 3)
      .to([eyeMatRefLeft.current.color, eyeMatRefRight.current.color], { r: 0.0, g: 0.94, b: 1.0, duration: 1 }, 3);

    return () => {
      tl.kill();
    };
  }, []);

  // Continuous idle floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5) * 0.0015;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cranium / Top Head */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.2, 1.0, 1.4]} />
        <meshStandardMaterial ref={craniumMatRef} color="#050505" metalness={0.9} roughness={0.3} />
      </mesh>
      
      {/* Lower Jaw */}
      <mesh position={[0, -0.3, 0.2]}>
        <boxGeometry args={[0.9, 0.5, 1.1]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.4} />
      </mesh>

      {/* Neck Base */}
      <mesh position={[0, -0.7, -0.2]}>
        <cylinderGeometry args={[0.4, 0.5, 0.6, 16]} />
        <meshStandardMaterial color="#000000" metalness={1} roughness={0.5} />
      </mesh>

      {/* Cheeks / Side panels */}
      <mesh position={[-0.65, 0.1, 0]}>
        <boxGeometry args={[0.1, 0.6, 0.8]} />
        <meshStandardMaterial color="#080808" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.65, 0.1, 0]}>
        <boxGeometry args={[0.1, 0.6, 0.8]} />
        <meshStandardMaterial color="#080808" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Eye Sockets (Dark indents) */}
      <mesh position={[-0.3, 0.4, 0.71]}>
        <boxGeometry args={[0.4, 0.25, 0.1]} />
        <meshStandardMaterial color="#000000" roughness={1} />
      </mesh>
      <mesh position={[0.3, 0.4, 0.71]}>
        <boxGeometry args={[0.4, 0.25, 0.1]} />
        <meshStandardMaterial color="#000000" roughness={1} />
      </mesh>

      {/* Glowing Eyes */}
      <mesh position={[-0.3, 0.4, 0.73]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial ref={eyeMatRefLeft} color="#00f0ff" />
      </mesh>
      <mesh position={[0.3, 0.4, 0.73]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial ref={eyeMatRefRight} color="#00f0ff" />
      </mesh>

      {/* Neural Cables (Back of Head) */}
      <mesh position={[0, 0, -0.7]}>
        <cylinderGeometry args={[0.2, 0.2, 1.2, 16]} />
        <meshStandardMaterial ref={wireMatRef} color="#020202" metalness={0.6} roughness={0.8} />
      </mesh>
    </group>
  );
}
