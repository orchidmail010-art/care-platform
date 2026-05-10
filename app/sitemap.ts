import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://care-platform-sage.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://care-platform-sage.vercel.app/long-term-care",
      lastModified: new Date(),
    },
    {
      url: "https://care-platform-sage.vercel.app/family-care-guide",
      lastModified: new Date(),
    },
    {
      url: "https://care-platform-sage.vercel.app/family-care-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://care-platform-sage.vercel.app/visit-care-guide",
      lastModified: new Date(),
    },
    {
      url: "https://care-platform-sage.vercel.app/visit-care-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://care-platform-sage.vercel.app/caregiver-info",
      lastModified: new Date(),
    },
    {
      url: "https://care-platform-sage.vercel.app/social-worker-info",
      lastModified: new Date(),
    },
    {
      url: "https://care-platform-sage.vercel.app/support-benefits",
      lastModified: new Date(),
    },
  ];
}