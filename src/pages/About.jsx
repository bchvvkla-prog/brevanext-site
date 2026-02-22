import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Zap, Users, Rocket, Shield, ArrowRight } from 'lucide-react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import GlassCard from '@/components/ui/GlassCard';
import GlowButton from '@/components/ui/GlowButton';
import { createPageUrl } from '@/utils';

const values = [
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'We stay at the cutting edge of AI and automation technology, bringing tomorrow\'s solutions to your business today.'
  },
  {
    icon: Users,
    title: 'Partnership Mindset',
    description: 'We\'re not vendors — we\'re your automation partners, invested in your success and growth.'
  },
  {
    icon: Rocket,
    title: 'Results Driven',
    description: 'Every system we build is measured by the results it delivers. We focus on impact, not features.'
  },
  {
    icon: Shield,
    title: 'Built to Scale',
    description: 'Our solutions are architected for growth, handling increasing complexity without breaking down.'
  }
];

const timeline = [
  {
    year: 'Foundation',
    title: 'Built on Experience',
    description: 'Founded by automation experts with backgrounds in enterprise systems, AI, and startup operations.'
  },
  {
    year: 'Mission',
    title: 'Democratizing Automation',
    description: 'Making enterprise-grade automation accessible to businesses of all sizes, from startups to enterprises.'
  },
  {
    year: 'Vision',
    title: 'AI-Powered Future',
    description: 'Working towards a future where every business runs on intelligent systems, freeing humans for creative and strategic work.'
  },
  {
    year: 'Future',
    title: 'Building AI Products',
    description: 'Developing our own AI SaaS products that will make automation even more accessible and powerful.'
  }
];

export default function About() {
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
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">About BrevaNext</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Building the{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Future of Work
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're on a mission to transform how businesses operate through intelligent automation and AI systems.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-400 leading-relaxed">
                  A world where every business — from solo founders to global enterprises — operates on intelligent AI systems. Where manual, repetitive work is a thing of the past. Where humans focus on creativity, strategy, and growth while systems handle execution.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed">
                  To replace manual, repetitive work with intelligent automation systems. We build the infrastructure that allows businesses to scale without limits, operate with perfect consistency, and compete at the highest level regardless of their size.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">The BrevaNext Story</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  BrevaNext was born from a simple observation: businesses were drowning in manual, repetitive work while AI and automation technology that could solve these problems remained out of reach for most companies.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Our founders came from backgrounds in enterprise automation, AI development, and startup operations. We saw firsthand how the right systems could transform a business — and how the lack of them could hold even the best teams back.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Today, BrevaNext builds the automation infrastructure that powers modern businesses. From AI agents that handle customer support to complete operational systems that run entire departments — we're making the future of work accessible today.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 hidden md:block" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row gap-8 items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-cyan-400 font-semibold">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                      <p className="text-gray-400 mt-2">{item.description}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-[0_0_30px_rgba(6,182,212,0.4)] flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">What Drives Us</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Our core values guide every decision we make and every system we build.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <GlassCard key={index} delay={index * 0.1}>
                  <value.icon className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          {/* Why Different */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-cyan-500/20 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why BrevaNext is Different</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">We're Not Just Tool Integrators</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Anyone can connect Zapier to Slack. We build intelligent systems that understand your business, make decisions, and continuously improve. Our solutions are architected for complexity and scale.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">We're Building the Future</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Beyond client work, we're developing our own AI SaaS products. This means we stay at the cutting edge of what's possible — and bring those innovations to every project.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Partners, Not Vendors</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We're invested in your success. Our team works as an extension of yours, understanding your business deeply and building systems that truly fit your needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Results Obsessed</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We measure success by the impact we create — hours saved, efficiency gained, revenue increased. Every system we build has clear, measurable outcomes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Let's build something amazing together. Start your automation journey today.
            </p>
            <GlowButton href={createPageUrl('Contact')} icon={ArrowRight} size="large">
              Get in Touch
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}