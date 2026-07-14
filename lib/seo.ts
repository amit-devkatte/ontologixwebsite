import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

type MetadataInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  noIndex = false
}: MetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const resolvedTitle =
    title === siteConfig.displayName ? title : `${title} | ${siteConfig.displayName}`;

  return {
    title: resolvedTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical
    },
    openGraph: {
      type: "website",
      title: resolvedTitle,
      description,
      url: canonical,
      siteName: siteConfig.displayName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.displayName} brand preview`
        }
      ],
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image]
    },
    robots: noIndex
      ? {
          index: false,
          follow: false
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1
          }
        }
  };
}
