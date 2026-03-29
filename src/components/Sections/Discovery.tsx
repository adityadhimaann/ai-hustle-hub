import { Layers, Zap, TrendingUp } from "lucide-react";

export default function DiscoverySection() {
  const cards = [
    { title: "AI Tools", desc: "Supercharge your workflow natively.", icon: <Layers size={28} /> },
    { title: "Side Hustles", desc: "Low-effort, high-reward matrices.", icon: <TrendingUp size={28} /> },
    { title: "Automation", desc: "Self-sustaining systems 24/7.", icon: <Zap size={28} /> },
  ];

  return (
    <section id="discovery" className="relative min-h-[150vh] flex flex-col justify-center py-24 pointer-events-none">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pointer-events-auto">
        <div className="gsap-fade-in opacity-0 mix-blend-difference">
          <p className="text-xs md:text-sm font-orbitron uppercase text-[#7a00ff] mb-4 tracking-widest">// Phase 2: Awakening</p>
          <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6 uppercase tracking-[-0.05em] leading-[0.9]">
            Synaptic <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-white">Ignition.</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-lg mb-8 leading-relaxed font-inter">
            As the neural pathways glow, passive holograms emerge. The tools are right in front of you. Connect the dots and break the timeline.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full lg:max-w-md ml-auto relative">
          {cards.map((card, i) => (
            <div
              key={i}
              className="glass-card gsap-fade-in opacity-0 p-8 rounded-2xl transform transition-all duration-[600ms] hover:scale-105 hover:-translate-y-2 cursor-pointer group border border-white/5 hover:border-white/10 relative overflow-hidden"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="flex items-center gap-6 relative z-10">
                <div className="text-gray-600 group-hover:text-[#00f0ff] transition-colors duration-500">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-orbitron text-white tracking-wide">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1 font-inter">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
