import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 pointer-events-none"
    >
      <div className="container mx-auto px-6 z-10 pointer-events-auto flex flex-col items-center justify-center text-center">
        <h2 className="gsap-fade-in opacity-0 text-5xl md:text-7xl font-orbitron font-black text-white mb-8">
          The <span className="text-glow">Engine</span> is Ready.
        </h2>
        <p className="gsap-fade-in opacity-0 text-xl text-gray-300 font-light max-w-lg mb-12">
          Plug into the AI Hustle Hub. Activate your passive systems and start scaling beyond the human limits.
        </p>

        <button className="gsap-fade-in opacity-0 magnetic-button relative inline-flex items-center justify-center px-10 py-5 font-bold text-white uppercase tracking-widest bg-[#050510] border-2 border-[#00f0ff] rounded-full hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] group overflow-hidden">
          <span className="relative z-10 flex items-center gap-3">
            Initialize Sequence <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </span>
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent -translate-x-[150%] skew-x-[-45deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>
        </button>

        <footer className="mt-32 w-full border-t border-white/10 pt-8 flex justify-between items-center text-xs text-gray-500 font-orbitron">
          <p>© 2026 AI Hustle Hub. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-[#00f0ff]">TERMS</span>
            <span className="cursor-pointer hover:text-[#00f0ff]">LOGOUT [x]</span>
          </div>
        </footer>
      </div>
      
      {/* Required for shimmer animation mapped in tailwind */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(150%) skewX(-45deg); }
        }
      `}} />
    </section>
  );
}
