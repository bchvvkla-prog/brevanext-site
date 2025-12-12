"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SolutionNav from "../../components/SolutionNav";

/* ===============================
   AI PROCESS AUTOMATION PAGE
================================ */
export default function AIProcessAutomationPage() {
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
            name: "AI Process Automation Services",
            serviceType: "AI Process Automation",
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
              "AI-powered process automation services that streamline workflows, reduce manual effort, and improve operational efficiency.",
            url: "https://www.brevanext.com/solutions/ai-process-automation",
          }),
        }}
      />

      <div className="px-6 pt-24 pb-20 max-w-7xl mx-auto text-gray-300">

        {/* ===============================
            HERO SECTION
        ================================ */}
        <section className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-6">
              AI Process Automation Services for Modern Businesses
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Transform your business with AI-powered automation that eliminates manual work,
              accelerates operations, and unlocks scalable efficiency. BrevaNext helps
              organizations design intelligent workflows that think, adapt, and execute
              with precision.
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
              alt="AI process automation workflows designed by BrevaNext"
              width={700}
              height={700}
              className="rounded-xl object-cover h-auto shadow-xl"
            />
          </motion.div>
        </section>

        {/* ===============================
            SERVICES OFFERED
        ================================ */}
        <SectionHeader title="AI Automation Services We Offer" />

        <section className="space-y-10 max-w-5xl mx-auto">
          <ServiceCard
            title="Business Process Automation (BPA)"
            image="/services/bpa.png"
            description="Automate approvals, onboarding, reporting, and operational workflows using AI-driven rules that reduce delays and improve efficiency."
          />

          <ServiceCard
            title="Robotic Process Automation (RPA)"
            image="/services/rpa.jpg"
            description="Software bots execute rule-based tasks with speed and accuracy—24/7, error-free, and fully scalable."
          />

          <ServiceCard
            title="Email & Report Automation"
            image="/services/email_report.png"
            description="Automatically generate insights, dashboards, and KPI reports with AI-powered data workflows delivered in real time."
          />

          <ServiceCard
            title="Document Workflow Automation"
            image="/services/document_workflow.jpg"
            description="AI extracts, validates, routes, and tracks documents such as invoices and contracts with full audit trails."
          />
        </section>

        {/* ===============================
            HOW IT WORKS
        ================================ */}
        <SectionHeader title="How Our AI Automation Process Works" />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <StepCard
            title="Process Discovery & Analysis"
            text="We analyze your workflows to identify automation opportunities with the highest ROI."
          />
          <StepCard
            title="Intelligent Automation Design"
            text="We architect AI-powered workflows using RPA, ML, and decision engines."
          />
          <StepCard
            title="Deployment & Optimization"
            text="We deploy, monitor, and continuously optimize automation for long-term scalability."
          />
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
            Ready to Transform Your Workflows?
          </h2>
          <p className="text-gray-400 mb-6">
            Discover how AI automation can reduce costs and accelerate growth.
          </p>
          <a
            href="/#contact"
            className="px-6 py-3 bg-cyan-500/20 border border-cyan-400 text-cyan-300 rounded-xl hover:bg-cyan-500/30 transition"
          >
            Book a Free Automation Audit
          </a>
        </div>

        <SolutionNav
          prev={null}
          next={{
            href: "/solutions/conversational-ai",
            label: "Conversational AI",
          }}
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
    <div className="glass p-6 rounded-xl border border-white/10 flex flex-col md:flex-row items-center gap-6 mx-auto max-w-4xl">
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
    <h2 className="text-3xl font-bold mt-20 mb-10 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent text-center">
      {title}
    </h2>
  );
}

function StepCard({ title, text }: any) {
  return (
    <div className="glass p-7 rounded-xl border border-white/10">
      <h3 className="text-xl font-semibold text-cyan-300 mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{text}</p>
    </div>
  );
}
