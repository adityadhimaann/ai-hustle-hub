import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pointer-events-none"
    >
      <div className="container mx-auto px-6 z-10 text-center pointer-events-auto mt-20 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black font-orbitron uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-gray-400 mb-6 drop-shadow-[0_0_5px_rgba(0,240,255,0.4)]"
        >
          AI Hustle Hub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-xl md:text-3xl font-light text-gray-300 md:tracking-widest"
        >
          Build. <span className="text-[#00f0ff] font-bold">Automate.</span> Earn.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 2, delay: 1.5 }}
           className="mt-16 animate-bounce"
        >
          <span className="text-gray-500 text-sm uppercase tracking-[0.3em]">Scroll to Enter</span>
        </motion.div>
      </div>
    </section>
  );
}
