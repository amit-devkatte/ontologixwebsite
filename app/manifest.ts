import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.displayName,
    short_name: "Ontologix",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F6F8FB",
    theme_color: "#1389C6",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "64x64",
        type: "image/svg+xml"
      },
      {
        src: "/logo-mark.svg",
        sizes: "96x96",
        type: "image/svg+xml",
        purpose: "any maskable"
      }
    ]
  };
}
