import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const DEFAULT_MESSAGES = [
  { headline: "Ready to Automate Your Business?", sub: "Book a free strategy call and get a custom automation roadmap." },
];

const PROFILE_MESSAGES = {
  'Real Estate Pro': {
    headline: "Close 3x More Deals on Autopilot",
    sub: "We've helped real estate teams triple their close rate. Let's build your lead automation system.",
  },
  'Agency Owner': {
    headline: "Double Your Clients Without More Overhead",
    sub: "CreativeForce went from 40 to 78 clients with the same team. You're next.",
  },
  'SaaS Founder': {
    headline: "Scale to 50K Users with a 3-Person Team",
    sub: "NovaMind did it. See how AI automation can replace your support and ops bottleneck.",
  },
  'E-commerce Operator': {
    headline: "Automate Your E-commerce Operations",
    sub: "From order management to customer support — let AI handle the repetitive work.",
  },
  'Local Business Owner': {
    headline: "Save 20+ Hours a Week with Smart Automation",
    sub: "Let your systems handle admin, follow-ups, and scheduling while you focus on growth.",
  },
  'Operations Leader': {
    headline: "Eliminate Manual Workflows at Scale",
    sub: "Build automation infrastructure that grows with your business and never breaks.",
  },
};

export default function PersonalizedCTA({ profile }) {
  const content = profile ? PROFILE_MESSAGES[profile.label] || DEFAULT_MESSAGES[0] : DEFAULT_MESSAGES[0];

  return (
    <motion.div
      key={profile?.label}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{content.headline}</h2>
      <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">{content.sub}</p>
      <Link
        to={createPageUrl('Contact')}
        className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-lg text-white transition-all hover:scale-105"
        style={{
          background: 'linear-gradient(90deg, #00c8ff, #c724ff)',
          boxShadow: '0 0 40px rgba(0,200,255,0.3), 0 0 60px rgba(199,36,255,0.2)'
        }}
      >
        {profile?.cta || 'Get Your Automation Plan'}
        <ArrowRight className="w-5 h-5" />
      </Link>
    </motion.div>
  );
}