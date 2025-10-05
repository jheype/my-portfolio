"use client";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      className="cursor-pointer rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-sm hover:shadow-glow
                 text-neutral-900 dark:text-neutral-100 transition-all inline-flex items-center gap-2"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light" : "Dark"}
    >
      {isDark ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
