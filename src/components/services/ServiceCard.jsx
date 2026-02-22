import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import GlowButton from '../ui/GlowButton';
import { createPageUrl } from '@/utils';

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  benefits, 
  outcomes, 
  useCase,
  index 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 h-full hover:border-cyan-500/30 transition-all duration-500">
        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
            <Icon className="w-7 h-7 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-6">{description}</p>

        {/* Benefits */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Benefits</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <Check className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcomes */}
        <div className="flex flex-wrap gap-2 mb-6">
          {outcomes.map((outcome, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {outcome}
            </span>
          ))}
        </div>

        {/* Use Case */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
          <p className="text-sm text-gray-500 mb-1">Example Use Case:</p>
          <p className="text-gray-300">{useCase}</p>
        </div>

        {/* CTA */}
        <GlowButton href={createPageUrl('Contact')} variant="outline" icon={ArrowRight} className="w-full">
          Get Started
        </GlowButton>
      </div>
    </motion.div>
  );
}