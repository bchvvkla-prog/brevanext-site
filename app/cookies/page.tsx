export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1
          className="text-5xl font-extrabold mb-5 
          bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
          bg-clip-text text-transparent"
        >
          Cookie Policy
        </h1>

        <p className="text-gray-400">Effective Date: November 2025</p>

        {/* 1. What Are Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. 
            They help us improve your browsing experience, analyze traffic, and personalize content.
          </p>
        </section>

        {/* 2. How We Use Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">2. How We Use Cookies</h2>
          <p>BrevaNext uses cookies to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Enhance website performance and functionality</li>
            <li>Analyze user behavior and traffic trends</li>
            <li>Remember your preferences and settings</li>
            <li>Improve security and user experience</li>
          </ul>
        </section>

        {/* 3. Types of Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">3. Types of Cookies We Use</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Needed for the website to function properly.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Allow us to track usage and improve performance.
            </li>
            <li>
              <strong>Preference Cookies:</strong> Store your settings and preferences.
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Help us deliver relevant content and ads.
            </li>
          </ul>
        </section>

        {/* 4. Managing Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">4. Managing Cookies</h2>
          <p>
            You can accept, decline, or manage cookies through your browser settings. 
            Disabling essential cookies may affect certain website features.
          </p>
        </section>

        {/* 5. Updates */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">5. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy occasionally. Any changes will be reflected 
            with a new effective date at the top of this page.
          </p>
        </section>

        {/* 6. Contact */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">6. Contact Us</h2>
          <p>
            For questions regarding this Cookie Policy, contact us at{" "}
            <a className="text-cyan-300" href="mailto:admin@brevanext.com">
              admin@brevanext.com
            </a>.
          </p>
        </section>

      </div>
    </div>
  );
}
