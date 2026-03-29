import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="relative flex flex-col justify-start items-center pointer-events-none pb-0 pt-[40vh]">
      <div className="container mx-auto px-6 z-10 pointer-events-auto flex flex-col items-center justify-center text-center mix-blend-exclusion mb-[30vh]">
        <p className="gsap-fade-in opacity-0 text-xs md:text-sm font-orbitron uppercase text-[#7a00ff] mb-4 tracking-widest">// Phase 5: Control & Mastery</p>
        <h2 className="gsap-fade-in opacity-0 text-6xl md:text-[8rem] leading-none font-orbitron font-black text-white mb-10 tracking-tighter">
          Master the <br /> System.
        </h2>

        <button className="gsap-fade-in opacity-0 magnetic-button relative inline-flex items-center justify-center px-12 py-6 font-bold text-white uppercase tracking-widest bg-black border border-white/20 hover:border-[#00f0ff] rounded-full hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] group overflow-hidden transition-colors duration-700">
          <span className="relative z-10 flex items-center gap-3 font-orbitron">
            Start Your AI Hustle <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
          </span>
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-[#00f0ff]/10 to-transparent -translate-x-[150%] skew-x-[-45deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>
        </button>
      </div>
      
      {/* Dissolve (Footer) - Appears after the massive empty space where skull dissolves */}
      <footer className="w-full mt-[30vh] border-t border-white/5 pt-12 pb-12 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-xs text-gray-700 font-orbitron z-10 pointer-events-auto mix-blend-exclusion px-12">
        <p className="mb-4 lg:mb-0">© 2026 AI Hustle Hub. End of Simulation.</p>
        <div className="flex gap-8">
          <span className="cursor-crosshair hover:text-white transition-colors duration-300">DATA POLICY</span>
          <span className="cursor-crosshair hover:text-[#00f0ff] transition-colors duration-300">DISCONNECT [x]</span>
        </div>
      </footer>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(150%) skewX(-45deg); }
        }
      `}} />
    </section>
  );
}
