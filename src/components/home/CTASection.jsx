import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import GlowButton from '../ui/GlowButton';
import { createPageUrl } from '@/utils';

const PROFILE_CTA = {
  'Real Estate Pro': { headline: 'Close 3x More Deals on Autopilot', sub: "We've helped real estate teams triple their close rate. Let's build your lead automation system.", btn: 'Automate Your Lead Pipeline' },
  'Agency Owner': { headline: 'Double Your Clients Without More Overhead', sub: 'CreativeForce went from 40 to 78 clients with the same team. You\'re next.', btn: 'Double Your Client Capacity' },
  'SaaS Founder': { headline: 'Scale to 50K Users with a 3-Person Team', sub: 'NovaMind did it. See how AI automation can handle your support and ops bottleneck.', btn: 'Scale Without Hiring' },
  'E-commerce Operator': { headline: 'Automate Your E-commerce Operations', sub: 'From order management to customer support — let AI handle the repetitive work.', btn: 'Automate Your Operations' },
  'Local Business Owner': { headline: 'Save 20+ Hours a Week with Smart Automation', sub: 'Let your systems handle admin, follow-ups, and scheduling while you focus on growth.', btn: 'Save 20+ Hours a Week' },
  'Operations Leader': { headline: 'Eliminate Manual Workflows at Scale', sub: 'Build automation infrastructure that grows with your business and never breaks.', btn: 'Eliminate Manual Workflows' },
};

export default function CTASection({ profile }) {
  const custom = profile ? PROFILE_CTA[profile.label] : null;

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 md:p-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Ready to Transform?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            {custom ? custom.headline : <>Let's Build Your{' '}<span className="bg-gradient-to-r from-[#00c8ff] to-[#c724ff] bg-clip-text text-transparent">Automation System</span></>}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
          >
            {custom ? custom.sub : 'Book a free strategy call and discover how BrevaNext can automate your operations, save hundreds of hours, and scale your business with AI.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GlowButton href={createPageUrl('Contact')} icon={ArrowRight} size="large">
              {custom ? custom.btn : 'Book Strategy Call'}
            </GlowButton>
            <GlowButton href={createPageUrl('Services')} variant="secondary" size="large">
              Explore Services
            </GlowButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-500"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              No obligation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Custom solutions
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}