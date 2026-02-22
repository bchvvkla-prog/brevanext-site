import React from "react";
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen bg-[#07050f] text-white">
      <AnimatedBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-12 text-sm">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using BrevaNext's services, website, or any related offerings, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
            <p>BrevaNext provides AI automation solutions, workflow automation, AI agents, and custom technology solutions for businesses. We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Client Responsibilities</h2>
            <p>You agree to provide accurate and complete information when engaging our services. You are responsible for maintaining the confidentiality of any credentials or access provided to you, and for all activities that occur under your account.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h2>
            <p>All content, technology, and materials created by BrevaNext remain our intellectual property unless otherwise agreed in a separate written contract. Custom solutions built specifically for you will be addressed in your individual service agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Payment & Fees</h2>
            <p>Fees for services are outlined in your individual service agreement or proposal. Payment terms, refund policies, and billing cycles will be specified in that agreement. We reserve the right to update pricing with reasonable advance notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Limitation of Liability</h2>
            <p>BrevaNext shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services. Our total liability shall not exceed the amount paid by you for the services in question over the preceding three months.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Confidentiality</h2>
            <p>Both parties agree to keep confidential any proprietary information shared during the course of our engagement. This obligation survives termination of our business relationship.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Termination</h2>
            <p>Either party may terminate services in accordance with the terms of the individual service agreement. BrevaNext reserves the right to terminate access immediately in cases of breach of these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through good-faith negotiation before pursuing formal legal action.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:admin@brevanext.com" className="text-cyan-400 hover:underline">admin@brevanext.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
