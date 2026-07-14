import { ArrowUpRight, Share2, Mail } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { services, solutions } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-enterprise py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="sm">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="size-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a
                  href={siteConfig.social.LinkedIn}
                  aria-label="Ontologix on LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Share2 className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn
              title="Company"
              links={[
                { title: "About", href: "/about/" },
                { title: "Portfolio", href: "/portfolio/" },
                { title: "Careers", href: "/careers/" },
                { title: "Contact", href: "/contact/" }
              ]}
            />
            <FooterColumn
              title="Services"
              links={services.slice(0, 5).map((service) => ({
                title: service.title,
                href: `/services/${service.slug}/`
              }))}
            />
            <FooterColumn
              title="Solutions"
              links={solutions.slice(0, 5).map((solution) => ({
                title: solution.sector,
                href: `/solutions/#${solution.slug}`
              }))}
            />
            <FooterColumn
              title="Resources"
              links={[
                { title: "Insights", href: "/insights/" },
                { title: "Case Studies", href: "/case-studies/" },
                { title: "Technologies", href: "/technologies/" },
                { title: "Privacy Policy", href: "/privacy-policy/" },
                { title: "Terms", href: "/terms/" }
              ]}
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary"
          >
            Discuss a program <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: { title: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
