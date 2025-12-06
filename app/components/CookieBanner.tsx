"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("brevanext_cookie_consent");
    if (!consent) setShow(true);
  }, []);

  const handleConsent = (choice: string) => {
    localStorage.setItem("brevanext_cookie_consent", choice);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
 <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 40 }}
  transition={{ duration: 0.4 }}
  className="
    fixed bottom-4 left-1/2 -translate-x-1/2 
    w-[94%] sm:w-[90%] md:w-[600px]
    max-h-[70vh] overflow-y-auto
    bg-black/90 backdrop-blur-xl 
    border border-white/10 shadow-2xl
    rounded-2xl p-6 z-[999]
  "
  style={{ WebkitOverflowScrolling: "touch" }}
>
  
          {/* COOKIE ICON */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🍪</span>
            <h3 className="text-white font-semibold text-lg">
              We Use Cookies
            </h3>
          </div>

          {/* MESSAGE */}
          <p className="text-gray-300 text-sm leading-relaxed">
            BrevaNext uses cookies to enhance your experience, analyze traffic, 
            and personalize content. By continuing to browse, you agree to our{" "}
            <a href="/cookies" className="text-cyan-300 underline">
              Cookie Policy
            </a>.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-5">

            <button
              onClick={() => handleConsent("declined")}
              className="px-4 py-2 text-sm rounded-lg border border-white/20 
              text-gray-300 hover:bg-white/10 transition"
            >
              Decline
            </button>

            <button
              onClick={() => handleConsent("accepted")}
              className="px-5 py-2 text-sm font-semibold text-black rounded-lg
              bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              hover:opacity-90 transition"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
