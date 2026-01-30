import Image from "next/image";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function RetailIndustryPage() {
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
              Retail & E-Commerce
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              AI & Automation for Retail
            </PrimaryHeading>

            <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-white/80">
              Improve demand forecasting, customer engagement, and operational
              efficiency across modern retail and e-commerce businesses.
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
              AI consultants for retail & e-commerce organizations
            </h2>

            <p className="text-white/70 leading-relaxed mb-4">
              Retail businesses operate in fast-moving environments where demand
              shifts quickly and customer expectations are constantly rising.
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              BrevaNext helps retailers apply AI and automation to inventory
              planning, customer insights, and internal operations — driving
              profitability across digital and physical channels.
            </p>

            <a
              href="/contact"
              className="
                inline-flex px-6 py-3 rounded-lg text-sm font-semibold
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                text-white hover:opacity-90 transition
              "
            >
              Contact Us
            </a>
          </div>

          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/Retail operations.jpg"
              alt="Retail operations and analytics"
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
            Benefits of AI in retail
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Improved demand forecasting",
                desc: "Predict customer demand accurately to reduce stockouts and overstocking.",
              },
              {
                title: "Personalized customer experiences",
                desc: "Tailor offers, recommendations, and engagement using behavioral data.",
              },
              {
                title: "Operational efficiency",
                desc: "Automate reporting, inventory updates, and internal workflows.",
              },
              {
                title: "Cost optimization",
                desc: "Reduce waste and improve margins through smarter planning.",
              },
              {
                title: "Faster decision-making",
                desc: "Real-time insights enable rapid responses to market changes.",
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
              Demand forecasting & inventory planning
            </h3>
            <p className="text-white/70 leading-relaxed">
              Predictive models analyze historical sales, seasonality, and demand trends to improve forecasting accuracy. More reliable forecasts support smarter inventory planning, reduce waste, and help maintain service levels as demand fluctuates.
            </p>
          </div>

          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/forecasting.jpg"
              alt="Retail demand forecasting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/retail analytics.jpg"
              alt="Retail analytics dashboards"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Customer intelligence & analytics
            </h3>
            <p className="text-white/70 leading-relaxed">
              Unified analytics dashboards provide a clear view of customer behavior, purchasing patterns, and engagement across channels. This visibility supports more informed decisions around marketing, retention, and customer experience.
            </p>
          </div>
        </div>

      </section>

      {/* =====================================================
          HOW BREVA NEXT SUPPORTS RETAIL
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">
          How BrevaNext supports retail organizations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Business Intelligence & Dashboards",
              desc: "Dashboards for sales, inventory, customer behavior, and channel performance.",
              href: "/services/business-intelligence",
            },
            {
              title: "Custom Web & Internal Tools",
              desc: "Internal tools for merchandising, pricing, marketing, and operations.",
              href: "/services/custom-web-tools",
            },
            {
              title: "AI & Process Automation",
              desc: "Automate inventory updates, reporting, fulfillment, and customer support.",
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
            Ready to scale retail operations with AI?
          </h2>

          <p className="text-white/80 mb-7">
            Talk to BrevaNext about practical AI and automation solutions for
            retail and e-commerce businesses.
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
              href="/industry/finance"
              className="hover:opacity-80 transition"
            >
              ← Finance & Banking
            </a>

            <a
              href="/industry/logistics"
              className="hover:opacity-80 transition"
            >
              Logistics & Supply Chain →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
