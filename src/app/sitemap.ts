import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.jasonarocaelect.fr";

  return [
    {
      url: base,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/services`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/a-propos`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
