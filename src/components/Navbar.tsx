"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);

  const items = [
    { href: "#inicio", label: "Início" },
    { href: "#stack", label: "Stack" },
    { href: "#projetos", label: "Projetos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className="
        sticky top-0 z-10 border-b border-neutral-200/70 dark:border-neutral-800/70
        backdrop-blur supports-[backdrop-filter]:bg-transparent relative
      "
    >
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-b from-brand-700/35 to-transparent
          dark:from-brand-900/45 dark:to-transparent
        "
      />

      <nav className="container-custom flex h-16 items-center justify-between">
        <Link href="#inicio" className="font-semibold text-brand-400">
          JP.dev
        </Link>

        <ul className="hidden md:flex gap-6 text-sm">
          {items.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className="link-underline transition-colors
                           text-neutral-900 dark:text-neutral-100
                           hover:text-brand-700 dark:hover:text-brand-400"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setDark((v) => !v)}
          className="cursor-pointer rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-sm hover:shadow-glow
                     text-neutral-900 dark:text-neutral-100 transition-all"
        >
          {dark ? (
            <span className="inline-flex items-center gap-2"><FiSun /> Light</span>
          ) : (
            <span className="inline-flex items-center gap-2"><FiMoon /> Dark</span>
          )}
        </button>
      </nav>
    </header>
  );
}
