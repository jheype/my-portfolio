import React from "react";
import clsx from "clsx";

type ProjectCardProps = {
  title: string;
  desc: string;
  url: string;
  previewSrc: string; 
  previewType?: "image" | "video"; 
  className?: string;
};

export default function ProjectCard({
  title,
  desc,
  url,
  previewSrc,
  previewType = "image",
  className = "",
}: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "group block rounded-2xl border transition",
        "border-neutral-200 bg-white/70 hover:border-brand-400 hover:bg-brand-50/40",
        "dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:bg-brand-900/20",
        "focus:outline-none focus:ring-2 focus:ring-brand-500/60",
        className
      )}
    >
      <div
        className={clsx(
          "m-3 rounded-xl overflow-hidden border",
          "border-neutral-200 bg-white/70",
          "dark:border-neutral-800 dark:bg-neutral-900/60"
        )}
      >
        {previewType === "video" ? (
          <video
            className="w-full h-40 md:h-44 object-cover"
            src={previewSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            className="w-full h-40 md:h-44 object-cover"
            src={previewSrc}
            alt={title}
            loading="lazy"
          />
        )}
      </div>

      <div className="px-4 pb-4">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>

        <div
          className={clsx(
            "relative mt-1 text-sm text-neutral-900/90 dark:text-neutral-100/90",
            "overflow-hidden transition-all duration-300",
            "max-h-12 group-hover:max-h-36",
            "[mask-image:linear-gradient(to_bottom,black_80%,transparent)] group-hover:[mask-image:none]"
          )}
        >
          {desc}
        </div>

        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-700 dark:text-brand-400 opacity-0 group-hover:opacity-100 transition">
          Ver projeto <span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}
