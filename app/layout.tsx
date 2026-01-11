import "./globals.css";

import { Josefin_Sans, MuseoModerno } from "next/font/google";

import Header from "./components/Header";
import type { Metadata } from "next";

const museo = MuseoModerno({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-museo",   // <-- gives you a CSS variable
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Sam Vance Portfolio",
  description: "Showcasing the latest in robotics and AI technology through innovative projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={museo.variable}>
      <body
        className={`${josefin.className} antialiased bg-blackish`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
