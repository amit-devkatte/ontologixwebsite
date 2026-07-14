import { CheckCircle2 } from "lucide-react";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createMetadata } from "@/lib/seo";
import { solutions } from "@/lib/content";

export const metadata = createMetadata({
  title: "Solutions",
  description:
    "Explore Ontologix solutions for manufacturing, healthcare, retail, supply chain, education, finance, government, and energy.",
  path: "/solutions/"
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Industry-shaped technology solutions for intelligent operations."
        description="Ontologix combines software, data, BI, AI, automation, cloud, and consulting capabilities around the operating priorities of each sector."
      />
      <section className="container-enterprise pb-20">
        <Tabs defaultValue={solutions[0].slug}>
          <TabsList className="flex h-auto flex-wrap justify-start">
            {solutions.map((solution) => (
              <TabsTrigger value={solution.slug} key={solution.slug}>
                {solution.sector}
              </TabsTrigger>
            ))}
          </TabsList>
          {solutions.map((solution) => (
            <TabsContent value={solution.slug} key={solution.slug} id={solution.slug}>
              <Card className="rounded-lg p-8 shadow-none">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <Badge>{solution.sector}</Badge>
                    <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight">
                      {solution.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-3">
                    <List title="Priorities" items={solution.priorities} />
                    <List title="Capabilities" items={solution.capabilities} />
                    <List title="Outcomes" items={solution.outcomes} />
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <SectionHeading
            eyebrow="Solution architecture"
            title="Every solution is designed around the same enterprise-quality foundation."
            description="Secure integrations, governed data, accessible interfaces, workflow accountability, and operating analytics are treated as shared building blocks."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Secure integration", "Governed data", "Decision analytics", "AI readiness"].map(
              (item) => (
                <Card className="rounded-lg p-6 shadow-none" key={item}>
                  <CheckCircle2 className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold">{item}</h3>
                </Card>
              )
            )}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-primary">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li className="flex gap-2" key={item}>
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
