"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SolutionNav from "../../components/SolutionNav.jsx";

export default function DataAnalyticsPage() {
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
          bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400
          bg-clip-text text-transparent drop-shadow-lg mb-6">
            Data Analytics & BI
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Unlock the true power of your data with intelligent analytics,
            automated pipelines, and real-time insights. BrevaNext helps you
            build scalable data systems that drive smarter decisions across
            every department.
          </p>

          {/* HIGHLIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-5 rounded-xl border border-white/10 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              What We Deliver
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm leading-relaxed">
              <li>✔ Automated ETL pipelines & data cleaning</li>
              <li>✔ Real-time dashboards & forecasting</li>
              <li>✔ ML-powered predictive insights</li>
              <li>✔ Data unification from all sources</li>
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
            src="/services/power_bi.jpg"
            alt="Data Analytics"
            width={700}
            height={700}
            className="rounded-xl object-cover h-auto shadow-xl"
          />
        </motion.div>
      </section>

      {/* ================================
          SERVICES WE OFFER
      ================================== */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mt-20 mb-10
        bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
      >
        Services We Offer
      </motion.h2>

      <section className="space-y-10 max-w-5xl mx-auto">

        <ServiceCard
          title="Data Cleaning & ETL Automation"
          image="/services/data_cleaning.jpg"
          description="Clean, structured, and reliable data is the foundation of decision-making. We automate ETL pipelines using SQL, Python, and BigQuery to ensure your datasets are accurate, consistent, and always up to date."
        />

        <ServiceCard
          title="Real-Time KPI & Forecast Dashboards"
          image="/services/power_bi.jpg"
          description="We design powerful real-time dashboards that refresh automatically and provide instant visibility into your operations. Predictive forecasting models help you plan ahead with clarity."
        />

        <ServiceCard
          title="Predictive Analytics Using Machine Learning"
          image="/services/predictive_analytics.jpg"
          description="Our ML models identify hidden patterns in your data to forecast sales, demand, churn, performance, and risk—empowering proactive, data-backed decision-making."
        />
      </section>

      {/* ================================
          HOW IT WORKS
      ================================== */}
      <SectionHeader title="How Our Data Intelligence Process Works" />

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass p-7 rounded-xl border border-white/10
          hover:border-cyan-400/40 transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Data Discovery & Audit
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We analyze your existing data systems, identify gaps, and map opportunities for automation, optimization, and integration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass p-7 rounded-xl border border-white/10
          hover:border-cyan-400/40 transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Pipeline & Dashboard Design
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We architect automated data pipelines, build dashboards, and design ML models tailored to your unique enterprise needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-7 rounded-xl border border-white/10
          hover:border-cyan-400/40 transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Deployment & Insight Automation
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We deploy dashboards, ML systems, and scheduled pipelines with continuous optimization for accuracy, stability, and scale.
          </p>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 
        bg-clip-text text-transparent mb-4">
          Ready to Unlock Data-Driven Intelligence?
        </h2>
        <p className="text-gray-400 mb-6">
          Take your analytics, dashboards, and data pipelines to the next level.
        </p>

        <a
          href="/#contact"
          className="px-6 py-3 bg-cyan-500/20 border border-cyan-400 
          text-cyan-300 rounded-xl hover:bg-cyan-500/30 transition"
        >
          Book a Free Data Strategy Call
        </a>
      </motion.div>

      {/* ================================
          PREV / NEXT NAVIGATION
      ================================== */}
      <SolutionNav
        prev={{
          href: "/solutions/conversational-ai",
          label: "Conversational AI",
        }}
        next={{
          href: "/solutions/social-media-ai",
          label: "Social Media AI",
        }}
      />

    </div>
  );
}

/* -------------------------------
   COMPONENTS
-------------------------------- */

function ServiceCard({ title, image, description }: any) {
  return (
    <div className="glass p-6 rounded-xl border border-white/10
    hover:border-cyan-400/40 transition flex flex-col md:flex-row
    items-center gap-6 mx-auto max-w-4xl">
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
      bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
    >
      {title}
    </motion.h2>
  );
}
