"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeCaseStudies() {
  const caseStudies = [
    {
      slug: "ai-process-automation",
      title: "AI Process Automation",
      summary:
        "Automated workflows saved 28+ hours/week and reduced manual errors by 94%.",
      label: "Automation",
      gradient: "from-[#3FA9F5] to-[#9A5CF5]",
      stat: 94,
    },
    {
      slug: "conversational-ai",
      title: "Conversational AI Assistants",
      summary:
        "Healthcare chatbot reduced patient wait times by 78% and support workload by 55%.",
      label: "Chatbots",
      gradient: "from-[#3FA9F5] to-[#9A5CF5]",
      stat: 78,
    },
    {
      slug: "data-analytics-bi",
      title: "Data Analytics & BI",
      summary:
        "Real-time dashboards improved restocking efficiency by 19% and optimized decisions.",
      label: "Analytics",
      gradient: "from-[#3FA9F5] to-[#9A5CF5]",
      stat: 19,
    },
  ];

  return (
    <section className="relative py-28 px-6 max-w-7xl mx-auto">

      {/* HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-6 
        bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
        bg-clip-text text-transparent"
      >
        Success Stories
      </motion.h2>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        Explore how BrevaNext transforms businesses using AI-driven automation, conversational intelligence, 
        and data-powered insights.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-10 relative z-10">
        {caseStudies.map((cs, idx) => (
          <Link href={`/case-studies/${cs.slug}`} key={cs.slug}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-7 shadow-lg 
              hover:border-[#5DF0FF90] hover:shadow-[0_0_25px_#5DF0FF50]
              transition-all cursor-pointer transform hover:-translate-y-2"
            >
              {/* CATEGORY LABEL */}
              <span
                className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 
                text-cyan-300 font-medium tracking-wide group-hover:bg-white/20 transition"
              >
                {cs.label}
              </span>

              {/* TITLE */}
              <h3
                className={`text-2xl font-bold mt-4 bg-gradient-to-r ${cs.gradient} 
                bg-clip-text text-transparent`}
              >
                {cs.title}
              </h3>

              {/* SUMMARY */}
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                {cs.summary}
              </p>

              {/* ANIMATED STAT */}
              <AnimatedStat value={cs.stat} />

              {/* READ MORE */}
              <span className="block mt-5 text-cyan-300 group-hover:text-cyan-400 transition text-sm font-medium">
                Read Case Study →
              </span>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* BUTTON */}
      <div className="text-center mt-14 relative z-10">
        <Link
          href="/case-studies"
          className="px-6 py-3 bg-white/10 border border-white/20 
          text-white rounded-lg hover:bg-white/20 transition font-medium"
        >
          View All Case Studies
        </Link>
      </div>
    </section>
  );
}

/* COUNT UP EFFECT */
function AnimatedStat({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <p className="text-xl font-semibold mt-4 text-cyan-300">
      Impact: <span className="text-white">{count}%</span> improvement
    </p>
  );
}
