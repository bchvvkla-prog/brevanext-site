import Image from "next/image";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function HealthcareIndustryPage() {
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
              Healthcare Industry
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              AI & Automation for Healthcare
            </PrimaryHeading>

            <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-white/80">
              Reduce administrative burden, improve patient experience, and
              enable data-driven decisions with compliant AI systems.
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
              AI consultants for healthcare organizations
            </h2>

            <p className="text-white/70 leading-relaxed mb-4">
              Healthcare organizations operate in high-stakes environments where
              efficiency, accuracy, and compliance are critical.
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              BrevaNext helps hospitals, clinics, and healthcare networks apply
              AI responsibly — focusing on real workflows, measurable outcomes,
              and regulatory alignment.
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
              src="/services/operations-1.jpg"
              alt="Healthcare operations and AI systems"
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
            Benefits of AI in healthcare
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Increased operational efficiency",
                desc: "Automate administrative tasks, reduce errors, and improve staff productivity.",
              },
              {
                title: "Reduced operational costs",
                desc: "Optimize staffing, facilities, and resources without compromising care quality.",
              },
              {
                title: "Better decision-making",
                desc: "Use real-time data and analytics for planning and operational management.",
              },
              {
                title: "Improved patient experience",
                desc: "Reduce wait times and improve communication across the care journey.",
              },
              {
                title: "Regulatory compliance",
                desc: "Automate monitoring and documentation to meet healthcare regulations reliably.",
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
              AI-driven patient care & operations
            </h3>
            <p className="text-white/70 leading-relaxed">
              Advanced predictive analytics forecast patient volumes, care timelines, and clinical outcomes—helping healthcare teams proactively allocate staff, optimize facility capacity, and deliver better patient experiences.
            </p>
          </div>

          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/patient-care-1.jpg"
              alt="AI-driven patient care"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/automation.jpg"
              alt="Healthcare process automation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Smart process automation
            </h3>
            <p className="text-white/70 leading-relaxed">
              We automate healthcare documentation, approvals, and compliance workflows to reduce manual effort and operational risk. By replacing fragmented, manual processes with structured and auditable workflows, healthcare organizations gain greater consistency, regulatory alignment, and operational reliability—without increasing administrative burden.
            </p>
          </div>
        </div>

      </section>

      {/* =====================================================
          HOW BREVA NEXT SUPPORTS HEALTHCARE
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">
          How BrevaNext supports healthcare organizations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI & Process Automation",
              desc: "Automate scheduling, documentation, approvals, and compliance monitoring.",
              href: "/services/ai-automation",
            },
            {
              title: "AI Advisory & Implementation",
              desc: "Define strategy and implement AI aligned with clinical workflows and regulations.",
              href: "/services/ai-advisory",
            },
            {
              title: "Business Intelligence & Dashboards",
              desc: "Real-time visibility into patient flow, staffing, utilization, and operations.",
              href: "/services/business-intelligence",
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
          FINAL CTA + NEXT
      ===================================================== */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Ready to modernize healthcare operations with AI?
          </h2>

          <p className="text-white/80 mb-7">
            Talk to BrevaNext about practical, compliant AI solutions tailored to
            healthcare organizations.
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

          {/* NEXT ONLY (first industry) */}
          <div className="mt-14 flex justify-end text-base font-semibold">
            <a
              href="/industry/manufacturing"
              className="hover:opacity-80 transition"
            >
              Manufacturing & Operations →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
