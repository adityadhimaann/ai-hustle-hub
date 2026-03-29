export default function TransformationSection() {
  return (
    <section
      id="transformation"
      className="relative min-h-[120vh] flex flex-col justify-center py-20 pointer-events-none"
    >
      <div className="container mx-auto px-6 lg:px-20 z-10 pointer-events-auto">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="gsap-fade-in opacity-0 text-5xl md:text-7xl font-orbitron font-extrabold text-[#7a00ff] drop-shadow-[0_0_20px_rgba(122,0,255,0.7)] mb-8">
            Evolve Your Logic
          </h2>
          <p className="gsap-fade-in opacity-0 text-xl font-light leading-relaxed text-gray-300 md:w-[70%] text-justify border-l-4 border-[#7a00ff] pl-6 transition-all duration-300 hover:border-[#0f00ff] hover:pl-8">
            From raw manual effort to an integrated, AI-driven process. The shift is not just software—it's mental. Unlock the full neural stack connecting your ambition directly to the market.
          </p>
        </div>
      </div>
    </section>
  );
}
