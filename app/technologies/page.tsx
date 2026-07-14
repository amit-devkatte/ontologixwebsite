import { TechnologyChart } from "@/components/charts/technology-chart";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";
import { technologies } from "@/lib/content";

export const metadata = createMetadata({
  title: "Technologies",
  description:
    "Explore the technologies Ontologix uses across frontend, backend, cloud, AI, machine learning, data engineering, DevOps, databases, and visualization.",
  path: "/technologies/"
});

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title="A modern technology stack, selected for enterprise maintainability."
        description="Ontologix works across proven platforms and emerging AI capabilities, balancing innovation with operational discipline."
      />
      <section className="container-enterprise pb-16">
        <TechnologyChart technologies={technologies} />
      </section>
      <section className="container-enterprise pb-20">
        <SectionHeading
          eyebrow="Stack categories"
          title="Capabilities across the full digital platform."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((category) => (
            <Card className="rounded-lg p-6 shadow-none" key={category.category}>
              <h2 className="text-xl font-semibold">{category.category}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{category.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge variant="neutral" key={item}>
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
      <CtaSection
        title="Choose technology for the system you need to operate."
        description="We help teams make architecture choices that remain understandable, secure, and valuable after launch."
      />
    </>
  );
}
