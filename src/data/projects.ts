export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  coverImage: string; 
  gallery: string[];  
  features: string[];
  challenges: string;
  stackDetails: { name: string; icon: string }[];
};

export const projectsData: Project[] = [
  {
    slug: "barbearia-hefziba",
    title: "Hefziba Barbershop",
    subtitle: "End-to-End Barbershop Management SaaS",
    description:
      "A production-grade SaaS platform designed to digitise and streamline barbershop operations. The system combines customer-facing booking, an advanced administrative dashboard, financial tracking, inventory control, and automated WhatsApp notifications into a single, cohesive workflow.",
    tags: ["Next.js", "MongoDB", "Prisma", "Tailwind"],
    liveUrl: "https://barbeariahefziba.com/",
    repoUrl: "https://github.com/jheype/barbershop",
    coverImage: "/barbearia.gif",
    gallery: [
      "/barbearia-mobile.png",
      "/barbearia-admin.png",
      "/barbearia-login.png"
    ],
    features: [
      "Real-Time Appointment Booking with Conflict Prevention",
      "Administrative Dashboard for Barbers and Staff",
      "Financial Tracking and Operational Metrics",
      "Inventory Management with Automated Alerts",
      "Role-Based Authentication and Access Control",
      "WhatsApp API Integration for Customer Notifications"
    ],
    challenges:
      "The core challenge was designing a robust scheduling engine capable of preventing race conditions when multiple clients attempt to book the same time slot concurrently. This was addressed through atomic database transactions and strict consistency guarantees at the persistence layer.",
    stackDetails: [
      { name: "Frontend", icon: "Next.js 14 (App Router)" },
      { name: "Styling", icon: "Tailwind CSS + Framer Motion" },
      { name: "Database", icon: "MongoDB with Prisma ORM" },
      { name: "Authentication", icon: "NextAuth.js" }
    ]
  },
    {
    slug: "jigbot",
    title: "JIGBot",
    subtitle: "Multi-Tenant Discord Commerce & Automation Platform",
    description:
        "A multi-tenant Discord automation platform designed for digital commerce and community operations. JIGBot enables server owners to create stores, manage payments, handle ticket-based workflows, and automate fulfilment directly within Discord, while maintaining isolation and scalability across multiple servers.",
    tags: ["Node.js", "Discord.js", "Stripe", "Docker"],
    repoUrl: "https://github.com/jheype/jigbot",
    coverImage: "/jigbot.gif",
    gallery: [
        "/jigbot-cmd.png",
        "/jigbot-music.png"
    ],
    features: [
        "Multi-Tenant Store System Per Discord Server",
        "Product Management with Stock Control",
        "Integrated Checkout and Payment Flows",
        "Automated and Manual Order Fulfilment",
        "Ticket-Based Support and Purchase Workflows",
        "Role-Based Permissions and Server-Level Configuration"
    ],
    challenges:
        "The main challenge was designing a multi-tenant architecture capable of isolating stores, payments, and ticket workflows per Discord server, while sharing the same runtime. This required strict tenant boundaries, careful state management, and reliable synchronisation between Discord interactions and backend persistence.",
    stackDetails: [
        { name: "Core Runtime", icon: "Node.js" },
        { name: "Discord API", icon: "Discord.js v14" },
        { name: "Database", icon: "PostgreSQL" },
        { name: "Payments", icon: "Stripe Integration" },
        { name: "Deployment", icon: "Docker Containers" }
    ]
    }
];
