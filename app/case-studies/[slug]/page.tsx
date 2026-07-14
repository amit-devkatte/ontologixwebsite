import { CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { caseStudies, getCaseStudy } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return createMetadata({ title: "Case Study Not Found", path: "/case-studies/" });

  return createMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}/`
  });
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const breadcrumbs = [
    { name: "Case Studies", href: "/case-studies/" },
    { name: study.title, href: `/case-studies/${study.slug}/` }
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, ...breadcrumbs])} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow={study.industry}
        title={study.title}
        description={study.summary}
        badge="Case study"
        className="pt-12"
      />

      <section className="container-enterprise grid gap-5 pb-20 md:grid-cols-3">
        {study.metrics.map((metric) => (
          <Card className="rounded-lg p-6 shadow-none" key={metric.label}>
            <p className="text-4xl font-semibold text-primary">{metric.value}</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{metric.label}</p>
          </Card>
        ))}
      </section>

      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <div className="grid gap-5 lg:grid-cols-3">
            <Narrative title="Problem" text={study.problem} />
            <Narrative title="Challenge" text={study.challenge} />
            <Narrative title="Solution" text={study.solution} />
          </div>
        </div>
      </section>

      <section className="container-enterprise section-spacing">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Architecture"
            title="The solution structure was designed for traceability and operational use."
          />
          <div className="grid gap-4">
            {study.architecture.map((item) => (
              <Card className="rounded-lg p-5 shadow-none" key={item}>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="font-semibold text-foreground">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-enterprise pb-20">
        <div className="grid gap-8 rounded-lg border border-border bg-card p-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.technologies.map((technology) => (
                <Badge variant="neutral" key={technology}>
                  {technology}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Business impact</h2>
            <ul className="mt-6 space-y-3">
              {study.impact.map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={item}>
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection
        title="Have a similar operating challenge?"
        description="We can help assess the data, system, workflow, and AI readiness work required to move from problem to platform."
      />
    </>
  );
}

function Narrative({ title, text }: { title: string; text: string }) {
  return (
    <Card className="h-full rounded-lg p-6 shadow-none">
      <p className="section-kicker">{title}</p>
      <p className="mt-5 text-base leading-8 text-muted-foreground">{text}</p>
    </Card>
  );
}
