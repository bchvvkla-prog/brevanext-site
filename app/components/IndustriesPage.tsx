"use client";

import { motion } from "framer-motion";

export default function IndustriesPage() {
  return (
    <section className="bg-white pt-24 pb-24 px-6 max-w-7xl mx-auto">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-6"
      >
        <span className="bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)] bg-clip-text text-transparent drop-shadow">
          Industries & AI Use Cases
        </span>
      </motion.h1>

      <p className="text-gray-600 max-w-3xl mx-auto text-center text-base mb-16">
        We design and deploy AI systems where operational complexity, data scale,
        and execution speed directly impact business outcomes.
      </p>

      {/* =====================================================
          INDUSTRY GRID
      ===================================================== */}
      <div className="space-y-12 max-w-6xl mx-auto">
        {INDUSTRIES.map((ind, idx) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.03 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-xl p-6"
          >
            {/* TITLE ROW */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold leading-tight">
                <span className="bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)] bg-clip-text text-transparent">
                  {ind.title}
                </span>
              </h2>
              <p className="text-sm text-gray-500">{ind.for}</p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {ind.description}
            </p>

            {/* CONTENT GRID */}
            <div className="grid md:grid-cols-3 gap-6 text-sm">

              {/* CHALLENGES */}
              <div>
                <p className="font-semibold text-gray-800 mb-2">
                  Challenges
                </p>
                <ul className="space-y-1 text-gray-600">
                  {ind.problems.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>

              {/* SOLUTIONS */}
              <div>
                <p className="font-semibold text-gray-800 mb-2">
                  AI Systems We Build
                </p>
                <ul className="space-y-1 text-gray-600">
                  {ind.solutions.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>

              {/* OUTCOMES */}
              <div>
                <p className="font-semibold text-gray-800 mb-2">
                  Business Impact
                </p>
                <ul className="space-y-1 text-gray-600">
                  {ind.outcomes.map((o) => (
                    <li key={o}>• {o}</li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   ALL INDUSTRIES & USE CASES (NOT MISSED)
===================================================== */
const INDUSTRIES = [
  {
    title: "Manufacturing & Operations",
    for: "Factories, plants, operations-heavy enterprises",
    description:
      "AI automation systems that replace manual workflows and deliver real-time operational intelligence.",
    problems: [
      "Manual reporting & shift handovers",
      "Production delays & quality issues",
      "Lack of real-time visibility",
    ],
    solutions: [
      "Workflow & RPA automation",
      "Predictive maintenance",
      "Quality & compliance dashboards",
    ],
    outcomes: [
      "Lower operational cost",
      "Higher efficiency",
      "Reduced human errors",
    ],
  },
  {
    title: "Healthcare",
    for: "Clinics, hospitals, healthcare networks",
    description:
      "AI assistants and automation that reduce staff workload while improving patient experience.",
    problems: [
      "Overloaded support teams",
      "Delayed patient responses",
      "Manual documentation",
    ],
    solutions: [
      "AI patient chatbots",
      "Appointment automation",
      "Medical document processing",
    ],
    outcomes: [
      "Faster patient support",
      "Higher satisfaction",
      "Reduced admin effort",
    ],
  },
  {
    title: "Retail & E-Commerce",
    for: "Retail chains, D2C brands, marketplaces",
    description:
      "Data-driven intelligence and automation to scale sales, inventory, and customer engagement.",
    problems: [
      "Stockouts & overstocking",
      "Low personalization",
      "Manual reporting",
    ],
    solutions: [
      "Demand forecasting",
      "Customer AI assistants",
      "Real-time dashboards",
    ],
    outcomes: [
      "Better planning",
      "Higher conversions",
      "Faster decisions",
    ],
  },
  {
    title: "Finance & Banking",
    for: "Banks, fintechs, financial institutions",
    description:
      "AI systems for risk, compliance, fraud detection, and customer engagement.",
    problems: [
      "Fraud risks",
      "Manual compliance processes",
      "Slow customer service",
    ],
    solutions: [
      "Fraud & anomaly detection",
      "Automated compliance",
      "AI voice & chat agents",
    ],
    outcomes: [
      "Lower risk exposure",
      "Faster approvals",
      "Improved trust",
    ],
  },
  {
    title: "Logistics & Supply Chain",
    for: "Logistics providers, distributors, warehouses",
    description:
      "Automation and intelligence for real-time planning and operational optimization.",
    problems: [
      "Route inefficiencies",
      "Manual documentation",
      "Lack of tracking",
    ],
    solutions: [
      "Route optimization",
      "Document automation",
      "Live tracking dashboards",
    ],
    outcomes: [
      "Lower delivery costs",
      "Improved on-time rates",
      "Better visibility",
    ],
  },
  {
    title: "Education & EdTech",
    for: "Universities, training platforms, EdTech startups",
    description:
      "AI-powered learning support, analytics, and administrative automation.",
    problems: [
      "Manual student support",
      "Low engagement insights",
      "Administrative overload",
    ],
    solutions: [
      "AI tutors & chatbots",
      "Learning analytics",
      "Process automation",
    ],
    outcomes: [
      "Improved engagement",
      "Reduced admin work",
      "Better outcomes",
    ],
  },
  {
    title: "HR & Talent Operations",
    for: "Enterprises, staffing firms, HR teams",
    description:
      "Automation and AI intelligence for hiring, onboarding, and people analytics.",
    problems: [
      "Manual screening",
      "Slow hiring cycles",
      "Fragmented HR data",
    ],
    solutions: [
      "Resume & screening AI",
      "HR dashboards",
      "Workflow automation",
    ],
    outcomes: [
      "Faster hiring",
      "Better talent decisions",
      "Lower HR workload",
    ],
  },
  {
    title: "Media, Marketing & Agencies",
    for: "Marketing teams, agencies, content-driven brands",
    description:
      "AI systems that automate content, insights, and engagement at scale.",
    problems: [
      "Content inconsistency",
      "Manual scheduling",
      "Poor performance tracking",
    ],
    solutions: [
      "AI content generation",
      "Scheduling automation",
      "Engagement analytics",
    ],
    outcomes: [
      "Higher engagement",
      "Consistent output",
      "Time savings",
    ],
  },
];
