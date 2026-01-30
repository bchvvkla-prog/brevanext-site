"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "BrevaNext automated critical operational workflows that were slowing our teams down. The improvements were measurable within weeks, not months.",
    name: "Operations Manager",
    company: "Logistics & Supply Chain Company",
    rating: 5,
  },
  {
    quote:
      "Their dashboards gave our leadership team real-time visibility into KPIs we previously tracked manually. Decision-making became faster and more confident.",
    name: "Head of Analytics",
    company: "Retail Organization",
    rating: 5,
  },
  {
    quote:
      "What stood out was their understanding of business context — not just technology. Every solution felt intentional and aligned with our goals.",
    name: "Founder",
    company: "Professional Services Firm",
    rating: 5,
  },
  {
    quote:
      "BrevaNext helped us design internal systems that scaled with our growth instead of becoming bottlenecks.",
    name: "COO",
    company: "Mid-Market Technology Company",
    rating: 4,
  },
  {
    quote:
      "Clear communication, fast execution, and outcomes we could actually measure. Exactly what we needed from a partner.",
    name: "Director of Operations",
    company: "Healthcare Services Company",
    rating: 5,
  },
  {
    quote:
      "Automation reduced reporting errors and saved our team several hours every week. The ROI was obvious.",
    name: "Finance Lead",
    company: "Finance & Accounting Firm",
    rating: 4,
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scroll = () => {
      if (paused) return;

      scrollAmount += 0.3;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 16);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="bg-[#0B0F1A] py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-wide text-white/60">
            Testimonials
          </p>

          <h2
            className="
              text-4xl md:text-5xl font-extrabold mb-6
              bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              bg-clip-text text-transparent
            "
          >
            What teams say about working with us
          </h2>

          <p className="text-white/75 text-lg leading-relaxed">
            Leaders across industries trust BrevaNext to deliver AI, automation,
            and data systems that create real operational impact.
          </p>
        </div>

        {/* AUTO SCROLL ROW */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="flex gap-8 overflow-hidden"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="
                flex-shrink-0
                w-[380px]
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-2xl p-8
                flex flex-col justify-between
                overflow-hidden
              "
            >
              {/* STAR RATING */}
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`text-base ${
                      idx < t.rating ? "text-yellow-400" : "text-white/20"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* QUOTE */}
              <p className="text-white/85 text-base leading-relaxed break-words">
                “{t.quote}”
              </p>

              {/* AUTHOR */}
              <div className="mt-8">
                <p className="text-white font-medium text-sm">
                  {t.name}
                </p>
                <p className="text-white/60 text-sm">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
