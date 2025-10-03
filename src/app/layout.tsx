import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "João Almeida – Full‑Stack Developer (TS/Next.js)",
description: "Portfólio com Next.js, Tailwind, Framer Motion e AOS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="pt-BR">
<body>{children}</body>
</html>
);
}