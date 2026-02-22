import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyCard from './CaseStudyCard';
import GlowButton from '../ui/GlowButton';
import { ArrowRight } from 'lucide-react';
import { createPageUrl } from '@/utils';

const caseStudies = [
  {
    emoji: '🏠',
    industry: 'Real Estate',
    title: 'How PropEdge Closed 3x More Deals with AI Lead Automation',
    timeframe: 'Deployed in 3 weeks',
    challenge: 'PropEdge, a 12-agent real estate brokerage, was losing 60% of their leads due to slow follow-up. Their team spent 4+ hours daily on manual CRM updates, email follow-ups, and appointment scheduling — leaving little time for actual selling.',
    solution: 'BrevaNext built a fully automated lead intelligence system that captures, scores, and nurtures leads 24/7. AI-powered property matching alerts buyers the moment a match hits the market, while automated sequences handle every touchpoint from inquiry to close.',
    metrics: [
      { value: '312%', label: 'More Deals Closed' },
      { value: '4 hrs', label: 'Daily Time Saved' },
      { value: '91%', label: 'Lead Response Rate' },
      { value: '18 days', label: 'Avg Time to Close' }
    ],
    flow: [
      { icon: '📥', label: 'Lead Captured', description: 'Leads from all channels (Zillow, website, referrals) are automatically captured and entered into the system with full source attribution.' },
      { icon: '🧠', label: 'AI Scoring', description: 'Our AI model scores each lead based on 40+ signals including budget, timeline, engagement, and behavioral data — prioritizing hot leads instantly.' },
      { icon: '📧', label: 'Smart Nurture', description: 'Personalized email and SMS sequences launch automatically, tailored to each lead\'s specific property preferences and stage in the buying journey.' },
      { icon: '🏡', label: 'Property Match', description: 'When a matching property hits the market, buyers receive an instant, personalized alert with photos, pricing, and a one-click scheduling link.' },
      { icon: '📅', label: 'Auto Schedule', description: 'Viewing appointments are scheduled automatically based on agent availability, with confirmation, reminders, and follow-up fully handled.' },
      { icon: '📊', label: 'Agent Dashboard', description: 'Agents see a real-time prioritized task list — no more guessing who to call. The system surfaces the highest-value actions every morning.' }
    ],
    implementation: [
      { phase: 'CRM Integration & Data Migration', detail: 'Connected Salesforce, MLS database, and 4 lead sources into a unified pipeline with historical data preserved.' },
      { phase: 'AI Lead Scoring Model', detail: 'Trained custom model on 2 years of PropEdge deal data to predict lead conversion probability.' },
      { phase: 'Email & SMS Automation Engine', detail: 'Built 12 dynamic nurture sequences with A/B tested messaging and smart send-time optimization.' },
      { phase: 'Property Matching Algorithm', detail: 'Built real-time MLS listener that matches new listings to buyer profiles within 90 seconds of listing.' },
      { phase: 'Agent Productivity Dashboard', detail: 'Custom daily digest with prioritized lead list, activity summaries, and one-click actions.' },
      { phase: 'Training & Optimization', detail: '2-week agent onboarding with ongoing monthly optimization based on conversion data.' }
    ],
    testimonial: {
      quote: "BrevaNext didn't just automate our workflow — they fundamentally changed how our team operates. We went from reactive to proactive, and our close rate tripled in 90 days. It felt like hiring 5 people without the overhead.",
      name: 'Marcus L.',
      role: 'Broker-Owner, PropEdge Realty',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    emoji: '🚀',
    industry: 'SaaS Startup',
    title: 'NovaMind Scaled to 50K Users with a 3-Person Support Team',
    timeframe: 'Deployed in 5 weeks',
    challenge: "NovaMind's project management SaaS was growing fast — too fast. Their 3-person support team was drowning in tickets, user onboarding was manual and inconsistent, and churn was spiking because new users never reached their 'aha moment' in time.",
    solution: 'BrevaNext deployed an intelligent user lifecycle system — from automated onboarding journeys that adapt based on user behavior, to an AI support agent handling 87% of tier-1 tickets instantly. Churn prediction models trigger intervention sequences before users disengage.',
    metrics: [
      { value: '87%', label: 'Support Automated' },
      { value: '4.2 min', label: 'Avg Response Time' },
      { value: '62%', label: 'Churn Reduction' },
      { value: '50K', label: 'Users, 3 Staff' }
    ],
    flow: [
      { icon: '👤', label: 'User Signs Up', description: 'New user registration triggers an immediate profiling sequence to understand their role, use case, and goals through smart onboarding questions.' },
      { icon: '🗺️', label: 'Onboarding Path', description: 'Based on the profile, users are routed to one of 8 tailored onboarding sequences with in-app guides, emails, and milestone checkpoints.' },
      { icon: '📡', label: 'Behavior Tracking', description: 'Every action (or inaction) is monitored. The system identifies when users are stuck or heading toward churn based on engagement patterns.' },
      { icon: '🤖', label: 'AI Support', description: 'The AI support agent handles 87% of common queries instantly using the knowledge base, and escalates complex cases with full context.' },
      { icon: '⚠️', label: 'Churn Alert', description: 'When churn risk is detected, automated intervention triggers — a personal email, in-app message, or a CS team alert for high-value accounts.' },
      { icon: '📈', label: 'Growth Loop', description: 'Power users are identified and enrolled in advocacy programs with referral incentives, creating an automated growth flywheel.' }
    ],
    implementation: [
      { phase: 'User Data Architecture', detail: 'Built unified user data model connecting product analytics, support tickets, billing, and email engagement.' },
      { phase: 'Adaptive Onboarding System', detail: 'Created 8 user persona tracks with dynamic branching based on in-app behavior milestones.' },
      { phase: 'AI Support Agent Training', detail: 'Trained GPT-based agent on 10,000 historical tickets, product docs, and FAQ database.' },
      { phase: 'Churn Prediction Model', detail: 'ML model analyzing 25 behavioral signals to predict churn 14 days before it happens with 78% accuracy.' },
      { phase: 'Intervention Automation', detail: 'Automated rescue sequences via email, in-app, and CS alerts triggered at different risk thresholds.' },
      { phase: 'Analytics & Reporting', detail: 'Real-time cohort analysis dashboard tracking activation, engagement, and retention by segment.' }
    ],
    testimonial: {
      quote: "We were about to hire 8 more support staff. BrevaNext\'s system meant we didn\'t have to. Our support quality actually improved while costs dropped. The churn prediction alone paid for everything in month one.",
      name: 'Priya K.',
      role: 'CEO & Co-founder, NovaMind',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    emoji: '⚡',
    industry: 'Marketing Agency',
    title: 'CreativeForce Doubled Capacity Without a Single New Hire',
    timeframe: 'Deployed in 4 weeks',
    challenge: "CreativeForce, a performance marketing agency with 22 staff, was capped at 40 clients due to operational bottlenecks. Client onboarding took 2 weeks, monthly reporting consumed 120+ hours, and project handoffs were chaotic — causing quality inconsistencies and client frustration.",
    solution: 'BrevaNext built an end-to-end agency operating system — automating client onboarding, campaign monitoring with smart alerts, automated report generation, and an AI-powered project management workflow that eliminated manual handoffs entirely.',
    metrics: [
      { value: '2x', label: 'Client Capacity' },
      { value: '120 hrs', label: 'Saved on Reports/mo' },
      { value: '2 days', label: 'Onboarding (was 2 wks)' },
      { value: '96%', label: 'Client Retention Rate' }
    ],
    flow: [
      { icon: '🤝', label: 'Contract Signed', description: 'DocuSign webhook triggers the full onboarding sequence automatically — no manual kickoff required from the team.' },
      { icon: '📋', label: 'Auto Onboarding', description: 'Client receives branded welcome sequence, fills a dynamic intake form, and gets a personalized project portal — all in 48 hours.' },
      { icon: '🎯', label: 'Campaign Setup', description: 'Intake data pre-populates project management tools, ad accounts, and reporting templates. Team receives a structured brief with zero data entry.' },
      { icon: '📡', label: 'Live Monitoring', description: 'AI monitors all active campaigns 24/7, alerting the team only when performance deviates from targets — eliminating manual checking.' },
      { icon: '📊', label: 'Auto Reports', description: 'Branded performance reports are auto-generated and delivered to clients on schedule, pulling live data from all connected ad platforms.' },
      { icon: '🔄', label: 'Renewal System', description: 'Automated renewal sequences launch 60 days before contract expiry with performance highlights and upsell recommendations.' }
    ],
    implementation: [
      { phase: 'Tech Stack Integration', detail: 'Connected HubSpot, ClickUp, Google Ads, Meta Ads, Looker Studio, and DocuSign into a unified workflow.' },
      { phase: 'Automated Onboarding Flow', detail: 'Built 14-step onboarding automation with dynamic forms, portal creation, and stakeholder notifications.' },
      { phase: 'Campaign Intelligence System', detail: 'Custom monitoring layer with threshold-based alerts across all ad platforms with AI-generated optimization suggestions.' },
      { phase: 'Report Generation Engine', detail: 'Automated Looker Studio reports with agency branding, pulling from 8 data sources, delivered on client-specific schedules.' },
      { phase: 'Project Workflow Automation', detail: 'ClickUp automation for task creation, assignment, deadlines, and handoff sequences across all service types.' },
      { phase: 'Client Retention System', detail: 'Automated NPS surveys, feedback loops, and renewal sequences with CSM escalation for at-risk accounts.' }
    ],
    testimonial: {
      quote: "The agency operates completely differently now. Our team focuses on strategy and creative — the systems handle everything else. We went from 40 to 78 clients in 6 months with the same team. That\'s the power of what BrevaNext built.",
      name: 'Jordan M.',
      role: 'Managing Director, CreativeForce',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  }
];

export default function CaseStudiesSection({ highlightIndex }) {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
          style={{ background: 'radial-gradient(circle, #00c8ff, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
          style={{ background: 'radial-gradient(circle, #c724ff, transparent)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#00c8ff' }}>
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Real Results.{' '}
            <span style={{ background: 'linear-gradient(90deg, #00c8ff, #c724ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Real Businesses.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deep-dive into how BrevaNext transformed operations for companies across industries — 
            with full implementation breakdowns and verified results.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        {highlightIndex !== null && highlightIndex !== undefined && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-2 justify-center"
          >
            <span className="text-sm px-4 py-1.5 rounded-full font-medium"
              style={{ background: 'rgba(0,200,255,0.1)', border: '1px solid rgba(0,200,255,0.3)', color: '#00c8ff' }}>
              ✨ Highlighted for you based on your interests
            </span>
          </motion.div>
        )}
        <div className="space-y-8 mb-16">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} highlighted={highlightIndex === index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">Want results like these? Let's build your automation system.</p>
          <GlowButton href={createPageUrl('Contact')} icon={ArrowRight} size="large">
            Get Your Case Study Started
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}