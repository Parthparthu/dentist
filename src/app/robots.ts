import type { MetadataRoute } from "next";
import { clinicConfig } from "@/config/clinic";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${clinicConfig.siteUrl}/sitemap.xml`,
  };
}
