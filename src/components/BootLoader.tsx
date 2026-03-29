"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootLoader() {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const lines = [
    "INITIALIZING KERNEL...",
    "ESTABLISHING NEURAL LINK...",
    "DECRYPTING MATRICES...",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    // Sequence the text changes
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev < lines.length - 1 ? prev + 1 : prev));
    }, 600);

    // Fade out loader after 3 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [lines.length]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-orbitron"
        >
          <div className="text-left w-full max-w-sm px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 border-t-2 border-r-2 border-[#00f0ff] animate-spin mb-8 shadow-[0_0_15px_#00f0ff]"
            ></motion.div>
            
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: i <= textIndex ? 1 : 0, x: i <= textIndex ? 0 : -10 }}
                transition={{ duration: 0.2 }}
                className={`${i === lines.length - 1 ? "text-[#00f0ff] font-bold mt-4 text-xl" : "text-gray-500 text-sm"} mb-2 tracking-widest`}
              >
                &gt; {line}
              </motion.div>
            ))}
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-gray-700 uppercase tracking-[0.5em]">
            AI Hustle Hub OS v1.0.0
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
