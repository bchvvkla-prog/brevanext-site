"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    "Last Name": "",
    Email: "",
    Description: "",
  });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <motion.form
      action="https://crm.zoho.com/crm/WebToLeadForm"
      method="POST"
      acceptCharset="UTF-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass p-6 rounded-2xl border border-white/10 shadow-xl
      hover:border-[#5DF0FF60] transition"
    >
      {/* 🔐 ZOHO CRM HIDDEN FIELDS */}
      <input
        type="hidden"
        name="xnQsjsdp"
        value="6a0b0b48ff8ee0f8f73ccdc60afe63044eccdc4a49aa664e5e19e30a088a6935"
      />
      <input
        type="hidden"
        name="xmIwtLD"
        value="72ce2a07784aafb60cd1f9ea714519f1b463ce2536918cb5c2aca1621dc778f60061093c59210dd3bcfb481de25f0437"
      />
      <input type="hidden" name="actionType" value="TGVhZHM=" />
      <input
        type="hidden"
        name="returnURL"
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

      {/* NAME → Zoho Last Name */}
      <div className="mb-4">
        <label className="text-sm text-gray-300">Name</label>
        <input
          type="text"
          name="Last Name"
          placeholder="Your full name"
          value={form["Last Name"]}
          onChange={handleChange}
          required
          className="w-full mt-1 px-4 py-2.5 bg-black/20 border border-white/10 
          rounded-md text-white text-sm 
          focus:outline-none focus:border-[#5DF0FF] transition"
        />
      </div>

      {/* EMAIL → Zoho Email */}
      <div className="mb-4">
        <label className="text-sm text-gray-300">Email</label>
        <input
          type="email"
          name="Email"
          placeholder="Your email address"
          value={form.Email}
          onChange={handleChange}
          required
          className="w-full mt-1 px-4 py-2.5 bg-black/20 border border-white/10 
          rounded-md text-white text-sm 
          focus:outline-none focus:border-[#3FA9F5] transition"
        />
      </div>

      {/* MESSAGE → Zoho Description */}
      <div className="mb-5">
        <label className="text-sm text-gray-300">Message</label>
        <textarea
          name="Description"
          placeholder="Tell us how we can help..."
          rows={4}
          value={form.Description}
          onChange={handleChange}
          required
          className="w-full mt-1 px-4 py-2.5 bg-black/20 border border-white/10 
          rounded-md text-white text-sm resize-none 
          focus:outline-none focus:border-[#9A5CF5] transition"
        ></textarea>
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
