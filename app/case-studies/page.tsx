"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    slug: "ai-process-automation",
    title: "AI Process Automation",
    summary:
      "Automation of workflows, reports, and operations to eliminate manual effort and accelerate productivity.",
    gradient: "from-[#5DF0FF] to-[#3FA9F5]",
  },
  {
    slug: "conversational-ai",
    title: "Conversational AI & Virtual Assistants",
    summary:
      "Smart chatbots and AI assistants that enhance customer experience and reduce support workload.",
    gradient: "from-[#3FA9F5] to-[#9A5CF5]",
  },
  {
    slug: "data-analytics-bi",
    title: "Data Analytics & Business Intelligence",
    summary:
      "Real-time dashboards, automated ETL, and predictive analytics for data-driven decisions.",
    gradient: "from-[#9A5CF5] to-[#FF4FD8]",
  },
  {
    slug: "social-media-ai",
    title: "Social Media AI Automation",
    summary:
      "AI-powered content generation, auto scheduling, and DM automation to grow brand engagement.",
    gradient: "from-[#FF4FD8] to-[#5DF0FF]",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-extrabold mb-10 
          bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
          bg-clip-text text-transparent text-center"
      >
        Case Studies
      </motion.h1>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
        Real-world examples of how BrevaNext delivers automation, intelligence, and measurable
        business impact across industries.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {caseStudies.map((cs, index) => (
          <motion.div
            key={cs.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-black/40 border border-white/10 p-8 rounded-2xl shadow-lg hover:border-[#5DF0FF60] transition"
          >
            <h2
              className={`text-2xl font-bold bg-gradient-to-r ${cs.gradient} 
                bg-clip-text text-transparent`}
            >
              {cs.title}
            </h2>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">{cs.summary}</p>

            <Link
              href={`/case-studies/${cs.slug}`}
              className="mt-5 inline-block text-cyan-300 hover:text-cyan-400 transition font-medium"
            >
              View Full Case Study →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
