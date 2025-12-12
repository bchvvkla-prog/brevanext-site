/* ===============================
   PAGE-LEVEL SEO (SERVER)
================================ */
export const metadata = {
  title: "Social Media AI Automation Services | BrevaNext",
  description:
    "BrevaNext provides social media AI automation services including AI content creation, automated captions, analytics, and DM chatbots to scale brand engagement.",
  keywords: [
    "social media AI automation",
    "AI social media management",
    "AI content generation for social media",
    "social media automation tools",
    "AI Instagram automation",
    "BrevaNext social media AI"
  ],
  alternates: {
    canonical: "https://www.brevanext.com/solutions/social-media-ai",
  },
};

/* ===============================
   CLIENT COMPONENT
================================ */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SolutionNav from "@/app/components/SolutionNav";

/* ===============================
   SOCIAL MEDIA AI PAGE
================================ */
export default function SocialMediaAIAutomationPage() {
  return (
    <>
      {/* ===============================
          SERVICE SCHEMA (SEO)
      ================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Social Media AI Automation Services",
            serviceType: "Social Media AI Automation",
            provider: {
              "@type": "Organization",
              name: "BrevaNext",
              url: "https://www.brevanext.com",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            description:
              "AI-powered social media automation services that generate content, automate engagement, analyze sentiment, and convert followers into leads.",
            url: "https://www.brevanext.com/solutions/social-media-ai",
          }),
        }}
      />

      <div className="px-6 pt-24 pb-20 max-w-7xl mx-auto text-gray-300">

        {/* ===============================
            HERO SECTION
        ================================ */}
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
              Social Media AI Automation Services
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Automate content creation, captions, scheduling, analytics, and DM interactions 
              with AI-driven social media systems that boost engagement and scale your brand.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass p-5 rounded-xl border border-white/10 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-cyan-300 mb-2">
                What We Automate
              </h2>
              <ul className="text-gray-400 space-y-1 text-sm leading-relaxed">
                <li>✔ AI content generation (posts, carousels, scripts)</li>
                <li>✔ Automated captions & hashtags</li>
                <li>✔ Sentiment & engagement analytics</li>
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
              alt="Social media AI automation platform by BrevaNext"
              width={700}
              height={700}
              className="rounded-xl object-cover h-auto shadow-xl"
            />
          </motion.div>
        </section>

        {/* ===============================
            SERVICES OFFERED
        ================================ */}
        <SectionHeader title="Social Media AI Services We Offer" />

        <section className="space-y-10 max-w-5xl mx-auto">

          <ServiceCard
            title="AI Post Generators & Content Automation"
            image="/services/AI_Post_Generators.jpg"
            description="AI-generated posts, carousels, scripts, and creatives that match your brand tone and keep your social channels consistently active."
          />

          <ServiceCard
            title="AI Social Analytics & Sentiment Intelligence"
            image="/services/AI Social Analytics.jpg"
            description="Real-time sentiment analysis, engagement prediction, and performance insights to refine content strategy and maximize reach."
          />

          <ServiceCard
            title="DM Chatbots for Lead Nurturing & Sales"
            image="/services/Chatbots_social.jpg"
            description="AI-powered DM chatbots that instantly respond, qualify leads, and convert followers into customers automatically."
          />
        </section>

        {/* ===============================
            CTA
        ================================ */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent mb-4">
            Ready to Automate Your Social Media?
          </h2>
          <p className="text-gray-400 mb-6">
            Save time, boost engagement, and scale your brand with AI-driven automation.
          </p>

          <a
            href="/#contact"
            className="px-6 py-3 bg-cyan-500/20 border border-cyan-400 text-cyan-300 
            rounded-xl hover:bg-cyan-500/30 transition"
          >
            Book a Free Strategy Call
          </a>
        </div>

        {/* PREV / NEXT */}
        <SolutionNav
          prev={{
            href: "/solutions/data-analytics",
            label: "Data Analytics & BI",
          }}
          next={null}
        />
      </div>
    </>
  );
}

/* ===============================
   COMPONENTS
================================ */

function ServiceCard({ title, image, description }: any) {
  return (
    <div className="glass p-6 rounded-xl border border-white/10
    flex flex-col md:flex-row items-center gap-6 mx-auto max-w-4xl">
      <img
        src={image}
        alt={`${title} by BrevaNext`}
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
    <h2 className="text-3xl font-bold mt-20 mb-10
    bg-gradient-to-r from-cyan-300 to-purple-500
    bg-clip-text text-transparent text-center">
      {title}
    </h2>
  );
}
