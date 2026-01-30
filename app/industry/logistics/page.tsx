import Image from "next/image";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function LogisticsIndustryPage() {
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
              Logistics & Supply Chain
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              AI & Automation for Logistics
            </PrimaryHeading>

            <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-white/80">
              Improve planning, visibility, and operational efficiency across
              complex logistics and supply chain networks.
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
              AI consultants for logistics & supply chain teams
            </h2>

            <p className="text-white/70 leading-relaxed mb-4">
              Logistics operations depend on precise coordination, real-time
              visibility, and fast decision-making across multiple systems.
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              BrevaNext helps logistics providers and supply chain organizations
              apply AI and automation to routing, forecasting, and operational
              monitoring — reducing delays and controlling costs.
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
              src="/services/logistics operations.jpg"
              alt="Logistics operations analytics"
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
            Benefits of AI in logistics
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Route optimization",
                desc: "AI optimizes delivery routes to reduce transit time and fuel costs.",
              },
              {
                title: "Accurate demand forecasting",
                desc: "Predict shipment volumes and inventory needs more reliably.",
              },
              {
                title: "Real-time visibility",
                desc: "Dashboards provide live insights into shipments and operations.",
              },
              {
                title: "Lower operational costs",
                desc: "Automation reduces manual coordination and inefficiencies.",
              },
              {
                title: "Improved reliability",
                desc: "Predictive analytics identify delays and risks early.",
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
              Route optimization & planning
            </h3>
            <p className="text-white/70 leading-relaxed">
              Optimization models improve routing, scheduling, and load planning to increase delivery efficiency and reduce transportation costs. Better planning supports more reliable operations and consistent service levels across logistics networks.
            </p>
          </div>

          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/logistics routes.jpg"
              alt="Route optimization analytics"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/logistics visibility.jpg"
              alt="Supply chain visibility dashboards"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Supply chain visibility & analytics
            </h3>
            <p className="text-white/70 leading-relaxed">
              End-to-end dashboards provide clear visibility into shipments, inventory flow, and operational performance across the supply chain. This transparency supports faster issue resolution, better coordination, and more informed operational decisions.
            </p>
          </div>
        </div>

      </section>

      {/* =====================================================
          HOW BREVA NEXT SUPPORTS LOGISTICS
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">
          How BrevaNext supports logistics organizations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI & Process Automation",
              desc: "Automate shipment tracking, exception handling, and coordination.",
              href: "/services/ai-automation",
            },
            {
              title: "Business Intelligence & Dashboards",
              desc: "Dashboards for shipment performance, delays, and KPIs.",
              href: "/services/business-intelligence",
            },
            {
              title: "AI Advisory & Implementation",
              desc: "Deploy scalable AI solutions across logistics networks.",
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
          FINAL CTA + PREV / NEXT
      ===================================================== */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Ready to optimize logistics operations with AI?
          </h2>

          <p className="text-white/80 mb-7">
            Talk to BrevaNext about AI-powered solutions built for complex
            supply chain environments.
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
              href="/industry/retail"
              className="hover:opacity-80 transition"
            >
              ← Retail & E-Commerce
            </a>

            <a
              href="/industry/education"
              className="hover:opacity-80 transition"
            >
              Education & EdTech →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
