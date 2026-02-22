import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Users, FileText, Calendar, MessageSquare, TrendingUp } from 'lucide-react';

const useCases = [
  {
    id: 'lead-nurturing',
    icon: Mail,
    title: 'Automated Lead Nurturing',
    description: 'Turn cold leads into warm prospects automatically with AI-powered email sequences and follow-ups.',
    metrics: ['300% more leads converted', '80% time saved', '24/7 follow-up'],
    visual: {
      steps: ['Lead captured', 'AI scores & segments', 'Personalized sequence', 'Sales notified', 'Deal closed']
    }
  },
  {
    id: 'client-onboarding',
    icon: Users,
    title: 'Client Onboarding System',
    description: 'Streamline your entire client onboarding process from sign-up to delivery with zero manual work.',
    metrics: ['90% faster onboarding', 'Zero dropped balls', 'Perfect consistency'],
    visual: {
      steps: ['Contract signed', 'Welcome sequence', 'Data collected', 'Team assigned', 'Project starts']
    }
  },
  {
    id: 'document-automation',
    icon: FileText,
    title: 'Document Generation',
    description: 'Auto-generate proposals, contracts, and reports with data pulled from your systems.',
    metrics: ['10x faster documents', 'Zero errors', 'Brand consistent'],
    visual: {
      steps: ['Data collected', 'Template selected', 'AI populates', 'Review ready', 'Auto-delivered']
    }
  },
  {
    id: 'scheduling',
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'AI-powered scheduling that considers availability, preferences, and business rules.',
    metrics: ['No scheduling conflicts', '50% fewer no-shows', 'Automatic reminders'],
    visual: {
      steps: ['Request received', 'AI finds slots', 'Booking confirmed', 'Reminders sent', 'Follow-up triggered']
    }
  },
  {
    id: 'support',
    icon: MessageSquare,
    title: 'AI Customer Support',
    description: 'Handle 80% of support queries automatically with AI agents that learn and improve.',
    metrics: ['80% auto-resolved', '24/7 availability', '10x faster response'],
    visual: {
      steps: ['Query received', 'AI understands', 'Knowledge searched', 'Response sent', 'Escalated if needed']
    }
  },
  {
    id: 'reporting',
    icon: TrendingUp,
    title: 'Automated Reporting',
    description: 'Real-time dashboards and scheduled reports delivered automatically to stakeholders.',
    metrics: ['Real-time insights', 'Zero manual work', 'Always accurate'],
    visual: {
      steps: ['Data collected', 'AI analyzes', 'Report generated', 'Distributed', 'Alerts triggered']
    }
  }
];

export default function UseCases({ track }) {
  const [activeCase, setActiveCase] = useState(useCases[0]);

  const handleSelect = (useCase) => {
    setActiveCase(useCase);
    if (track) track('usecase', useCase.id);
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Use Cases</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Real Automation{' '}
            <span className="bg-gradient-to-r from-[#00c8ff] to-[#c724ff] bg-clip-text text-transparent">
              in Action
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore how businesses like yours are transforming operations with our automation systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Use case selector */}
          <div className="space-y-3">
            {useCases.map((useCase) => (
              <motion.button
                key={useCase.id}
                onClick={() => handleSelect(useCase)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  activeCase.id === useCase.id
                    ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-3">
                  <useCase.icon className={`w-5 h-5 ${
                    activeCase.id === useCase.id ? 'text-cyan-400' : 'text-gray-400'
                  }`} />
                  <span className={`font-medium ${
                    activeCase.id === useCase.id ? 'text-white' : 'text-gray-300'
                  }`}>
                    {useCase.title}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Use case detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <activeCase.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{activeCase.title}</h3>
                </div>

                <p className="text-gray-400 text-lg mb-8">{activeCase.description}</p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {activeCase.metrics.map((metric, i) => (
                    <div key={i} className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      <span className="text-cyan-400 font-medium">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Visual flow */}
                <div className="relative">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/50" />
                  <div className="relative flex justify-between">
                    {activeCase.visual.steps.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm mb-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                          {i + 1}
                        </div>
                        <span className="text-xs text-gray-400 text-center max-w-20">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}