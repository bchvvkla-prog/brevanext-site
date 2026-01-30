import Image from "next/image";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export default function EducationIndustryPage() {
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
              Education & EdTech
            </p>

            <PrimaryHeading
              as="h1"
              className="
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              AI & Automation for Education
            </PrimaryHeading>

            <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-white/80">
              Improve learning outcomes, reduce administrative workload, and
              scale education platforms using secure AI-powered systems.
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
              AI consultants for education institutions & EdTech companies
            </h2>

            <p className="text-white/70 leading-relaxed mb-4">
              Education platforms manage complex ecosystems of students,
              instructors, content, and data.
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              BrevaNext applies AI and automation to improve efficiency,
              personalization, and visibility — without disrupting pedagogy or
              existing systems.
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
              src="/services/education learning.jpg"
              alt="AI-powered education analytics"
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
            Benefits of AI in education
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Personalized learning",
                desc: "Adaptive learning paths based on student progress and engagement.",
              },
              {
                title: "Lower admin workload",
                desc: "Automate admissions, grading support, and student services.",
              },
              {
                title: "Higher engagement",
                desc: "AI tutors and assistants support real-time learning.",
              },
              {
                title: "Academic visibility",
                desc: "Analytics help educators track performance and outcomes.",
              },
              {
                title: "Scalable platforms",
                desc: "Support growth without increasing operational overhead.",
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
              AI-powered learning & tutoring
            </h3>
            <p className="text-white/70 leading-relaxed">
              Intelligent tutoring systems enable personalized learning paths, adaptive feedback, and relevant content recommendations. This approach supports improved learning outcomes, better engagement, and scalable education delivery.
            </p>
          </div>

          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/education tutoring.jpg"
              alt="AI tutoring systems"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[260px] rounded-xl overflow-hidden">
            <Image
              src="/services/education analytics.jpg"
              alt="Education analytics dashboards"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Academic analytics & insights
            </h3>
            <p className="text-white/70 leading-relaxed">
              Dashboards provide clear visibility into student engagement, performance, and learning outcomes. These insights support informed academic planning, early intervention, and continuous improvement across educational programs.
            </p>
          </div>
        </div>

      </section>

      {/* =====================================================
          HOW BREVA NEXT SUPPORTS EDUCATION
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">
          How BrevaNext supports education organizations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI & Process Automation",
              desc: "Automate admissions, grading support, and internal workflows.",
              href: "/services/ai-automation",
            },
            {
              title: "Business Intelligence & Dashboards",
              desc: "Dashboards for enrollment trends and student performance.",
              href: "/services/business-intelligence",
            },
            {
              title: "AI Advisory & Implementation",
              desc: "Deploy responsible AI strategies at scale.",
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
            Ready to modernize education with AI?
          </h2>

          <p className="text-white/80 mb-7">
            Talk to BrevaNext about secure, scalable AI solutions for education
            and EdTech platforms.
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
              href="/industry/logistics"
              className="hover:opacity-80 transition"
            >
              ← Logistics & Supply Chain
            </a>

            <a
              href="/industry/hr"
              className="hover:opacity-80 transition"
            >
              HR & Talent Operations →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
