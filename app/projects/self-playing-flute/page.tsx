"use client";

import { Body } from "./Body";
import { Hero } from "./Hero";

export default function SelfPlayingFlute() {
  return (
    <div className="text-center">
      <div className="flex flex-col relative items-center mb-20 mt-40 min-h-screen">
        <Hero />
        <Body />
      </div>
    </div>
  );
}