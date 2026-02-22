import React from "react";
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-[#07050f] text-white">
      <AnimatedBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-12 text-sm">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>BrevaNext ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><span className="text-gray-300">Contact Information:</span> Name, email address, phone number, and company name when you fill out a form or reach out to us.</li>
              <li><span className="text-gray-300">Usage Data:</span> Information about how you interact with our website, including pages visited and time spent.</li>
              <li><span className="text-gray-300">Technical Data:</span> IP address, browser type, device information, and cookies.</li>
              <li><span className="text-gray-300">Business Information:</span> Details you share about your business needs when discussing our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Respond to your inquiries and provide our services</li>
              <li>Improve our website and service offerings</li>
              <li>Send relevant updates or information you've requested</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our website or delivering services, under strict confidentiality agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
            <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, or as required by law. You may request deletion of your data at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Third-Party Links</h2>
            <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the date at the top of this page.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
            <p>For any privacy-related questions or requests, please contact us at <a href="mailto:hello@brevanext.com" className="text-cyan-400 hover:underline">hello@brevanext.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
