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

/* Ícones */
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiC,
  SiLua,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { LuDatabase } from "react-icons/lu";

export default function HomePage() {
  const rotating = ["Full-Stack", "TypeScript", "Next.js", "TailwindCSS"];

  const projects = [
    {
      title: "Barbearia Hefziba – Painel Admin",
      desc:
        "Sistema de agendamentos full-stack (Next + Prisma + MongoDB) com painel de serviços, horários e autenticação. " +
        "Inclui animações sutis e UI responsiva.",
      site: "https://barbershop-ebon-three.vercel.app/",
      repo: "https://github.com/jheype/barbershop",
      previewSrc: "https://media.discordapp.net/attachments/721365699821305898/1423760354907000872/Screenshot_1.png?ex=68e17ba8&is=68e02a28&hm=f5c57107b3a2d7cedc03c396307e4d4a7336feb1cc30386da281a83251692d3f&=&format=webp&quality=lossless&width=688&height=310",
      previewType: "image" as const,
    },
    {
      title: "Fuvest Planner",
      desc:
        "Planner de estudos com geração de quizzes, rastreio de progresso e temas customizáveis. Construído com Next.js e ShadCN.",
      site: "",
      repo: "https://github.com/jheype/fuvest-planner",
      previewSrc: "https://media.discordapp.net/attachments/721365699821305898/1423761068605440061/image.png?ex=68e17c52&is=68e02ad2&hm=070cc8253ea36ffbc246eb0ef0ebbb38a1982f1ffb235419e6d0f14b240007c3&=&format=webp&quality=lossless&width=1761&height=800",
      previewType: "image" as const,
    },
    {
      title: "Flutter Finanças",
      desc:
        "App de finanças pessoais com categorias, recorrências e tema dark roxo. Integração com gráficos e exportação.",
      site: "",
      repo: "https://github.com/jheype/flutter-finances",
      previewSrc: "https://media.discordapp.net/attachments/721365699821305898/1423764015691333683/Screenshot_2.png?ex=68e17f11&is=68e02d91&hm=2cdeaeee8a716e9d5eec8cc8b3861982ef377ee76110432487fef9ddf7cfbafb&=&format=webp&quality=lossless&width=1665&height=800",
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
            <div className="text-4xl md:text-6xl font-extrabold leading-tight">
              <SplitText text="João Pedro" className="mb-2" />
              <div className="mt-2 flex items-center gap-2 md:gap-3">
                <RotatingText
                  texts={rotating}
                  mainClassName="
                    inline-flex items-center rounded-md
                    px-2 sm:px-2.5 md:px-3 py-0.5
                    bg-brand-700 text-white border border-brand-500/60
                    text-sm sm:text-base md:text-lg
                  "
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
                  Developer
                </span>
              </div>
            </div>

            <p className="mt-5 text-neutral-900 dark:text-neutral-100 max-w-xl">
              Programador há <strong>6 anos</strong>. Inglês avançado e português nativo.
              Especialista em TypeScript, Next.js e Tailwind.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Badge>Freelance / Remoto</Badge>
              <Badge>Open to Work</Badge>
              <Badge>PT-BR / EN-UK</Badge>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="#projetos"
                className="inline-block rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white px-5 py-3 font-medium shadow-md hover:shadow-glow transition"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="inline-block rounded-xl border border-brand-300 px-5 py-3 font-medium
                           bg-white/80 dark:bg-neutral-900/70
                           text-neutral-900 dark:text-neutral-100
                           hover:border-brand-400 hover:bg-brand-50/60 dark:hover:bg-brand-900/30 transition"
              >
                Fale comigo
              </a>
            </div>
          </div>

          <HeroVisual />
        </div>
      </AnimatedSection>

      {/* STACK */}
      <AnimatedSection id="stack" className="container-custom">
        <SectionHeading title="Stack" subtitle="Tecnologias que uso no dia a dia." />
        <div role="list" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {stack.map((t) => (
            <TechCard key={t.title} title={t.title} icon={t.icon} />
          ))}
        </div>
      </AnimatedSection>

      {/* PROJETOS */}
      <AnimatedSection id="projetos" className="container-custom">
        <SectionHeading title="Projetos em Destaque" subtitle="Alguns trabalhos e experimentos recentes." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p) => {
            const url = p.site || p.repo || "#";
            return (
              <ProjectCard
                key={p.title}
                title={p.title}
                desc={p.desc}
                url={url}
                previewSrc={p.previewSrc}
                previewType={p.previewType}
              />
            );
          })}
        </div>
      </AnimatedSection>

      {/* CONTATO */}
      <AnimatedSection id="contato" className="container-custom pb-24">
        <div className="rounded-3xl border border-brand-300/60 dark:border-brand-800 p-10 text-center
                        bg-gradient-to-br from-brand-50/60 to-white/50 dark:from-neutral-900/60 dark:to-neutral-900/50">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
            Vamos trabalhar juntos?
          </h3>
          <p className="mt-2 text-neutral-900 dark:text-neutral-100">
            Open to Work.
          </p>
          <a
            href="mailto:joaop.almeidac12@gmail.com"
            className="mt-6 inline-block rounded-xl bg-brand-600 text-white px-6 py-3 font-medium"
          >
            joaop.almeidac12@gmail.com
          </a>
        </div>
      </AnimatedSection>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 relative z-10">
        <div className="container-custom py-8 text-sm text-neutral-900 dark:text-neutral-100 flex items-center justify-between">
          <span>© {new Date().getFullYear()} João Almeida</span>
          <a href="#inicio" className="link-underline">Voltar ao topo</a>
        </div>
      </footer>
    </>
  );
}
