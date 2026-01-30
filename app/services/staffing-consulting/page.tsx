import Image from "next/image";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function StaffingConsultingPage() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative w-full h-[380px] md:h-[440px] overflow-hidden">
        <Image
          src="/services/ai-advisory-hero.jpg"
          alt="Staffing and consulting support"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937,transparent_60%)]" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm uppercase tracking-wide text-white/70 mb-4">
              Staffing & Consulting
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              Helping People Get Placed. Helping Companies Get Work Done.
            </PrimaryHeading>

            <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/80">
              BrevaNext connects motivated people with real project
              opportunities and helps companies get reliable support without
              long hiring cycles.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT THIS IS
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Simple. Transparent. Opportunity-focused.
            </h2>

            <p className="text-white/70 leading-relaxed mb-4">
              We work with companies that need extra hands for projects,
              ongoing work, or short-term support.
            </p>

            <p className="text-white/70 leading-relaxed">
              At the same time, we help students and professionals find
              meaningful opportunities where they can learn, earn, and grow.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Real projects, not fake promises",
              "Clear communication and guidance",
              "Opportunities for freshers and experienced candidates",
              "Support from start to placement",
            ].map(item => (
              <div
                key={item}
                className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <span className="text-[#5DF0FF]">●</span>
                <p className="text-white/80 text-sm">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          FOR CANDIDATES
      ===================================================== */}
      <section className="py-16 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            For students & job seekers
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              [
                "Placement assistance",
                "We help you find opportunities based on your skills and interest.",
              ],
              [
                "Project exposure",
                "Work on real projects that improve your confidence and experience.",
              ],
              [
                "Guidance & support",
                "We guide you through communication, expectations, and onboarding.",
              ],
              [
                "Flexible opportunities",
                "Short-term, long-term, and project-based options available.",
              ],
            ].map(([title, desc]) => (
              <div key={title} className="border-l-2 border-white/20 pl-5">
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-white/70 text-sm">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          FOR COMPANIES
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          For companies & startups
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            [
              "Quick support",
              "Get help without long hiring processes or commitments.",
            ],
            [
              "Flexible engagement",
              "Scale up or down based on workload and timelines.",
            ],
            [
              "Project-ready resources",
              "People aligned to get work done, not just occupy seats.",
            ],
            [
              "Cost-effective",
              "Reduce hiring risk and operational overhead.",
            ],
          ].map(([title, desc]) => (
            <div key={title} className="border-l-2 border-white/20 pl-5">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Looking for an opportunity or need support?
          </h2>

          <p className="text-white/80 mb-8">
            Whether you want to get placed or you need help getting work done —
            just message us. We’ll guide you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="/contact"
              className="
                inline-flex px-7 py-3 rounded-lg font-semibold
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5)]
                text-white hover:opacity-90 transition
              "
            >
              Message us to get placed
            </a>

            <a
              href="/contact"
              className="
                inline-flex px-7 py-3 rounded-lg font-semibold
                border border-white/20
                hover:bg-white/10 transition
              "
            >
              Message us for staffing support
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}
