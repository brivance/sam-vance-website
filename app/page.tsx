"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { DM_Serif_Text, Ephesis, Josefin_Sans } from "next/font/google";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { Typewriter } from "./components/Typewriter";

const josefin = Josefin_Sans({ subsets: ["latin"] });
// const exo = Exo_2({ subsets: ["latin"] });
const dmSerif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });
const ephesis = Ephesis({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className={josefin.className}>
      <Hero />
      <Body />
    </div>
  );
}

const initialDelay = 4.4; // seconds before first slide appears

const slides: Slide[] = [
  { src: "/flying-robot.png", alt: "", initialDelay: initialDelay },
  { src: "/legs.png", alt: "", initialDelay: initialDelay + 0.15 },
  { src: "/light-painting-robot.png", alt: "", initialDelay: initialDelay + 0.3 },
  { src: "/piano-game.png", alt: "", initialDelay: initialDelay + 0.45 },
  { src: "/plane.png", alt: "", initialDelay: initialDelay + 0.6 },
  { src: "/sam-plays-flute.png", alt: "", initialDelay: initialDelay + 0.75 },
  { src: "/legs-sprint.png", alt: "", initialDelay: initialDelay + 0.9 },
  // { src: "/Asset-8.png", alt: "" },
  // { src: "/Asset-16.png", alt: "" },
  // { src: "/Asset-7.png", alt: "" },
  // { src: "/Asset-2.png", alt: "" },
  // { src: "/Asset-9.png", alt: "" },
  // { src: "/Asset-13.png", alt: "" },
  // { src: "/Asset-1.png", alt: "" },
  // { src: "/Asset-17.png", alt: "" },
  // { src: "/Asset-3.png", alt: "" },
  // { src: "/Asset-19.png", alt: "" },
];

const phrases = [
  "mathematician",
  "robotics engineer",
  "software engineer",
  "innovator",
  "genius",
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [playIntro, setPlayIntro] = useState<boolean | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("introTimestamp");
    const oneDay = 24 * 60 * 60 * 1000;

    if (!lastShown || Date.now() - Number(lastShown) > oneDay) {
      setPlayIntro(true);
      localStorage.setItem("introTimestamp", Date.now().toString());
    } else {
      setPlayIntro(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
      setPlayIntro(false);
    }, 5000); // 5s initial delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3300); // duration before switching (ms)
    return () => clearInterval(interval);
  }, [phrases.length]);

  console.log("hasLoaded:", hasLoaded);
  console.log("playIntro:", playIntro);
  if (playIntro === null) return null;

  return (
    <section className="relative h-[100vh] font-sans font-medium pt-20 pb-14">
      <div className="flex flex-col px-[5%] mt-[10vh] w-full">
        <div className="flex justify-center gap-14 w-full">
          <div className="flex flex-col justify-center pb-3 pt-4 text-center">
            <motion.div
              initial={{ opacity: 1, x: playIntro ? 125 : 80, y: 80 }} // Start slightly above and invisible
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: playIntro ? 2.2 : 0, duration: playIntro ? 2.5 : .7 }}
            >
              <span className={`${dmSerif.className} text-9xl font-extrabold text-center whitespace-nowrap`}>
                {playIntro ? <Typewriter text="SAM VANCE" /> : <span>SAM VANCE</span>}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: playIntro ? 3.7 : .5 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={phrases[index]}
                  className={`${josefin.className} mt-4 text-4xl text-center font-bold tracking-wider`}
                  initial={{ opacity: 0, y: 0, x: 0 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{
                    opacity: { duration: playIntro ? .5 : 0.8, ease: "easeInOut" },
                    y: { duration: playIntro ? .5 : 0.8, ease: "easeInOut" },
                  }}
                >
                  {phrases[index]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40, x: 100 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: playIntro ? 2.2 : 0, duration: playIntro ? 2.5 : 0.75, ease: "easeOut" }}
            className=""
            viewport={{ once: false, amount: 0.5 }}
          >
            <Image
              src="/sam-vance2.png"
              alt="example"
              width={380}
              height={380}
              className="hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
        <div className="flex flex-col">
          <motion.div
            className="mt-[8%] text-center"
            initial={{ opacity: 0, y: playIntro ? 0 : 100, x: playIntro ? 0 : 50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 100, x: 50 }}
            transition={{ delay: playIntro ? 4 : 0, duration: .75, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <button className={`${josefin.className} text-3xl font-light rounded-4xl hover:border-gray-300 py-2 px-4 border border-white/10 transition-all hover:font-medium shadow-[#faf8ed]/30 shadow-[0_0_6px_rgba(255,255,255,0.25)] 
  hover:bg-[#faf8ed] hover:text-black hover:scale-105 duration-400 tracking-tighter
  hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]`}>
              check out my projects
            </button>
          </motion.div>
          <div className="relative z-10 mx-auto md:mt-8 max-w-5xl px-6">
            <ProductCarousel slides={slides} hasLoaded={hasLoaded} playIntro={playIntro} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Body() {
  return (
    <section className="bg-blackish mt-40">
      <motion.section
        className="bg-blackish mt-40"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.60 }} // only triggers once when ~30% visible
      >
        <div className="flex gap-5 mx-[15%] py-20 text-[2.75rem] my-30">
          <div className={`${ephesis.className} text-gray-600 text-[200px] -mt-20 mr-5`}>&ldquo;</div>
          <div className={`${dmSerif.className} flex flex-col leading-relaxed gap-14`}>
            <span>There is no chance, no destiny, no fate, that can circumvent, or hinder, or control the firm resolve of a determined soul.</span>
            <span>— Ella Wheeler Wilcox</span>
          </div>
        </div>
      </motion.section>
      <div className="mx-[10%] py-20">
        <OverlapSection />
        <OverlapSection2 />
        {/* <div className="">Right here there are some good things to say</div>
        <Image src="/sam-vance-forest.jpg" alt="" width={600} height={600} /> */}
      </div>
    </section>
  );

}


function OverlapSection() {
  const ref = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // when top hits bottom, when bottom hits top
  });

  // Parallax transform — image moves slower
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center bg-blackish"
    >
      <div className="flex items-center justify-center w-[80%] relative">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          style={{ y: textY }}
          className="relative z-10 w-3/4 text-center -mt-30"
        >
          <h2 className="text-[1.75rem] font-bold leading-tight text-gray-100">
            I love to build robots and I am so smart my name is Sam Vance and one day you will know me because I am famous. I am going to make a company that changes the world and therefore become very rich and buy a huge mansion wherever I desire. This is an ambition but also I know it will come true so it is also a destiny.
          </h2>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 180 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          style={{ y: imageY }}
          className="relative -ml-40 w-3/4 z-0"
        >
          <Image
            src="/sam-forest2.png"
            alt="Profile"
            width={800}
            height={600}
            className="rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

function OverlapSection2() {
  const ref = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // when top hits bottom, when bottom hits top
  });

  // Parallax transform — image moves slower
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center bg-blackish py-32 overflow-visible pb-40"
    >
      <div className="flex items-center justify-center w-[80%] relative">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          style={{ y: imageY }}
          className="relative z-0 w-3/4 text-center"
        >
          <Image
            src="/sam-meadows.png"
            alt="Profile"
            width={800}
            height={600}
            className="rounded-lg object-cover"
          />

        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 180 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          style={{ y: textY }}
          className="relative -ml-40 w-3/4 z-10 -mt-20"
        >
          <h2 className="text-[1.75rem] font-bold leading-tight text-gray-100">
            I love to build robots and I am so smart my name is Sam Vance and one day you will know me because I am famous. I am going to make a company that changes the world and therefore become very rich and buy a huge mansion wherever I desire. This is an ambition but also I know it will come true so it is also a destiny.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

type Slide = { src: string; alt: string, initialDelay: number };

function ProductCarousel({ slides, hasLoaded, playIntro }: { slides: Slide[], hasLoaded: boolean, playIntro: boolean | null }) {

  function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < breakpoint);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, [breakpoint]);

    return isMobile;
  }
  const isMobile = useIsMobile(768);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const DURATION = 4500; // ms per slide
  const CARDS_TO_SHOW = 5;
  const CARD_WIDTH = isMobile ? 144 : 176; // w-44 = 176px
  const GAP = 24; // gap-6 = 26px

  // Advance automatically using a re-arming timeout (avoids drift of setInterval)
  useEffect(() => {
    if (slides.length <= CARDS_TO_SHOW || paused) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), DURATION);
    return () => clearTimeout(id);
  }, [index, paused, slides.length]);

  // Pause when tab isn't visible
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Calculate the transform offset for smooth sliding
  const offset = -(index * (CARD_WIDTH + GAP));

  return (
    <div className="relative pb-35">
      {/* Stage */}
      <motion.div
        // Outer wrapper handles visibility (fade in/out) when scrolling
        initial={{ opacity: 0, y: hasLoaded ? 60 : 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onViewportLeave={(e) => {
          // optional: you can log when it fades out
          // console.log("Gallery scrolled out of view");
        }}
        className="relative w-full max-w-[976px] mx-auto overflow-hidden"
      >
        <div className="flex justify-center">
          {/* 5 cards * 176px + 4 gaps * 24px = 976px */}
          {/* 2 cards * 144px + 1 gaps * 24px = 312px */}
          <div className="relative w-[312px] md:w-[976px] overflow-hidden">
            <motion.div
              className="flex gap-6"
              // initial={{ opacity: 0, x: 50, y: 80 }}
              animate={{ x: offset }}
              transition={{ delay: playIntro ? 3 : 0, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              // whileInView={{ opacity: 1, x: 0, y: 0 }}         // fade/slide in when visible
              // exit={{ opacity: 0, x: 60 }}
              // viewport={{ once: false, amount: 0.6 }}
              aria-live="polite"
            >
              {/* Render extra cards for smooth infinite scrolling */}
              {[...slides, ...slides.slice(0, CARDS_TO_SHOW)].map((card, i) => (
                <motion.div
                  key={i}
                  className="relative aspect-[3/4] w-36 md:w-44 flex-shrink-0"
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: !playIntro ? card.initialDelay - 4.4 : card.initialDelay,
                    duration: 0.4,
                    ease: [0.2, 0.8, 0.2, 1.0],
                  }}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 256px, 200px"
                    className="object-contain rounded-lg shadow-lg"
                    priority={i < CARDS_TO_SHOW}
                  />
                  {/* <div className="absolute inset-0 bg-[#aba79e]/30"></div> */}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}