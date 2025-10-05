"use client";
import { useI18n } from "@/i18n/I18nProvider";

export default function CVButtons() {
  const { lang, t } = useI18n();
  const primaryHref = lang === "en" ? "/cv-en.pdf" : "/cv.pdf";
  return (
    <div className="inline-flex items-center gap-2">
      <a
        href={primaryHref}
        download
        className="inline-block rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white px-5 py-3 font-medium shadow-md hover:shadow-glow transition"
      >
        {t("cta.downloadCV")}
      </a>
      <div className="rounded-xl border border-brand-300/70 dark:border-brand-800/70 overflow-hidden flex">
        <a
          href="/cv-en.pdf"
          download
          className={[
            "px-3 py-3 text-sm font-medium transition",
            lang === "en" ? "bg-brand-600 text-white" : "bg-white/80 dark:bg-neutral-900/70 text-neutral-900 dark:text-neutral-100 hover:bg-brand-50/60 dark:hover:bg-brand-900/30",
          ].join(" ")}
        >
          EN
        </a>
        <a
          href="/cv.pdf"
          download
          className={[
            "px-3 py-3 text-sm font-medium transition border-l border-brand-300/60 dark:border-brand-800/60",
            lang === "pt" ? "bg-brand-600 text-white" : "bg-white/80 dark:bg-neutral-900/70 text-neutral-900 dark:text-neutral-100 hover:bg-brand-50/60 dark:hover:bg-brand-900/30",
          ].join(" ")}
        >
          PT
        </a>
      </div>
    </div>
  );
}
