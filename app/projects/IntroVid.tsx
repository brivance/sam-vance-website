"use client";

import { cubicBezier, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function IntroVid() {
  const r = useReducedMotion();
  const EASE = cubicBezier(0.25, 0.46, 0.45, 0.94);

  function headingVariants(button = false) {
    return {
      hidden: { x: r ? 0 : -200, opacity: r ? 1 : 0 },
      show: { x: 0, opacity: 1, transition: { delay: button ? 0 : 0.2, duration: 0.9, ease: EASE } },
    };
  }

  const videoVariants = {
    hidden: { x: r ? 0 : 160, opacity: r ? 1 : 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.9, ease: EASE, delay: 0.05 } },
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 } // play only if at least 25% visible
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);


  return (

    <section className={`${josefin.className} flex flex-col gap-4 justify-end relative max-w-7xl mt-100 isolate mx-44`}>
      <motion.h1
        variants={headingVariants()}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          ease: [0.2, 0.8, 0.2, 1.0],
        }}
        viewport={{ once: false, amount: 0.80 }}
        className={`relative text-4xl tracking-[0.02em] text-right text-white mix-blend-difference z-10 w-full`}
      >
        Highlights from years of building, tinkering, and creating.
      </motion.h1>
      <motion.div
        variants={videoVariants}
        initial={{ opacity: 0, y: 20, x: -10 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          duration: 1,
          ease: [0.2, 0.8, 0.2, 1.0],
        }}
        viewport={{ once: false, amount: 0.20 }}
        className="relative overflow-hidden shadow-lg z-0"
      >
        <video
          className="w-full aspect-video object-cover pt-20"
          ref={videoRef}
          rel="preload"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://cdn.briannavance.com/sam-vance-website/sam-inventions-short.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}