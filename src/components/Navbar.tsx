"use client";

import { useState, useEffect } from "react";
import { Bitcount_Prop_Double } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiTerminal } from "react-icons/fi";

const bitCount = Bitcount_Prop_Double({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

  type NavItem = {
    href: `#${string}` | `/${string}`;
    label: string;
  };

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Track scroll state
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items: NavItem[] = [
    { href: "/#inicio", label: "Home" },
    { href: "/#stack", label: "Stack" },
    { href: "/#projetos", label: "Projects" },
    { href: "/#contato", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
          ${
            isScrolled
              ? "bg-[#030303]/80 backdrop-blur-xl border-white/10 py-3"
              : "bg-transparent border-transparent py-5"
          }
        `}
      >
        <nav className="container-custom flex items-center justify-between px-4 md:px-6">
          {/* LOGO */}
          <a
            href="#inicio"
            className="group flex items-center gap-2 text-white transition-opacity hover:opacity-80"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-purple-500 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-colors">
              <FiTerminal />
            </div>
            <span className={`${bitCount.className} text-xl tracking-wide`}>
              JP<span className="text-purple-500">.dev</span>
            </span>
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-1">
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className="
                    group relative px-4 py-2 text-sm font-mono text-white/60 transition-colors
                    hover:text-white
                    before:absolute before:inset-0 before:rounded-lg before:bg-white/5 before:opacity-0 before:transition-opacity hover:before:opacity-100
                  "
                >
                  <span className="text-purple-500 opacity-0 transition-opacity group-hover:opacity-100 mr-1">
                    {">"}
                  </span>
                  {it.label}
                </a>
              </li>
            ))}
          </ul>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#030303] border-b border-white/10 overflow-hidden md:hidden"
          >
            <ul className="flex flex-col p-4 gap-2">
              {items.map((it) => (
                <li key={it.href}>
                  <a
                    href={it.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl bg-white/5 text-white/80 font-mono hover:bg-white/10 hover:text-purple-400 border border-white/5 transition-colors"
                  >
                    <span className="text-purple-500 mr-2">{">"}</span>
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
