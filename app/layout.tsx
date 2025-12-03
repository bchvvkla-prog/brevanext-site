import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export const metadata = {
  metadataBase: new URL("https://www.brevanext.com"),

  title: {
    default: "BrevaNext – AI & Automation Consulting",
    template: "%s | BrevaNext",
  },

  description:
    "BrevaNext helps businesses automate workflows, deploy AI solutions, and unlock intelligent decision-making using next-generation automation, analytics, and machine learning.",

  keywords: [
    "AI Automation",
    "Business Automation",
    "AI Consulting",
    "Machine Learning",
    "Data Analytics",
    "AI Chatbots",
    "RPA",
    "Automation Agency",
    "Intelligent Workflows",
    "BrevaNext"
  ],

  openGraph: {
    title: "BrevaNext – AI & Automation Consulting",
    description:
      "Empowering businesses with AI automation, analytics, chatbots, machine learning, and intelligent digital transformation.",
    url: "https://www.brevanext.com",
    siteName: "BrevaNext",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BrevaNext – AI Automation Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxVideoPreview: -1,
      maxImagePreview: "large",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "BrevaNext – AI Automation & Intelligence",
    description:
      "Automate smarter and scale faster with AI-powered business automation, analytics, and machine learning.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ===========================
            ORGANIZATION SCHEMA
        ============================ */}
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
              sameAs: [
                "https://www.linkedin.com/company/brevanext",
                "https://twitter.com/brevanext",
                "https://www.instagram.com/brevanext"
              ],
            }),
          }}
        />

        {/* ===========================
            WEBSITE SCHEMA
        ============================ */}
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
