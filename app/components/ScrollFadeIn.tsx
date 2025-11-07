"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

export function ScrollFadeIn({ children, offset = [0.3, 0.5, 0.7] }: { children: React.ReactNode; offset?: number[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, offset, [0, 1, 0]);
  const y = useTransform(scrollYProgress, offset, [50, 0, -50]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="will-change-transform will-change-opacity"
    >
      {children}
    </motion.div>
  );
}
