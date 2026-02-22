import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Zap, Database, Brain, Workflow, BarChart3, Shield } from 'lucide-react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import GlassCard from '@/components/ui/GlassCard';
import GlowButton from '@/components/ui/GlowButton';
import { createPageUrl } from '@/utils';

const automationLayers = [
  {
    icon: Brain,
    title: 'AI Intelligence Layer',
    description: 'Machine learning models that understand, learn, and make decisions based on your business data.',
    color: 'purple'
  },
  {
    icon: Workflow,
    title: 'Workflow Orchestration',
    description: 'Automated workflows that connect all your tools and processes into seamless operations.',
    color: 'cyan'
  },
  {
    icon: Database,
    title: 'Data Integration Hub',
    description: 'Unified data layer that syncs, enriches, and maintains consistency across all systems.',
    color: 'blue'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Real-time dashboards and AI-powered insights that drive better business decisions.',
    color: 'cyan'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with full audit trails and compliance frameworks.',
    color: 'purple'
  },
  {
    icon: Zap,
    title: 'Action & Execution',
    description: 'Automated actions that execute tasks, send communications, and update systems.',
    color: 'blue'
  }
];

const beforeAfter = {
  before: [
    { task: 'Lead follow-up', manual: '2 hours/day', automated: 'Instant, 24/7' },
    { task: 'Data entry', manual: '3 hours/day', automated: 'Zero manual' },
    { task: 'Report generation', manual: '4 hours/week', automated: 'Real-time' },
    { task: 'Customer support', manual: '8 hours/day', automated: '80% automated' },
    { task: 'Invoice processing', manual: '5 hours/week', automated: '5 minutes' }
  ]
};

const integrations = [
  'Salesforce', 'HubSpot', 'Slack', 'Notion', 'Airtable', 'Zapier',
  'Google Workspace', 'Microsoft 365', 'Stripe', 'QuickBooks', 'Shopify', 'Custom APIs'
];

export default function Solutions() {
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
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Automation Solutions</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              How We Build{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Automation Systems
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Understand the architecture and methodology behind our powerful automation solutions.
            </p>
          </motion.div>

          {/* What is Automation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">What is Business Automation?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Business automation is the use of technology and AI to execute recurring tasks or processes where manual effort can be replaced. It's about creating systems that work for you 24/7.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    At BrevaNext, we don't just automate tasks — we build intelligent systems that understand your business, make decisions, and continuously improve.
                  </p>
                </div>
                <div className="space-y-4">
                  {['Eliminate repetitive manual work', 'Reduce errors and inconsistencies', 'Scale without adding headcount', 'Free your team for high-value work', 'Operate 24/7 without interruption'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Automation Layers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Our Automation Architecture</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Every BrevaNext system is built on a proven multi-layer architecture designed for reliability, scalability, and intelligence.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automationLayers.map((layer, index) => (
                <GlassCard key={index} glow={layer.color} delay={index * 0.1}>
                  <layer.icon className={`w-10 h-10 mb-4 ${
                    layer.color === 'cyan' ? 'text-cyan-400' :
                    layer.color === 'purple' ? 'text-purple-400' :
                    'text-blue-400'
                  }`} />
                  <h3 className="text-xl font-semibold text-white mb-2">{layer.title}</h3>
                  <p className="text-gray-400">{layer.description}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          {/* Before vs After */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Before vs After Automation</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              See the real impact of automation on common business tasks.
            </p>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-3 bg-white/5 p-4">
                <div className="text-gray-400 font-medium">Task</div>
                <div className="text-red-400 font-medium flex items-center gap-2">
                  <X className="w-4 h-4" /> Manual Work
                </div>
                <div className="text-cyan-400 font-medium flex items-center gap-2">
                  <Check className="w-4 h-4" /> Automated
                </div>
              </div>
              {beforeAfter.before.map((item, i) => (
                <div key={i} className="grid grid-cols-3 p-4 border-t border-white/5">
                  <div className="text-white font-medium">{item.task}</div>
                  <div className="text-gray-400">{item.manual}</div>
                  <div className="text-cyan-400 font-medium">{item.automated}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Integration Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Seamless Integrations</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              We connect with your existing tools and build custom integrations for any system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {integrations.map((integration, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/30 hover:text-white transition-all"
                >
                  {integration}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-cyan-500/20 p-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to See Your Custom Solution?
              </h2>
              <p className="text-gray-400 mb-8">
                Let's map out your automation opportunities and design a system tailored to your business.
              </p>
              <GlowButton href={createPageUrl('Contact')} icon={ArrowRight} size="large">
                Get Your Custom Blueprint
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}