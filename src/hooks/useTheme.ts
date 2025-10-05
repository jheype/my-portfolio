import { useCallback, useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "theme";

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
  if (meta) meta.content = mode === "dark" ? "dark light" : "light dark";
}

function systemPrefersDark(): boolean {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function readInitialTheme(): ThemeMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored === "dark" || stored === "light") return stored;
  } catch {
  }
  return systemPrefersDark() ? "dark" : "light";
}

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const initial = readInitialTheme();
    setMode(initial);
    applyTheme(initial);
  }, []);

  const setTheme = useCallback((next: ThemeMode) => {
    setMode(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
    }
    applyTheme(next);
  }, []);

  const toggle = useCallback(() => {
    setTheme(mode === "dark" ? "light" : "dark");
  }, [mode, setTheme]);

  const isDark = mode === "dark";

  return { mode, isDark, setTheme, toggle };
}
