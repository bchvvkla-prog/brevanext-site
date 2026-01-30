"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

/* ORDER FOR NEXT NAVIGATION */
const caseStudyOrder = [
  "laquinta-operating-performance",
  "ai-process-automation",
  "conversational-ai",
  "data-analytics-bi",
  "social-media-ai",
];

/* CASE STUDY CONTENT */
const caseStudyDetails = {
  "laquinta-operating-performance": {
    title: "LaQuinta Monthly Operating Performance Dashboard",
    industry: "Hospitality",
    image: "/case-studies/laquinta-operating-performance-dashboard.png",

    overview: `
A LaQuinta hotel owner relied on complex spreadsheets to analyze monthly profit
and loss performance. While data was available, insights were delayed,
fragmented, and difficult to interpret at an executive level.

BrevaNext designed a structured operating intelligence dashboard that converts
raw financial and operational inputs into clear KPIs, cost efficiency metrics,
and decision-ready insights.
    `,

    background: `
The property operates 70 rooms and generates revenue across room sales, laundry,
quick mart, and ancillary income.

Monthly P&L reporting required manual entry of income, expenses, labor,
utilities, escrows, and operating ratios across multiple Google Sheets tabs,
making performance tracking slow and error-prone.
    `,

    challenge: `
Key metrics such as Occupancy %, ADR, RevPAR, NOI margin, and per-occupied-room
costs were not readily visible.

Decisions were driven by totals rather than efficiency ratios, trends, or cost
benchmarks, limiting the owner's ability to act proactively.
    `,

    solution: `
BrevaNext built a custom operating performance dashboard on top of the owner's
existing data model.

Monthly P&L inputs are transformed into standardized KPIs, automated summaries,
cost pressure analysis, and executive insights — including an Owner Health Index
and action flags highlighting operational risks and opportunities.
    `,

    architecture: [
      "Google Sheets structured P&L input model",
      "Automated KPI and NOI calculations",
      "Per-occupied-room cost benchmarking",
      "Owner Health Index scoring logic",
      "Expense pressure analysis vs room revenue",
      "Executive operating summary with alerts",
      "PDF export for monthly reporting",
    ],

    impact: [
      { label: "Reporting Time", value: "↓ 90%" },
      { label: "NOI Visibility", value: "Real-Time" },
      { label: "Cost Transparency", value: "Improved" },
      { label: "Decision Confidence", value: "High" },
    ],
  },

  "ai-process-automation": {
    title: "AI Automation Workflow for Manufacturing Operations",
    industry: "Manufacturing",
    image: "/case-studies/automation-ops-dashboard.png",

    overview: `
A large manufacturing operation relied heavily on manual coordination,
spreadsheet-based reporting, and email-driven approvals across production,
quality, and inventory teams.

BrevaNext automated these workflows to improve execution speed, accuracy, and
real-time visibility across the shop floor.
    `,

    background: `
The organization operated multiple production lines with strict quality and
delivery requirements. Operational data was fragmented across Excel files,
ERP exports, and manual logs maintained by different teams.
    `,

    challenge: `
Manual data entry, report consolidation, and approval routing consumed more than
100 hours per week.

Operational bottlenecks were often identified only after they had already
impacted output, quality, or delivery timelines.
    `,

    solution: `
BrevaNext implemented intelligent automation workflows with AI validation,
RPA-based execution, and real-time dashboards.

Reports, approvals, alerts, and exception handling were automated using
predefined business rules synchronized across systems.
    `,

    architecture: [
      "AI workflow orchestration engine",
      "RPA bots for reporting and data sync",
      "Python ETL pipelines",
      "Real-time operational dashboards",
      "ERP and Excel integrations",
    ],

    impact: [
      { label: "Manual Work", value: "↓ 80%" },
      { label: "Reporting Speed", value: "10× Faster" },
      { label: "Operational Errors", value: "Eliminated" },
      { label: "Productivity", value: "+65%" },
    ],
  },

  "conversational-ai": {
    title: "AI Assistants for Patient Communication",
    industry: "Healthcare",
    image: "/case-studies/conversational-ai-dashboard.png",

    overview: `
Healthcare support teams were overwhelmed by repetitive patient inquiries
related to appointments, follow-ups, and general information.

BrevaNext deployed AI assistants to handle routine interactions and improve
patient experience without compromising compliance.
    `,

    background: `
The organization operated multiple clinics and handled thousands of daily
patient interactions through calls, emails, and messaging platforms.
    `,

    challenge: `
Manual handling led to delayed responses, inconsistent experiences, and
increasing staff burnout.
    `,

    solution: `
AI assistants were deployed across web, WhatsApp, and voice channels to handle
frequent inquiries, book appointments, and route complex cases to staff.
    `,

    architecture: [
      "GPT-powered conversational intelligence",
      "Multichannel deployment (Web, WhatsApp, Voice)",
      "Healthcare-specific intent routing",
      "CRM and appointment system integration",
    ],

    impact: [
      { label: "Support Tickets", value: "↓ 60%" },
      { label: "Response Time", value: "Instant" },
      { label: "Patient Satisfaction", value: "+35%" },
      { label: "Availability", value: "24/7" },
    ],
  },

  "data-analytics-bi": {
    title: "Real-Time Data Analytics & Executive Dashboards",
    industry: "Retail & E-Commerce",
    image: "/case-studies/bi-dashboard.png",

    overview: `
A growing retail chain relied on delayed, spreadsheet-based reporting for sales,
inventory, and performance analysis.

BrevaNext replaced static reports with real-time dashboards and predictive
analytics for leadership.
    `,

    background: `
Data was fragmented across POS systems, spreadsheets, and manual exports, with
reports delivered 24–48 hours late.
    `,

    challenge: `
Leadership lacked real-time visibility and forward-looking insights, resulting
in reactive decision-making.
    `,

    solution: `
Centralized data pipelines and executive dashboards provided a single source of
truth and predictive forecasting capabilities.
    `,

    architecture: [
      "Centralized data warehouse",
      "Automated ETL pipelines",
      "Executive dashboards",
      "Predictive demand forecasting models",
    ],

    impact: [
      { label: "Reporting Speed", value: "Real-Time" },
      { label: "Forecast Accuracy", value: "92%" },
      { label: "Stockouts", value: "↓ 40%" },
      { label: "Decision Speed", value: "3× Faster" },
    ],
  },

  "social-media-ai": {
    title: "AI-Powered Social Media Automation",
    industry: "D2C / E-Commerce",
    image: "/case-studies/social-media-ai-dashboard.png",

    overview: `
A fast-growing D2C brand needed to scale content creation and engagement without
increasing manual marketing effort.

BrevaNext automated content generation, scheduling, and engagement workflows.
    `,

    background: `
Marketing teams spent hours daily creating posts, scheduling content, and
responding to customer messages manually.
    `,

    challenge: `
Manual workflows limited scalability, consistency, and engagement growth.
    `,

    solution: `
AI-driven content generation, automated scheduling, DM automation, and analytics
enabled continuous operation while maintaining brand voice.
    `,

    architecture: [
      "AI content and caption generation",
      "Automated scheduling via platform APIs",
      "DM automation agents",
      "Engagement and sentiment analytics",
    ],

    impact: [
      { label: "Content Consistency", value: "3×" },
      { label: "DM Conversions", value: "+40%" },
      { label: "Time Saved", value: "12+ hrs/week" },
      { label: "Engagement Growth", value: "2×" },
    ],
  },
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = caseStudyDetails[slug as keyof typeof caseStudyDetails];

  if (!cs) {
    return (
      <main className="bg-[#0B0F1A] text-white min-h-screen flex items-center justify-center">
        Case study not found
      </main>
    );
  }

  const index = caseStudyOrder.indexOf(slug as string);
  const nextSlug = caseStudyOrder[index + 1];

  return (
    <main className="bg-[#0B0F1A] text-white">
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20 space-y-14">

        <Link href="/case-studies" className="text-sm text-cyan-300">
          ← Back to Case Studies
        </Link>

        {/* HEADER */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight
            bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
            bg-clip-text text-transparent">
            {cs.title}
          </h1>
          <p className="text-lg text-white/70">
            Industry: {cs.industry} · Status: Deployed in production
          </p>
        </div>

        {/* IMAGE */}
        <Image
          src={cs.image}
          alt={cs.title}
          width={1200}
          height={700}
          className="rounded-xl border border-white/10"
        />

        {/* CONTENT */}
        {[
          ["Executive Overview", cs.overview],
          ["Background", cs.background],
          ["Business Challenge", cs.challenge],
          ["Solution Approach", cs.solution],
        ].map(([title, text]) => (
          <section key={title} className="space-y-3">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {text}
            </p>
          </section>
        ))}

        {/* ARCHITECTURE */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Architecture & Components</h2>
          <ul className="list-disc list-inside text-gray-300 text-base md:text-lg space-y-2">
            {cs.architecture.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* IMPACT */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Business Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cs.impact.map((item, i) => (
              <div key={i} className="glass p-5 rounded-xl text-center">
                <p className="text-2xl font-bold text-cyan-300">{item.value}</p>
                <p className="text-sm text-white/60 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="glass p-8 rounded-xl text-center">
          <p className="text-lg text-white/80 mb-4">
            Interested in a similar solution?
          </p>
          <Link href="/contact" className="text-cyan-300 font-semibold text-lg">
            Start a conversation →
          </Link>
        </div>

        {/* NEXT */}
        {nextSlug && (
          <div className="text-right pt-6">
            <Link href={`/case-studies/${nextSlug}`} className="text-cyan-300 font-medium">
              Next case study →
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
