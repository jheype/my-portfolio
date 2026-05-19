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
    tags: ["Next.js", "MongoDB", "Prisma", "Tailwind", "Redis"],
    liveUrl: "https://barbeariahefziba.com/",
    repoUrl: "https://github.com/jheype/barbershop",
    coverImage: "/barbearia.gif",
    gallery: [
      "/barbearia/barbearia-page.png",
      "/barbearia/dashboard-home.png",
      "/barbearia/remunaration.png",
      "/barbearia/work-hours.png"
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
      "/jigbot/jigbot-dash.png",
      "/jigbot/jigbot-store.png",
      "/jigbot/jigbot-ticket.png",
      "/jigbot/jigbot-stripe.png"
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
  },
  {
    slug: "brighton2bahia",
    title: "Brighton2Bahia",
    subtitle: "International Travel & Cultural Experience Platform",
    description:
      "A modern web platform designed to present Brighton2Bahia as an international cultural and travel experience brand. The project focuses on strong visual storytelling, responsive navigation, service presentation, and a polished user journey for visitors interested in discovering experiences between Brighton and Bahia.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    liveUrl: "https://brighton2bahia.vercel.app/",
    repoUrl: "https://github.com/jheype/brighton2bahia",
    coverImage: "/brighton2bahia.gif",
    gallery: [
      "/brighton2bahia/home.png",
      "/brighton2bahia/releaes.png",
      "/brighton2bahia/about.png",
      "/brighton2bahia/footer.png"
    ],
    features: [
      "Responsive Landing Page with Strong Visual Identity",
      "Service and Experience Presentation Sections",
      "Animated Page Transitions and Scroll-Based Interactions",
      "SEO-Friendly Structure for Organic Discovery",
      "Mobile-First Interface Optimised for International Visitors",
      "Contact Flow Designed to Convert Visitors into Leads"
    ],
    challenges:
      "The main challenge was creating a visual identity that connects two distinct cultural locations while keeping the experience clean, fast, and easy to navigate. The interface needed to balance strong imagery, storytelling, performance, and conversion-focused sections without feeling like a generic travel website.",
    stackDetails: [
      { name: "Frontend", icon: "Next.js" },
      { name: "Language", icon: "TypeScript" },
      { name: "Styling", icon: "Tailwind CSS" },
      { name: "Animations", icon: "Framer Motion" },
      { name: "SEO", icon: "Metadata + Semantic Structure" }
    ]
  },
  {
    slug: "nodus",
    title: "Nodus",
    subtitle: "Real-Time AI Content Moderation for Streamers",
    description:
      "A desktop application built to protect livestreams from accidental exposure to sensitive content. Nodus captures the user's screen, detects nudity and violence locally using ONNX models, applies automatic blur in real time, and can send the processed output to OBS through a virtual camera pipeline.",
    tags: ["Rust", "ONNX", "AI", "OBS"],
    repoUrl: "https://github.com/jheype/nodus",
    coverImage: "/nodus.png",
    gallery: [
      "/nodus/home.png",
      "/nodus/settings.png",
    ],
    features: [
      "Real-Time Screen Capture and Content Filtering",
      "Local AI Detection Using ONNX Runtime",
      "Automatic Blur for Nudity and Violence",
      "30+ FPS Multi-Threaded Processing Pipeline",
      "F12 Global Hotkey for Pause and Resume",
      "OBS Integration Through Named Pipe Output",
      "Configurable Blur Radius, Confidence Threshold, FPS and Monitor Selection",
      "Offline-First Processing with No Server Dependency"
    ],
    challenges:
      "The main challenge was designing a low-latency processing pipeline capable of capturing the screen, running AI inference, applying blur, and updating the output without blocking the livestream. This required a multi-threaded architecture with separate capture, detection, and blur stages, careful channel capacity management, and local-first inference to preserve both performance and privacy.",
    stackDetails: [
      { name: "Language", icon: "Rust" },
      { name: "AI Runtime", icon: "ONNX Runtime" },
      { name: "Screen Capture", icon: "DXGI Capture" },
      { name: "Interface", icon: "egui" },
      { name: "OBS Integration", icon: "Named Pipe Virtual Camera" },
      { name: "Architecture", icon: "Multi-Threaded Pipeline" }
    ]
  }
];