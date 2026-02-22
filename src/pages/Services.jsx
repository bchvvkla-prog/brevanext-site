import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, MessageSquare, BarChart3, Database, Cog, Building2, ArrowRight } from 'lucide-react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import ServiceCard from '@/components/services/ServiceCard';
import GlowButton from '@/components/ui/GlowButton';
import { createPageUrl } from '@/utils';

const services = [
  {
    icon: Bot,
    title: 'AI Automation Systems',
    description: 'End-to-end intelligent automation that handles complex tasks, makes decisions, and learns from your business patterns.',
    benefits: [
      'Replace manual repetitive tasks completely',
      'Intelligent decision-making capabilities',
      'Self-improving systems that learn',
      'Seamless integration with existing tools'
    ],
    outcomes: ['80% time savings', 'Zero human error', '24/7 operations'],
    useCase: 'An e-commerce company automated their entire order processing, from purchase to shipping, reducing processing time from 2 hours to 5 minutes.'
  },
  {
    icon: Workflow,
    title: 'Business Workflow Automation',
    description: 'Connect and automate your entire business workflow from lead to cash, eliminating bottlenecks and manual handoffs.',
    benefits: [
      'Unified workflow across all departments',
      'Automatic task assignments and escalations',
      'Real-time progress tracking',
      'Bottleneck identification and alerts'
    ],
    outcomes: ['3x faster processes', 'Full visibility', 'No dropped balls'],
    useCase: 'A marketing agency connected their sales, project management, and invoicing systems, reducing project kickoff time from 3 days to 3 hours.'
  },
  {
    icon: MessageSquare,
    title: 'AI Agents & Chatbots',
    description: 'Deploy intelligent AI agents that handle customer queries, support tickets, and internal communications 24/7.',
    benefits: [
      'Instant response to customer queries',
      'Handles 80%+ of support automatically',
      'Learns from every interaction',
      'Seamless human handoff when needed'
    ],
    outcomes: ['24/7 availability', '10x faster response', 'Higher satisfaction'],
    useCase: 'A SaaS company deployed an AI support agent that now handles 85% of tier-1 support queries automatically, freeing their team for complex issues.'
  },
  {
    icon: BarChart3,
    title: 'Marketing Automation',
    description: 'Automate your entire marketing funnel from lead capture to nurturing to conversion with AI-powered personalization.',
    benefits: [
      'Automated lead scoring and qualification',
      'Personalized email sequences at scale',
      'Multi-channel campaign automation',
      'AI-optimized send times and content'
    ],
    outcomes: ['300% more conversions', 'Personalized at scale', 'Zero manual follow-up'],
    useCase: 'A B2B company automated their lead nurturing, resulting in 3x more qualified leads reaching sales with zero additional manual effort.'
  },
  {
    icon: Database,
    title: 'CRM & Data Automation',
    description: 'Unify your data across all platforms with intelligent syncing, enrichment, and automated reporting.',
    benefits: [
      'Single source of truth for all data',
      'Automatic data enrichment and cleaning',
      'Real-time sync across all tools',
      'Automated reports and dashboards'
    ],
    outcomes: ['100% data accuracy', 'Real-time insights', 'No manual entry'],
    useCase: 'A sales team automated their CRM updates, saving 10 hours weekly on data entry while improving data accuracy to 99%.'
  },
  {
    icon: Cog,
    title: 'Custom AI Solutions',
    description: 'Bespoke automation systems designed specifically for your unique business challenges and workflows.',
    benefits: [
      'Built for your exact requirements',
      'Integrates with any system or API',
      'Scalable architecture for growth',
      'Ongoing optimization and support'
    ],
    outcomes: ['Tailored solution', 'Competitive advantage', 'Future-proof'],
    useCase: 'A logistics company got a custom AI system that optimizes their routing, reducing fuel costs by 25% and delivery times by 40%.'
  },
  {
    icon: Building2,
    title: 'Enterprise Automation',
    description: 'Large-scale automation solutions for enterprises with complex operations, compliance needs, and security requirements.',
    benefits: [
      'Enterprise-grade security and compliance',
      'Multi-department automation',
      'Advanced analytics and reporting',
      'Dedicated support and SLAs'
    ],
    outcomes: ['Enterprise ready', 'Full compliance', 'Unlimited scale'],
    useCase: 'A healthcare organization automated their patient intake, insurance verification, and appointment scheduling across 50+ locations.'
  }
];

export default function Services() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10 pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              AI Automation{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From AI agents to full enterprise automation — we build systems that transform how your business operates.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-gray-400 mb-8">
                Book a free strategy call and we'll help you identify the best automation opportunities for your business.
              </p>
              <GlowButton href={createPageUrl('Contact')} icon={ArrowRight} size="large">
                Book Free Consultation
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}