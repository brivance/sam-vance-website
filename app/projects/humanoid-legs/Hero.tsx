"use client";

import { KeyboardDoubleArrowDown } from "@/public/icons/KeyboardDoubleArrowDown";

export const Hero = () => {

  return (
    <div>
      <h1 className="text-5xl md:text-8xl">humanoid legs</h1>
      <div className="flex md:flex-row flex-col md:gap-4 max-w-lg w-9/10 md:max-w-6xl md:mt-20 mt-10 justify-between mx-auto">
        <div className="flex flex-col gap-1 items-center md:w-1/3 w-full">
          <a href="#initial-concept" className="flex flex-col gap-1 text-start items-start bg-zinc-800 rounded-sm p-2 md:p-4 peer cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(225,225,225,0.5)]">
            <h2 className="text-xl font-semibold">
              initial concept
            </h2>
            <p>here is a small description of how the initial concept was developed.</p>
          </a>
          <KeyboardDoubleArrowDown className="opacity-0 peer-hover:opacity-100 transition-opacity duration-300 mt-4 animate-float text-white/50" />
        </div>
        <div className="flex flex-col gap-1 items-center md:w-1/3">
          <a href="#process" className="flex flex-col gap-1 items-start text-start bg-zinc-800 rounded-sm p-2 md:p-4 peer cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(225,225,225,0.5)]">
            <h2 className="text-xl font-semibold">
              process
            </h2>
            <p>here is a small description of the process that was conducted for this project.</p>
          </a>
          <KeyboardDoubleArrowDown className="opacity-0 peer-hover:opacity-100 transition-opacity duration-300 mt-4 animate-float text-white/50" />
        </div>
        <div className="flex flex-col gap-1 items-center md:w-1/3">
          <a href="#results" className="flex flex-col gap-1 text-start items-start bg-zinc-800 rounded-sm p-2 md:p-4 peer cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(225,225,225,0.5)]">
            <h2 className="text-xl font-semibold">
              results
            </h2>
            <p>here is a small description of the results that were achieved for this project.</p>
          </a>
          <KeyboardDoubleArrowDown className="opacity-0 peer-hover:opacity-100 transition-opacity duration-300 mt-4 animate-float text-white/50" />
        </div>
      </div>
    </div>
  );
}