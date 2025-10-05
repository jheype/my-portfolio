"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionaries, type Locale, type Dict } from "./dictionaries";

type Ctx = {
  lang: Locale;
  setLang: (l: Locale) => void;
  t: (path: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

function getByPath(obj: unknown, path: string): string | undefined {
  let cur: unknown = obj;
  for (const key of path.split(".")) {
    if (typeof cur !== "object" || cur === null) return undefined;
    cur = (cur as Record<string, unknown>)[key];
  }
  return typeof cur === "string" ? cur : undefined;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>("en");

  useEffect(() => {
    const stored =
      (typeof window !== "undefined" &&
        (localStorage.getItem("lang") as Locale | null)) || null;
    const initial: Locale = stored === "pt" || stored === "en" ? stored : "en";
    setLangState(initial);
    document.documentElement.lang = initial === "en" ? "en" : "pt-BR";
  }, []);

  const setLang = useCallback(
    (l: Locale) => {
      setLangState(l);
      try {
        localStorage.setItem("lang", l);
      } catch {
        /* ignore */
      }
      document.documentElement.lang = l === "en" ? "en" : "pt-BR";
    },
    [setLangState]
  );

  const dict: Dict = useMemo(() => dictionaries[lang], [lang]);

  const t = useCallback((key: string) => getByPath(dict, key) ?? key, [dict]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider />");
  return ctx;
}
