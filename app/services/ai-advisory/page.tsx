import Image from "next/image";
import Link from "next/link";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function AIAdvisoryPage() {
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
              AI Advisory & Implementation
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              Make informed AI decisions with confidence
            </PrimaryHeading>

            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
              We help businesses evaluate, plan, and implement AI initiatives
              that align with strategic goals — avoiding hype and focusing on
              measurable outcomes.
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
              A consultative approach to AI advisory
            </PrimaryHeading>

            <p className="mt-6 text-white/70 leading-relaxed">
              AI adoption should be deliberate and aligned with your business
              strategy. We work closely with leadership teams to assess
              readiness, identify practical AI opportunities, and define a
              roadmap that balances innovation with risk management.
            </p>
          </div>

          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/services/ai-advisory-consultative.jpg"
              alt="Consultative AI advisory"
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
              src="/services/why-brevanext-advisory.jpg"
              alt="Why choose BrevaNext for AI advisory"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div>
            <PrimaryHeading>
              Why choose BrevaNext for AI advisory & implementation
            </PrimaryHeading>

            <p className="mt-6 text-white/70 leading-relaxed">
              BrevaNext provides unbiased, implementation-aware AI guidance.
              Our advisory approach is grounded in real-world execution
              experience — ensuring recommendations are practical, scalable,
              and aligned with long-term business value.
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
              title: "AI Readiness Assessment",
              desc: "Evaluation of your data, systems, processes, and governance to determine where AI can deliver real business value.",
            },
            {
              title: "AI Strategy & Roadmapping",
              desc: "Clear, phased AI roadmaps that align initiatives with business priorities, timelines, and risk considerations.",
            },
            {
              title: "Model Selection & Architecture",
              desc: "Guidance on choosing the right AI models, platforms, and system architecture based on your use cases and constraints.",
            },
            {
              title: "AI Implementation Support",
              desc: "Hands-on support during implementation to ensure AI systems are deployed responsibly, securely, and effectively.",
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
            href="/services/custom-web-tools"
            className="hover:opacity-80 transition"
          >
            ← Custom Web & Internal Tools
          </Link>

          <Link
            href="/services/staffing-consulting"
            className="hover:opacity-80 transition"
          >
            Staffing & Consulting →
          </Link>
        </div>
      </section>

      {/* Footer is global */}
    </main>
  );
}
