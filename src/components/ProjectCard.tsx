import clsx from "clsx";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type ProjectCardProps = {
  title: string;
  desc: string;
  site?: string;
  repo?: string;
  previewSrc: string;
  previewType?: "image" | "video";
  className?: string;
  ctaLabel?: string; 
};

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url) || url.startsWith("mailto:") || url.startsWith("tel:");
}

export default function ProjectCard({
  title,
  desc,
  site,
  repo,
  previewSrc,
  previewType = "image",
  className = "",
  ctaLabel = "View project",
}: ProjectCardProps) {
  const href = site || repo || "#";
  const external = href !== "#" && isExternalUrl(href);

  return (
    <div
      className={clsx(
        "group relative rounded-2xl border transition",
        "border-neutral-200 bg-white/70 hover:border-brand-400 hover:bg-brand-50/40",
        "dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:bg-brand-900/20",
        "focus-within:ring-2 focus-within:ring-brand-500/60",
        className
      )}
    >
      {href !== "#" &&
        (external ? (
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${title}`} className="absolute inset-0 z-30" />
        ) : (
          <a href={href} aria-label={`Abrir ${title}`} className="absolute inset-0 z-30" />
        ))}

      <div className={clsx("m-3 rounded-xl overflow-hidden border relative","border-neutral-200 bg-white/70","dark:border-neutral-800 dark:bg-neutral-900/60")}>
        {previewType === "video" ? (
          <video className="w-full h-40 md:h-44 object-cover" src={previewSrc} autoPlay loop muted playsInline />
        ) : (
          <div className="relative w-full h-40 md:h-44">
            <Image src={previewSrc} alt={title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
          </div>
        )}

        {(site || repo) && (
          <>
            <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
            <div className="absolute right-2 top-2 z-40 flex gap-2 opacity-0 group-hover:opacity-100 transition">
              {site && (
                <a href={site} target="_blank" rel="noopener noreferrer" title="Abrir site"
                   className="inline-flex items-center justify-center rounded-lg bg-white/90 dark:bg-neutral-900/90 p-2 text-neutral-900 dark:text-neutral-50 hover:bg-white dark:hover:bg-neutral-800">
                  <FiExternalLink />
                </a>
              )}
              {repo && (
                <a href={repo} target="_blank" rel="noopener noreferrer" title="Abrir repositório"
                   className="inline-flex items-center justify-center rounded-lg bg-white/90 dark:bg-neutral-900/90 p-2 text-neutral-900 dark:text-neutral-50 hover:bg-white dark:hover:bg-neutral-800">
                  <FiGithub />
                </a>
              )}
            </div>
          </>
        )}
      </div>

      <div className="px-4 pb-4 relative z-10 pointer-events-none">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
        <div className={clsx("relative mt-1 text-sm text-neutral-900/90 dark:text-neutral-100/90","overflow-hidden transition-all duration-300","max-h-12 group-hover:max-h-36","[mask-image:linear-gradient(to_bottom,black_80%,transparent)] group-hover:[mask-image:none]")}>
          {desc}
        </div>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-700 dark:text-brand-400 opacity-0 group-hover:opacity-100 transition">
          {ctaLabel} <span aria-hidden>→</span>
        </span>
      </div>
    </div>
  );
}
