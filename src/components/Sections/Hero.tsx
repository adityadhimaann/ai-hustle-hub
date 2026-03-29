import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[120vh] flex flex-col justify-center items-center pointer-events-none"
    >
      <div className="container mx-auto px-6 z-10 text-center pointer-events-auto mix-blend-exclusion">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          className="text-xs md:text-sm font-orbitron uppercase text-[#00f0ff] mb-4"
        >
          System Initialized // Birth of AI
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          className="text-6xl md:text-[8rem] leading-none font-black font-orbitron uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] mb-4"
        >
          AI Hustle Hub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="text-xl md:text-2xl font-light text-gray-400 font-inter"
        >
          Enter the Future of <span className="text-white font-bold ml-1">Earning.</span>
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 2, delay: 2.5 }}
           className="mt-24 animate-pulse flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#00f0ff] to-transparent"></div>
          <span className="text-gray-600 text-xs uppercase tracking-[0.2em] font-orbitron">Descend</span>
        </motion.div>
      </div>
    </section>
  );
}
