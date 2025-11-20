import { MetadataRoute } from "next";
import { SITE } from "./data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.domain;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/service-timing`,
      lastModified: new Date(),
      // We set this to 'weekly' to tell Google: "Check this often, times might change!"
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Add other pages here manually if they exist
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonies`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
