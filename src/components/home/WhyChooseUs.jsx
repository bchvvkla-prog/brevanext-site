import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Rocket, Clock, HeartHandshake, Layers, Lightbulb } from 'lucide-react';

const reasons = [
  {
    icon: Rocket,
    title: 'Future-Ready Systems',
    description: 'We build with tomorrow in mind. Our systems scale as you grow and adapt to new technologies.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security for all your data and automations. Compliant with industry standards.'
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description: 'From concept to live automation in weeks, not months. We move fast without breaking things.'
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Partnership',
    description: "We're not just vendors — we're your automation partners invested in your success."
  },
  {
    icon: Layers,
    title: 'Full-Stack Automation',
    description: 'From AI agents to data systems, we handle every layer of your automation needs.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Cutting-edge AI and automation tech. We stay ahead so you stay ahead.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Why BrevaNext</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Built Different.{' '}
            <span className="bg-gradient-to-r from-[#00c8ff] to-[#c724ff] bg-clip-text text-transparent">
              Built Better.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're not your typical automation agency. Here's what sets us apart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500/30 transition-colors">
                  <reason.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}