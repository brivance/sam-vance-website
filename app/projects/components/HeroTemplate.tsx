"use client";

import { KeyboardDoubleArrowDown } from "@/public/icons/KeyboardDoubleArrowDown";

export type HeroProps = {
  projectTitle: string;
  partOneTitle: string;
  partOneDescription: string;
  partTwoTitle: string;
  partTwoDescription: string;
  partThreeTitle: string;
  partThreeDescription: string;
};

export const HeroTemplate = ({ projectTitle, partOneTitle, partOneDescription, partTwoTitle, partTwoDescription, partThreeTitle, partThreeDescription }: HeroProps) => {

  return (
    <div>
      <h1 className="text-5xl md:text-8xl">{projectTitle}</h1>
      <div className="flex md:flex-row flex-col md:gap-4 max-w-lg w-9/10 md:max-w-6xl md:mt-20 mt-10 justify-between mx-auto">
        <div className="flex flex-col gap-1 items-center md:w-1/3 w-full">
          <a href="#initial-concept" className="flex flex-col gap-1 text-start items-start bg-zinc-800 rounded-sm p-2 md:p-4 peer cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(225,225,225,0.5)]">
            <h2 className="text-xl font-semibold">
              {partOneTitle}
            </h2>
            <p>{partOneDescription}</p>
          </a>
          <KeyboardDoubleArrowDown className="opacity-0 peer-hover:opacity-100 transition-opacity duration-300 mt-4 animate-float text-white/50" />
        </div>
        <div className="flex flex-col gap-1 items-center md:w-1/3">
          <a href="#process" className="flex flex-col gap-1 items-start text-start bg-zinc-800 rounded-sm p-2 md:p-4 peer cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(225,225,225,0.5)]">
            <h2 className="text-xl font-semibold">
              {partTwoTitle}
            </h2>
            <p>{partTwoDescription}</p>
          </a>
          <KeyboardDoubleArrowDown className="opacity-0 peer-hover:opacity-100 transition-opacity duration-300 mt-4 animate-float text-white/50" />
        </div>
        <div className="flex flex-col gap-1 items-center md:w-1/3">
          <a href="#results" className="flex flex-col gap-1 text-start items-start bg-zinc-800 rounded-sm p-2 md:p-4 peer cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(225,225,225,0.5)]">
            <h2 className="text-xl font-semibold">
              {partThreeTitle}
            </h2>
            <p>{partThreeDescription}</p>
          </a>
          <KeyboardDoubleArrowDown className="opacity-0 peer-hover:opacity-100 transition-opacity duration-300 mt-4 animate-float text-white/50" />
        </div>
      </div>
    </div>
  );
}