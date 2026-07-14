import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";
import { solutions } from "@/lib/content";

export const metadata = createMetadata({
  title: "Industries",
  description:
    "Ontologix supports industry technology programs across manufacturing, healthcare, retail, supply chain, education, finance, government, and energy.",
  path: "/industries/"
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Enterprise technology that respects sector complexity."
        description="Different industries share a need for trusted systems, but each has distinct rhythms, data constraints, risk profiles, and decision models."
      />
      <section className="container-enterprise pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((solution) => (
            <Card className="rounded-lg p-6 shadow-none" id={solution.slug} key={solution.slug}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-kicker">{solution.sector}</p>
                  <h2 className="mt-4 text-2xl font-semibold">{solution.title}</h2>
                </div>
                <Link href={`/solutions/#${solution.slug}`} aria-label={`View ${solution.sector} solution`}>
                  <ArrowUpRight className="size-5 text-muted-foreground hover:text-primary" />
                </Link>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{solution.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {solution.priorities.map((priority) => (
                  <span
                    className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground"
                    key={priority}
                  >
                    {priority}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <SectionHeading
            eyebrow="Expertise model"
            title="We start with operating questions before designing the system."
            description="The best industry solutions are not generic technology stacks. They are shaped around the way teams plan, measure, comply, serve, and improve."
          />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
