"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SolutionNav from "../../components/SolutionNav.jsx";   // ✅ FIXED IMPORT

export default function ConversationalAIPage() {
  return (
    <div className="px-6 pt-24 pb-20 max-w-7xl mx-auto text-gray-300">

      {/* ================================
          HERO SECTION
      ================================== */}
      <section className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight 
            bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 
            bg-clip-text text-transparent drop-shadow-lg mb-6"
          >
            Conversational AI & Virtual Assistants
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Build intelligent chat and voice assistants that understand natural
            language, automate conversations, and deliver instant support across
            your digital platforms. Conversational AI enhances customer experience,
            reduces support load, and boosts engagement 24/7.
          </p>

          {/* HIGHLIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-5 rounded-xl border border-white/10 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              What Our AI Assistants Can Do
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm leading-relaxed">
              <li>✔ Provide human-like chat & voice support</li>
              <li>✔ Automate customer queries & workflows</li>
              <li>✔ Integrate with CRM/ticket systems</li>
              <li>✔ Support multilingual communication</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-xl overflow-hidden md:w-[75%] w-full mx-auto"
        >
          <Image
            src="/services/chatbots.jpg"
            alt="Conversational AI"
            width={700}
            height={700}
            className="rounded-xl object-cover h-auto shadow-xl"
          />
        </motion.div>
      </section>

      {/* ================================
          SERVICES WE OFFER
      ================================== */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mt-20 mb-14 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
      >
        Services We Offer
      </motion.h2>

      <section className="space-y-14 max-w-5xl mx-auto">

        <ServiceCard
          title="Custom AI Chatbots for Websites, Apps & WhatsApp"
          image="/services/chatbots.jpg"
          description="Custom AI chatbots deliver intelligent, real-time support across websites, apps, and WhatsApp. They understand user intent, answer questions, guide users, and automate workflows with natural, human-like conversations."
        />

        <ServiceCard
          title="Voice & Multilingual AI Assistants"
          image="/services/voice.jpg"
          description="Voice and multilingual chatbots understand speech, process intent, and respond in multiple languages—ideal for global support, bookings, and workflow automation."
        />

        <ServiceCard
          title="CRM & Ticketing System Integrations"
          image="/services/crm.jpg"
          description="Connect your AI chatbots to CRMs and ticketing platforms like HubSpot or Zendesk to automate lead capture, ticket creation, and support workflows."
        />

        <ServiceCard
          title="Fine-Tuned Industry Chatbots"
          image="/services/fine_tuned.jpg"
          description="AI assistants trained on domain-specific data for education, healthcare, and e-commerce—ensuring accurate and contextual responses."
        />

        <ServiceCard
          title="Enterprise AI Assistants with Contextual Memory"
          image="/services/contextual.jpg"
          description="Enterprise-grade AI assistants that remember context, automate internal workflows, and act as intelligent teammates across HR, IT, and operations."
        />

      </section>

      {/* ================================
          HOW IT WORKS
      ================================== */}
      <SectionHeader title="How Our Conversational AI Works" />

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass p-7 rounded-xl border border-white/10 hover:border-cyan-400/40 transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Intent & Conversation Design
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We design intuitive conversation flows that maximize automation and user satisfaction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass p-7 rounded-xl border border-white/10 hover:border-cyan-400/40 transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            LLM Fine-Tuning & Integration
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We fine-tune your AI assistant with domain knowledge and integrate it into all required platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-7 rounded-xl border border-white/10 hover:border-cyan-400/40 transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Deployment & Continuous Learning
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Your chatbot improves over time with interaction-based learning and optimization.
          </p>
        </motion.div>

      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold 
          bg-gradient-to-r from-cyan-300 to-blue-400
          bg-clip-text text-transparent mb-4"
        >
          Ready to Build Your AI Assistant?
        </h2>
        <p className="text-gray-400 mb-6">
          Automate conversations, increase engagement, and deliver smarter support.
        </p>

        <a
          href="/#contact"
          className="px-6 py-3 bg-cyan-500/20 border border-cyan-400 
          text-cyan-300 rounded-xl hover:bg-cyan-500/30 transition"
        >
          Schedule a Demo
        </a>
      </motion.div>

      {/* ================================
          PREV / NEXT NAVIGATION
      ================================== */}
      <SolutionNav
        prev={{
          href: "/solutions/ai-process-automation",
          label: "AI Process Automation",
        }}
        next={{
          href: "/solutions/data-analytics",
          label: "Data Analytics",
        }}
      />

    </div>
  );
}

/* -------------------------------
   COMPONENTS
-------------------------------- */

function ServiceCard({ title, image, description }) {
  return (
    <div className="glass p-6 rounded-xl border border-white/10 
      hover:border-cyan-400/40 transition flex flex-col md:flex-row 
      items-center gap-6 mx-auto max-w-4xl"
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
      />
      <div className="md:w-2/3">
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-3xl font-bold mt-20 
      bg-gradient-to-r from-cyan-300 to-blue-400 
      bg-clip-text text-transparent"
    >
      {title}
    </motion.h2>
  );
}
