import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Briefcase, Rocket, ShoppingCart, Store, Factory, ArrowRight, Check } from 'lucide-react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import GlowButton from '@/components/ui/GlowButton';
import { createPageUrl } from '@/utils';

const industries = [
  {
    id: 'real-estate',
    icon: Building2,
    name: 'Real Estate',
    tagline: 'Close more deals with less effort',
    description: 'Automate your entire real estate operation from lead capture to closing. Never miss a follow-up, automate property matching, and streamline document generation.',
    automations: [
      'Automated lead capture & qualification',
      'Smart property matching & alerts',
      'Document & contract automation',
      'Appointment scheduling & reminders',
      'Client communication sequences',
      'Transaction management workflows'
    ],
    results: ['50% faster closings', '300% more leads handled', '20 hours saved weekly'],
    caseStudy: 'A real estate team of 5 agents automated their lead nurturing and property alerts, resulting in 40% more listings and 60% less time on admin.'
  },
  {
    id: 'agencies',
    icon: Briefcase,
    name: 'Agencies',
    tagline: 'Scale your agency without scaling headcount',
    description: 'Streamline client onboarding, project management, and reporting. Let automation handle the operational overhead while your team focuses on delivering results.',
    automations: [
      'Client onboarding workflows',
      'Automated project kickoffs',
      'Time tracking & invoicing',
      'Client portal & reporting',
      'Task management automation',
      'Campaign performance alerts'
    ],
    results: ['5x faster onboarding', '90% less admin work', '2x client capacity'],
    caseStudy: 'A digital marketing agency automated their client onboarding and reporting, allowing them to take on 2x more clients without hiring additional staff.'
  },
  {
    id: 'startups',
    icon: Rocket,
    name: 'Startups',
    tagline: 'Build like you have a team of 100',
    description: 'Scale fast with automation from day one. Automate user onboarding, support, growth systems, and operations — compete with bigger players without the overhead.',
    automations: [
      'User onboarding sequences',
      'Support ticket automation',
      'Growth & engagement systems',
      'Product feedback collection',
      'Investor update automation',
      'Team operations workflows'
    ],
    results: ['10x faster scaling', '80% support automated', 'Lean operations'],
    caseStudy: 'A SaaS startup automated their entire user onboarding and support system, handling 10x more users with the same 3-person team.'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    name: 'E-commerce',
    tagline: 'Automate from click to delivery',
    description: 'Automate your entire e-commerce operation — inventory management, order processing, customer service, and marketing. Scale your store without scaling your team.',
    automations: [
      'Order processing & fulfillment',
      'Inventory sync & alerts',
      'Customer journey automation',
      'Review & feedback collection',
      'Abandoned cart recovery',
      'Returns & refund processing'
    ],
    results: ['99% order accuracy', '5x faster processing', '40% more repeat purchases'],
    caseStudy: 'An e-commerce brand automated their entire order-to-delivery process, reducing processing time from 2 hours to 5 minutes per order.'
  },
  {
    id: 'local-business',
    icon: Store,
    name: 'Local Business',
    tagline: 'Compete with the big players',
    description: 'Automate your local business operations — booking, customer follow-ups, review management, and local marketing. Modern automation at small business prices.',
    automations: [
      'Online booking system',
      'Customer follow-up sequences',
      'Review request automation',
      'Local SEO & marketing',
      'Loyalty program automation',
      'Appointment reminders'
    ],
    results: ['50% more bookings', '4.8★ average rating', '30% more repeat customers'],
    caseStudy: 'A dental practice automated their booking, reminders, and review requests, reducing no-shows by 70% and increasing 5-star reviews by 300%.'
  },
  {
    id: 'operations',
    icon: Factory,
    name: 'Operations-Heavy',
    tagline: 'Transform complex operations into efficient systems',
    description: 'For businesses with complex operational workflows — manufacturing, logistics, healthcare, and more. We build systems that handle complexity at scale.',
    automations: [
      'Process automation & optimization',
      'Quality control workflows',
      'Supply chain automation',
      'Compliance & documentation',
      'Resource scheduling',
      'Real-time monitoring & alerts'
    ],
    results: ['60% efficiency gains', 'Zero compliance issues', 'Full visibility'],
    caseStudy: 'A logistics company automated their routing, scheduling, and compliance documentation, reducing operational costs by 35%.'
  }
];

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10 pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Industries</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Automation for{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We've built automation systems across diverse industries — each solution tailored to specific challenges.
            </p>
          </motion.div>

          {/* Industry Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry) => (
              <motion.button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all ${
                  activeIndustry.id === industry.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/30 text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <industry.icon className="w-5 h-5" />
                <span>{industry.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Industry Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* Left Column */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <activeIndustry.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{activeIndustry.name}</h2>
                    <p className="text-cyan-400">{activeIndustry.tagline}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {activeIndustry.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {activeIndustry.results.map((result, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium"
                    >
                      {result}
                    </span>
                  ))}
                </div>

                <GlowButton href={createPageUrl('Contact')} icon={ArrowRight}>
                  Get {activeIndustry.name} Automation
                </GlowButton>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Automations */}
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">What We Automate</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {activeIndustry.automations.map((auto, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                      >
                        <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-gray-300">{auto}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-cyan-500/20 p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Success Story</h3>
                  <p className="text-gray-300 leading-relaxed">{activeIndustry.caseStudy}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-gray-400 mb-8">
                We build custom automation solutions for any industry. Let's discuss your specific needs.
              </p>
              <GlowButton href={createPageUrl('Contact')} icon={ArrowRight} size="large">
                Schedule a Call
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}