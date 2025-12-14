"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { ReactNode, useState } from "react";

export default function Gallery({ items }: { items: ReactNode[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  const new_items = [
    <div className="w-full h-full bg-red-500" />,
    <div className="w-full h-full bg-blue-500" />,
    <div className="w-full h-full bg-green-500" />,
  ];

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % items.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + items.length) % items.length);
  };

  interface SlideState {
    x: number;
    opacity: number;
    position: "absolute" | "relative";
  }

  type Direction = number;
  type SlideVariantFn = (direction: Direction) => SlideState;

  const variants: Variants = {
    enter: (direction: Direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction: Direction) => ({
      x: direction > 0 ? -150 : 150,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <div className="relative w-full min-w-full max-w-4xl mx-auto flex flex-col items-center">

      {/* ===== LEFT arrow (outside gallery) ===== */}
      <button
        onClick={prev}
        className="absolute left-[25px] md:left-[-50px] top-1/2 -translate-y-1/2 z-10 
                   px-3 pt-2 pb-1 bg-white/10 rounded hover:bg-white/20 cursor-pointer"
      >
        ◀
      </button>

      {/* ===== GALLERY WINDOW ===== */}
      <div className="relative flex items-center justify-center h-[200px] md:h-[500px] md:min-w-full w-9/10 md:w-full">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35 }}
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
        className="absolute right-[25px] md:right-[-50px] top-1/2 -translate-y-1/2 z-10 
                   px-3  pt-2 pb-1 bg-white/10 rounded hover:bg-white/20 cursor-pointer"
      >
        ▶
      </button>

      {/* ===== DOT INDICATORS ===== */}
      <div className="absolute bottom-[-15px] md:bottom-[-30px]">
        <div className="flex gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all 
                  ${i === index
                  ? "bg-white scale-110"
                  : "bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
