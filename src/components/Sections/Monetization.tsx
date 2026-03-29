export default function MonetizationSection() {
  const points = [
    { title: "Affiliate Nodes", val: "10X" },
    { title: "AI SaaS Micro-apps", val: "24/7" },
    { title: "Content Arbitrage", val: "Scalable" },
  ];

  return (
    <section
      id="monetization"
      className="relative min-h-[120vh] flex flex-col justify-start py-32 pointer-events-none"
    >
      <div className="container mx-auto px-6 lg:px-20 z-10 pointer-events-auto text-right">
        <div className="max-w-2xl ml-auto text-right">
          <h2 className="gsap-fade-in opacity-0 text-5xl md:text-7xl font-orbitron font-black text-[#00f0ff] mb-10 text-glow">
            Cash Flow Matrix
          </h2>

          <div className="space-y-6 flex flex-col items-end">
            {points.map((p, i) => (
              <div 
                key={i} 
                className="gsap-fade-in opacity-0 glass-card px-8 py-5 w-auto rounded-xl flex items-center justify-between gap-12 group cursor-pointer hover:bg-[#00f0ff]/5 border border-white/5 hover:border-[#00f0ff]/30"
              >
                <div className="text-xl font-orbitron text-gray-300 group-hover:text-white transition-colors duration-300">{p.title}</div>
                <div className="text-3xl font-black text-[#00f0ff] tracking-widest group-hover:scale-110 transition-transform duration-300">{p.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
