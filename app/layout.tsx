import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export const metadata = {
  metadataBase: new URL("https://www.brevanext.com"),

  title: {
    default: "AI Automation, Chatbots & Data Analytics Consulting | BrevaNext",
    template: "%s | BrevaNext",
  },

  description:
    "BrevaNext helps businesses automate workflows, build AI chatbots, and deploy data-driven solutions using AI, machine learning, and analytics.",

  keywords: [
    "AI automation consulting",
    "AI process automation services",
    "AI chatbot development company",
    "Generative AI solutions",
    "Data analytics consulting",
    "Machine learning consulting",
    "Enterprise AI solutions",
    "BrevaNext"
  ],

  alternates: {
    canonical: "https://www.brevanext.com",
  },

  openGraph: {
    title: "AI Automation & Intelligence Consulting | BrevaNext",
    description:
      "BrevaNext delivers AI automation, chatbots, analytics, and machine learning solutions for modern businesses.",
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
    title: "AI Automation & Analytics Consulting | BrevaNext",
    description:
      "Scale faster with AI-powered automation, chatbots, analytics, and machine learning solutions.",
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
                "BrevaNext delivers AI automation, analytics, chatbots, and enterprise intelligence solutions.",
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
                "https://www.linkedin.com/company/brevanext",
                "https://www.instagram.com/brevanext_ai"
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
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.brevanext.com/?q={search_term}",
                "query-input": "required name=search_term",
              },
            }),
          }}
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className="bg-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
