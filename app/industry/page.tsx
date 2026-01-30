import NextPrevNav from "@/app/components/NextPrevNav";
import { industries } from "@/app/lib/industries";
import Image from "next/image";
import PrimaryHeading from "@/app/components/PrimaryHeading";
import Link from "next/link";

export default function IndustriesPage() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* =====================================================
          HERO — INDUSTRIES
      ===================================================== */}
      <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden">
        <Image
          src="/services/ai-advisory-hero.jpg"
          alt="Industries we serve"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Subtle depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937,transparent_60%)]" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm uppercase tracking-wide text-white/70 mb-4">
              Industries
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              Industries we serve
            </PrimaryHeading>

            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
              We partner with organizations across industries to apply AI,
              automation, and data intelligence to complex operational
              challenges.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRY ANCHORS
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industry/${ind.slug}`}
              className="
                group rounded-xl p-8
                bg-white/5 border border-white/10
                backdrop-blur
                hover:border-white/20 transition
              "
            >
              {/* Accent bar */}
              <div
                className="
                  w-10 h-1 mb-4 rounded-full
                  bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                "
              />

              <h3 className="text-xl font-semibold mb-3 text-white">
                {ind.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                {ind.description}
              </p>

              <span className="inline-block mt-6 text-sm font-medium text-white/90 group-hover:underline">
                Explore →
              </span>
            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}

const INDUSTRIES = [
  {
    title: "Healthcare",
    slug: "healthcare",
    description:
      "AI and automation to reduce administrative burden and improve patient experience.",
  },
  {
    title: "Manufacturing & Operations",
    slug: "manufacturing",
    description:
      "Operational intelligence, workflow automation, and real-time visibility.",
  },
  {
    title: "Retail & E-Commerce",
    slug: "retail",
    description:
      "Demand forecasting, personalization, and customer intelligence.",
  },
  {
    title: "Finance & Banking",
    slug: "finance",
    description:
      "Fraud detection, compliance automation, and intelligent systems.",
  },
  {
    title: "Logistics & Supply Chain",
    slug: "logistics",
    description:
      "Planning, optimization, and end-to-end visibility.",
  },
  {
    title: "Education & EdTech",
    slug: "education",
    description:
      "AI-powered learning analytics and administrative automation.",
  },
  {
    title: "HR & Talent Operations",
    slug: "hr",
    description:
      "Hiring automation, people analytics, and workflow optimization.",
  },
  {
    title: "Media & Marketing",
    slug: "media",
    description:
      "Content automation, performance insights, and engagement analytics.",
  },
];
