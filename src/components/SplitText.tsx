"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  text: string;
  className?: string; 
  delay?: number;     
};

export default function SplitText({ text, className = "", delay = 0.05 }: Props) {
  const chars = Array.from(text);

  return (
    <div className={clsx("leading-none tracking-tight", className)} aria-label={text}>
      <span className="sr-only">{text}</span>
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "0.6em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 26, delay: i * delay }}
          className="inline-block align-baseline text-inherit"
          aria-hidden="true"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </div>
  );
}
