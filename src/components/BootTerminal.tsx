"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  "> INITIALIZING KERNEL...",
  "> LOADING MODULES: NEXT.JS, REACT, TAILWIND...",
  "> BYPASSING SECURITY PROTOCOLS...",
  "> ACCESSING DATABASE: JOAO_ALMEIDA_PORTFOLIO...",
  "> ESTABLISHING SECURE CONNECTION...",
  "> SUCCESS. WELCOME, USER.",
];

export default function BootTerminal({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= bootSequence.length) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 1000); // Tempo para a animação de saída
      }, 800);
      return;
    }

    const timer = setTimeout(() => {
      setLines((prev) => [...prev, bootSequence[currentLineIndex]]);
      setCurrentLineIndex((prev) => prev + 1);
    }, Math.random() * 400 + 200); // Tempo aleatório entre linhas

    return () => clearTimeout(timer);
  }, [currentLineIndex, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-[#050505] text-green-500 font-mono p-8 flex flex-col justify-end overflow-hidden"
        >
          <div className="h-full flex flex-col justify-end max-w-3xl mx-auto w-full">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-2 text-sm md:text-base"
              >
                <span className="text-purple-500 mr-2">root@server:~$</span>
                {line}
              </motion.div>
            ))}
             <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-5 bg-green-500 inline-block mt-2"
              />
          </div>
          {/* Scanline effect */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_51%)] bg-[size:100%_4px] opacity-20 z-10"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}