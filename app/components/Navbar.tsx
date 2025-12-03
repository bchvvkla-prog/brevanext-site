"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/40 backdrop-blur-xl border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO + BRAND NAME */}
        <a href="/" className="flex items-center gap-6">

          {/* Logo */}
          <Image
            src="/services/BrevaNext_logo.png"
            alt="BrevaNext Logo"
            width={40}
            height={40}
            className="object-contain scale-[1.85] translate-y-[3.5px]"
          />

          {/* BRAND NAME */}
          <span
            className="
              text-2xl font-extrabold tracking-wide
              bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              bg-clip-text text-transparent
            "
          >
            BrevaNext
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium text-sm">
          <a
            href="/#about"
            className="
              hover:text-transparent 
              hover:bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              hover:bg-clip-text transition
            "
          >
            About
          </a>

          <a
            href="/solutions"
            className="
              hover:text-transparent 
              hover:bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              hover:bg-clip-text transition
            "
          >
            Solutions
          </a>

          <a
            href="/#industries"
            className="
              hover:text-transparent 
              hover:bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              hover:bg-clip-text transition
            "
          >
            Industries
          </a>

          <a
            href="#footer-contact"
            className="
              hover:text-transparent 
              hover:bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              hover:bg-clip-text transition
            "
          >
            Contact
          </a>

          <a
            href="/careers"
            className="
              hover:text-transparent 
              hover:bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              hover:bg-clip-text transition
            "
          >
            Careers
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10 px-6 pb-4 space-y-1">
          <a href="/#about" className="block py-2 border-b border-white/10">About</a>
          <a href="/solutions" className="block py-2 border-b border-white/10">Solutions</a>
          <a href="/#industries" className="block py-2 border-b border-white/10">Industries</a>
          <a href="#footer-contact" className="block py-2 border-b border-white/10">Contact</a>
          <a href="/careers" className="block py-2">Careers</a>
        </div>
      )}
    </motion.nav>
  );
}
