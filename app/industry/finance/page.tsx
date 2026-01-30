import Image from "next/image";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function FinanceIndustryPage() {
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
              Finance & Banking
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              AI & Automation for Finance
            </PrimaryHeading>

            <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-white/80">
              Improve risk management, compliance, and operational efficiency
              using secure, responsible AI systems built for financial institutions.
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
              AI consultants for financial institutions
            </h2>

            <p className="text-white/70 leading-relaxed mb-4">
              Financial organizations operate under strict regulatory, security,
              and risk constraints. AI adoption must be accurate, auditable,
              and compliant by design.
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              BrevaNext helps banks, fintechs, and financial services firms apply
              AI and automation safely — delivering measurable value without
              compromising governance.
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
              src="/services/finance operations.jpg"
              alt="Financial operations analytics"
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
            Benefits of AI in finance
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Improved risk management",
                desc: "Identify anomalies and risk patterns earlier using machine learning models.",
              },
              {
                title: "Automated compliance",
                desc: "Reduce manual compliance work while maintaining audit-ready documentation.",
              },
              {
                title: "Fraud detection",
                desc: "Detect suspicious activity in real time across transactions and accounts.",
              },
              {
                title: "Operational efficiency",
                desc: "Automate approvals, reporting, and internal financial workflows.",
              },
              {
                title: "Better decision-making",
                desc: "Data-driven insights support smarter planning and forecasting.",
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
              Fraud detection & compliance automation
            </h3>
            <p className="text-white/70 leading-relaxed">
              Machine learning models analyze transactions and operational data to identify fraud risks and surface anomalies early. Automated monitoring strengthens compliance, reduces exposure, and supports consistent oversight across complex operations.
            </p>
          </div>

          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/finance fraud.jpg"
              alt="Fraud detection analytics"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/finance analytics.jpg"
              alt="Financial analytics dashboards"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Financial intelligence & reporting
            </h3>
            <p className="text-white/70 leading-relaxed">
              Real-time dashboards replace manual reporting, providing clear visibility into financial performance and key drivers. Accurate, timely insights support better planning, faster decision-making, and more consistent financial oversight across teams.
            </p>
          </div>
        </div>

      </section>

      {/* =====================================================
          HOW BREVA NEXT SUPPORTS FINANCE
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">
          How BrevaNext supports financial organizations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Advisory & Implementation",
              desc: "Define compliant AI strategies aligned with regulatory and security requirements.",
              href: "/services/ai-advisory",
            },
            {
              title: "Business Intelligence & Dashboards",
              desc: "Dashboards for financial performance, risk exposure, and compliance KPIs.",
              href: "/services/business-intelligence",
            },
            {
              title: "AI & Process Automation",
              desc: "Automate approvals, reporting, and compliance workflows safely.",
              href: "/services/ai-automation",
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
            Ready to modernize financial operations with AI?
          </h2>

          <p className="text-white/80 mb-7">
            Talk to BrevaNext about secure, compliant AI solutions built for
            finance and banking.
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
              href="/industry/manufacturing"
              className="hover:opacity-80 transition"
            >
              ← Manufacturing & Operations
            </a>

            <a
              href="/industry/retail"
              className="hover:opacity-80 transition"
            >
              Retail & E-Commerce →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
