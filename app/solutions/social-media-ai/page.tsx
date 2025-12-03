"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SolutionNav from "@/app/components/SolutionNav";

export default function SocialMediaAIAutomationPage() {
  return (
    <div className="px-6 pt-24 pb-20 max-w-7xl mx-auto text-gray-300">

      {/* ================================
          HERO SECTION
      ================================== */}
      <section className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight 
            bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 
            bg-clip-text text-transparent drop-shadow-lg mb-6"
          >
            Social Media AI Automation
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Automate your content creation, captions, scheduling, analytics, and DM interactions 
            with AI-driven systems that boost engagement and scale your brand effortlessly.
          </p>

          {/* HIGHLIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-5 rounded-xl border border-white/10 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              What We Automate
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm leading-relaxed">
              <li>✔ AI content generation (posts, carousels, scripts)</li>
              <li>✔ Automated captions & hashtags</li>
              <li>✔ Real-time sentiment & engagement analytics</li>
              <li>✔ DM chatbots for lead nurturing</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-xl overflow-hidden md:w-[75%] w-full mx-auto"
        >
          <Image
            src="/services/socialmedia.jpg"
            alt="Social Media AI Automation"
            width={700}
            height={700}
            className="rounded-xl object-cover h-auto shadow-xl"
          />
        </motion.div>
      </section>

      {/* ================================
          SERVICES OFFERED
      ================================== */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mt-20 mb-10 
        bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent"
      >
        Services We Offer
      </motion.h2>

      <section className="space-y-10 max-w-5xl mx-auto">

        <ServiceCard
          title="AI Post Generators and Automation"
          image="/services/AI_Post_Generators.jpg"
          description="AI Post Generators create high-quality social media content instantly, producing both copy and visuals that match your brand’s style and audience preferences. Instead of spending hours brainstorming ideas, AI generates engaging posts, reels scripts, carousels, and promotional graphics with ease. These AI-driven creatives help maintain consistency, boost engagement, and keep your brand active across all platforms. With BrevaNext, your content pipeline becomes faster, smarter, and endlessly creative."
        />

        <ServiceCard
          title="AI Social Analytics (Sentiment & Engagement Prediction)"
          image="/services/AI Social Analytics.jpg"
          description="AI Social Analytics helps you understand your audience by analyzing sentiment, engagement patterns, and content performance in real time. It identifies what your followers love, what drives reactions, and what trends are emerging across platforms. With predictive insights, you can refine your strategy, improve messaging, and stay ahead of market shifts. BrevaNext equips you with data-driven clarity that turns social media into a measurable growth engine."
        />

        <ServiceCard
          title="Chatbots for DM Automation & Lead Nurturing"
          image="/services/Chatbots_social.jpg"
          description="AI-powered DM chatbots automatically respond to messages, qualify leads, and guide users toward purchases or bookings. They handle inquiries instantly—day or night—ensuring no lead is ever missed. Whether it's answering FAQs, capturing contact details, or pushing personalized offers, these bots create smooth, conversational experiences that convert followers into customers. With BrevaNext, your DMs become a powerful automated sales channel."
        />

      </section>

      {/* ================================
          CTA SECTION
      ================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent mb-4">
          Ready to Automate Your Social Media?
        </h2>
        <p className="text-gray-400 mb-6">
          Boost engagement, save time, and scale your brand with AI automation.
        </p>

        <a
          href="/#contact"
          className="px-6 py-3 bg-cyan-500/20 border border-cyan-400 text-cyan-300 
          rounded-xl hover:bg-cyan-500/30 transition"
        >
          Book a Free Strategy Call
        </a>
      </motion.div>

      {/* ================================
          PREVIOUS NAVIGATION BUTTON
      ================================== */}
      <SolutionNav
        prev={{
          href: "/solutions/data-analytics",
          label: "Data Analytics & BI",
        }}
        next={null}
      />

    </div>
  );
}

/* -------------------------------
   COMPONENTS
-------------------------------- */

function ServiceCard({ title, image, description }: any) {
  return (
    <div className="glass p-6 rounded-xl border border-white/10 hover:border-cyan-400/40 
      transition flex flex-col md:flex-row items-center gap-6 mx-auto max-w-4xl"
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
      />
      <div className="md:w-2/3">
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function SectionHeader({ title }: any) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-3xl font-bold mt-20 
      bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent"
    >
      {title}
    </motion.h2>
  );
}
