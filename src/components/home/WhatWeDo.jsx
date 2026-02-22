import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Database, Zap, Brain, Cog } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const features = [
  {
    icon: Bot,
    title: 'AI Automation Systems',
    description: 'End-to-end automation that handles repetitive tasks, decisions, and workflows without human intervention.',
    color: 'cyan'
  },
  {
    icon: Workflow,
    title: 'Business Workflow Automation',
    description: 'Streamline your operations with intelligent workflows that connect all your tools and processes.',
    color: 'purple'
  },
  {
    icon: Brain,
    title: 'AI Agents & Chatbots',
    description: 'Deploy intelligent AI agents that handle customer interactions, support, and internal queries 24/7.',
    color: 'blue'
  },
  {
    icon: Database,
    title: 'CRM & Data Systems',
    description: 'Unify your data across platforms with automated syncing, enrichment, and intelligent reporting.',
    color: 'cyan'
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'Automate your entire marketing funnel from lead capture to nurturing to conversion.',
    color: 'purple'
  },
  {
    icon: Cog,
    title: 'Custom AI Solutions',
    description: 'Bespoke automation systems built specifically for your unique business challenges and goals.',
    color: 'blue'
  }
];

export default function WhatWeDo() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">What We Build</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI-Powered Systems for{' '}
            <span className="bg-gradient-to-r from-[#00c8ff] to-[#c724ff] bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just automate tasks — we build intelligent systems that transform how your entire business operates.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={index} glow={feature.color} delay={index * 0.1}>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                feature.color === 'cyan' ? 'from-cyan-500/20 to-blue-500/20' :
                feature.color === 'purple' ? 'from-purple-500/20 to-pink-500/20' :
                'from-blue-500/20 to-indigo-500/20'
              } flex items-center justify-center mb-6`}>
                <feature.icon className={`w-7 h-7 ${
                  feature.color === 'cyan' ? 'text-cyan-400' :
                  feature.color === 'purple' ? 'text-purple-400' :
                  'text-blue-400'
                }`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}