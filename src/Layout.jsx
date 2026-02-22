import LOGO_URL from "@/assets/logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { createPageUrl } from "@/utils";
import ChatbotWidget from "@/components/ChatbotWidget";

const navLinks = [
  { name: "Home", page: "Home" },
  { name: "Services", page: "Services" },
  { name: "Solutions", page: "Solutions" },
  { name: "Industries", page: "Industries" },
  { name: "About", page: "About" },
  { name: "Contact", page: "Contact" },
];


const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPageName]);

  return (
    <div className="min-h-screen w-full bg-[#07050f] text-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/5" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="flex items-center gap-2">
              <img src={LOGO_URL} alt="BrevaNext" className="h-12 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    currentPageName === link.page
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <Link
              to={createPageUrl("Contact")}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium transition-all hover:opacity-90"
            >
              Get Automation
              <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#030712]/95 backdrop-blur-xl border-b border-white/5"
            >
              <nav className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`block px-4 py-3 rounded-xl transition-all ${
                      currentPageName === link.page
                        ? "text-cyan-400 bg-cyan-500/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl("Contact")}
                  className="block px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center mt-4"
                >
                  Get Automation
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main className="pt-20 w-full bg-[#07050f] text-white">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <Link to={createPageUrl("Home")} className="flex items-center gap-2 mb-4">
                <img src={LOGO_URL} alt="BrevaNext" className="h-14 w-auto" />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Building AI automation systems that transform how businesses operate. Automate. Scale. Dominate.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/brevanext"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.instagram.com/brevanext"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to={createPageUrl("Services")} className="text-gray-400 hover:text-cyan-400 transition-colors">AI Automation</Link></li>
                <li><Link to={createPageUrl("Services")} className="text-gray-400 hover:text-cyan-400 transition-colors">Workflow Automation</Link></li>
                <li><Link to={createPageUrl("Services")} className="text-gray-400 hover:text-cyan-400 transition-colors">AI Agents</Link></li>
                <li><Link to={createPageUrl("Services")} className="text-gray-400 hover:text-cyan-400 transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to={createPageUrl("About")} className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
                <li><Link to={createPageUrl("Industries")} className="text-gray-400 hover:text-cyan-400 transition-colors">Industries</Link></li>
                <li><Link to={createPageUrl("Solutions")} className="text-gray-400 hover:text-cyan-400 transition-colors">Solutions</Link></li>
                <li><Link to={createPageUrl("Contact")} className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:admin@brevanext.com" className="text-gray-400 hover:text-cyan-400 transition-colors">admin@brevanext.com</a></li>
                <li><span className="text-gray-400">Remote-First, Global</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} BrevaNext. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link to={createPageUrl("PrivacyPolicy")} className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link to={createPageUrl("TermsOfService")} className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
              <Link to={createPageUrl("CookiePolicy")} className="text-gray-500 hover:text-gray-300 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}
