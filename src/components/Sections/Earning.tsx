import { Zap, Timer, Brain, Terminal } from "lucide-react";

export default function EarningSection() {
  const earnings = [
    { title: "Affiliate Marketing", desc: "Build automated funnels that sell." },
    { title: "AI Freelancing", desc: "Deliver high-value services 10x faster." },
    { title: "Content Creation", desc: "Scale viral media channels using automation." },
    { title: "B2B Automation", desc: "Build chatbots and workflows for local businesses." },
  ];

  const benefits = [
    { text: "Save time", icon: <Timer size={20} className="text-[#ff003c]" /> },
    { text: "Earn online", icon: <Zap size={20} className="text-[#ff003c]" /> },
    { text: "Beginner friendly", icon: <Brain size={20} className="text-[#ff003c]" /> },
    { text: "No coding needed", icon: <Terminal size={20} className="text-[#ff003c]" /> },
  ];

  return (
    <section id="earning" className="relative min-h-[160vh] flex flex-col justify-center py-32 pointer-events-none">
      <div className="container mx-auto px-6 lg:px-20 z-10 pointer-events-auto mix-blend-exclusion">
        <div className="max-w-4xl text-left">
          <p className="gsap-fade-in opacity-0 text-xs md:text-sm font-orbitron uppercase text-[#ff003c] mb-4 tracking-widest">// Phase 4: Monetization Engine</p>
          <h2 className="gsap-fade-in opacity-0 text-6xl md:text-[6rem] font-orbitron font-black text-white leading-none tracking-[-0.05em] mb-16">
            Convert AI <br /> Into <span className="text-[#ff003c]">Income.</span>
          </h2>

          {/* Real Benefits (Trust) */}
          <div className="gsap-fade-in opacity-0 flex flex-wrap gap-4 mb-16">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2 bg-black/50 border border-white/10 px-4 py-2 rounded-full font-inter text-sm text-gray-300">
                {b.icon} {b.text}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
            {earnings.map((stream, i) => (
              <div 
                key={i} 
                className="gsap-fade-in opacity-0 glass-card px-8 py-6 rounded-lg group cursor-pointer hover:bg-[#ff003c]/5 border border-white/5 transition-all duration-500 hover:border-[#ff003c]/30"
              >
                <div className="text-xl font-orbitron text-white mb-2">{stream.title}</div>
                <div className="text-sm font-inter text-gray-500 group-hover:text-gray-300 transition-colors duration-500">{stream.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
