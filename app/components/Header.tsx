"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Josefin_Sans, MuseoModerno } from "next/font/google";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "@/public/icons/Menu";
import { useState } from "react";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: "400" });
const moderno = MuseoModerno({ subsets: ["latin"], weight: "400" });
const projectLinks = [
  { name: "humanoid legs", href: "/projects/humanoid-legs" },
  { name: "self-playing flute", href: "/projects/self-playing-flute" },
  { name: "ai light-painter", href: "/projects/ai-light-painter" },
];

export default function Header() {
  const [hover, setHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`${moderno.className} font-semibold absolute top-0 inset-x-0 z-50`}>
      <div className={`justify-between mx-auto flex text-3xl items-center px-10 py-4`}>
        <Link href="/" className={`-ml-4 font-semibold tracking-wide`}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className={`flex gap-16 items-center text-2xl`}>
            <li>
              <Link href="/" className="inline-block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded">
                <h2>home</h2>
              </Link>
            </li>
            {/* <li>
              <Link href="/" className="inline-block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded">
                timeline
              </Link>
            </li> */}
            <li className="relative group" onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
              <Link
                href="/projects"
                className="inline-block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
              >
                <h2>projects</h2>
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {hover && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute left-0 pt-2 w-56 text-white -ml-6 rounded-lg shadow-lg overflow-hidden"
                  >
                    {projectLinks.map((proj) => (
                      <li key={proj.href}>
                        <Link
                          href={proj.href}
                          className="block px-5 py-2 text-lg hover:scale-105 transition-transform duration-200 bg-blackish"
                        >
                          <h2>{proj.name}</h2>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li>
              <Link href="/contact" className="inline-block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded">
                <h2>contact</h2>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden text-cream">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded hover:bg-white/10 transition"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <Menu className="w-8 h-8 text-dark-brown" />
          </button>
          {menuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setMenuOpen(false)}
              />
              <div className="absolute right-6 mt-2 w-40 bg-dark-brown rounded-lg shadow-lg z-50">
                <ul className="flex flex-col p-4 space-y-3 text-lg">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setMenuOpen(false)}
                      className="block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                    >
                      <h2>home</h2>
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/"
                      onClick={() => setMenuOpen(false)}
                      className="block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                    >
                      timeline
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="/"
                      onClick={() => setMenuOpen(false)}
                      className="block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                    >
                      <h2>projects</h2>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                    >
                      <h2>contact me</h2>
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}