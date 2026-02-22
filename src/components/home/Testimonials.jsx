import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechFlow Agency',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: "BrevaNext transformed our agency. We went from drowning in manual tasks to running like a well-oiled machine. Our team can now focus on what matters — delivering results for clients.",
    metric: '10x productivity increase'
  },
  {
    name: 'Michael Torres',
    role: 'Founder, PropTech Ventures',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: "The automation systems BrevaNext built for our real estate operations are incredible. Lead follow-ups, document generation, scheduling — all automated. It's like having a team that never sleeps.",
    metric: '500+ hours saved monthly'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Director, ScaleUp Inc',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: "We were skeptical about AI automation, but BrevaNext delivered beyond expectations. The ROI was clear within the first month. Now we can't imagine operating without these systems.",
    metric: '300% ROI in 30 days'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#00c8ff] to-[#c724ff] bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 h-full hover:border-white/20 transition-colors">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-cyan-500/30 mb-4" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.content}"</p>

                {/* Metric badge */}
                <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                  <span className="text-cyan-400 font-semibold text-sm">{testimonial.metric}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-center text-gray-500 text-sm mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {['TechFlow', 'ScaleUp', 'PropTech', 'DataSync', 'CloudOps', 'AutomateX'].map((company, i) => (
              <div key={i} className="text-xl md:text-2xl font-bold text-gray-400 tracking-wider">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}