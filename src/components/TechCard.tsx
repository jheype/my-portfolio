import clsx from "clsx";
import React from "react";

export default function TechCard({
  title,
  icon,
  className = "",
}: {
  title: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="listitem"
      aria-label={title}
      className={clsx(
        "rounded-xl border p-5 transition",
        "border-neutral-200 bg-white/70 hover:border-brand-400 hover:bg-brand-50/50",
        "dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:bg-brand-900/20",
        className
      )}
    >
      <div className="text-3xl md:text-4xl">{icon}</div>
      <div className="mt-3 font-medium text-neutral-900 dark:text-neutral-50">{title}</div>
    </div>
  );
}
