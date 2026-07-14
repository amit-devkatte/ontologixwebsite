import { absoluteUrl } from "@/lib/utils";

export const siteConfig = {
  name: "Ontologix",
  legalName: "ONTLOGIX SOFTWARE PRIVATE LIMITED",
  displayName: "Ontologix Software Pvt Ltd",
  url: "https://www.ontologixsoftware.com",
  domain: "www.ontologixsoftware.com",
  description:
    "Ontologix Software Pvt Ltd builds secure software, data engineering platforms, analytics systems, AI-ready data foundations, automation workflows, cloud solutions, and enterprise consulting programs.",
  email: "contact@ontologixsoftware.com",
  phoneLabel: "Phone consultations scheduled by appointment",
  location: "India delivery office",
  mapQuery: "Ontologix Software Pvt Ltd India",
  social: {
    linkedIn: "https://www.linkedin.com/in/amit-devkatte/",
    website: "https://www.ontologixsoftware.com"
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about/" },
    { title: "Services", href: "/services/" },
    { title: "Solutions", href: "/solutions/" },
    { title: "Industries", href: "/industries/" },
    // { title: "Technologies", href: "/technologies/" },
    { title: "Case Studies", href: "/case-studies/" },
    { title: "Insights", href: "/insights/" },
    { title: "Careers", href: "/careers/" },
    // { title: "Contact", href: "/contact/" }
  ],
  ogImage: absoluteUrl("/og-image.svg")
} as const;
