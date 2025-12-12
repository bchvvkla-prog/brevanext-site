/* ===============================
   PAGE-LEVEL SEO (SERVER)
================================ */
export const metadata = {
  title: "Conversational AI & Virtual Assistant Development | BrevaNext",
  description:
    "BrevaNext builds conversational AI and virtual assistants that automate customer support, enable voice and chat interactions, and integrate with CRM systems.",
  keywords: [
    "conversational AI services",
    "AI chatbot development company",
    "virtual assistant development",
    "AI voice assistants",
    "enterprise AI chatbots",
    "BrevaNext conversational AI"
  ],
  alternates: {
    canonical: "https://www.brevanext.com/solutions/conversational-ai",
  },
};

/* ===============================
   CLIENT COMPONENT
================================ */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SolutionNav from "../../components/SolutionNav.jsx";

/* ===============================
   CONVERSATIONAL AI PAGE
================================ */
export default function ConversationalAIPage() {
  return (
    <>
      {/* ===============================
          SERVICE SCHEMA (SEO)
      ================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Conversational AI & Virtual Assistant Development",
            serviceType: "Conversational AI",
            provider: {
              "@type": "Organization",
              name: "BrevaNext",
              url: "https://www.brevanext.com",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            description:
              "Conversational AI services including chatbots and voice assistants that automate conversations, integrate with CRM systems, and improve customer engagement.",
            url: "https://www.brevanext.com/solutions/conversational-ai",
          }),
        }}
      />

      <div className="px-6 pt-24 pb-20 max-w-7xl mx-auto text-gray-300">

        {/* ===============================
            HERO SECTION
        ================================ */}
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
              Conversational AI & Virtual Assistant Development
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Build intelligent chat and voice assistants that understand natural
              language, automate conversations, and deliver instant support across
              digital platforms. BrevaNext helps businesses scale engagement and
              reduce support costs with AI-powered assistants.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass p-5 rounded-xl border border-white/10 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-cyan-300 mb-2">
                What Our AI Assistants Can Do
              </h2>
              <ul className="text-gray-400 space-y-1 text-sm leading-relaxed">
                <li>✔ Human-like chat & voice support</li>
                <li>✔ Automated customer queries & workflows</li>
                <li>✔ CRM and ticketing integrations</li>
                <li>✔ Multilingual conversations at scale</li>
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
              alt="Conversational AI chatbots and virtual assistants by BrevaNext"
              width={700}
              height={700}
              className="rounded-xl object-cover h-auto shadow-xl"
            />
          </motion.div>
        </section>

        {/* ===============================
            SERVICES WE OFFER
        ================================ */}
        <SectionHeader title="Conversational AI Services We Offer" />

        <section className="space-y-14 max-w-5xl mx-auto">

          <ServiceCard
            title="Custom AI Chatbots for Websites, Apps & WhatsApp"
            image="/services/chatbots.jpg"
            description="AI chatbots that deliver real-time, human-like conversations across websites, mobile apps, and WhatsApp while automating workflows."
          />

          <ServiceCard
            title="Voice & Multilingual AI Assistants"
            image="/services/voice.jpg"
            description="Voice-enabled and multilingual assistants designed for global customer support, bookings, and automation."
          />

          <ServiceCard
            title="CRM & Ticketing Integrations"
            image="/services/crm.jpg"
            description="Seamless integration with CRM and ticketing platforms to automate lead capture, support tickets, and follow-ups."
          />

          <ServiceCard
            title="Fine-Tuned Industry-Specific Chatbots"
            image="/services/fine_tuned.jpg"
            description="Domain-trained AI assistants for healthcare, education, e-commerce, and enterprise use cases."
          />

          <ServiceCard
            title="Enterprise AI Assistants with Contextual Memory"
            image="/services/contextual.jpg"
            description="Advanced AI assistants with memory and workflow automation capabilities for HR, IT, and operations teams."
          />
        </section>

        {/* ===============================
            HOW IT WORKS
        ================================ */}
        <SectionHeader title="How Our Conversational AI Works" />

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <StepCard
            title="Intent & Conversation Design"
            text="We design intelligent conversation flows that maximize automation and user satisfaction."
          />

          <StepCard
            title="LLM Fine-Tuning & Integration"
            text="We fine-tune AI models with domain knowledge and integrate them across platforms."
          />

          <StepCard
            title="Deployment & Continuous Learning"
            text="Your AI assistant improves over time through interaction-driven optimization."
          />

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold 
            bg-gradient-to-r from-cyan-300 to-blue-400 
            bg-clip-text text-transparent mb-4"
          >
            Ready to Build Your AI Assistant?
          </h2>
          <p className="text-gray-400 mb-6">
            Automate conversations, improve engagement, and scale support with AI.
          </p>

          <a
            href="/#contact"
            className="px-6 py-3 bg-cyan-500/20 border border-cyan-400 
            text-cyan-300 rounded-xl hover:bg-cyan-500/30 transition"
          >
            Schedule a Demo
          </a>
        </div>

        {/* PREV / NEXT */}
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
    </>
  );
}

/* ===============================
   COMPONENTS
================================ */

function ServiceCard({ title, image, description }: any) {
  return (
    <div className="glass p-6 rounded-xl border border-white/10 
      flex flex-col md:flex-row items-center gap-6 mx-auto max-w-4xl"
    >
      <img
        src={image}
        alt={`${title} by BrevaNext`}
        className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
      />
      <div className="md:w-2/3">
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function SectionHeader({ title }: any) {
  return (
    <h2 className="text-3xl font-bold mt-20 mb-10 
      bg-gradient-to-r from-cyan-300 to-blue-400 
      bg-clip-text text-transparent text-center"
    >
      {title}
    </h2>
  );
}

function StepCard({ title, text }: any) {
  return (
    <div className="glass p-7 rounded-xl border border-white/10">
      <h3 className="text-xl font-semibold text-cyan-300 mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{text}</p>
    </div>
  );
}
