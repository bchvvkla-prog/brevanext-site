"use client";

import HomeHero from "./components/HomeHero";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import ChatbotWidget from "./components/ChatbotWidget";

export default function Home() {
  return (
    <main className="bg-[#0B0F1A]">

      <HomeHero />
      <AboutSection />
      <Testimonials />

      {/* 🤖 CHATBOT */}
      <ChatbotWidget />

    </main>
  );
}
