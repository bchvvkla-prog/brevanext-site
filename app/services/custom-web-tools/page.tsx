import Image from "next/image";
import Link from "next/link";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function CustomWebToolsPage() {
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
              Custom Web & Internal Tools
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              Build tools that fit how your business actually works
            </PrimaryHeading>

            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
              We design and build custom web applications and internal tools
              tailored to your workflows — replacing spreadsheets, manual
              processes, and off-the-shelf software that doesn’t scale.
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
              A consultative approach to custom tools
            </PrimaryHeading>

            <p className="mt-6 text-white/70 leading-relaxed">
              Before writing any code, we focus on understanding how your teams
              operate, where inefficiencies exist, and what information people
              need to do their jobs effectively. Our goal is to build tools that
              support real workflows — not force teams to adapt to software.
            </p>
          </div>

          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/services/custom-tools-consultative.jpg"
              alt="Consultative approach to custom tools"
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
              src="/services/why-brevanext-tools.jpg"
              alt="Why choose BrevaNext for custom tools"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div>
            <PrimaryHeading>
              Why choose BrevaNext for custom web & internal tools
            </PrimaryHeading>

            <p className="mt-6 text-white/70 leading-relaxed">
              BrevaNext builds internal tools with a long-term mindset. We focus
              on clarity, maintainability, and scalability — ensuring your
              systems evolve with your business instead of becoming technical
              debt.
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
              title: "Internal Dashboards & Portals",
              desc: "Custom dashboards and internal portals that centralize data, workflows, and tools for your teams in one secure place.",
            },
            {
              title: "Workflow & Operations Tools",
              desc: "Purpose-built tools to manage approvals, tracking, task coordination, and internal processes efficiently.",
            },
            {
              title: "Client & Partner Portals",
              desc: "Secure, role-based portals that give clients or partners controlled access to data, reports, and workflows.",
            },
            {
              title: "Custom Web Applications",
              desc: "End-to-end development of web applications tailored to your business logic, integrations, and growth plans.",
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
            href="/services/ai-advisory"
            className="hover:opacity-80 transition"
          >
            AI Advisory & Implementation →
          </Link>
        </div>
      </section>

      {/* Footer is global */}
    </main>
  );
}
