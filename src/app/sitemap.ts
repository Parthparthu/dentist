import type { MetadataRoute } from "next";
import { clinicConfig } from "@/config/clinic";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/offers",
    "/reviews",
    "/gallery",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const serviceRoutes = clinicConfig.services.map(
    (service) => `/services/${service.slug}`
  );

  const allRoutes = [...routes, ...serviceRoutes];

  return allRoutes.map((route) => ({
    url: `${clinicConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services/") ? 0.8 : 0.5,
  }));
}
