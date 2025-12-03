"use client";

import HomeHero from "./components/HomeHero";
import AboutSection from "./components/AboutSection";
import IndustriesSection from "./components/IndustriesSection";
import HomeCaseStudies from "./components/case-studies";

export default function Home() {
  return (
    <main className="pt">
      <HomeHero />
      <AboutSection />
      <IndustriesSection />

      {/* ⭐ CASE STUDIES SECTION */}
      <HomeCaseStudies />
    </main>
  );
}
