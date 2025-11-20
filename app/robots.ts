import { MetadataRoute } from "next";
import { SITE } from "./data/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Disallow private routes if you have any (e.g., admin dashboards)
      // disallow: "/admin/",
    },
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
  };
}
