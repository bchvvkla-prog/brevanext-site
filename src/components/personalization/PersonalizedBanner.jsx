import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function PersonalizedBanner({ profile, isReturning }) {
  const [dismissed, setDismissed] = useState(false);

  if (!profile && !isReturning) return null;
  if (dismissed) return null;

  const message = profile
    ? `Welcome back, ${profile.label}! We've tailored this page for you.`
    : `Welcome back! Here's what's new since your last visit.`;

  const cta = profile?.cta || 'Get Your Automation Plan';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-full max-w-2xl px-4"
      >
        <div className="relative flex items-center gap-4 px-5 py-3.5 rounded-2xl shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0,200,255,0.12), rgba(199,36,255,0.12))',
            border: '1px solid rgba(0,200,255,0.3)',
            backdropFilter: 'blur(20px)'
          }}>
          <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: '#00c8ff' }} />
          <p className="text-white text-sm flex-1">{message}</p>
          <Link
            to={createPageUrl('Contact')}
            className="flex-shrink-0 flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 rounded-full transition-all"
            style={{ background: 'linear-gradient(90deg, #00c8ff, #c724ff)', color: '#fff' }}
          >
            {cta}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button onClick={() => setDismissed(true)} className="flex-shrink-0 text-gray-500 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}