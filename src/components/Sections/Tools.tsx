import { ExternalLink } from "lucide-react";

export default function ToolsSection() {
  const tools = [
    { name: "ChatGPT", desc: "The brain. Universal content creation, reasoning, and copywriting logic.", link: "#" },
    { name: "Midjourney", desc: "The eye. Hyper-realistic design, concept art, and visual creation.", link: "#" },
    { name: "Make.com", desc: "The engine. Connect apps and automate complex background tasks.", link: "#" },
  ];

  return (
    <section id="tools" className="relative min-h-[140vh] flex flex-col justify-center py-24 pointer-events-none">
      <div className="container mx-auto px-6 lg:px-20 z-10 pointer-events-auto mix-blend-exclusion text-right">
        <p className="gsap-fade-in opacity-0 text-[#00f0ff] font-orbitron uppercase tracking-widest text-sm mb-4">// Core Integrations</p>
        <h2 className="gsap-fade-in opacity-0 text-5xl md:text-6xl font-orbitron font-black text-white mb-16">
          Featured AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f0ff]">Tools.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full mx-auto">
          {tools.map((tool, i) => (
            <div key={i} className="gsap-fade-in opacity-0 glass-card p-8 rounded-2xl group flex flex-col justify-between hover:bg-[#00f0ff]/5 border border-white/5 hover:border-[#00f0ff]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/20 blur-[50px] mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-orbitron text-white mb-4 group-hover:text-[#00f0ff] transition-colors duration-300">{tool.name}</h3>
                <p className="text-gray-400 font-inter mb-8">{tool.desc}</p>
              </div>

              <a href={tool.link} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-[#00f0ff] transition-colors w-max group/link">
                Use Now <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
