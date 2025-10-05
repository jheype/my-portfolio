"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";
import SplitText from "@/components/SplitText";
import RotatingText from "@/components/RotatingText";
import Background from "@/components/Background";
import HeroVisual from "@/components/HeroVisual";
import TechCard from "@/components/TechCard";
import ProjectCard from "@/components/ProjectCard";
import CVButtons from "@/components/CVButtons";
import { useI18n } from "@/i18n/I18nProvider";

/* Ícones */
import { SiTypescript, SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiC, SiLua, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { LuDatabase } from "react-icons/lu";

export default function HomePage() {
  const { t, lang } = useI18n();
  const rotating = ["Full-Stack", "TypeScript", "Next.js", "TailwindCSS"];

  const projects = [
    {
      title: "Barbearia Hefziba – Admin Panel",
      desc_en: "Full-stack scheduling system (Next + Prisma + MongoDB) with services dashboard, time slots and auth. Subtle animations and responsive UI.",
      desc_pt: "Sistema de agendamentos full-stack (Next + Prisma + MongoDB) com painel de serviços, horários e autenticação. Animações sutis e UI responsiva.",
      site: "https://barbershop-ebon-three.vercel.app/",
      repo: "https://github.com/jheype/barbershop",
      previewSrc: "/barbearia.gif",
      previewType: "image" as const,
    },
    {
      title: "Fuvest Planner",
      desc_en: "Study planner with quiz generation, progress tracking and custom themes. Built with Next.js and ShadCN.",
      desc_pt: "Planner de estudos com geração de quizzes, rastreio de progresso e temas customizáveis. Construído com Next.js e ShadCN.",
      site: "",
      repo: "https://github.com/jheype/fuvest-planner",
      previewSrc: "/fuvest.png",
      previewType: "image" as const,
    },
    {
      title: "Flutter Finance",
      desc_en: "Personal finance app with categories, recurrences and purple dark theme. Charts integration and export.",
      desc_pt: "App de finanças pessoais com categorias, recorrências e tema dark roxo. Integração com gráficos e exportação.",
      site: "",
      repo: "https://github.com/jheype/flutter-finances",
      previewSrc: "/flutter.png",
      previewType: "image" as const,
    },
  ];

  const stack = [
    { title: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { title: "Next.js", icon: <SiNextdotjs className="text-neutral-900 dark:text-neutral-100" /> },
    { title: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { title: "TailwindCSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { title: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { title: "MongoDB", icon: <SiMongodb className="text-[#10A35F]" /> },
    { title: "HeidiSQL", icon: <LuDatabase className="text-[#f59e0b]" /> },
    { title: "C", icon: <SiC className="text-[#A8B9CC]" /> },
    { title: "Lua", icon: <SiLua className="text-[#2C2D72]" /> },
    { title: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { title: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
    { title: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  ];

  return (
    <>
      <Background />
      <Navbar />

      {/* HERO */}
      <AnimatedSection id="inicio" className="container-custom pt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-4xl md:text-6xl font-extrabold leading-tight text-neutral-900 dark:text-white">
              <SplitText text="João Almeida" className="mb-2" />
              <div className="mt-2 flex items-center gap-2 md:gap-3">
                <RotatingText
                  texts={rotating}
                  mainClassName="inline-flex items-center rounded-md px-2 sm:px-2.5 md:px-3 py-0.5 bg-brand-700 text-white border border-brand-500/60 text-sm sm:text-base md:text-lg"
                  staggerFrom="last"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-120%", opacity: 0 }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  elementLevelClassName="text-white"
                />
                <span className="text-neutral-900 dark:text-neutral-100 text-base sm:text-lg md:text-xl">
                  {t("hero.developer")}
                </span>
              </div>
            </div>

            <p className="mt-5 text-neutral-900 dark:text-neutral-100 max-w-xl">
              {t("hero.bio")}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Badge>{t("badges.freelance")}</Badge>
              <Badge>{t("badges.open")}</Badge>
              <Badge>{t("badges.langs")}</Badge>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a href="#projetos" className="inline-block rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white px-5 py-3 font-medium shadow-md hover:shadow-glow transition">
                {t("cta.viewProjects")}
              </a>
              <a href="#contato" className="inline-block rounded-xl border border-brand-300 px-5 py-3 font-medium bg-white/80 dark:bg-neutral-900/70 text-neutral-900 dark:text-neutral-100 hover:border-brand-400 hover:bg-brand-50/60 dark:hover:bg-brand-900/30 transition">
                {t("cta.contact")}
              </a>

              {/* CV */}
              <CVButtons />
            </div>
          </div>

          <HeroVisual />
        </div>
      </AnimatedSection>

      {/* STACK */}
      <AnimatedSection id="stack" className="container-custom">
        <SectionHeading title={t("stack.title")} subtitle={t("stack.subtitle")} />
        <div role="list" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {stack.map((tch) => (
            <TechCard key={tch.title} title={tch.title} icon={tch.icon} />
          ))}
        </div>
      </AnimatedSection>

      {/* PROJETOS */}
      <AnimatedSection id="projetos" className="container-custom">
        <SectionHeading title={t("projects.title")} subtitle={t("projects.subtitle")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              desc={lang === "en" ? p.desc_en : p.desc_pt}
              site={p.site}
              repo={p.repo}
              previewSrc={p.previewSrc}
              previewType={p.previewType}
              ctaLabel={t("project.view")}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* CONTATO */}
      <AnimatedSection id="contato" className="container-custom pb-24">
        <div className="rounded-3xl border border-brand-300/60 dark:border-brand-800 p-10 text-center bg-gradient-to-br from-brand-50/60 to-white/50 dark:from-neutral-900/60 dark:to-neutral-900/50">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50">{t("contact.title")}</h3>
          <p className="mt-2 text-neutral-900 dark:text-neutral-100">{t("contact.subtitle")}</p>
          <a href="mailto:joaop.almeidac12@gmail.com" className="mt-6 inline-block rounded-xl bg-brand-600 text-white px-6 py-3 font-medium">
            {t("contact.emailButton")}
          </a>
        </div>
      </AnimatedSection>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 relative z-10">
        <div className="container-custom py-8 text-sm text-neutral-900 dark:text-neutral-100 flex items-center justify-between">
          <span>© {new Date().getFullYear()} João Almeida</span>
          <a href="#inicio" className="link-underline">{t("footer.backToTop")}</a>
        </div>
      </footer>
    </>
  );
}
