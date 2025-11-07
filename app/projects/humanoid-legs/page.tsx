"use client";

import { useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import { ScrollFadeIn } from "@/app/components/ScrollFadeIn";
import { useRef } from "react";

export default function HumanoidLegs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.15, 0.7, 0.85], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0.15, 0.7, 0.85], [50, 0, -50]);
  return (
    <div className="text-center">
      <div className="flex flex-col relative items-center mb-20 mt-40 min-h-screen">
        <div className="text-7xl">Humanoid Legs</div>

        <div className="flex justify-center gap-10 text-lg">
          <button>How it started</button>
          <button>Design Process</button>
          <button>Building the Legs</button>
        </div>
        {/* <Image src="/humanoid-legs/sketch-4.jpg" alt="" width={600} height={400} className="invert brightness-200 contrast-300 w-1/5 mt-24" /> */}
        <div className="flex justify-start mb-10 relative w-full mx-auto">
          {/* <Image src="/humanoid-legs/sketch-3.jpg" alt="Sketch of Humanoid Legs" width={600} height={400} className="invert brightness-200 contrast-300 w-1/4" />
          <Image src="/humanoid-legs/sketch-5.jpg" alt="" width={600} height={400} className="invert brightness-200 contrast-300 w-1/4" />

          <Image src="/humanoid-legs/sketch-2.jpg" alt="" width={600} height={400} className="invert brightness-200 contrast-300 w-1/4  " /> */}
        </div>
      </div>
      <p className="text-6xl">How It Started</p>

      <div className="flex relative">
        <div className="flex flex-col gap-24 text-3xl mt-30 mx-[27%]">

          <p>At the end of summer 2023, I broke my right ankle playing pickleball. I know. Pickleball. </p>
          <ScrollFadeIn>
            <Image src="/humanoid-legs/sketch-2.jpg" alt="" width={600} height={400} className="absolute left-10 invert brightness-200 contrast-300 w-1/6 " />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <Image src="/humanoid-legs/sketch-4.jpg" alt="" width={600} height={400} className="absolute right-10 top-150 invert brightness-200 contrast-300 w-1/6" />
          </ScrollFadeIn>
          <p>It was right before the first day of Fall Semester at BYU and for some reason, my classes were further apart than they had ever been.</p>
          <p>I was on crutches for several weeks before I got a knee scooter and let me tell you, the bruises in my armpits from traversing campus were horrible. Living on the third floor of an apartment complex with no elevator, I also had to carry stuff like groceries with my fingertips as I crutched up the stairs. It was a nightmare. </p>
          <p>I decided that I would build a one legged exoskeleton to walk for me, but after looking at parts, I knew I had nowhere near the budget. So I decided to build a miniature pair of legs that could walk on their own. I am still in the process of building these legs, but I have completed 2 versions so far.</p>
        </div>

      </div>
    </div>
  );
}