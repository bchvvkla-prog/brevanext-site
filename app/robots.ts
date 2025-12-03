import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.brevanext.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/server/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
