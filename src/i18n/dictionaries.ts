export type Locale = "en" | "pt";

export type Dict = {
  nav: { home: string; stack: string; projects: string; about: string; contact: string };
  hero: { developer: string; bio: string };
  cta: { viewProjects: string; contact: string; downloadCV: string };
  stack: { title: string; subtitle: string };
  projects: { title: string; subtitle: string };
  contact: { title: string; subtitle: string; emailButton: string };
  project: { view: string };
  badges: { freelance: string; open: string; langs: string };
  footer: { backToTop: string };
};

export const dictionaries = {
  en: {
    nav: { home: "Home", stack: "Stack", projects: "Projects", about: "About", contact: "Contact" },
    hero: {
      developer: "Developer",
      bio: "Programmer for 6 years. Advanced English and native Portuguese. Specialist in TypeScript, Next.js and Tailwind."
    },
    cta: { viewProjects: "See Projects", contact: "Contact me", downloadCV: "Download CV" },
    stack: { title: "Stack", subtitle: "Technologies I use daily." },
    projects: { title: "Featured Projects", subtitle: "A few recent works & experiments." },
    contact: { title: "Shall we work together?", subtitle: "Open to Work.", emailButton: "Email me" },
    project: { view: "View project" },
    badges: { freelance: "Freelance / Remote", open: "Open to Work", langs: "PT-BR / EN-UK" },
    footer: { backToTop: "Back to top" }
  },
  pt: {
    nav: { home: "Início", stack: "Stack", projects: "Projetos", about: "Sobre", contact: "Contato" },
    hero: {
      developer: "Desenvolvedor",
      bio: "Programador há 6 anos. Inglês avançado e português nativo. Especialista em TypeScript, Next.js e Tailwind."
    },
    cta: { viewProjects: "Ver Projetos", contact: "Fale comigo", downloadCV: "Baixar CV" },
    stack: { title: "Stack", subtitle: "Tecnologias que uso no dia a dia." },
    projects: { title: "Projetos em Destaque", subtitle: "Alguns trabalhos e experimentos recentes." },
    contact: { title: "Vamos trabalhar juntos?", subtitle: "Open to Work.", emailButton: "Enviar email" },
    project: { view: "Ver projeto" },
    badges: { freelance: "Freelance / Remoto", open: "Open to Work", langs: "PT-BR / EN-UK" },
    footer: { backToTop: "Voltar ao topo" }
  }
} satisfies Record<Locale, Dict>;
