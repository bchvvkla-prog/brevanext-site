import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight, Quote, TrendingUp, Clock, Users, Zap } from 'lucide-react';

const metricIcons = { TrendingUp, Clock, Users, Zap };

export default function CaseStudyCard({ study, index, highlighted }) {
  const [expanded, setExpanded] = useState(false);
  const [activeFlow, setActiveFlow] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(135deg, rgba(0,200,255,0.08), rgba(199,36,255,0.08))' }} />

      {highlighted && (
        <div className="absolute -top-3 left-8 z-10 px-4 py-1 rounded-full text-xs font-bold"
          style={{ background: 'linear-gradient(90deg, #00c8ff, #c724ff)', color: '#fff' }}>
          ⭐ Recommended for You
        </div>
      )}
      <div className={`relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500 ${highlighted ? 'border-2' : 'border border-white/10 hover:border-white/20'}`}
        style={highlighted ? { borderColor: 'rgba(0,200,255,0.5)', boxShadow: '0 0 40px rgba(0,200,255,0.1)' } : {}}>
        {/* Header */}
        <div className="p-8">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(0,200,255,0.15), rgba(199,36,255,0.15))' }}>
                {study.emoji}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: '#00c8ff' }}>{study.industry}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-0.5">{study.title}</h3>
              </div>
            </div>
            <div className="px-4 py-1.5 rounded-full text-xs font-semibold border"
              style={{ borderColor: 'rgba(0,200,255,0.3)', color: '#00c8ff', background: 'rgba(0,200,255,0.08)' }}>
              {study.timeframe}
            </div>
          </div>

          {/* Challenge */}
          <p className="text-gray-400 leading-relaxed mb-6">{study.challenge}</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {study.metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.1 }}
                className="text-center p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-1"
                  style={{ background: 'linear-gradient(90deg, #00c8ff, #c724ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {metric.value}
                </div>
                <div className="text-xs text-gray-500">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 font-semibold text-sm transition-all"
            style={{ color: expanded ? '#c724ff' : '#00c8ff' }}
          >
            {expanded ? 'Hide Details' : 'View Full Case Study'}
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-8 space-y-8 border-t border-white/5 pt-8">
                {/* Solution */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5" style={{ color: '#00c8ff' }} />
                    The Solution
                  </h4>
                  <p className="text-gray-400 leading-relaxed">{study.solution}</p>
                </div>

                {/* Animated Flow Diagram */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" style={{ color: '#c724ff' }} />
                    Implementation Flow
                  </h4>
                  <div className="overflow-x-auto pb-4">
                    <div className="flex items-center gap-0 min-w-max">
                      {study.flow.map((step, i) => (
                        <React.Fragment key={i}>
                          <motion.button
                            onClick={() => setActiveFlow(i)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex flex-col items-center p-4 rounded-2xl transition-all cursor-pointer ${
                              activeFlow === i ? 'scale-105' : 'opacity-60 hover:opacity-80'
                            }`}
                            style={{
                              background: activeFlow === i
                                ? 'linear-gradient(135deg, rgba(0,200,255,0.15), rgba(199,36,255,0.15))'
                                : 'rgba(255,255,255,0.03)',
                              border: `1px solid ${activeFlow === i ? 'rgba(0,200,255,0.4)' : 'rgba(255,255,255,0.06)'}`,
                              boxShadow: activeFlow === i ? '0 0 30px rgba(0,200,255,0.15)' : 'none'
                            }}
                          >
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2"
                              style={{ background: activeFlow === i ? 'linear-gradient(135deg, #00c8ff, #c724ff)' : 'rgba(255,255,255,0.1)' }}>
                              {i + 1}
                            </div>
                            <div className="text-2xl mb-1">{step.icon}</div>
                            <div className="text-xs font-medium text-white text-center max-w-20">{step.label}</div>
                          </motion.button>
                          {i < study.flow.length - 1 && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ delay: i * 0.1 + 0.2 }}
                              className="flex-shrink-0"
                            >
                              <ArrowRight className="w-6 h-6 mx-2 text-gray-600" />
                            </motion.div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Step Detail */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFlow}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="mt-4 p-5 rounded-2xl"
                      style={{ background: 'rgba(0,200,255,0.05)', border: '1px solid rgba(0,200,255,0.15)' }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{study.flow[activeFlow].icon}</span>
                        <span className="font-semibold text-white">{study.flow[activeFlow].label}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{study.flow[activeFlow].description}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Implementation Breakdown */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Implementation Breakdown</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {study.implementation.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex gap-3 p-4 rounded-xl"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold"
                          style={{ background: 'linear-gradient(135deg, rgba(0,200,255,0.2), rgba(199,36,255,0.2))', color: '#00c8ff' }}>
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white mb-1">{item.phase}</p>
                          <p className="text-xs text-gray-500">{item.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="relative p-6 rounded-2xl overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(0,200,255,0.08), rgba(199,36,255,0.08))', border: '1px solid rgba(199,36,255,0.2)' }}>
                  <Quote className="w-8 h-8 mb-4 opacity-40" style={{ color: '#c724ff' }} />
                  <p className="text-gray-300 text-lg italic leading-relaxed mb-6">"{study.testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2" style={{ borderColor: 'rgba(0,200,255,0.4)' }}>
                      <img src={study.testimonial.avatar} alt={study.testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{study.testimonial.name}</p>
                      <p className="text-sm" style={{ color: '#00c8ff' }}>{study.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}