"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-7xl mx-auto text-gray-300"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6 
            bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
            bg-clip-text text-transparent"
          >
            About BrevaNext
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            BrevaNext is an AI-native automation company helping organizations 
            modernize operations, scale intelligently, and unlock extraordinary 
            efficiency. We engineer intelligent systems that automate work, 
            enhance decision-making, and accelerate growth across industries.
          </p>

          <div className="space-y-6">

            {/* MISSION */}
            <div className="border-l-4 border-[#5DF0FF] pl-4">
              <h3 className="text-xl font-semibold
              bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5)]
              bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-gray-400 mt-2">
                To make AI-powered automation accessible, scalable, and 
                business-changing—empowering teams to do more with less effort.
              </p>
            </div>

            {/* VISION */}
            <div className="border-l-4 border-[#9A5CF5] pl-4">
              <h3 className="text-xl font-semibold
              bg-[linear-gradient(to_right,#3FA9F5,#9A5CF5)]
              bg-clip-text text-transparent">
                Our Vision
              </h3>
              <p className="text-gray-400 mt-2">
                To build a future where companies run on intelligent workflows, 
                real-time insights, and automation systems that continually learn 
                and improve.
              </p>
            </div>

            {/* WHY CHOOSE US */}
            <div className="border-l-4 border-[#FF4FD8] pl-4">
              <h3 className="text-xl font-semibold
              bg-[linear-gradient(to_right,#9A5CF5,#FF4FD8)]
              bg-clip-text text-transparent">
                Why Choose Us
              </h3>
              <p className="text-gray-400 mt-2">
                We combine deep technical expertise with business strategy—creating 
                automation solutions that reduce cost, eliminate inefficiency, and 
                deliver measurable ROI.
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT — Softer Glow Orb + Global Impact */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center"
        >

          {/* Soft Floating Orb */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.03, 1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="
              w-[280px] h-[280px] md:w-[360px] md:h-[360px]
              rounded-full blur-2xl opacity-40
              bg-[radial-gradient(circle,#4BDFF0,#4C90F2,#7E4CEF,#E842C7)]
              absolute
            "
          />

          {/* Foreground Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="
              relative z-10 p-10 rounded-3xl backdrop-blur-xl
              border border-white/10 bg-white/5 shadow-[0_0_20px_#5DF0FF15]
              max-w-sm text-center
            "
          >
            <h3
              className="text-3xl font-bold mb-4
                bg-[linear-gradient(to_right,#5DF0FF,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent"
            >
              Global Impact
            </h3>

            <p className="text-gray-300 leading-relaxed">
              From Phoenix to worldwide operations, BrevaNext helps enterprises, 
              fast-growth startups, and global teams build intelligent automation 
              ecosystems that scale across borders.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
