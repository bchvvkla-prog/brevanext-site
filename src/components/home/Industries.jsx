import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, Rocket, ShoppingCart, Store, Factory, ArrowRight } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import GlowButton from '../ui/GlowButton';
import { createPageUrl } from '@/utils';

const industries = [
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Automate lead nurturing, property matching, and client communication.',
    automations: ['Lead qualification', 'Property alerts', 'Document automation']
  },
  {
    icon: Briefcase,
    name: 'Agencies',
    description: 'Streamline client onboarding, project management, and reporting.',
    automations: ['Client portals', 'Automated reports', 'Task workflows']
  },
  {
    icon: Rocket,
    name: 'Startups',
    description: 'Scale fast with automated operations from day one.',
    automations: ['User onboarding', 'Support automation', 'Growth systems']
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce',
    description: 'Automate inventory, orders, customer service, and marketing.',
    automations: ['Order processing', 'Inventory sync', 'Customer journeys']
  },
  {
    icon: Store,
    name: 'Local Business',
    description: 'Compete with bigger players through smart automation.',
    automations: ['Booking systems', 'Review management', 'Local marketing']
  },
  {
    icon: Factory,
    name: 'Operations',
    description: 'Transform complex operations into streamlined systems.',
    automations: ['Process automation', 'Data pipelines', 'Quality control']
  }
];

const industryTrackIds = ['real-estate', 'agency', 'startup', 'ecommerce', 'local-business', 'operations'];

export default function Industries({ track }) {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
...
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} onClick={() => track && track('industry', industryTrackIds[index])} className="cursor-pointer">
            <GlassCard delay={index * 0.1}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{industry.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {industry.automations.map((auto, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {auto}
                  </span>
                ))}
              </div>
            </GlassCard>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <GlowButton href={createPageUrl('Industries')} variant="outline" icon={ArrowRight}>
            Explore All Industries
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}