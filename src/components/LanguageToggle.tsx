"use client";
import { useI18n } from "@/i18n/I18nProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-0.5 inline-flex">
      {(["en","pt"] as const).map(code => {
        const active = lang === code;
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={[
              "px-3 py-1 text-sm rounded-lg transition",
              active
                ? "bg-brand-600 text-white"
                : "text-neutral-900 dark:text-neutral-100 hover:bg-brand-50/60 dark:hover:bg-brand-900/30",
            ].join(" ")}
            aria-pressed={active}
            title={code.toUpperCase()}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
