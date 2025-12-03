"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const freelanceRoles = [
  { title: "AI / ML Engineer", skills: "Python, NLP, LLMs, Model Development" },
  { title: "Frontend Developer", skills: "React, Next.js, Tailwind" },
  { title: "Backend / API Developer", skills: "Node.js, Django, FastAPI" },
  { title: "Data Analyst / BI Developer", skills: "SQL, Power BI, Tableau" },
  { title: "Automation Engineer", skills: "Zapier, Make, UiPath" },
  { title: "Chatbot Developer", skills: "OpenAI, LangChain, Rasa" },
  { title: "UI/UX Designer", skills: "Figma, Design Systems" },
  { title: "Content Writer (Tech)", skills: "AI, Blogs, SEO Content" },
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <div className="min-h-screen bg-black text-gray-300 py-20 px-6">
      
      {/* HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1
          className="text-5xl font-extrabold mb-5 
          bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
          bg-clip-text text-transparent"
        >
          Work With BrevaNext
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          Join our global network of talented freelancers helping us deliver
          world-class AI, automation, and data solutions.
          Work flexibly — from anywhere — on real, high-impact projects.
        </p>
      </div>

      {/* WHY WORK WITH US */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-20">
        
        <div className="bg-black/40 p-8 rounded-xl border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Why Freelancers Love Us</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Flexible hours and remote-friendly projects</li>
            <li>• Work with global clients and cutting-edge AI tools</li>
            <li>• Project-based payments, always on time</li>
            <li>• Long-term collaboration opportunities</li>
            <li>• Respectful, collaborative, talent-first culture</li>
          </ul>
        </div>

        <div className="bg-black/40 p-8 rounded-xl border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Who We Work With</h2>
          <p className="text-gray-300 leading-relaxed">
            We're always looking for skilled, passionate freelancers who love solving
            real-world problems with technology — whether it's AI engineering,
            automation, full-stack development, data analytics, or creative design.
          </p>
        </div>
      </div>

      {/* ROLE LISTINGS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2
          className="text-3xl font-bold mb-10 
          bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
          bg-clip-text text-transparent"
        >
          Freelance Roles We’re Hiring For
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {freelanceRoles.map((role, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-black/30 border border-white/10 shadow-md cursor-pointer"
              onClick={() => setSelectedRole(role.title)}
            >
              <h3 className="text-xl font-semibold text-white">{role.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Skills: {role.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* APPLICATION FORM */}
      <div className="max-w-3xl mx-auto bg-black/40 p-8 rounded-xl border border-white/10 shadow-xl">
        
        <h2
          className="text-3xl font-bold mb-6 
          bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
          bg-clip-text text-transparent text-center"
        >
          Apply as a Freelancer
        </h2>

        <form
          action="https://formsubmit.co/admin@brevanext.com"
          method="POST"
          encType="multipart/form-data"
          className="space-y-5"
        >
          {/* Hidden */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <input
            type="hidden"
            name="_subject"
            value="New Freelancer Application — BrevaNext"
          />

          <input
            type="hidden"
            name="_next"
            value="https://brevanext.com/thank-you"
          />

          {/* AUTORESPONSE */}
          <input
            type="hidden"
            name="_autoresponse"
            value={`Thank you for applying to work with BrevaNext!

Your application has been received, and our team is reviewing your details with care.
If your skills match our current project needs, we will reach out to you shortly.

We appreciate your interest in collaborating with us.

Warm regards,
Team BrevaNext`}
          />

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 px-4 py-2.5 bg-black/30 border border-white/10 rounded-md text-white"
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 px-4 py-2.5 bg-black/30 border border-white/10 rounded-md text-white"
              required
            />
          </div>

          {/* ROLE SELECT */}
          <div>
            <label className="text-sm text-gray-300">Select Role</label>
            <select
              name="role"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full mt-1 px-4 py-2.5 bg-black/30 border border-white/10 rounded-md text-white"
              required
            >
              <option value="">Choose a Role</option>
              {freelanceRoles.map((role, i) => (
                <option key={i} value={role.title}>
                  {role.title}
                </option>
              ))}
            </select>
          </div>

          {/* EXPERIENCE */}
          <div>
            <label className="text-sm text-gray-300">Years of Experience</label>
            <input
              type="number"
              name="experience"
              min="0"
              max="30"
              className="w-full mt-1 px-4 py-2.5 bg-black/30 border border-white/10 rounded-md text-white"
              required
            />
          </div>

          {/* PORTFOLIO */}
          <div>
            <label className="text-sm text-gray-300">Portfolio / GitHub / LinkedIn</label>
            <input
              type="text"
              name="portfolio"
              placeholder="Link to your work"
              className="w-full mt-1 px-4 py-2.5 bg-black/30 border border-white/10 rounded-md text-white"
              required
            />
          </div>

          {/* RESUME UPLOAD */}
          <div>
            <label className="text-sm text-gray-300">Upload Resume (PDF)</label>
            <input
              type="file"
              name="resume"
              accept=".pdf"
              className="w-full mt-1 text-gray-300"
              required
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              rows={4}
              className="w-full mt-1 px-4 py-2.5 bg-black/30 border border-white/10 rounded-md text-white"
              placeholder="Tell us about yourself..."
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 font-semibold rounded-lg 
            bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
            text-black hover:opacity-90 transition"
          >
            Submit Application
          </motion.button>
        </form>
      </div>
    </div>
  );
}
