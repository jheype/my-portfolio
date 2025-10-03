# Portfolio — Full-Stack (Next.js + TypeScript + Tailwind v4)

Portfolio pessoal com animações inspiradas no **React Bits**, tema roxo, e foco em performance e acessibilidade.

https://my-portfolio-mocha-eight-40.vercel.app/

---

## ✨ Destaques

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS v4** com tokens via `@theme` em `src/app/globals.css`
- **Animações**
  - `motion` (RotatingText) — texto rotativo com stagger e spring
  - `framer-motion` + **AOS** (AnimatedSection) — entradas suaves on-scroll
  - **GSAP** (DotGrid) — background de pontos com inércia, choque e proximidade
- **Tema roxo** com gradientes e alto contraste (modo claro/escuro)
- **Seção de projetos**: card → mini-card de **preview** (imagem/GIF/vídeo) + descrição que **expande no hover**
- **Stack** como **cards com ícones** (react-icons)
- **Navbar** com **gradiente full-width** e blur

---

## 🧱 Stack

- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript
- **Estilos:** Tailwind CSS **v4** (`@import "tailwindcss"`)
- **Animações:** `motion`, `framer-motion`, `aos`, `gsap`
- **Ícones:** `react-icons`

> Requisitos: Node 18+ (recomendado 20+)

---

## 🚀 Começando

```bash
# 1) Instale dependências
npm i

# 2) Dependências específicas de animação
npm i motion framer-motion aos gsap react-icons

# 3) Dev
npm run dev

# 4) Build/Start
npm run build
npm start
