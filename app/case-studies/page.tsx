import Image from "next/image";
import Link from "next/link";
import PrimaryHeading from "@/app/components/PrimaryHeading";

const caseStudies = [
  {
    slug: "laquinta-operating-performance",
    category: "Hospitality Analytics",
    title: "LaQuinta Monthly Operating Performance Dashboard",
    description:
      "Replaced spreadsheet-based P&L reporting with an executive-ready dashboard for real-time operational insight.",
  },
  {
    slug: "ai-process-automation",
    category: "AI & Process Automation",
    title: "AI automation for manufacturing operations",
    description:
      "Automated manual workflows to improve visibility, reduce errors, and scale operations.",
  },
  {
    slug: "conversational-ai",
    category: "Conversational AI",
    title: "AI assistants for patient communication",
    description:
      "Deployed AI assistants to reduce support load and improve patient experience.",
  },
  {
    slug: "data-analytics-bi",
    category: "Data Analytics & BI",
    title: "Executive dashboards for real-time decision-making",
    description:
      "Replaced delayed reporting with real-time analytics and forecasting.",
  },
  {
    slug: "social-media-ai",
    category: "AI Marketing Automation",
    title: "Automating content and engagement for D2C brands",
    description:
      "Scaled content creation and engagement without increasing manual effort.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#0B0F1A] text-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <PrimaryHeading>Case Studies</PrimaryHeading>

        <p className="mt-6 max-w-3xl text-white/70">
          Real-world examples of how BrevaNext helps organizations automate
          operations, gain clarity from data, and deploy AI systems at scale.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition"
            >

              <div className="p-6">
                <p className="text-sm text-white/60 mb-2">
                  {cs.category}
                </p>

                <h3 className="text-lg font-semibold">
                  {cs.title}
                </h3>

                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  {cs.description}
                </p>

                <p className="mt-4 text-sm text-cyan-300 font-medium">
                  View case study →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
