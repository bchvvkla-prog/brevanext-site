"use client";
export const metadata = {
  title: "Industries We Serve – AI for Manufacturing, Healthcare & Finance",
  description:
    "BrevaNext delivers AI-powered automation and intelligence across manufacturing, healthcare, finance, retail, logistics, and more.",
};
console.log("INDUSTRIES COMPONENT LOADED:", new Date().toISOString());
import { motion } from "framer-motion";

const industries = [
  {
    title: "Manufacturing",
    desc: "Predictive maintenance, defect detection, intelligent quality checks, inventory forecasting, and fully automated production workflows.",
  },
  {
    title: "Healthcare",
    desc: "AI diagnostics, medical chatbots, claims automation, EHR intelligence, and voice-to-text support for clinical documentation.",
  },
  {
    title: "Retail & E-Commerce",
    desc: "Personalized shopping recommendations, AI customer support, demand prediction, and visual search-driven product discovery.",
  },
  {
    title: "Finance & Banking",
    desc: "Fraud detection, risk scoring, automated compliance audits, AI voice agents, and real-time financial forecasting.",
  },
  {
    title: "Logistics & Supply Chain",
    desc: "Route optimization, fleet predictions, document automation, demand planning, and real-time operations tracking.",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 px-6 max-w-7xl mx-auto">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold mb-6
        bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
        bg-clip-text text-transparent"
      >
        Industries We Serve
      </motion.h2>

      {/* SUBTEXT */}
      <p className="text-gray-400 max-w-3xl text-lg leading-relaxed mb-14">
        BrevaNext powers digital transformation across global industries —
        helping organizations automate workflows, enhance intelligence, and make
        faster, data-driven business decisions.
      </p>

      {/* INDUSTRIES GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 + i * 0.05 }}
            className="glass p-6 rounded-xl border border-white/10
            hover:border-[#5DF0FF]/40 hover:shadow-[0_0_20px_#5DF0FF40]
            transition cursor-pointer"
          >
            <h3
              className="text-xl font-semibold mb-3
              bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              bg-clip-text text-transparent"
            >
              {ind.title}
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm">
              {ind.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
