import { ArrowRight, Users, Bell, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="relative flex flex-col justify-start items-center pointer-events-none pb-0 pt-[20vh]">
      <div className="container mx-auto px-6 z-10 pointer-events-auto flex flex-col items-center justify-center text-center mb-[20vh] max-w-4xl">
        <p className="gsap-fade-in opacity-0 text-xs md:text-sm font-orbitron uppercase text-[#7a00ff] mb-4 tracking-widest">// Phase 5: Final Initiation</p>
        <h2 className="gsap-fade-in opacity-0 text-5xl md:text-[6rem] leading-none font-orbitron font-black text-white mb-8 tracking-tighter">
          Start Your AI <br /> Hustle Journey.
        </h2>

        {/* Social Proof */}
        <div className="gsap-fade-in opacity-0 flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-white font-inter text-sm bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full">
            <Users size={18} className="text-[#00f0ff]" /> <span>1,000+ active learners</span>
          </div>
          <div className="flex items-center gap-2 text-white font-inter text-sm bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full">
            <Bell size={18} className="text-[#7a00ff]" /> <span>Daily AI earning tips</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="gsap-fade-in opacity-0 flex flex-col sm:flex-row gap-6 mb-24 w-full sm:w-auto">
          <button className="magnetic-button relative inline-flex items-center justify-center px-10 py-5 font-bold text-black uppercase tracking-widest bg-[#00f0ff] rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] group overflow-hidden transition-colors duration-500 w-full sm:w-auto">
            <span className="relative z-10 font-orbitron">Join Now</span>
          </button>
          <a href="#tools" className="inline-flex items-center justify-center px-10 py-5 font-bold text-white uppercase tracking-widest border border-white/20 hover:border-[#00f0ff] hover:text-[#00f0ff] rounded-full transition-all duration-300 w-full sm:w-auto font-orbitron">
            Explore Tools
          </a>
          <a href="#earning" className="inline-flex items-center justify-center px-10 py-5 font-bold text-white uppercase tracking-widest border border-white/20 hover:border-[#7a00ff] hover:text-[#7a00ff] rounded-full transition-all duration-300 w-full sm:w-auto font-orbitron">
            Start Earning
          </a>
        </div>

        {/* Email Capture */}
        <div className="flex flex-col items-center w-full max-w-lg mb-32 mx-auto border-t border-white/10 pt-16">
          <h3 className="text-2xl font-bold font-orbitron text-white mb-2">Get Free AI Tools List</h3>
          <p className="text-gray-400 font-inter text-sm mb-6 font-bold">Join our newsletter to receive weekly automation setups.</p>
          <form className="flex w-full relative" onSubmit={(e) => e.preventDefault()}>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="text-gray-400" size={20} />
            </div>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-white/90 border border-white/40 rounded-l-lg py-4 pl-12 pr-4 text-black font-bold focus:outline-none focus:border-[#00f0ff] transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-[#7a00ff] hover:bg-[#5a00ff] text-white px-8 font-orbitron uppercase tracking-wider rounded-r-lg transition-colors flex items-center gap-2 group shadow-[0_0_20px_rgba(122,0,255,0.4)]"
            >
              Access <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
      
      {/* Dissolve (Footer) */}
      <footer className="w-full mt-[10vh] border-t border-white/5 pt-12 pb-12 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-xs text-gray-500 font-orbitron z-10 pointer-events-auto px-12">
        <p className="mb-4 lg:mb-0">© 2026 AI Hustle Hub. System Complete.</p>
        <div className="flex gap-8">
          <span className="cursor-crosshair hover:text-white transition-colors duration-300">DATA POLICY</span>
          <span className="cursor-crosshair hover:text-[#00f0ff] transition-colors duration-300">DISCONNECT [x]</span>
        </div>
      </footer>
    </section>
  );
}
