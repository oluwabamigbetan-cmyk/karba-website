import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://karbafinancialconsultant.com/sitemap.xml",

    host: "https://karbafinancialconsultant.com",
  };
}