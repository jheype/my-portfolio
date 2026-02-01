import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "João Almeida – Full-Stack Developer (TS/Next.js)",
  description: "Portfólio com Next.js, Tailwind, Motion/Framer e AOS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`min-h-dvh antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
