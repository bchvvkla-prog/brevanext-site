import PrimaryHeading from "./PrimaryHeading";

export default function HomeHero() {
  return (
    <section className="relative w-full h-[520px] md:h-[640px] bg-[#0B0F1A] overflow-hidden">

      {/* Subtle depth layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937,transparent_60%)]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          {/* Primary Heading */}
          <PrimaryHeading
            as="h1"
            className="
              bg-clip-text text-transparent
              bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
            "
          >
            Empowering businesses with AI and automation that replaces
            repetitive work and runs operations at scale.
          </PrimaryHeading>

          {/* Supporting copy */}
          <p className="mt-8 text-lg md:text-xl text-white/80">
            BrevaNext partners with growing companies to design custom AI
            automations, internal tools, and decision systems that reduce manual
            work and support better business outcomes.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Primary CTA */}
            <a
              href="/contact"
              className="
                inline-flex px-7 py-3 rounded-lg font-semibold
                bg-white text-black
                hover:bg-gray-100 transition
              "
            >
              Contact Us
            </a>

            {/* Secondary CTA */}
            <a
              href="/services"
              className="
                inline-flex px-7 py-3 rounded-lg font-semibold
                border border-white/30 text-white
                hover:bg-white/10 transition
              "
            >
              Explore Services
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
