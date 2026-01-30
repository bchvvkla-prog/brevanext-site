import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import ChatbotWidget from "./components/ChatbotWidget";

export const metadata = {
  metadataBase: new URL("https://www.brevanext.com"),

  title: {
    default: "AI Automation, Chatbots & Data Analytics Consulting | BrevaNext",
    template: "%s | BrevaNext",
  },

  description:
    "BrevaNext helps businesses automate workflows, build AI-powered systems, and design decision platforms that reduce manual work and improve operational clarity.",

  keywords: [
    "AI automation consulting",
    "AI process automation services",
    "Business automation company",
    "AI advisory services",
    "Custom AI systems",
    "Data analytics consulting",
    "BrevaNext",
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  alternates: {
    canonical: "https://www.brevanext.com",
  },

  openGraph: {
    title: "AI Automation & Systems Advisory | BrevaNext",
    description:
      "BrevaNext partners with businesses to automate operations and build custom AI systems that support better decisions.",
    url: "https://www.brevanext.com",
    siteName: "BrevaNext",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BrevaNext AI Automation Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Systems Advisory | BrevaNext",
    description:
      "Designing intelligent automation and decision systems for growing businesses.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BrevaNext",
              url: "https://www.brevanext.com",
              logo: "https://www.brevanext.com/logo.png",
              description:
                "BrevaNext designs AI-powered automation and custom systems that reduce manual work and improve business decisions.",
              email: "admin@brevanext.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Phoenix",
                addressRegion: "AZ",
                addressCountry: "USA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "admin@brevanext.com",
              },
              sameAs: [
                "https://www.linkedin.com/company/brevanextai/",
                "https://www.instagram.com/brevanext/",
              ],
            }),
          }}
        />

        {/* WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BrevaNext",
              url: "https://www.brevanext.com",
            }),
          }}
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      {/* ✅ FIXED OVERLAY NAVBAR (CONTENT SLIDES UNDER) */}
      <body className="bg-black text-white antialiased">
        <Navbar />

        {/* ❌ NO padding-top here */}
        <main className="relative z-0">
          {children}
        </main>

        <Footer />
        <CookieBanner />
        <ChatbotWidget />
      </body>
    </html>
  );
}
