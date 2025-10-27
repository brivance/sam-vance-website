import { AnimatePresence, motion } from "framer-motion";

import { Josefin_Sans } from "next/font/google";
import { useState } from "react";

const josefin = Josefin_Sans({ subsets: ["latin"] });

const projects = [
  {
    title: "Humanoid Legs",
    left: "https://1zourvot3ixty7kd.public.blob.vercel-storage.com/inverse_kinematics.mp4",
    right: "https://1zourvot3ixty7kd.public.blob.vercel-storage.com/walking_legs_v1.mp4",
  },
  {
    title: "Self-Playing Flute",
    left: "https://1zourvot3ixty7kd.public.blob.vercel-storage.com/trimmed-flute.mp4",
    right: "https://1zourvot3ixty7kd.public.blob.vercel-storage.com/flute-playing.mp4",
  },
  {
    title: "AI Light-Painter",
    left: "https://1zourvot3ixty7kd.public.blob.vercel-storage.com/light.mp4",
    right: "https://1zourvot3ixty7kd.public.blob.vercel-storage.com/light-painter-trimmed.mp4",
  },
  // {
  //   title: "Project 4",
  //   left: "/previews/p4-left.jpg",
  //   right: "/previews/p4-right.jpg",
  // },
  // {
  //   title: "Project 5",
  //   left: "/previews/p5-left.jpg",
  //   right: "/previews/p5-right.jpg",
  // },
  // {
  //   title: "Project 6",
  //   left: "/previews/p6-left.jpg",
  //   right: "/previews/p6-right.jpg",
  // },
];

export default function TOC() {
  const [hovered, setHovered] = useState<number | null>(null);

  const current = hovered !== null ? projects[hovered] : null;


  return (
    <div id="projects-toc" className="relative">

      <motion.section
        className={`mx-auto max-w-7xl mt-80 px-10 py-10 mb-80 ${josefin.className} text-center`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.25, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-bold tracking-wide mb-20">
          Featured Projects
        </h2>

        {/* Project titles */}
        <div className="flex flex-col gap-14 text-3xl w-fit mx-auto">
          {projects.map((p, i) => (
            <span
              key={p.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`transition-colors duration-300 cursor-pointer ${hovered === i ? "text-gray-200 scale-105" : "text-white/80"
                }`}
            >
              {p.title}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Left preview */}
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key="left-preview"
            initial={{ opacity: 0, x: "-10vw" }}   // slides in from left
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-10vw" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-1/2 left-[8vw] -translate-y-1/2 h-[33vw] overflow-hidden"
          >
            {current.left.endsWith(".mp4") ? (
              <video
                src={current.left}
                className="w-full h-full"
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={current.left}
                alt="Preview left"
                className="object-cover w-full h-full"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right preview */}
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key="right-preview"
            initial={{ opacity: 0, x: "10vw" }}    // slides in from right
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "10vw" }}
            transition={{ duration: .3, ease: "easeOut" }}
            className="absolute top-1/2 right-[8vw] -translate-y-1/2 h-[33vw] overflow-hidden shadow-lg"
          >
            {current.right.endsWith(".mp4") || current.right.endsWith(".MP4") ? (
              <video
                src={current.right}
                className="object-cover w-full h-full"
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={current.right}
                alt="Preview right"
                className="object-cover w-full h-full"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
}