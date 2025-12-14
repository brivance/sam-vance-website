"use client";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen text-center">
      <h1 className="text-8xl font-medium text-center mt-40 mb-10">get in touch</h1>
      <h2 className="text-2xl max-w-5xl mx-auto">
        Thanks for visiting my portfolio website! For more information, check out my different social media profiles below.
      </h2>
      <div className="flex flex-row justify-center mt-20 gap-6">
        <FaGithub
          className="text-7xl mx-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer"
          onClick={() => window.open("https://github.com/scvance")}
        />
        <FaLinkedin
          className="text-7xl mx-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer"
          onClick={() => window.open("https://www.linkedin.com/in/samuel-vance")}
        />
      </div>
    </main>
  );
}


