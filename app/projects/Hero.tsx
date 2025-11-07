import { DM_Serif_Text, Josefin_Sans } from "next/font/google";
import { cubicBezier, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { useRouter } from "next/navigation";

const dmSerif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });
const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function Hero() {
  const router = useRouter();
  const r = useReducedMotion();
  const EASE = cubicBezier(0.25, 0.46, 0.45, 0.94);
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


  return (
    <section className={`${dmSerif.className} relative mx-auto max-w-7xl mt-40 isolate`}>
      {/* White heading in normal flow */}
      <motion.h1
        variants={headingVariants()}
        initial="hidden"
        animate="show"
        style={{ willChange: "transform" }}
        className={`relative text-9xl tracking-[0.02em] font-bold text-left text-white pl-[10%] mix-blend-difference z-10`}
      >
        Projects
      </motion.h1>

      <motion.button
        variants={headingVariants(true)}
        initial="hidden"
        animate="show"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(255,255,255,0.4)",
          backgroundColor: "#ffff",
          color: "#000",
        }}
        // style={{ willChange: "transform" }}
        className={`relative text-3xl bg-white text-black tracking-[0.02em] text-left mix-blend-difference z-10 rounded-3xl px-3 py-1 mt-[25%] ml-[19%] cursor-pointer border border-white/10 ${josefin.className}`}
        onClick={() => router.push("projects#projects-toc")}
      >
        view my work
      </motion.button>


      {/* VIDEO: pull up to overlap the heading by ~50px (adjust this) */}
      <motion.div
        variants={videoVariants}
        initial={r ? undefined : "hidden"}
        animate="show"
        className="relative w-full overflow-hidden shadow-lg -mt-[33.2%] pl-[23.05%] z-0"
      >
        <video
          ref={videoRef}
          className="w-full aspect-video object-cover"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://cdn.briannavance.com/sam-vance-website/assembly.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <motion.button
          variants={headingVariants(true)}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="absolute left-[19.5%] top-[25%] text-3xl bg-black text-white tracking-[0.02em] rounded-sm px-2 py-1 cursor-pointer overflow-hidden"
        >
          view my work
        </motion.button> */}
      </motion.div>
    </section>
  );
}