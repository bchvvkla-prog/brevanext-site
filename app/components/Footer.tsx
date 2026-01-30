import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* BRAND */}
          <div>
            <h2
              className="
                text-3xl font-bold
                bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
                bg-clip-text text-transparent
              "
            >
              BrevaNext
            </h2>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              AI-powered automation, analytics, and intelligence for fast-growing
              businesses. We design systems that scale.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services/ai-advisory" className="hover:text-white transition">AI Advisory</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-white transition">AI Automation</Link></li>
              <li><Link href="/services/business-intelligence" className="hover:text-white transition">Business Intelligence</Link></li>
              <li><Link href="/services/custom-web-tools" className="hover:text-white transition">Custom Web Tools</Link></li>
              <li><Link href="/services/staffing-consulting" className="hover:text-white transition">Staffing & Consulting</Link></li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Industries
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/industry/manufacturing" className="hover:text-white transition">Manufacturing</Link></li>
              <li><Link href="/industry/retail" className="hover:text-white transition">Retail</Link></li>
              <li><Link href="/industry/finance" className="hover:text-white transition">Finance</Link></li>
              <li><Link href="/industry/logistics" className="hover:text-white transition">Logistics</Link></li>
              <li><Link href="/industry/education" className="hover:text-white transition">Education</Link></li>
              <li><Link href="/industry/hr" className="hover:text-white transition">HR</Link></li>
              <li><Link href="/industry/media" className="hover:text-white transition">Media</Link></li>
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Contact
            </h3>

            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>
                <a
                  href="mailto:admin@brevanext.com"
                  className="hover:text-white transition"
                >
                  admin@brevanext.com
                </a>
              </li>
              <li>Phoenix, Arizona, USA</li>
            </ul>

            {/* SOCIAL ICONS — EXACT AS REQUESTED */}
            <div>
              <h3 className="footer-heading">Follow Us</h3>
              <div className="flex gap-4 text-xl">

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/brevanext/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="hover:text-blue-400 transition"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/brevanext"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hover:text-pink-400 transition"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 
                  1.9.3 2.4.5.6.2 1 .5 1.5 1 
                  .5.5.8.9 1 1.5.2.5.4 1.2.5 
                  2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 
                  4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 
                  1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 
                  0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 
                  15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 
                  1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 
                  2.2 12 2.2zm0 3.1c-2.9 0-3.2 0-4.3.1-1 
                  0-1.5.2-1.8.4-.4.2-.7.4-1 
                  .8-.3.3-.6.6-.8 1-.2.3-.4.8-.4 
                  1.8-.1 1.1-.1 1.4-.1 4.3s0 3.2.1 
                  4.3c0 1 .2 1.5.4 1.8.2.4.4.7.8 
                  1 .3.3.6.6 1 .8.3.2.8.4 1.8.4 1.1.1 1.4.1 
                  4.3.1s3.2 0 4.3-.1c1 0 1.5-.2 1.8-.4.4-.2.7-.4 
                  1-.8.3-.3.6-.6.8-1 .2-.3.4-.8.4-1.8.1-1.1.1-1.4.1-4.3s0-3.2-.1-4.3c0-1-.2-1.5-.4-1.8-.2-.4-.4-.7-.8-1-.3-.3-.6-.6-1-.8-.3-.2-.8-.4-1.8-.4-1.1-.1-1.4-.1-4.3-.1zm0 
                  3.5a4.4 4.4 0 110 8.8 4.4 4.4 0 
                  010-8.8zm0 7.3a2.9 2.9 0 100-5.8 2.9 2.9 0 
                  000 5.8zm5.6-7.9a1 1 0 110-2 1 1 0 
                  010 2z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 text-gray-500 text-sm">
          <span>© 2026 BrevaNext</span>
          <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms</Link>
          <Link href="/cookies" className="hover:text-white transition">Cookies</Link>
        </div>

      </div>
    </footer>
  );
}
