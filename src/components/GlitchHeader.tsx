"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function GlitchHeader({ text }: { text: string }) {
  const [isGlitching, setIsGlitching] = useState(false);

  // Aciona o glitch aleatoriamente
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, Math.random() * 5000 + 2000);
    return () => clearInterval(interval);
  }, []);

  const glitchVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
    glitch: {
      opacity: [1, 1, 1],
      x: [0, -5, 5, -2, 0],
      y: [0, 2, -2, 0],
      textShadow: [
        "none",
        "2px 0 #00fff9, -2px 0 #ff00c1",
        "-2px 0 #00fff9, 2px 0 #ff00c1",
        "none",
      ],
      transition: { duration: 0.2, times: [0, 0.2, 0.4, 1] },
    },
  };

  return (
    <motion.h1
      className="text-5xl md:text-8xl font-black tracking-tighter text-white relative inline-block"
      animate={isGlitching ? "glitch" : "visible"}
      variants={glitchVariants}
    >
      {text}
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-purple-500 opacity-70 -translate-x-[3px] translate-y-[1px] mix-blend-screen pointer-events-none animate-pulse">
            {text}
          </span>
          <span className="absolute top-0 left-0 text-cyan-500 opacity-70 translate-x-[3px] -translate-y-[1px] mix-blend-screen pointer-events-none animate-pulse">
            {text}
          </span>
        </>
      )}
    </motion.h1>
  );
}