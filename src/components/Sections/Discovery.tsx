import { Layers, Zap, TrendingUp } from "lucide-react";

export default function DiscoverySection() {
  const cards = [
    {
      title: "AI Tools",
      desc: "Harness next-gen AI to supercharge your workflow.",
      icon: <Layers size={32} className="text-[#0ff0fc]" />,
    },
    {
      title: "Side Hustles",
      desc: "Proven low-effort, high-reward digital income streams.",
      icon: <TrendingUp size={32} className="text-[#0ff0fc]" />,
    },
    {
      title: "Automation",
      desc: "Let machines run your systems 24/7.",
      icon: <Zap size={32} className="text-[#0ff0fc]" />,
    },
  ];

  return (
    <section
      id="discovery"
      className="relative min-h-screen flex flex-col justify-center py-24 pointer-events-none"
    >
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pointer-events-auto">
        <div className="gsap-fade-in opacity-0">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
            Uncover the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7a00ff]">Matrix</span>
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-lg mb-8 leading-relaxed">
            The AI revolution is here. Stop trading time for money. Discover systems that multiply your output while you focus on scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 w-full lg:max-w-md ml-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className="glass-card gsap-fade-in opacity-0 p-8 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] cursor-pointer group border border-white/5 hover:border-[#00f0ff]/50"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 p-4 rounded-xl bg-black w-max border border-white/10 group-hover:border-[#00f0ff]/30 transition-colors duration-500">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold font-orbitron text-white mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
