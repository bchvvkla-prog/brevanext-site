"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#0B0F1A] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT — CORE NARRATIVE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2
            className="
              text-4xl md:text-5xl font-extrabold mb-6
              bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              bg-clip-text text-transparent
            "
          >
            About BrevaNext
          </h2>

          <p className="text-white/80 text-lg leading-relaxed max-w-xl">
            BrevaNext is an AI-native automation and intelligence firm that helps
            organizations modernize operations, reduce complexity, and scale
            with confidence.
          </p>

          {/* VALUE POINTS */}
          <div className="mt-10 space-y-6 max-w-xl">
            {[
              [
                "AI-first execution",
                "We design automation and intelligence systems built around real workflows — not demos or experiments."
              ],
              [
                "Business-aligned engineering",
                "Every solution is tied to operational goals, measurable outcomes, and long-term scalability."
              ],
              [
                "End-to-end ownership",
                "From strategy to implementation, we stay accountable for real business impact."
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="border-l-2 border-white/15 pl-4"
              >
                <p className="text-white font-semibold mb-1">
                  {title}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — STRATEGIC BLOCKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >

          {/* MISSION */}
          <div className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur">
            <h3
              className="
                text-xl font-semibold mb-2
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5)]
                bg-clip-text text-transparent
              "
            >
              Our Mission
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Make AI-powered automation accessible, scalable, and genuinely
              business-changing — enabling teams to do more with less effort.
            </p>
          </div>

          {/* VISION */}
          <div className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur">
            <h3
              className="
                text-xl font-semibold mb-2
                bg-[linear-gradient(to_right,#3FA9F5,#9A5CF5)]
                bg-clip-text text-transparent
              "
            >
              Our Vision
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              A future where organizations run on intelligent workflows,
              real-time insights, and systems that continuously learn and adapt.
            </p>
          </div>

          {/* WHY BREVA NEXT */}
          <div className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur">
            <h3
              className="
                text-xl font-semibold mb-2
                bg-[linear-gradient(to_right,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              Why BrevaNext
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We combine deep technical expertise with operational and strategic
              thinking — delivering automation systems that reduce cost,
              eliminate inefficiency, and produce measurable ROI.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
