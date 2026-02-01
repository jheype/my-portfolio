"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Navbar from "@/components/Navbar"; 
import BootTerminal from "@/components/BootTerminal";
import GlitchHeader from "@/components/GlitchHeader";
import Spotlight from "@/components/ui/Spotlight";
import { Meteors } from "@/components/ui/Meteors";

import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiExternalLink, FiTerminal, FiLayout, FiShield } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiKalilinux } from "react-icons/si";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const shimmerStyle = {
  backgroundImage: "linear-gradient(110deg, #000 45%, #4c1d95 55%, #000)",
  backgroundSize: "200% 100%",
  animation: "shimmer 2s linear infinite",
};

function PortfolioContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const stackY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const projectsY = useTransform(scrollYProgress, [0, 0.8], ["10%", "0%"]);

  return (
    <div ref={containerRef} className="relative bg-[#030303] text-white min-h-[200vh] overflow-hidden">
      
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {/* Background Fixo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear_gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-purple-600/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-cyan-600/10 blur-[150px] rounded-full"></div>
      </div>

      <Navbar />

      {/* --- HERO SECTION --- */}
      <motion.section 
        style={{ y: heroY }} 
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-40 overflow-hidden"
      >
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 z-10" fill="#8b5cf6" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
           <Meteors number={15} />
        </div>
        
        <motion.div
           initial="hidden"
           animate="visible"
           variants={staggerContainer}
           className="text-center relative z-20"
        >
          <motion.div variants={fadeInUp} className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             <span className="text-xs font-mono text-white/60 tracking-widest uppercase">System Online</span>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <GlitchHeader text="JOÃO ALMEIDA" />
          </motion.div>
          
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Full-Stack Developer crafting high-performance digital experiences & CyberSec Enthusiast.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex gap-4">
                <SocialIcon icon={<FiGithub />} href="https://github.com/jheype" />
                <SocialIcon icon={<FiLinkedin />} href="https://linkedin.com/in/jheype" />
                <SocialIcon icon={<FiMail />} href="mailto:joaop.almeidac12@gmail.com" />
            </div>
          </motion.div>
        </motion.div>

         <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 animate-bounce text-white/20"
         >
            <FiArrowDown size={24} />
         </motion.div>
      </motion.section>

      {/* --- STACK SECTION (THE ARSENAL) --- */}
      <motion.section 
         id="stack"
         style={{ y: stackY }}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.2 }}
         variants={staggerContainer}
         className="relative z-10 py-32 px-4"
      >
         <div className="max-w-6xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl -z-10"></div>
            
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-16 font-mono flex items-center gap-3">
               <span className="text-purple-500">{">"}</span> THE_ARSENAL
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
               {[
                 { icon: <SiNextdotjs size={32} />, name: "Next.js" },
                 { icon: <SiReact size={32} className="text-cyan-400" />, name: "React" },
                 { icon: <SiTypescript size={32} className="text-blue-500" />, name: "TypeScript" },
                 { icon: <SiTailwindcss size={32} className="text-cyan-300" />, name: "Tailwind" },
                 { icon: <SiNodedotjs size={32} className="text-green-500" />, name: "Node.js" },
                 { icon: <SiMongodb size={32} className="text-green-400" />, name: "MongoDB" },
                 { icon: <FiTerminal size={32} className="text-white" />, name: "DevOps" },
                 { icon: <FiLayout size={32} className="text-purple-400" />, name: "UI/UX" },
                 { icon: <SiKalilinux size={32} className="text-white" />, name: "Kali Linux" },
                 { icon: <FiShield size={32} className="text-red-500" />, name: "CyberSec" },
               ].map((tech, i) => (
                 <motion.div key={i} variants={fadeInUp}>
                   <TechTile icon={tech.icon} name={tech.name} />
                 </motion.div>
               ))}
            </div>
         </div>
      </motion.section>

       {/* --- PROJECTS SECTION (SELECTED WORKS) --- */}
       <motion.section
          id="projetos"
          style={{ y: projectsY }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="relative z-10 py-32 px-4 bg-[#030303]/80 backdrop-blur-md border-t border-white/5"
       >
          <div className="max-w-7xl mx-auto">
             <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-16 font-mono flex items-center gap-3 justify-end text-right">
               SELECTED_WORKS <span className="text-cyan-500">{"<"}</span>
            </motion.h2>
             
             {/* GRID LAYOUT CUSTOMIZADO */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                
                {/* 1. Barbearia Hefziba */}
                <motion.div variants={fadeInUp} className="lg:col-span-2">
                  <ProjectCardCyber 
                     title="Barbearia Hefziba"
                     tags={["NEXT.JS", "MONGODB", "PRISMA"]}
                     desc="Complete scheduling system with admin dashboard, finance tracking and automated reminders."
                     color="purple"
                     href="https://barbershop-ebon-three.vercel.app/"
                     className="h-full"
                  />
                </motion.div>
                
                {/* 2. JIGBot (Destaque Vertical) */}
                <motion.div variants={fadeInUp} className="lg:col-span-1">
                  <ProjectCardCyber 
                     title="JIGBot"
                     tags={["NODE.JS", "DISCORD.JS", "AI"]}
                     desc="Advanced Discord bot for server management and automation."
                     color="cyan"
                     href="#" 
                     className="h-full"
                  />
                </motion.div>

                {/* 3. Brighton2Bahia (Banner Full Width) */}
                <motion.div variants={fadeInUp} className="lg:col-span-3">
                  <ProjectCardCyber 
                     title="Brighton2Bahia"
                     tags={["NEXT.JS", "FRAMER MOTION", "AUDIO"]}
                     desc="Immersive music portfolio bridging UK Garage and Brazilian rhythms. High-end animations and parallax effects."
                     color="purple"
                     href="#" 
                     className="h-full"
                  />
                </motion.div>

                {/* 4. Instituto Zavarise (Secundário) */}
                <motion.div variants={fadeInUp} className="lg:col-span-2">
                  <ProjectCardCyber 
                     title="Instituto Zavarise"
                     tags={["REACT", "SEO", "UI"]}
                     desc="High-performance institutional website focused on accessibility and conversion."
                     color="cyan"
                     href="https://instituto-zavarise.vercel.app"
                     className="h-full"
                  />
                </motion.div>

                {/* 5. Bruna Almeida Psi (Secundário) */}
                <motion.div variants={fadeInUp} className="lg:col-span-1">
                  <ProjectCardCyber 
                     title="Bruna Almeida Psi"
                     tags={["FRAMER", "UX", "SEO"]}
                     desc="Minimalist landing page for clinical psychology."
                     color="purple"
                     href="https://brunalmeidapsi.com"
                     className="h-full"
                  />
                </motion.div>
             </div>
          </div>
       </motion.section>
       
       {/* --- CONTACT SECTION --- */}
       <motion.section 
          id="contato"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-40 px-4 relative overflow-hidden"
        >
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
           <Meteors number={25} />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to start a project?</h2>
          <p className="text-white/40 mb-12 text-lg">Currently open for freelance work and collaborations.</p>
          
          <a 
            href="mailto:joaop.almeidac12@gmail.com"
            style={shimmerStyle}
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 px-10 font-medium text-white transition-transform hover:scale-105 active:scale-95 text-lg"
          >
            Get in Touch
          </a>
        </div>
      </motion.section>

      <footer className="py-8 border-t border-white/5 text-center text-white/20 text-sm font-mono relative z-10 bg-black">
        <p>&copy; {new Date().getFullYear()} João Almeida. Built with Next.js & Tailwind.</p>
      </footer>
        
       <div className="h-[10vh] bg-black"></div>
    </div>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
   return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 transition-all text-white/70 hover:text-white hover:scale-110 group">
         <div className="group-hover:text-purple-400 transition-colors">
            {icon}
         </div>
      </a>
   )
}

function TechTile({ icon, name }: { icon: React.ReactNode, name: string }) {
   return (
      <motion.div 
         whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
         className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-[#0a0a0a] hover:border-purple-500/30 transition-colors group"
      >
         <div className="mb-4 opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">{icon}</div>
         <span className="font-mono text-sm text-white/40 group-hover:text-white transition-colors">{name}</span>
      </motion.div>
   )
}

function ProjectCardCyber({ title, tags, desc, color, href, className = "" }: { title: string, tags: string[], desc: string, color: "purple" | "cyan", href: string, className?: string }) {
   const borderColor = color === "purple" ? "hover:border-purple-500/50" : "hover:border-cyan-500/50";
   const textColor = color === "purple" ? "text-purple-500" : "text-cyan-500";
   const bgColor = color === "purple" ? "hover:bg-purple-500/5" : "hover:bg-cyan-500/5";

   return (
      <motion.a 
         href={href}
         target="_blank"
         whileHover={{ scale: 1.01 }}
         className={`block group relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden transition-all duration-300 ${borderColor} ${bgColor} ${className}`}
      >
         <div className="h-48 bg-white/5 relative overflow-hidden flex items-center justify-center border-b border-white/5">
            <div className={`absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-transparent to-${color === "purple" ? "purple" : "cyan"}-500/10 opacity-50`}></div>
            <FiLayout size={40} className="text-white/10 group-hover:text-white/20 transition-colors" />
            
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
               {tags.map(t => (
                 <span key={t} className="text-[10px] font-bold px-2 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-md text-white/70">
                   {t}
                 </span>
               ))}
            </div>
         </div>
         
         <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <h3 className={`text-xl font-bold mb-2 group-hover:text-white transition-colors`}>{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{desc}</p>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity mt-auto">
               <span className={textColor}>{">"}</span> VIEW_PROJECT.exe <FiExternalLink />
            </div>
         </div>
         
         {/* Scanline Effect */}
         <div className={`absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_51%)] bg-[size:100%_3px] opacity-0 group-hover:opacity-10 transition-opacity mix-blend-overlay`}></div>
      </motion.a>
   )
}

export default function HomePage() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <>
      <BootTerminal onComplete={() => setIsBooting(false)} />
      {!isBooting && <PortfolioContent />}
    </>
  );
}