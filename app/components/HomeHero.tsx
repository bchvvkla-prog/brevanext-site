import PrimaryHeading from "./PrimaryHeading";

export default function HomeHero() {
  return (
    <section className="relative w-full bg-[#0B0F1A] overflow-hidden py-20 md:py-0 md:min-h-[640px]">

      {/* Subtle depth layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937,transparent_60%)]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex md:items-center justify-center px-4 md:min-h-[640px]">
        <div className="max-w-6xl mx-auto text-center text-white">

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
          <p className="mt-6 text-sm sm:text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            BrevaNext partners with growing companies to design custom AI
            automations, internal tools, and decision systems that reduce manual
            work and support better business outcomes.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm mx-auto">

            {/* Primary CTA */}
            <a
              href="/contact"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-lg font-semibold
                bg-white text-black
                hover:bg-gray-100 transition
                w-full sm:w-auto whitespace-nowrap
              "
            >
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Contact Us</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="/services"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-lg font-semibold
                border border-white/30 text-white
                hover:bg-white/10 transition
                w-full sm:w-auto whitespace-nowrap
              "
            >
              <span className="sm:hidden">Services</span>
              <span className="hidden sm:inline">Explore Services</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
