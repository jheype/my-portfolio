"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  FiArrowLeft, 
  FiGithub, 
  FiExternalLink, 
  FiLayers, 
  FiCpu, 
  FiCheckCircle, 
  FiTerminal 
} from "react-icons/fi";

import Navbar from "@/components/Navbar";
import { projectsData } from "@/data/projects";
import { Meteors } from "@/components/ui/Meteors";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default function ProjectPage({ params }: Props) {
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  if (!slug) return <div className="min-h-screen bg-black" />;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />

      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear_gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">

        {/* Breadcrumb / Back */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/40 hover:text-purple-400 transition-colours text-sm font-mono uppercase tracking-wider"
          >
            <FiArrowLeft /> Back to Terminal
          </Link>
        </motion.div>

        {/* --- PROJECT HERO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs"
            >
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              CASE STUDY: {project.slug.toUpperCase()}
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/60 font-light leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Links */}
            <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                >
                  Live Demo <FiExternalLink />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white font-medium transition-all"
                >
                  Source Code <FiGithub />
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Main Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-2 shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
            <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Column 1: Tech Stack */}
          <div className="md:col-span-1 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <FiCpu size={40} />
              </div>
              <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-6">
                System Specifications
              </h3>

              <div className="space-y-4">
                {project.stackDetails.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0"
                  >
                    <span className="text-sm text-white/60">{item.name}</span>
                    <span className="text-sm font-bold text-white">{item.icon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Challenge & Features */}
          <div className="md:col-span-2 space-y-8">
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/50 p-8">
              <div className="flex items-center gap-3 mb-4 text-purple-400">
                <FiLayers size={24} />
                <h3 className="text-xl font-bold text-white">The Challenge</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colours"
                >
                  <FiCheckCircle className="text-green-500 mt-1 shrink-0" />
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- GALLERY --- */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <FiTerminal className="text-purple-500" /> Interface Gallery
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]"
                >
                  <Image
                    src={img}
                    alt={`Screen ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-mono">
                      View Fullscreen
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* --- CTA --- */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/10 p-12 text-centre">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>
          <h3 className="text-2xl font-bold mb-4 relative z-10">
            Interested in this project?
          </h3>
          <p className="text-white/50 mb-8 relative z-10">
            Let’s build something similar for your business.
          </p>
          <a
            href="mailto:joaop.almeidac12@gmail.com"
            className="relative z-10 inline-flex px-8 py-3 rounded-xl bg-white text-black font-bold hover:scale-105 transition-transform"
          >
            Get in Touch
          </a>
        </div>

      </main>
    </div>
  );
}
