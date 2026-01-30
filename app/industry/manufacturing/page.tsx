import Image from "next/image";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function ManufacturingIndustryPage() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937,transparent_60%)]" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm uppercase tracking-wide text-white/70 mb-3">
              Manufacturing & Operations
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              AI & Automation for Manufacturing
            </PrimaryHeading>

            <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-white/80">
              Improve operational efficiency, reduce downtime, and gain real-time
              visibility across production and supply chains with AI-driven systems.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              AI consultants for manufacturing organizations
            </h2>

            <p className="text-white/70 leading-relaxed mb-4">
              Manufacturing environments generate massive operational data, yet
              many decisions still rely on delayed or manual reporting.
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              BrevaNext helps manufacturers apply AI and automation to production,
              maintenance, and operations — improving throughput, quality, and
              cost control without disrupting existing systems.
            </p>

            <a
              href="/contact"
              className="
                inline-flex px-6 py-3 rounded-lg font-semibold text-sm
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                text-white hover:opacity-90 transition
              "
            >
              Contact Us
            </a>
          </div>

          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/manufacturing operations.jpg"
              alt="Manufacturing operations analytics"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <section className="py-16 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            Benefits of AI in manufacturing
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Increased operational efficiency",
                desc: "Automate monitoring, reporting, and coordination to reduce delays and manual effort.",
              },
              {
                title: "Reduced downtime",
                desc: "Predictive maintenance identifies potential failures before production is impacted.",
              },
              {
                title: "Improved quality control",
                desc: "Detect defects and anomalies earlier in the production cycle.",
              },
              {
                title: "Cost optimization",
                desc: "Better forecasting and resource allocation reduce waste and overhead.",
              },
              {
                title: "Real-time visibility",
                desc: "Dashboards provide a unified view of production, inventory, and performance.",
              },
            ].map(item => (
              <div
                key={item.title}
                className="
                  rounded-xl p-6
                  bg-black/30
                  border border-white/10
                  hover:border-white/20 transition
                "
              >
                <h3 className="font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Production intelligence & analytics
            </h3>
            <p className="text-white/70 leading-relaxed">
              Real-time analytics provide visibility into production performance, highlighting anomalies and trends that impact throughput, quality, and efficiency. This enables faster, data-driven decisions on the shop floor and more consistent operational outcomes.
            </p>
          </div>

          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/manufacturing analytics.jpg"
              alt="Production analytics dashboard"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/manufacturing automation.jpg"
              alt="Manufacturing automation workflows"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Intelligent process automation
            </h3>
            <p className="text-white/70 leading-relaxed">
              Automating quality checks, approvals, reporting, and compliance workflows brings structure and consistency to daily operations. Standardized processes reduce errors, improve reliability, and ensure critical steps are followed as operations scale.
            </p>
          </div>
        </div>

      </section>

      {/* =====================================================
          HOW BREVA NEXT SUPPORTS MANUFACTURING
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">
          How BrevaNext supports manufacturing organizations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI & Process Automation",
              desc: "Automate production workflows, quality checks, reporting, and compliance processes.",
              href: "/services/ai-automation",
            },
            {
              title: "Business Intelligence & Dashboards",
              desc: "Real-time dashboards for production performance, downtime tracking, and KPIs.",
              href: "/services/business-intelligence",
            },
            {
              title: "AI Advisory & Implementation",
              desc: "Identify high-ROI AI use cases and integrate AI with existing manufacturing systems.",
              href: "/services/ai-advisory",
            },
          ].map(item => (
            <a
              key={item.title}
              href={item.href}
              className="
                group rounded-xl p-6
                bg-white/5 border border-white/10
                hover:border-white/20 transition
              "
            >
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm mb-3">
                {item.desc}
              </p>
              <span className="text-sm font-medium group-hover:underline">
                Learn more →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* =====================================================
          FINAL CTA + PREV / NEXT
      ===================================================== */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Ready to optimize manufacturing operations with AI?
          </h2>

          <p className="text-white/80 mb-7">
            Talk to BrevaNext about practical AI and automation solutions built
            for real manufacturing environments.
          </p>

          <a
            href="/contact"
            className="
              inline-flex px-7 py-3 rounded-lg font-semibold
              bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              text-white hover:opacity-90 transition
            "
          >
            Contact Us
          </a>

          <div className="mt-14 flex justify-between items-center text-base font-semibold">
            <a
              href="/industry/healthcare"
              className="hover:opacity-80 transition"
            >
              ← Healthcare
            </a>

            <a
              href="/industry/finance"
              className="hover:opacity-80 transition"
            >
              Finance & Banking →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
