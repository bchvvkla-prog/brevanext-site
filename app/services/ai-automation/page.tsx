import Image from "next/image";
import Link from "next/link";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function AIProcessAutomationPage() {
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
              AI Process Automation
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              Eliminate manual work with intelligent automation
            </PrimaryHeading>

            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
              We help businesses streamline operations by designing AI-powered
              automations that connect systems, reduce repetitive tasks, and
              scale alongside your teams.
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
              A consultative approach to AI process automation
            </PrimaryHeading>

            <p className="mt-6 text-white/70 leading-relaxed">
              We approach automation as a business transformation initiative,
              not a technical exercise. Our process begins with understanding
              how work flows through your organization, where friction exists,
              and which processes offer the greatest opportunity for impact.
            </p>
          </div>

          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/services/consultative-approach.jpg"
              alt="Consultative AI automation approach"
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
              src="/services/why-brevanext.png"
              alt="Why choose BrevaNext"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div>
            <PrimaryHeading>
              Why choose BrevaNext for AI process automation
            </PrimaryHeading>

            <p className="mt-6 text-white/70 leading-relaxed">
              BrevaNext partners with businesses that want automation aligned
              with real operational needs. We combine deep process understanding
              with AI and system design expertise to deliver solutions that are
              scalable, maintainable, and value-driven.
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
              title: "Workflow Automation",
              desc: "We automate repetitive operational workflows such as approvals, reporting, and task coordination to reduce delays, errors, and manual effort across teams.",
            },
            {
              title: "AI Agents & Internal Assistants",
              desc: "Custom AI assistants embedded directly into your workflows to support analysis, routing, summarization, and decision-making — not standalone chat tools.",
            },
            {
              title: "System Integrations",
              desc: "We connect enterprise platforms, internal tools, and APIs so data flows automatically and reliably without duplication or breakdowns.",
            },
            {
              title: "Intelligent Automation",
              desc: "By combining rules with AI models, we enable prioritization, classification, and human-in-the-loop workflows where governance and accuracy matter.",
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
            href="/services/business-intelligence"
            className="hover:opacity-80 transition"
          >
            ← Business Intelligence & Dashboards
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
