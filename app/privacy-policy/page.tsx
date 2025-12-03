export const metadata = {
  title: "Privacy Policy – BrevaNext",
  description: "Learn how BrevaNext collects, protects, and uses your personal data.",
};
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20 px-6 bg-black text-gray-300">
      
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-10 text-center 
        bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)] 
        bg-clip-text text-transparent">
        Privacy Policy — BrevaNext
      </h1>

      <div className="max-w-4xl mx-auto space-y-10 leading-relaxed">

        {/* EFFECTIVE DATE */}
        <p className="text-gray-400 italic">
          Effective Date: November 2025 • Last Updated: November 2025
        </p>

        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            1. Information We Collect
          </h2>

          <p>
            We may collect personal information such as your name, email address,
            phone number, company details, and any message you submit through our
            contact forms. We also collect usage data including IP address,
            browser type, device information, and pages visited to improve user
            experience.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li><strong>Personal Information:</strong> Name, email, phone number, company, message content.</li>
            <li><strong>Usage Data:</strong> IP, device type, browser information, pages visited.</li>
            <li><strong>Cookies:</strong> Used for analytics, personalization, and improving performance.</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            2. How We Use Your Information
          </h2>

          <p>
            BrevaNext uses your information to deliver services, respond to
            inquiries, send updates, improve website performance, maintain
            security, and comply with legal obligations.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Provide and improve AI & automation services</li>
            <li>Respond to inquiries and customer support requests</li>
            <li>Send marketing or service-related communications (opt-in only)</li>
            <li>Analyze trends and website performance</li>
            <li>Maintain service security and prevent fraud</li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            3. Data Sharing & Third Parties
          </h2>

          <p>
            We do not sell or rent your personal information. Data may be shared
            only with trusted partners such as hosting providers, analytics tools,
            or platforms that assist in service delivery. All partners follow strict
            confidentiality and data protection standards.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            4. Data Protection & Security
          </h2>

          <p>
            We implement robust technical and organizational measures including
            encryption, access controls, secure hosting, and regular monitoring to
            safeguard your information.
          </p>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            5. Your Rights
          </h2>

          <p>
            Depending on your region (GDPR/CCPA), you may request access,
            correction, deletion, or export of your personal data. You may also opt
            out of marketing at any time.
          </p>

          <p className="mt-3">
            To exercise your rights, contact us at:{" "}
            <span className="text-white font-semibold">admin@brevanext.com</span>
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            6. Cookies & Tracking
          </h2>

          <p>
            Cookies help us enhance website performance and personalize your
            experience. You may disable cookies in your browser settings, though
            some features may not function properly.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            7. External Links
          </h2>

          <p>
            Our website may include links to third-party sites. BrevaNext is not
            responsible for the content or privacy practices of external websites.
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            8. Data Retention
          </h2>

          <p>
            We retain your information only as long as necessary for service
            delivery, legal compliance, and legitimate business operations. When no
            longer required, your data is securely deleted.
          </p>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            9. Children's Privacy
          </h2>

          <p>
            Our services are not intended for individuals under 16. We do not knowingly
            collect data from minors. If such data is identified, it is promptly removed.
          </p>
        </section>

        {/* SECTION 10 */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            10. Policy Updates
          </h2>

          <p>
            We may update this Privacy Policy periodically. Changes will be reflected
            on this page with an updated revision date.
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            11. Contact Us
          </h2>

          <p>
            For any questions, concerns, or privacy-related requests, you can reach us at:
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
            © 2025 BrevaNext. All Rights Reserved. All content on this website,
            including text, graphics, logos, and design, is the exclusive property
            of BrevaNext and protected under international copyright laws.
          </p>
        </section>

      </div>
    </div>
  );
}
