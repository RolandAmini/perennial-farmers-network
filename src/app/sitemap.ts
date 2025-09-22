// File: app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://perennial-farmers-network.vercel.app", // CHANGE to your custom domain later
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://perennial-farmers-network.vercel.app/about", // CHANGE to your custom domain later
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://perennial-farmers-network.vercel.app/membership", // CHANGE to your custom domain later
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://perennial-farmers-network.vercel.app/contact", // CHANGE to your custom domain later
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
