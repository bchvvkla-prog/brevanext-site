import SocialMediaAIAutomationClient from "./Client";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Social Media AI Automation Services | BrevaNext",
    description:
      "BrevaNext provides social media AI automation services including AI content creation, automated captions, analytics, and DM chatbots to scale brand engagement.",
    alternates: {
      canonical: "https://www.brevanext.com/solutions/social-media-ai",
    },
  };
};

export default function Page() {
  return <SocialMediaAIAutomationClient />;
}
