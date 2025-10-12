"use client";

import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import { Menu } from "@/public/icons/Menu";
import { useState } from "react";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`${josefin.className} font-semibold absolute top-0 inset-x-0 z-50`}>
      <div className={`justify-between mx-auto flex text-3xl items-center px-10 py-4`}>
        <Link href="/" className={`-ml-4 font-semibold tracking-wide`}>
          SV
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className={`flex gap-16 items-center text-2xl`}>
            <li>
              <Link href="/" className="inline-block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded">
                home
              </Link>
            </li>
            <li>
              <Link href="/" className="inline-block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded">
                timeline
              </Link>
            </li>
            <li>
              <Link href="/" className="inline-block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded">
                projects
              </Link>
            </li>
            <li>
              <Link href="/" className="inline-block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded">
                contact me
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
                      home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={() => setMenuOpen(false)}
                      className="block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                    >
                      timeline
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={() => setMenuOpen(false)}
                      className="block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                    >
                      projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={() => setMenuOpen(false)}
                      className="block hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                    >
                      contact me
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