/* ===============================
   PAGE-LEVEL SEO (SERVER)
================================ */
export const metadata = {
  title: "Data Analytics & Business Intelligence Consulting | BrevaNext",
  description:
    "BrevaNext provides data analytics and business intelligence services including ETL automation, real-time dashboards, and predictive analytics using machine learning.",
  keywords: [
    "data analytics consulting",
    "business intelligence services",
    "ETL automation",
    "real-time dashboards",
    "predictive analytics machine learning",
    "BrevaNext data analytics"
  ],
  alternates: {
    canonical: "https://www.brevanext.com/solutions/data-analytics",
  },
};

/* ===============================
   CLIENT COMPONENT
================================ */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SolutionNav from "../../components/SolutionNav.jsx";

/* ===============================
   DATA ANALYTICS PAGE
================================ */
export default function DataAnalyticsPage() {
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
            name: "Data Analytics & Business Intelligence Services",
            serviceType: "Data Analytics & BI",
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
              "Data analytics and business intelligence services that transform raw data into real-time insights, dashboards, and predictive intelligence.",
            url: "https://www.brevanext.com/solutions/data-analytics",
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
            bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400
            bg-clip-text text-transparent drop-shadow-lg mb-6">
              Data Analytics & Business Intelligence
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Unlock the true power of your data with intelligent analytics,
              automated pipelines, and real-time insights. BrevaNext builds
              scalable data systems that drive smarter decisions across
              every department.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass p-5 rounded-xl border border-white/10 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-cyan-300 mb-2">
                What We Deliver
              </h2>
              <ul className="text-gray-400 space-y-1 text-sm leading-relaxed">
                <li>✔ Automated ETL pipelines & data cleaning</li>
                <li>✔ Real-time dashboards & forecasting</li>
                <li>✔ ML-powered predictive insights</li>
                <li>✔ Unified data from all sources</li>
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
              alt="Data analytics dashboards and BI solutions by BrevaNext"
              width={700}
              height={700}
              className="rounded-xl object-cover h-auto shadow-xl"
            />
          </motion.div>
        </section>

        {/* ===============================
            SERVICES WE OFFER
        ================================ */}
        <SectionHeader title="Data Analytics Services We Offer" />

        <section className="space-y-10 max-w-5xl mx-auto">

          <ServiceCard
            title="Data Cleaning & ETL Automation"
            image="/services/data_cleaning.jpg"
            description="Automated ETL pipelines built with SQL, Python, and cloud platforms to ensure clean, accurate, and reliable data."
          />

          <ServiceCard
            title="Real-Time KPI & Forecast Dashboards"
            image="/services/power_bi.jpg"
            description="Interactive dashboards with real-time metrics and predictive forecasting for operational and strategic decisions."
          />

          <ServiceCard
            title="Predictive Analytics Using Machine Learning"
            image="/services/predictive_analytics.jpg"
            description="Machine learning models that forecast sales, demand, churn, and performance using historical and real-time data."
          />
        </section>

        {/* ===============================
            HOW IT WORKS
        ================================ */}
        <SectionHeader title="How Our Data Intelligence Process Works" />

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <StepCard
            title="Data Discovery & Audit"
            text="We assess your existing data landscape, identify gaps, and define opportunities for automation and optimization."
          />

          <StepCard
            title="Pipeline & Dashboard Design"
            text="We design scalable data pipelines, dashboards, and ML models aligned with your business goals."
          />

          <StepCard
            title="Deployment & Insight Automation"
            text="We deploy analytics systems with scheduled refreshes, monitoring, and continuous optimization."
          />
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
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
        </div>

        {/* PREV / NEXT */}
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
    bg-gradient-to-r from-cyan-300 to-blue-400
    bg-clip-text text-transparent text-center">
      {title}
    </h2>
  );
}

function StepCard({ title, text }: any) {
  return (
    <div className="glass p-7 rounded-xl border border-white/10">
      <h3 className="text-xl font-semibold text-cyan-300 mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{text}</p>
    </div>
  );
}
