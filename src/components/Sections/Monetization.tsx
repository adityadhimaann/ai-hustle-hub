export default function MonetizationSection() {
  const dataStreams = [
    { title: "Affiliate Arbitrage", stat: "Active" },
    { title: "SaaS Micro-Nodes", stat: "Online" },
    { title: "Content Factories", stat: "Looping" },
  ];

  return (
    <section id="monetization" className="relative h-screen flex flex-col justify-center py-0 pointer-events-none">
      <div className="container mx-auto px-6 lg:px-20 z-10 pointer-events-auto text-right mix-blend-exclusion">
        <p className="gsap-fade-in opacity-0 text-xs md:text-sm font-orbitron uppercase text-[#00f0ff] mb-4 tracking-widest">// Phase 4: Monetization Engine</p>
        <h2 className="gsap-fade-in opacity-0 text-6xl md:text-[7rem] font-orbitron font-black text-white leading-none tracking-[-0.05em] mb-16">
          Convert AI <br /> Into <span className="text-[#00f0ff]">Income.</span>
        </h2>

        <div className="space-y-4 flex flex-col items-end">
          {dataStreams.map((stream, i) => (
            <div 
              key={i} 
              className="gsap-fade-in opacity-0 glass-card px-8 py-5 w-full max-w-md rounded-lg flex items-center justify-between gap-12 group cursor-pointer hover:bg-white/5 border border-white/5 transition-all duration-500 hover:border-[#00f0ff]/50"
            >
              <div className="text-lg font-inter text-gray-500 font-light group-hover:text-white transition-colors duration-500">{stream.title}</div>
              <div className="text-xl font-orbitron text-[#00f0ff] group-hover:scale-105 transition-transform duration-500">{stream.stat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
