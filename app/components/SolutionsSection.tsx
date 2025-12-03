"use client";

import { motion } from "framer-motion";

export default function SolutionsSection() {
  return (
    <section className="py">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center 
        bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
        bg-clip-text text-transparent drop-shadow-lg mb-8"
      >
        AI & Automation Solutions
      </motion.h1>

      {/* SUBTEXT */}
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg">
        Explore the full suite of intelligent solutions that power modern,
        scalable, and automated businesses — built with the precision of AI.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* CARD COMPONENTS */}
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="p-6 rounded-xl glass border border-white/10 
            hover:border-[#5DF0FF]/40 hover:shadow-[0_0_20px_#5DF0FF40]
            transition cursor-pointer"
          >
            <h3
              className="text-xl font-semibold 
              bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              bg-clip-text text-transparent mb-2"
            >
              {item.title}
            </h3>

            <p className="text-gray-400 mb-4">{item.desc}</p>

            <a
              href={item.link}
              className="font-medium hover:text-transparent
              hover:bg-clip-text hover:bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              transition"
            >
              Learn More →
            </a>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

/* SOLUTIONS DATA */
const solutions = [
  {
    title: "AI Process Automation",
    desc: "Eliminate manual tasks and accelerate workflows using intelligent RPA + AI systems.",
    link: "/solutions/ai-process-automation",
  },
  {
    title: "Conversational AI",
    desc: "Build GPT-powered chatbots and voice assistants that provide instant customer support.",
    link: "/solutions/conversational-ai",
  },
  {
    title: "Data Analytics & BI",
    desc: "Powerful dashboards, reporting automation, and predictive analytics for better decisions.",
    link: "/solutions/data-analytics",
  },
  {
    title: "Social Media AI Automation",
    desc: "AI-driven posting, captions, engagement bots, and analytics engines for growth.",
    link: "/solutions/social-media-ai",
  },
];
