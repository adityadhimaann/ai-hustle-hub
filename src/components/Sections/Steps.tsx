import { Search, BookOpen, Briefcase, DollarSign } from "lucide-react";

export default function StepsSection() {
  const steps = [
    { num: "01", title: "Discover Tools", desc: "Identify the best AI models for your specific niche.", icon: <Search size={24} /> },
    { num: "02", title: "Learn & Prompt", desc: "Master the logic required to command the AI system.", icon: <BookOpen size={24} /> },
    { num: "03", title: "Apply Frameworks", desc: "Deploy side hustle models built around these tools.", icon: <Briefcase size={24} /> },
    { num: "04", title: "Scale Income", desc: "Automate delivery and start compounding your earnings.", icon: <DollarSign size={24} /> },
  ];

  return (
    <section id="steps" className="relative min-h-[140vh] flex flex-col justify-center py-24 pointer-events-none">
      <div className="container mx-auto px-6 lg:px-20 z-10 pointer-events-auto max-w-5xl">
        <p className="gsap-fade-in opacity-0 text-[#7a00ff] font-orbitron uppercase tracking-widest text-sm mb-4">// Execution Protocol</p>
        <h2 className="gsap-fade-in opacity-0 text-5xl md:text-6xl font-orbitron font-black text-white mb-16">
          How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Works.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="gsap-fade-in opacity-0 glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-[#7a00ff]/50">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-xl bg-black border border-white/10 text-gray-500 group-hover:text-[#7a00ff] group-hover:border-[#7a00ff]/50 transition-colors duration-500">
                  {step.icon}
                </div>
                <div className="text-4xl font-black font-orbitron text-white/10 group-hover:text-white/20 transition-colors duration-500">{step.num}</div>
              </div>
              <h3 className="text-2xl font-bold font-orbitron text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 font-inter leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
