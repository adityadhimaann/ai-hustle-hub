"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import HeroSection from "@/components/Sections/Hero";
import ClaritySection from "@/components/Sections/Clarity";
import StepsSection from "@/components/Sections/Steps";
import ToolsSection from "@/components/Sections/Tools";
import EarningSection from "@/components/Sections/Earning";
import CTASection from "@/components/Sections/CTA";

const CanvasScene = dynamic(() => import("@/components/CanvasScene"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".gsap-fade-in");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="relative w-full h-full bg-black text-white selection:bg-[#00f0ff]/30">
      {/* 3D Canvas Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <CanvasScene />
      </div>

      {/* HTML Content Overlay */}
      <div className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <ClaritySection />
        <StepsSection />
        <ToolsSection />
        <EarningSection />
        <CTASection />
      </div>
    </main>
  );
}
