"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { ReactNode, useState } from "react";

import { ExpandArrowRight } from "@/public/icons/ExpandArrowRight";

export default function Gallery({ items, id }: { items: ReactNode[]; id?: string }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % items.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + items.length) % items.length);
  };

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <>
      <div id={id} className="relative w-full min-w-full max-w-4xl mx-auto flex flex-col items-center">

        {/* ===== LEFT arrow (outside gallery) ===== */}
        <button
          onClick={prev}
          className="absolute left-[-50px] md:left-[-100px] top-1/2 -translate-y-1/2 z-10 
                   cursor-pointer"
        >
          <ExpandArrowRight className="rotate-180 w-10 h-10 text-zinc-600 hover:text-zinc-500" />
        </button>

        {/* ===== GALLERY WINDOW ===== */}
        <div className="relative flex items-center justify-center h-[500px] min-w-full w-full overflow-hidden">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1 }}
              layout
              className="w-full h-full flex items-center justify-center flex-none"
            >
              {items[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===== RIGHT arrow (outside gallery) ===== */}
        <button
          onClick={next}
          className="absolute right-[-50px] md:right-[-100px] top-1/2 -translate-y-1/2 z-10 
                cursor-pointer"
        >
          <ExpandArrowRight className="w-10 h-10 text-zinc-600 hover:text-zinc-500" />
        </button>

        {/* ===== DOT INDICATORS ===== */}
        <div className="absolute bottom-[-30px]">
          <div className="flex gap-2 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer
                  ${i === index
                    ? "bg-white scale-110"
                    : "bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
