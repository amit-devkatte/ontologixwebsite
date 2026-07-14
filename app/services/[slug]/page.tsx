import { Check, Layers, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { getService, services } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return createMetadata({ title: "Service Not Found", path: "/services/" });
  }

  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}/`
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const breadcrumbs = [
    { name: "Services", href: "/services/" },
    { name: service.title, href: `/services/${service.slug}/` }
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, ...breadcrumbs]), faqSchema(service.faqs)]} />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.longDescription}
        badge="Service detail"
        className="pt-12"
      />

      <section className="container-enterprise grid gap-6 pb-20 lg:grid-cols-[1fr_0.72fr]">
        <Card className="rounded-lg p-8 shadow-none">
          <div className="flex items-center gap-3">
            <Layers className="size-5 text-primary" aria-hidden="true" />
            <h2 className="text-2xl font-semibold">Business outcomes</h2>
          </div>
          <ul className="mt-8 grid gap-4">
            {service.outcomes.map((outcome) => (
              <li className="flex gap-3 text-base leading-7 text-muted-foreground" key={outcome}>
                <Check className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="rounded-lg p-8 shadow-none">
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-primary" aria-hidden="true" />
            <h2 className="text-2xl font-semibold">Technologies</h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {service.technologies.map((technology) => (
              <Badge variant="neutral" key={technology}>
                {technology}
              </Badge>
            ))}
          </div>
        </Card>
      </section>

      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <SectionHeading
            eyebrow="Benefits"
            title={`What ${service.title.toLowerCase()} should improve.`}
            description="The work is designed to strengthen operating capability, not only ship technology."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {service.benefits.map((benefit) => (
              <Card className="rounded-lg p-5 shadow-none" key={benefit}>
                <div className="flex gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-foreground">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-enterprise section-spacing">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from assessment to operational adoption."
        />
        <div className="mt-12">
          <ProcessTimeline steps={service.process} />
        </div>
      </section>

      <section className="container-enterprise pb-20">
        <SectionHeading eyebrow="FAQs" title="Common questions before starting." />
        <div className="mt-10">
          <FaqSection faqs={service.faqs} />
        </div>
      </section>

      <CtaSection
        title={`Build a stronger ${service.title.toLowerCase()} capability.`}
        description="Share the context, constraints, and outcomes you need. We will help shape the right engagement."
      />
    </>
  );
}
