"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    ["AI & Process Automation", "/services/ai-automation"],
    ["Business Intelligence & Dashboards", "/services/business-intelligence"],
    ["Custom Web & Internal Tools", "/services/custom-web-tools"],
    ["AI Advisory & Implementation", "/services/ai-advisory"],
  ];

  const industries = [
    ["Healthcare", "/industry/healthcare"],
    ["Manufacturing & Operations", "/industry/manufacturing"],
    ["Finance & Banking", "/industry/finance"],
    ["Retail & E-Commerce", "/industry/retail"],
    ["Logistics & Supply Chain", "/industry/logistics"],
    ["Education & EdTech", "/industry/education"],
    ["HR & Talent Operations", "/industry/hr"],
    ["Media, Marketing & Agencies", "/industry/media-marketing"],
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-[#0B0F1A]/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="BrevaNext logo" width={36} height={36} priority />
          <span className="text-xl md:text-3xl font-extrabold tracking-tight bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)] bg-clip-text text-transparent">
            BrevaNext
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-white/90">

          {/* SERVICES */}
          <div className="relative" ref={servicesRef}>
            <button onClick={() => setServicesOpen(v => !v)} className="hover:text-white transition">
              Services ▾
            </button>
            {servicesOpen && (
              <div className="absolute top-12 left-0 w-80 rounded-xl bg-[#0F172A]/95 backdrop-blur-xl border border-white/10 shadow-2xl p-4">
                {services.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setServicesOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition">
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* INDUSTRIES */}
          <div className="relative" ref={industriesRef}>
            <button onClick={() => setIndustriesOpen(v => !v)} className="hover:text-white transition">
              Industries ▾
            </button>
            {industriesOpen && (
              <div className="absolute top-12 left-0 w-80 rounded-xl bg-[#0F172A]/95 backdrop-blur-xl border border-white/10 shadow-2xl p-4">
                {industries.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setIndustriesOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition">
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/case-studies" className="hover:text-white transition">
            Case Studies
          </Link>

          <Link href="/#about" className="hover:text-white transition">
            About
          </Link>
        </nav>

        {/* CTA */}
        <Link href="/contact" className="hidden md:inline-flex px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)] hover:opacity-90 transition">
          Contact Us
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setMobileOpen(v => !v)} className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B0F1A] border-t border-white/10 px-6 py-6 space-y-4 text-white">

          {/* SERVICES */}
          <div>
            <button onClick={() => setMobileServicesOpen(v => !v)} className="w-full text-left font-medium">
              Services {mobileServicesOpen ? "▴" : "▾"}
            </button>
            {mobileServicesOpen && (
              <div className="mt-2 space-y-2 pl-4">
                {services.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="block text-white/80 hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* INDUSTRIES */}
          <div>
            <button onClick={() => setMobileIndustriesOpen(v => !v)} className="w-full text-left font-medium">
              Industries {mobileIndustriesOpen ? "▴" : "▾"}
            </button>
            {mobileIndustriesOpen && (
              <div className="mt-2 space-y-2 pl-4">
                {industries.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="block text-white/80 hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/case-studies" onClick={() => setMobileOpen(false)} className="block">
            Case Studies
          </Link>

          <Link href="/#about" onClick={() => setMobileOpen(false)} className="block">
            About
          </Link>

          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block mt-4 text-center px-6 py-3 rounded-lg font-semibold bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
