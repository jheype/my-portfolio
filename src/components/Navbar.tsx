"use client";
import Link from "next/link";
import { Bitcount_Prop_Double } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useI18n } from "@/i18n/I18nProvider";

const bitCount = Bitcount_Prop_Double({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"],
});

export default function Navbar() {
  const { t } = useI18n();

  const items = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#stack", label: t("nav.stack") },
    { href: "#projetos", label: t("nav.projects") },
    { href: "#sobre", label: t("nav.about") },
    { href: "#contato", label: t("nav.contact") },
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
          bg-gradient-to-b from-brand-300/30 to-transparent
          dark:from-brand-900/45 dark:to-transparent
        "
      />
      <nav className="container-custom flex h-16 items-center justify-between gap-3">
        <Link href="#inicio" className={`${bitCount.className} text-xl font-semibold text-brand-400`}>
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

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
