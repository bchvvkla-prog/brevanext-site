import React from 'react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import AutomationExplained from '@/components/home/AutomationExplained';
import Industries from '@/components/home/Industries';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import UseCases from '@/components/home/UseCases';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import CaseStudiesSection from '@/components/casestudies/CaseStudiesSection';
import PersonalizedBanner from '@/components/personalization/PersonalizedBanner';
import { useUserPreferences } from '@/components/personalization/useUserPreferences';

export default function Home() {
  const { prefs, track } = useUserPreferences();
  const isReturning = prefs.totalVisits > 1;

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <PersonalizedBanner profile={prefs.inferredProfile} isReturning={isReturning} />
      <div className="relative z-10">
        <Hero />
        <WhatWeDo />
        <AutomationExplained />
        <Industries track={track} />
        <WhyChooseUs />
        <UseCases track={track} />
        <CaseStudiesSection highlightIndex={prefs.inferredProfile?.caseStudyIndex ?? null} />
        <Testimonials />
        <CTASection profile={prefs.inferredProfile} />
      </div>
    </div>
  );
}