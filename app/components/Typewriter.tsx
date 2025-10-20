import { motion } from "framer-motion";

export const sentenceVariants = {
  hidden: {},
  // change staggerChildren variable to speed up or slow down typing.
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
};

type TypewriterProps = {
  text: string;
  playIntro: boolean;
  [key: string]: any;
};

export const Typewriter = ({ text, playIntro, ...rest }: TypewriterProps) => (
  <motion.p
    key={text}
    variants={playIntro ? sentenceVariants : { visible: { opacity: 1 } }}
    initial="hidden"
    animate="visible"
    {...rest}
  >
    {text.split("").map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </motion.p>
);