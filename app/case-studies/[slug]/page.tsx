"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

/* FULL PREMIUM CASE STUDY DATA */
const caseStudyDetails = {
  "ai-process-automation": {
    title: "AI Process Automation",
    banner:
      "Transforming Manufacturing Operations with End-to-End Intelligent Automation",
    industry: "Manufacturing",
    background:
      "A leading electronics manufacturing company depended heavily on manual reporting, spreadsheet-based updates, and repetitive workflows. With over 40 daily operational tasks being performed manually, production teams were losing crucial hours each day performing non-value-added work. Leadership lacked real-time insights due to delayed reporting cycles and fragmented systems.",
    problem: `The company struggled with operational delays, inconsistent reporting, and a lack of real-time visibility into production metrics. Over 100 hours per week were spent on manual data entry, Excel updates, shift logs, quality checks, and document routing. These inefficiencies caused production slowdowns, approval delays, and communication gaps across departments.`,
    discovery: `BrevaNext spent two weeks analyzing the workflows, mapping process bottlenecks, and studying the ERP system constraints. We identified 27 high-impact automation opportunities across production, quality control, and inventory management. A unified workflow automation blueprint was created to streamline operations end-to-end.`,
    architecture: `
      • AI Workflow Brain – Automated approvals, triggered alerts, validated inputs  
      • RPA Bots (UiPath + Power Automate) – Automated reporting, shift logs, QC summaries  
      • Automated Reporting Engine – Python-based ETL + real-time dashboard refresh  
      • Smart Document Automation – AI-powered invoice & QC extraction  
      • Integration Layer – ERP + Excel + SharePoint connected into seamless workflow  
    `,
    solution: `
      • Phase 1 – Pilot automation for reporting & shift updates (72% reduction in workload)  
      • Phase 2 – Full RPA rollout for QC, production logs, and reconciliation  
      • Phase 3 – Implemented automated reporting dashboards  
      • Phase 4 – Introduced real-time monitoring & optimization mechanisms  
    `,
    results: [
      { label: "Reduction in Manual Work", value: "80%" },
      { label: "Reporting Speed Improvement", value: "10×" },
      { label: "Human Errors", value: "0%" },
      { label: "Productivity Increase", value: "65%" },
    ],
    quote:
      "BrevaNext completely revolutionized our manufacturing operations. Manual work dropped massively and our team gained real-time visibility for the first time.",
    quoteAuthor: "Operations Director, Electronics Manufacturer",
  },

  "conversational-ai": {
    title: "Conversational AI & Virtual Assistants",
    banner:
      "Delivering Intelligent Patient Support with Multilingual AI Assistants",
    industry: "Healthcare",
    background:
      "A mid-sized healthcare group managing clinics across multiple states struggled with overwhelming patient support queries. Patients frequently contacted support to book appointments, ask pre-consultation questions, or request follow-ups. Human agents were overloaded and average response times ranged from 2–6 hours.",
    problem:
      "Support teams were handling repetitive, predictable questions daily. Appointment bookings took too long, manual triage processes slowed service, and patients lacked 24/7 communication channels.",
    discovery:
      "BrevaNext analyzed thousands of historic conversations, categorized patient intents, and mapped all repetitive tasks. We identified opportunities for AI-driven appointment automation, symptom triage flows, and follow-up reminders.",
    architecture: `
      • GPT-powered Conversational Engine  
      • Dialogflow + WhatsApp Cloud API for omnichannel support  
      • Medical Workflow Intelligence Layer for triage  
      • CRM Integration (HubSpot) for appointment sync  
      • Multilingual speech & text support in 12+ languages  
    `,
    solution: `
      • Designed medical-grade conversation flows  
      • Built WhatsApp, Web, and Voice assistants  
      • Integrated AI recommendations for patient routing  
      • Automated follow-up and reminder system  
      • Enabled 24/7 multilingual support  
    `,
    results: [
      { label: "Support Ticket Reduction", value: "60%" },
      { label: "Response Time", value: "Instant" },
      { label: "Patient Satisfaction Improvement", value: "35%" },
      { label: "Languages Supported", value: "12+" },
    ],
    quote:
      "Patients love the instant assistance. Our support load reduced drastically and appointment efficiency improved more than expected.",
    quoteAuthor: "Chief Medical Coordinator, Healthcare Group",
  },

  "data-analytics-bi": {
    title: "Data Analytics & Business Intelligence",
    banner:
      "Empowering Retail Leadership with Real-Time Analytics & Predictive Forecasting",
    industry: "Retail & E-Commerce",
    background:
      "A growing retail chain operating across 60+ stores faced growing challenges with manual spreadsheets, inconsistent KPIs, and delayed business intelligence. Leadership lacked real-time insights into sales performance, demand trends, and inventory metrics.",
    problem:
      "Reporting took 24–48 hours. Data lived across spreadsheets, POS systems, and emails. Decisions were reactive instead of proactive.",
    discovery:
      "BrevaNext conducted a deep audit of POS systems, Excel sheets, and Google Analytics data. We identified the root cause: no centralized data model, high dependence on manual ETL, and zero predictive forecasting.",
    architecture: `
      • Power BI Executive Dashboard Suite  
      • Automated Python + SQL ETL Pipelines  
      • BigQuery Data Warehouse  
      • Predictive Models for Sales & Demand  
      • Real-time Data Refresh Architecture  
    `,
    solution: `
      • Implemented automated ETL using Python & BigQuery  
      • Built real-time Power BI dashboards for leadership  
      • Designed SKU-level demand forecasting models  
      • Enabled unified data governance framework  
    `,
    results: [
      { label: "Reporting Speed", value: "Real-Time" },
      { label: "Forecast Accuracy", value: "92%" },
      { label: "Inventory Stockouts", value: "−40%" },
      { label: "Decision-Making Speed", value: "3× Faster" },
    ],
    quote:
      "BrevaNext gave us true data intelligence. Our decisions are now proactive, not reactive.",
    quoteAuthor: "CFO, Retail Chain",
  },

  "social-media-ai": {
    title: "Social Media AI Automation",
    banner:
      "Scaling Digital Growth with AI-Driven Content, Scheduling & DM Automation",
    industry: "E-Commerce / D2C",
    background:
      "A fast-growing D2C beauty brand struggled with content consistency and manual workload. Their marketing team spent hours writing captions, generating ideas, scheduling posts, and responding to customer DMs.",
    problem:
      "The brand lacked content automation, real-time engagement, and predictive analytics. Posting was irregular and DM response time was too slow.",
    discovery:
      "BrevaNext analyzed the brand’s posting behavior, audience engagement, and competitor trends. We identified clear repetitive patterns ideal for automation.",
    architecture: `
      • AI Post Generator (GPT + Brand Fine-Tuning)  
      • AI Image & Caption Engine  
      • Auto Scheduler Integration (Meta API)  
      • DM Chatbot for Leads & FAQs  
      • Sentiment & Trend Analytics Dashboard  
    `,
    solution: `
      • Built AI content generator tuned to brand guidelines  
      • Implemented auto-scheduling workflows  
      • Developed DM automation agent for leads  
      • Added analytics to track sentiment & performance  
    `,
    results: [
      { label: "Content Consistency", value: "3×" },
      { label: "DM Conversions", value: "40%" },
      { label: "Time Saved Weekly", value: "12+ Hours" },
      { label: "Engagement Growth", value: "2×" },
    ],
    quote:
      "Our social media now runs on autopilot. Engagement doubled and content quality is better than ever.",
    quoteAuthor: "Founder, D2C Beauty Brand",
  },
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = caseStudyDetails[slug as keyof typeof caseStudyDetails];

  if (!cs) {
    return (
      <div className="pt-32 text-center text-gray-300">
        <h2 className="text-2xl font-bold">Case Study Not Found</h2>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto space-y-16">

      {/* BACK LINK */}
      <Link
        href="/case-studies"
        className="text-cyan-300 hover:text-cyan-400 text-sm inline-block"
      >
        ← Back to Case Studies
      </Link>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/40 border border-white/10 p-10 rounded-2xl shadow-lg"
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4
          bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
          bg-clip-text text-transparent"
        >
          {cs.title}
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
          {cs.banner}
        </p>
      </motion.div>

      {/* BACKGROUND */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Background</h2>
        <p className="text-gray-400 leading-relaxed">{cs.background}</p>
      </section>

      {/* PROBLEM */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Business Challenge</h2>
        <p className="text-gray-400 leading-relaxed">{cs.problem}</p>
      </section>

      {/* DISCOVERY */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Discovery & Analysis</h2>
        <p className="text-gray-400 leading-relaxed">{cs.discovery}</p>
      </section>

      {/* ARCHITECTURE */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Solution Architecture</h2>
        <pre className="text-gray-400 whitespace-pre-wrap leading-relaxed">
          {cs.architecture}
        </pre>
      </section>

      {/* IMPLEMENTATION */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Implementation Approach</h2>
        <pre className="text-gray-400 whitespace-pre-wrap leading-relaxed">
          {cs.solution}
        </pre>
      </section>

      {/* KPIs */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Business Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cs.results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 p-6 rounded-xl text-center shadow-lg"
            >
              <p className="text-3xl font-extrabold text-cyan-300">{item.value}</p>
              <p className="text-gray-400 text-sm mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-black/40 border border-white/10 p-8 rounded-2xl shadow-lg"
      >
        <p className="text-xl italic text-gray-200">“{cs.quote}”</p>
        <p className="text-gray-500 text-sm mt-3">— {cs.quoteAuthor}</p>
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold mb-2">Ready to build your success story?</h3>
        <p className="text-gray-400 mb-5">
          Let BrevaNext transform your business with future-ready AI solutions.
        </p>
        <Link
          href="/#contact"
          className="px-8 py-4 rounded-lg font-semibold text-black
          bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
          hover:opacity-90 transition shadow-lg"
        >
          Contact Our Team
        </Link>
      </div>
    </div>
  );
}
