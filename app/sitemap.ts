import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { caseStudies, insights, services } from "@/lib/content";

const staticRoutes = [
  "/",
  "/about/",
  "/services/",
  "/solutions/",
  "/industries/",
  "/technologies/",
  "/case-studies/",
  "/portfolio/",
  "/insights/",
  "/careers/",
  "/contact/",
  "/privacy-policy/",
  "/terms/"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const dynamicRoutes = [
    ...services.map((service) => `/services/${service.slug}/`),
    ...caseStudies.map((study) => `/case-studies/${study.slug}/`),
    ...insights.map((insight) => `/insights/${insight.slug}/`)
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("/insights/") ? 0.6 : 0.8
  }));
}
