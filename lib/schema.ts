import type { Faq } from "@/types/content";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.displayName,
    url: siteConfig.url,
    logo: absoluteUrl("/logo-mark.svg"),
    email: siteConfig.email,
    sameAs: [siteConfig.social.website, siteConfig.social.linkedin],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "sales and consulting inquiries",
        availableLanguage: ["English"]
      }
    ],
    areaServed: "Global",
    knowsAbout: [
      "Software development",
      "Data engineering",
      "Data analytics",
      "Artificial intelligence",
      "Business intelligence",
      "Cloud solutions",
      "Digital transformation",
      "Automation",
      "Cybersecurity"
    ]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.displayName,
    url: siteConfig.url,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName
    }
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href)
    }))
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  datePublished: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    mainEntityOfPage: absoluteUrl(input.path),
    author: {
      "@type": "Organization",
      name: siteConfig.displayName
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.displayName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-mark.svg")
      }
    }
  };
}
