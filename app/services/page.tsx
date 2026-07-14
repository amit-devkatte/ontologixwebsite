import Link from "next/link";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ServiceCardGrid } from "@/components/sections/service-card-grid";
import { SectionHeading } from "@/components/section-heading";
import { PricingCard } from "@/components/ui/pricing-card";
import { createMetadata } from "@/lib/seo";
import { home, services } from "@/lib/content";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Explore Ontologix services across software development, AI solutions, data engineering, BI, analytics, automation, cloud, and enterprise consulting.",
  path: "/services/"
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Enterprise technology services designed for trust, scale, and measurable business value."
        description="Ontologix brings software engineering, data platforms, analytics, AI, automation, cloud, and consulting into one integrated delivery model."
      />
      <section className="container-enterprise pb-20">
        <ServiceCardGrid services={services} />
      </section>

      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <SectionHeading
            eyebrow="Delivery model"
            title="Engagement models shaped around maturity, urgency, and ownership."
            description="Whether you need strategy, build capacity, or a managed improvement rhythm, we keep the model transparent and outcome-led."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <PricingCard
              name="Discover"
              description="Clarify opportunity, risk, architecture options, and investment sequence."
              badge="Advisory"
              cta="Discuss discovery"
              features={[
                "Current-state assessment",
                "Roadmap and business case",
                "Architecture recommendations",
                "Delivery plan and success metrics"
              ]}
            />
            <PricingCard
              name="Build"
              description="Deliver production-ready systems with disciplined engineering governance."
              badge="Most common"
              cta="Plan a build"
              featured
              features={[
                "Product and platform delivery",
                "Reusable component architecture",
                "Automated quality checks",
                "Release and adoption support"
              ]}
            />
            <PricingCard
              name="Operate"
              description="Improve, monitor, and evolve platforms after launch."
              badge="Managed"
              cta="Explore operations"
              features={[
                "Reliability monitoring",
                "Performance and cost tuning",
                "Enhancement backlog",
                "Documentation and support cadence"
              ]}
            />
          </div>
        </div>
      </section>

      <section className="container-enterprise section-spacing">
        <SectionHeading
          eyebrow="Process"
          title="A consistent delivery rhythm across every service line."
        />
        <div className="mt-12">
          <ProcessTimeline steps={home.process} />
        </div>
        <div className="mt-10">
          <Link href="/contact/" className="font-semibold text-primary hover:underline">
            Talk to an architect about your program
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
