import Image from "next/image";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function HRTalentIndustryPage() {
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
              HR & Talent Operations
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              AI & Automation for HR Teams
            </PrimaryHeading>

            <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-white/80">
              Streamline hiring, onboarding, and workforce operations with
              intelligent automation and data-driven insights.
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
              AI consultants for HR & people operations
            </h2>

            <p className="text-white/70 leading-relaxed mb-4">
              HR teams manage high-volume processes such as recruiting,
              onboarding, employee support, and compliance.
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              BrevaNext helps HR and talent operations teams apply AI and
              automation to reduce manual work while improving decision quality
              — without replacing the human element.
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
              src="/services/hr operations.jpg"
              alt="HR analytics and operations"
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
            Benefits of AI in HR & talent operations
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Faster hiring cycles",
                desc: "Automate resume screening and candidate routing to reduce time-to-hire.",
              },
              {
                title: "Reduced administrative workload",
                desc: "Eliminate repetitive HR tasks, approvals, and manual coordination.",
              },
              {
                title: "Improved hiring decisions",
                desc: "Use data-driven insights to identify and prioritize top candidates.",
              },
              {
                title: "Better employee experience",
                desc: "AI assistants support onboarding and internal HR queries.",
              },
              {
                title: "Operational visibility",
                desc: "Dashboards provide insights into hiring, attrition, and workforce metrics.",
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
          HOW BREVA NEXT SUPPORTS HR
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">
          How BrevaNext supports HR teams
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI & Process Automation",
              desc: "Automate screening, interview scheduling, onboarding workflows, and HR approvals.",
              href: "/services/ai-automation",
            },
            {
              title: "Business Intelligence & Dashboards",
              desc: "Dashboards for hiring funnels, attrition, and workforce planning.",
              href: "/services/business-intelligence",
            },
            {
              title: "AI Advisory & Implementation",
              desc: "Identify high-ROI HR AI use cases and implement responsibly.",
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
          SOLUTIONS
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Intelligent hiring & screening
            </h3>
            <p className="text-white/70 leading-relaxed">
              AI models support resume analysis, candidate matching, and interview prioritization to streamline hiring workflows. This improves speed, consistency, and decision quality across talent acquisition processes.
            </p>
          </div>

          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/hr hiring.jpg"
              alt="AI-powered hiring systems"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/hr workforce.jpg"
              alt="Workforce analytics dashboards"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Workforce analytics & insights
            </h3>
            <p className="text-white/70 leading-relaxed">
              Dashboards provide visibility into workforce trends, performance, and attrition across the organization. These insights support strategic workforce planning, risk management, and more informed leadership decisions.
            </p>
          </div>
        </div>

      </section>

      {/* =====================================================
          FINAL CTA + PREV / NEXT
      ===================================================== */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Ready to modernize HR operations with AI?
          </h2>

          <p className="text-white/80 mb-7">
            Talk to BrevaNext about AI-powered HR solutions designed for
            people-first organizations.
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

          <div className="mt-14 flex justify-between items-center text-base font-semibold text-white">
            <a href="/industry/education" className="hover:opacity-80 transition">
              ← Education & EdTech
            </a>


            <a href="/industry/media-marketing" className="hover:opacity-80 transition">
              Media, Marketing & Agencies →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
