import React from "react";
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export default function CookiePolicy() {
  return (
    <div className="relative min-h-screen bg-[#07050f] text-white">
      <AnimatedBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Cookie Policy
        </h1>
        <p className="text-gray-400 mb-12 text-sm">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you interact with it, improving your experience over time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Cookies</h2>
            <p className="mb-3">BrevaNext uses cookies for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><span className="text-gray-300">Essential Cookies:</span> Required for the website to function properly. These cannot be disabled.</li>
              <li><span className="text-gray-300">Analytics Cookies:</span> Help us understand how visitors interact with our site so we can improve it.</li>
              <li><span className="text-gray-300">Preference Cookies:</span> Remember your settings and preferences for a better experience on return visits.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Third-Party Cookies</h2>
            <p>We may use third-party services such as Google Analytics that set their own cookies to help us analyze website usage. These third parties have their own privacy policies governing the use of such information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Managing Cookies</h2>
            <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete them. Please note that disabling certain cookies may affect the functionality of our website.</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
              <li>Chrome: Settings → Privacy and Security → Cookies</li>
              <li>Firefox: Settings → Privacy & Security → Cookies</li>
              <li>Safari: Preferences → Privacy → Manage Website Data</li>
              <li>Edge: Settings → Privacy, Search and Services → Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Cookie Retention</h2>
            <p>Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them manually.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Any changes will be reflected by updating the date at the top of this page.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us at <a href="mailto:admin@brevanext.com" className="text-cyan-400 hover:underline">admin@brevanext.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
