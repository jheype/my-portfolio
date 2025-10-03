"use client";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/motion";
import { PropsWithChildren, useEffect } from "react";
import clsx from "clsx";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: PropsWithChildren<{ className?: string; delay?: number; id?: string }>) {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80, easing: "ease-out-quart" });
  }, []);

  return (
    <motion.section
      id={id}
      className={clsx("section", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger(0.12, delay)}
      data-aos="fade-up"
    >
      <motion.div variants={fadeInUp(0)}>{children}</motion.div>
    </motion.section>
  );
}
