import Image from "next/image";
import Link from "next/link";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function BusinessIntelligencePage() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* =====================================================
          HERO (NO IMAGE)
      ===================================================== */}
      <section className="relative w-full py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F1A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937,transparent_60%)]" />

        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm uppercase tracking-wide text-white/70 mb-4">
              Business Intelligence & Dashboards
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              Turn data into operational clarity
            </PrimaryHeading>

            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
              We help businesses transform raw data into clear, actionable
              insights through custom dashboards, reporting systems, and
              decision-ready analytics.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONSULTATIVE APPROACH
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <PrimaryHeading>
              A consultative approach to business intelligence
            </PrimaryHeading>

            <p className="mt-6 text-white/70 leading-relaxed">
              Effective business intelligence begins with understanding how
              decisions are made today. We work closely with leadership and
              operations teams to identify the metrics that matter, eliminate
              noise, and design reporting that supports confident, timely
              decision-making.
            </p>
          </div>

          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/services/bi-consultative.jpg"
              alt="Consultative business intelligence approach"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY BREVA NEXT
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/services/why-brevanext-bi.jpg"
              alt="Why choose BrevaNext for business intelligence"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div>
            <PrimaryHeading>
              Why choose BrevaNext for business intelligence
            </PrimaryHeading>

            <p className="mt-6 text-white/70 leading-relaxed">
              BrevaNext designs business intelligence systems that reflect how
              your business actually operates. We focus on accuracy,
              consistency, and usability — ensuring dashboards become a trusted
              foundation for strategic and operational decisions.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES (CARDS)
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <PrimaryHeading>
          Services we deliver
        </PrimaryHeading>

        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          {[
            {
              title: "Executive Dashboards",
              desc: "High-level dashboards designed for leadership teams to monitor performance, trends, and outcomes across the business.",
            },
            {
              title: "Operational Reporting",
              desc: "Detailed operational reports that help teams track daily performance, identify bottlenecks, and improve execution.",
            },
            {
              title: "Data Modeling & Metrics Design",
              desc: "Clean data models and standardized metrics to ensure reporting is consistent, accurate, and trusted.",
            },
            {
              title: "Automated Reporting Systems",
              desc: "Automated data pipelines and scheduled reporting that reduce manual effort and ensure insights are always up to date.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="
                rounded-xl p-8
                bg-white/5 border border-white/10
                backdrop-blur
                hover:border-white/20 transition
              "
            >
              <h3 className="text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CTA + NEXT / PREV
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <Link
          href="/contact"
          className="
            inline-flex px-7 py-3 rounded-lg font-semibold
            bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
            text-white hover:opacity-90 transition
          "
        >
          Contact Us
        </Link>

        <div className="mt-14 flex justify-between text-base font-semibold">
          <Link
            href="/services/ai-automation"
            className="hover:opacity-80 transition"
          >
            ← AI & Process Automation
          </Link>

          <Link
            href="/services/custom-web-tools"
            className="hover:opacity-80 transition"
          >
            Custom Web & Internal Tools →
          </Link>
        </div>
      </section>

      {/* Footer is global */}
    </main>
  );
}
