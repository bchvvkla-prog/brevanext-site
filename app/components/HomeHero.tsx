"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function HomeHero() {
  return (
    <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* HEADLINE */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-center md:text-left">
            <span className="bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              bg-clip-text text-transparent drop-shadow">
              Empowering Businesses
            </span>
            <br />
            <span className="bg-[linear-gradient(to_right,#3FA9F5,#9A5CF5,#FF4FD8)]
              bg-clip-text text-transparent">
              with AI & Automation
            </span>
          </h1>

          {/* SUBLINE */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-6">
            BrevaNext enables organizations to automate smarter, scale faster, and operate intelligently
            using next-generation AI and automation solutions.
          </p>

          {/* BULLETS */}
          <div className="space-y-3 text-gray-300 text-sm md:text-base mb-10">
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-[#5DF0FF]" />
              Enterprise-grade AI automation for all industries
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-[#5DF0FF]" />
              Scalable cloud, ML, and automation pipelines
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-[#5DF0FF]" />
              Custom AI copilots, workflows, and analytics
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="/solutions"
              className="px-6 py-3 bg-white/10 border border-white/20 
              text-white rounded-lg hover:bg-white/20 transition font-medium"
            >
              Explore Solutions
            </a>
          </div>
        </motion.div>

        {/* RIGHT — CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          id="contact"
          className="glass p-8 rounded-2xl border border-white/10 
          shadow-[0_0_25px_#5DF0FF25] max-w-md mx-auto w-full"
        >
          <ContactForm />
        </motion.div>

      </div>
    </section>
  );
}
