"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SolutionNav from "../../components/SolutionNav";   // ✅ FIXED IMPORT PATH

// -------------------------------
//  AI PROCESS AUTOMATION PAGE
// -------------------------------
export default function AIProcessAutomationPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-6">
            AI Process Automation
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Transform your business with AI-powered automation that eliminates manual work,
            accelerates operations, and unlocks scalable efficiency. BrevaNext helps
            organizations design intelligent workflows that think, adapt, and execute with precision.
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
              <li>✔ Workflow execution & business operations</li>
              <li>✔ Document-driven processes (invoices, approvals, onboarding)</li>
              <li>✔ Reporting, notifications & communication flows</li>
              <li>✔ System-to-system data movement & validations</li>
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
            src="/services/ai_automation.jpg"
            alt="AI Process Automation"
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
        className="text-3xl font-bold mt-20 mb-10 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
      >
        Services We Offer
      </motion.h2>

      <section className="space-y-10 max-w-5xl mx-auto">

        {/* SERVICE 1 — BPA */}
        <ServiceCard
          title="Business Process Automation (BPA)"
          image="/services/bpa.png"
          description="Business Process Automation (BPA) empowers organizations to eliminate repetitive manual work and transform their operations into streamlined, intelligent workflows. Approvals, onboarding, reporting, and data entry happen automatically with AI-driven rules—reducing delays and maximizing efficiency."
        />

        {/* SERVICE 2 — RPA */}
        <ServiceCard
          title="Robotic Process Automation (RPA)"
          image="/services/rpa.jpg"
          description="RPA uses software bots to execute rule-based tasks with unmatched speed and accuracy. Bots simulate human clicks, typing, reading, extracting, validating, and updating systems—working 24/7 without errors or fatigue."
        />

        {/* SERVICE 3 — Email & Reporting */}
        <ServiceCard
          title="Email & Report Automation"
          image="/services/email_report.png"
          description="AI-powered workflows gather data, generate insights, format dashboards, and deliver reports instantly—removing hours of manual effort. From KPI summaries to performance dashboards, everything is automated, accurate, and delivered in real time."
        />

        {/* SERVICE 4 — Document Workflow Automation */}
        <ServiceCard
          title="Document Workflow Automation"
          image="/services/document_workflow.jpg"
          description="Document Workflow Automation ensures invoices, contracts, purchase orders, and approvals move through your business digitally and intelligently. AI extracts, validates, routes, and tracks documents—maintaining audit trails and eliminating bottlenecks."
        />

      </section>

      {/* ================================
          HOW IT WORKS
      ================================== */}
      <SectionHeader title="How Our AI Automation Process Works" />

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        {/* STEP 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass p-7 rounded-xl border border-white/10 hover:border-cyan-400/40 transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Process Discovery & Analysis
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We study your operations, identify blockers, and map the areas where automation 
            can drive the highest impact. This gives us a clear blueprint for intelligent, 
            scalable transformation.
          </p>
        </motion.div>

        {/* STEP 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass p-7 rounded-xl border border-white/10 hover:border-cyan-400/40 transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-3">
            Intelligent Automation Design
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We architect AI-powered workflows using ML, RPA, and decision engines. 
            Every automation is designed to be smart, adaptive, and aligned with your 
            business rules.
          </p>
        </motion.div>

        {/* STEP 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-7 rounded-xl border border-white/10 hover:border-cyan-400/40 transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-3">
            Deployment & Continuous Optimization
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We deploy automation into your live systems, integrate with ERP/CRM platforms, 
            monitor performance, and continuously optimize to ensure long-term accuracy 
            and scalability.
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
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
          Ready to Transform Your Workflows?
        </h2>
        <p className="text-gray-400 mb-6">
          Discover how automation can reduce costs, improve efficiency, and accelerate growth.
        </p>

        <a
          href="/#contact"
          className="px-6 py-3 bg-cyan-500/20 border border-cyan-400 text-cyan-300 rounded-xl hover:bg-cyan-500/30 transition"
        >
          Book a Free Automation Audit
        </a>
      </motion.div>

      {/* ================================
          PREV / NEXT NAVIGATION
      ================================== */}
      <SolutionNav
        prev={null}
        next={{
          href: "/solutions/conversational-ai",
          label: "Conversational AI"
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
    <div className="glass p-6 rounded-xl border border-white/10 hover:border-cyan-400/40 transition flex flex-col md:flex-row items-center gap-6 mx-auto max-w-4xl">
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
      className="text-3xl font-bold mt-20 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
    >
      {title}
    </motion.h2>
  );
}
