export const metadata = {
  title: "Privacy Policy – BrevaNext",
  description: "Learn how BrevaNext collects, protects, and uses your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20 px-6 bg-black text-gray-300">

      {/* PAGE TITLE */}
      <h1
        className="
          text-4xl font-bold mb-10 text-center
          bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
          bg-clip-text text-transparent
        "
      >
        Privacy Policy — BrevaNext
      </h1>

      <div className="max-w-4xl mx-auto space-y-10 leading-relaxed">

        {/* EFFECTIVE DATE */}
        <p className="text-gray-400 italic">
          Effective Date: January 2026 • Last Updated: January 2026
        </p>

        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            1. Information We Collect
          </h2>

          <p>
            BrevaNext may collect personal information that you voluntarily
            provide when interacting with our website or services. We also
            collect limited technical data to improve performance, security,
            and user experience.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, company name, and message content submitted through forms.
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, device
              information, operating system, and pages visited.
            </li>
            <li>
              <strong>Cookies:</strong> Used for analytics, personalization, and
              essential site functionality.
            </li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            2. How We Use Your Information
          </h2>

          <p>
            We use collected information to operate our business, deliver
            services, communicate with users, and continuously improve our
            offerings.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Provide and improve AI, automation, and consulting services</li>
            <li>Respond to inquiries and support requests</li>
            <li>Send service-related or marketing communications (opt-in only)</li>
            <li>Monitor usage patterns and website performance</li>
            <li>Maintain security, prevent abuse, and detect fraud</li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            3. Data Sharing & Third Parties
          </h2>

          <p>
            BrevaNext does not sell, rent, or trade your personal information.
            We may share limited data with trusted third-party service providers
            such as hosting, analytics, or communication platforms strictly for
            operational purposes.
          </p>

          <p className="mt-3">
            All third parties are contractually required to follow appropriate
            confidentiality, security, and data protection standards.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            4. Data Protection & Security
          </h2>

          <p>
            We implement reasonable administrative, technical, and
            organizational safeguards including encryption, access controls,
            secure hosting environments, and monitoring to protect your data.
          </p>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            5. Your Rights
          </h2>

          <p>
            Depending on your jurisdiction (including GDPR and CCPA), you may
            have the right to access, correct, delete, restrict, or export your
            personal data. You may also withdraw consent for marketing
            communications at any time.
          </p>

          <p className="mt-3">
            Requests can be submitted to:{" "}
            <span className="text-white font-semibold">
              admin@brevanext.com
            </span>
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            6. Cookies & Tracking Technologies
          </h2>

          <p>
            Cookies help us understand site usage, improve performance, and
            personalize experiences. You may manage or disable cookies through
            your browser settings, though some features may be affected.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            7. External Links
          </h2>

          <p>
            Our website may contain links to external sites not operated by
            BrevaNext. We are not responsible for the content, policies, or
            practices of third-party websites.
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            8. Data Retention
          </h2>

          <p>
            We retain personal information only for as long as necessary to
            fulfill service purposes, comply with legal obligations, and
            support legitimate business operations. Data is securely deleted
            when no longer required.
          </p>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            9. Children’s Privacy
          </h2>

          <p>
            BrevaNext does not knowingly collect personal data from individuals
            under the age of 16. If such data is identified, it will be deleted
            promptly.
          </p>
        </section>

        {/* SECTION 10 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            10. Policy Updates
          </h2>

          <p>
            This Privacy Policy may be updated periodically. Any changes will
            be posted on this page with an updated effective date.
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            11. Contact Us
          </h2>

          <p>
            For privacy-related questions or requests, please contact us at:
          </p>

          <ul className="mt-3 space-y-1">
            <li>📧 <strong>admin@brevanext.com</strong></li>
            <li>🌐 www.brevanext.com</li>
            <li>📍 Phoenix, AZ, USA</li>
          </ul>
        </section>

        {/* COPYRIGHT */}
        <section className="pt-6 border-t border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Copyright Notice
          </h2>

          <p>
            © 2026 BrevaNext. All Rights Reserved. All content on this website,
            including text, graphics, logos, and design, is the exclusive
            property of BrevaNext and protected under applicable copyright laws.
          </p>
        </section>

      </div>
    </div>
  );
}
