"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) => 
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <motion.form
      action="https://formsubmit.co/admin@brevanext.com"
      method="POST"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass p-6 rounded-2xl border border-white/10 shadow-xl
      hover:border-[#5DF0FF60] transition"
    >
      {/* Hidden settings */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="_subject"
        value="New BrevaNext Contact Form Submission"
      />
      <input
        type="hidden"
        name="_next"
        value="https://brevanext.com/thank-you"
      />

      {/* TITLE */}
      <h3
        className="text-2xl font-bold mb-5 
        bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
        bg-clip-text text-transparent"
      >
        Let's Connect
      </h3>

      {/* NAME */}
      <div className="mb-4">
        <label className="text-sm text-gray-300">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2.5 bg-black/20 border border-white/10 
          rounded-md text-white text-sm 
          focus:outline-none focus:border-[#5DF0FF] transition"
          required
        />
      </div>

      {/* EMAIL */}
      <div className="mb-4">
        <label className="text-sm text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={form.email}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2.5 bg-black/20 border border-white/10 
          rounded-md text-white text-sm 
          focus:outline-none focus:border-[#3FA9F5] transition"
          required
        />
      </div>

      {/* MESSAGE */}
      <div className="mb-5">
        <label className="text-sm text-gray-300">Message</label>
        <textarea
          name="message"
          placeholder="Tell us how we can help..."
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-2.5 bg-black/20 border border-white/10 
          rounded-md text-white text-sm resize-none 
          focus:outline-none focus:border-[#9A5CF5] transition"
          required
        />
      </div>

      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="w-full py-3 font-semibold rounded-lg 
        bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
        text-black hover:opacity-90 transition shadow-lg"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}

