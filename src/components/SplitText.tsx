"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
  delay?: number;
};

export default function SplitText({ text, className = "", delay = 0.05 }: Props) {
  return (
    <div className={clsx("leading-none tracking-tight", className)}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "1.1em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: i * delay,
          }}
          className="inline-block bg-clip-text text-transparent bg-white"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </div>
  );
}
