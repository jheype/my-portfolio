"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function HeroVisual({
  src = "/me.jpg",
  alt = "Minha foto",
}: {
  src?: string;
  alt?: string;
}) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.15, type: "spring" }}
    >
      <div className="relative aspect-square rounded-3xl border border-brand-300 dark:border-brand-800 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 768px) 40vw, 90vw"
          className="object-cover"
        />

        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-br from-brand-400/10 to-brand-600/10
            dark:from-brand-500/20 dark:to-brand-700/20
            dark:mix-blend-multiply
          "
        />

        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10" />
      </div>
    </motion.div>
  );
}
