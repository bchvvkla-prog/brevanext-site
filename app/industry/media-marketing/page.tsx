import Image from "next/image";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function MediaMarketingIndustryPage() {
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
              Media, Marketing & Agencies
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              AI & Automation for Marketing Teams
            </PrimaryHeading>

            <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-white/80">
              Scale content, improve campaign performance, and streamline
              marketing operations with practical AI systems.
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
              AI consultants for marketing teams & agencies
            </h2>

            <p className="text-white/70 leading-relaxed mb-4">
              Marketing organizations operate in fast-moving environments where
              content velocity, performance visibility, and operational
              efficiency are critical.
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              BrevaNext helps teams apply AI responsibly to accelerate execution,
              improve insights, and reduce manual coordination — without
              sacrificing brand control.
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
              src="/services/media operations.jpg"
              alt="Marketing operations analytics"
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
            Benefits of AI in marketing & media
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Faster content production",
                desc: "Accelerate drafting, editing, and repurposing across channels using AI-assisted workflows.",
              },
              {
                title: "Improved campaign performance",
                desc: "Optimize targeting, messaging, and spend with data-driven insights.",
              },
              {
                title: "Operational efficiency",
                desc: "Reduce manual coordination, approvals, and reporting overhead.",
              },
              {
                title: "Better audience insights",
                desc: "Understand behavior patterns, engagement trends, and conversion drivers.",
              },
              {
                title: "Scalable marketing operations",
                desc: "Support growth without proportional increases in headcount.",
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
          HOW BREVA NEXT SUPPORTS MARKETING
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">
          How BrevaNext supports marketing organizations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI & Process Automation",
              desc: "Automate campaign workflows, content approvals, reporting, and internal coordination.",
              href: "/services/ai-automation",
            },
            {
              title: "Business Intelligence & Dashboards",
              desc: "Dashboards for performance, ROI tracking, audience engagement, and channel analytics.",
              href: "/services/business-intelligence",
            },
            {
              title: "Custom Web & Internal Tools",
              desc: "Internal tools for asset management, reporting portals, and workflow coordination.",
              href: "/services/custom-web-tools",
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
              AI-powered content & campaigns
            </h3>
            <p className="text-white/70 leading-relaxed">
              AI supports content ideation, creation, and optimization while maintaining brand consistency and editorial oversight. This enables teams to scale campaigns efficiently without compromising quality or control.
            </p>
          </div>

          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/media content.jpg"
              alt="AI content and campaign tools"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/media analytics.jpg"
              alt="Marketing analytics dashboards"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Performance analytics & insights
            </h3>
            <p className="text-white/70 leading-relaxed">
              Real-time dashboards provide visibility into engagement, conversions, and ROI across channels. Timely insights support faster decision-making, performance optimization, and more effective allocation of resources.
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
            Ready to scale marketing with AI?
          </h2>

          <p className="text-white/80 mb-7">
            Talk to BrevaNext about AI-powered marketing systems built for modern teams.
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
              href="/industry/hr"
              className="hover:opacity-80 transition"
            >
              ← HR & Talent Operations
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
