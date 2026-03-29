import { CheckCircle } from "lucide-react";

export default function ClaritySection() {
  const points = [
    "Learn industry-leading AI tools",
    "Discover high-ROI earning methods",
    "Build passive income systems 24/7",
  ];

  return (
    <section id="clarity" className="relative min-h-[120vh] flex flex-col justify-center items-center py-24 pointer-events-none">
      <div className="container mx-auto px-6 z-10 pointer-events-auto flex flex-col items-center max-w-3xl">
        <div className="gsap-fade-in opacity-0 glass-card p-10 md:p-14 rounded-3xl text-center w-full border border-white/10 hover:border-[#00f0ff]/40 transition-colors duration-500 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <p className="text-[#00f0ff] font-orbitron uppercase tracking-widest text-sm mb-4">// System Readout</p>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            What is AI Hustle Hub?
          </h2>
          <p className="text-gray-400 font-inter text-lg md:text-xl leading-relaxed mb-10">
            We are the bridge between human ambition and artificial intelligence. A platform engineered to help students and beginners leverage AI to earn money online, automate tedious workflows, and scale side income.
          </p>
          
          <div className="flex flex-col gap-4 text-left mx-auto max-w-md">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-4 text-gray-300">
                <CheckCircle className="text-[#00f0ff] shrink-0" size={24} />
                <span className="font-inter text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
