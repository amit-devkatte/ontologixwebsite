import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";
import { portfolio } from "@/lib/content";

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "Explore Ontologix portfolio themes across executive intelligence, AI assistants, data lakehouses, automation hubs, analytics systems, and cloud modernization.",
  path: "/portfolio/"
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A portfolio of enterprise capabilities, not one-off deliverables."
        description="Ontologix work is designed as reusable capability: platforms, products, workflows, analytics systems, and operating models that can keep improving."
      />
      <section className="container-enterprise pb-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <Card className="rounded-lg p-6 shadow-none" key={item.title}>
              <Badge variant="neutral">{item.category}</Badge>
              <h2 className="mt-8 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <SectionHeading
            eyebrow="Portfolio logic"
            title="Each engagement strengthens a broader digital operating model."
            description="We prefer architectures and delivery patterns that can be reused across domains, reducing the cost of future change."
          />
          <Link
            href="/case-studies/"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            View representative case studies <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
