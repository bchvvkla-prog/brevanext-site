"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbw7i0QaXCxByvLXkSr5QXoqbRvy5rpTrLgdaudFU8HS7l9HCCdNdKvgp8bZQlLqOM2m/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      // ✅ DO NOT parse JSON (Apps Script is unreliable here)
      if (res.ok) {
        window.location.href = "/thank-you";
        return;
      }

      throw new Error("Submission failed");

    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-black px-6 py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white max-w-md">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Let’s talk about your goals
          </h1>

          <p className="text-white/80 mb-6">
            BrevaNext partners with organizations to apply AI, automation,
            and data intelligence to real operational challenges.
          </p>

          <div className="space-y-4 text-white/80 text-sm">
            <p>
              <span className="text-white/60">Email</span><br />
              admin@brevanext.com
            </p>
            <p>
              <span className="text-white/60">Location</span><br />
              Phoenix, AZ
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="w-full flex justify-center lg:justify-end">
          <motion.form
            onSubmit={handleSubmit}
            className="
              w-full max-w-md
              bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-xl p-6 md:p-7
              space-y-4
            "
          >
            <FormField label="Full name">
              <input name="name" required className={inputClass} />
            </FormField>

            <FormField label="Email">
              <input type="email" name="email" required className={inputClass} />
            </FormField>

            <FormField label="Phone number">
              <input type="tel" name="phone" required className={inputClass} />
            </FormField>

            <FormField label="Attach file (optional)">
              <input type="file" name="file" className="text-xs text-white" />
            </FormField>

            <FormField label="How can we help?">
              <textarea
                name="message"
                rows={3}
                required
                className={`${inputClass} resize-none`}
              />
            </FormField>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="
                w-full py-2.5 rounded-lg font-semibold text-sm
                bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
                text-white
                disabled:opacity-60
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>

      </div>
    </section>
  );
}

function FormField({ label, children }: any) {
  return (
    <div>
      <label className="block text-xs text-white/80 mb-1">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass = `
  w-full px-4 py-2.5 rounded-lg text-sm
  bg-black/40 text-white
  border border-white/15
  focus:outline-none focus:border-cyan-400
`;
