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

const text = "SAM VANCE";

const phrases = [
  "software engineer",
  "robotics engineer",
  "innovator",
  "genius",
  "mathematician",
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 5000); // 5s initial delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000); // duration before switching (ms)
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="relative h-[100vh] flex justify-start font-sans font-medium isolate pt-20 pb-14">
      <div className="flex flex-col px-[5%] mt-[10vh] w-2/3">
        <div className="flex justify-center w-full">
          <div className="flex flex-col justify-center pb-3 pt-4 items-center w-[55%]">
            <motion.div
              initial={{ opacity: 1, x: 125, y: 80 }} // Start slightly above and invisible
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 2.2, duration: 2 }}
            >
              <span className={`${dmSerif.className} text-9xl font-extrabold text-center whitespace-nowrap`}><Typewriter text={text} /></span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4 }}
            >
              <motion.p
                key={phrases[index]}
                className={`${josefin.className} mt-4 text-4xl text-center font-bold tracking-wider opacity-0`}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{
                  opacity: { duration: 0.5, ease: "easeInOut" },
                  y: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {phrases[index]}
              </motion.p>
            </motion.div>
          </div>
        </div>
        {/* <motion.div
          className="mt-[8%]"
          initial={{ opacity: 0, y: -60, scale: 2 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 5,
            type: "spring",
            stiffness: 120,
            damping: 12,
            mass: 0.8,
          }}
        >
          <button className={`${josefin.className} px-8 py-3 rounded-lg bg-dark-brown text-white font-semibold text-2xl transition`}>
            some call to action -{'>'}
          </button>
        </motion.div> */}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60, x: 30 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: hasLoaded ? 0 : 2.2, duration: hasLoaded ? .75 : 2, ease: "easeOut" }}
        className="absolute bottom-[25%] left-[40%] translate-x-1/2"
        viewport={{ once: false, amount: 0.5 }}
      >
        <Image
          src="/sam-vance2.png"
          alt="example"
          width={380}
          height={380}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60, x: 30 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: hasLoaded ? 0 : 2.4, duration: hasLoaded ? .75 : 2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="absolute bottom-[50%] right-[11%] translate-x-1/2"
      >
        <Image
          src="/legs.png"
          alt="example"
          width={200}
          height={200}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60, x: 30 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: hasLoaded ? 0 : 2.45, duration: hasLoaded ? .75 : 2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="absolute bottom-[5%] right-[13%] translate-x-1/2"
      >
        <Image
          src="/light-painting-robot.png"
          alt="example"
          width={200}
          height={200}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60, x: 30 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: hasLoaded ? 0 : 2.55, duration: hasLoaded ? .75 : 2, ease: "easeOut" }}
        className="absolute bottom-[5%] right-[35%] translate-x-1/2"
      >
        <Image
          src="/piano-game.png"
          alt="example"
          width={250}
          height={250}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60, x: 30 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: hasLoaded ? 0 : 2.65, duration: hasLoaded ? .75 : 2, ease: "easeOut" }}
        className="absolute bottom-[7%] right-[57%] translate-x-1/2"
      >
        <Image
          src="/sam-plays-flute.png"
          alt="example"
          width={170}
          height={170}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60, x: 30 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: hasLoaded ? 0 : 2.7, duration: hasLoaded ? .75 : 2, ease: "easeOut" }}
        className="absolute bottom-[60%] right-[27%] translate-x-1/2"
      >
        <Image
          src="/flying-robot.png"
          alt="example"
          width={200}
          height={200}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60, x: 30 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: hasLoaded ? 0 : 2.8, duration: hasLoaded ? .75 : 2, ease: "easeOut" }}
        className="absolute bottom-[15%] right-[75%] translate-x-1/2"
      >
        <Image
          src="/plane.png"
          alt="example"
          width={200}
          height={200}
        />
      </motion.div>
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
        viewport={{ once: false, amount: 0.3 }} // only triggers once when ~30% visible
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
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

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
      className="relative flex items-center justify-center bg-blackish py-32 overflow-hidden pb-300"
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