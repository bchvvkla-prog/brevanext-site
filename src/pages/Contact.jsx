import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, Mail, MapPin, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import GlowButton from '@/components/ui/GlowButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        industry: formData.industry,
        message: formData.message,
      });

      await fetch("https://script.google.com/macros/s/AKfycbwT1MVImkyRZ39za4NWBAsWkDHr2gvVtEs6Bg9dWC1ec0p7B80XoQ0L0MMCeqJtMPcU/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10 pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Let's Build Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Automation System
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to transform your business operations? Book a free strategy call or send us a message.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-400 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <GlowButton onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </GlowButton>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-400 mb-2 block">Your Name</label>
                          <Input
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="John Doe"
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm text-gray-400 mb-2 block">Email Address</label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="john@company.com"
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-400 mb-2 block">Phone Number</label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="+1 (555) 000-0000"
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-gray-400 mb-2 block">Industry</label>
                          <Select
                            value={formData.industry}
                            onValueChange={(value) => handleChange('industry', value)}
                          >
                            <SelectTrigger className="bg-white/5 border-white/10 text-white">
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="real-estate">Real Estate</SelectItem>
                              <SelectItem value="agency">Agency</SelectItem>
                              <SelectItem value="startup">Startup</SelectItem>
                              <SelectItem value="ecommerce">E-commerce</SelectItem>
                              <SelectItem value="local-business">Local Business</SelectItem>
                              <SelectItem value="operations">Operations-Heavy</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">Tell Us About Your Needs</label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="What processes would you like to automate? What challenges are you facing?"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500 min-h-[150px]"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Book a Call */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-cyan-500/20 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Book a Strategy Call</h2>
                    <p className="text-gray-400">Free 30-minute consultation</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">
                  Get personalized automation recommendations for your business. We'll analyze your current processes and identify high-impact automation opportunities.
                </p>
                <ul className="space-y-3 mb-6">
                  {['Custom automation roadmap', 'ROI analysis', 'Implementation timeline', 'No obligation'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="block w-full py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-center hover:bg-white/20 transition-all"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Schedule Your Call
                  </span>
                </a>
              </div>

              {/* Contact Info */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                <h2 className="text-xl font-bold text-white mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <a href="mailto:admin@brevanext.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-white font-medium">admin@brevanext.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-white font-medium">Remote-First, Global</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Response Time</p>
                      <p className="text-white font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/brevanextai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/30 hover:text-white transition-all"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/brevanext"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/30 hover:text-white transition-all"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
