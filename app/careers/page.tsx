import { CheckCircle2, MapPin } from "lucide-react";

import { ApplicationForm } from "@/components/forms/application-form";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";
import { careers, company } from "@/lib/content";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Explore careers at Ontologix Software Pvt Ltd across data engineering, frontend engineering, AI solutions, and business intelligence.",
  path: "/careers/"
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build serious technology with people who care about clarity."
        description="Ontologix is shaped for engineers, analysts, consultants, and builders who like complex work, calm standards, and client outcomes that can be measured."
      />

      <section className="container-enterprise pb-20">
        <SectionHeading eyebrow="Benefits" title="A work environment designed for thoughtful execution." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Remote-friendly delivery rhythm",
            "Senior mentorship on architecture decisions",
            "Exposure to enterprise data and AI programs",
            "Documentation-first engineering culture"
          ].map((benefit) => (
            <Card className="rounded-lg p-6 shadow-none" key={benefit}>
              <CheckCircle2 className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-5 text-lg font-semibold">{benefit}</h2>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <SectionHeading
            eyebrow="Culture"
            title="The habits that make the work sustainable."
            description="We value depth, readable communication, ownership, and respect for the client domain."
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {company.culture.map((item) => (
              <div className="rounded-lg border border-border bg-background p-4 font-semibold" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-enterprise section-spacing">
        <SectionHeading eyebrow="Open positions" title="Roles currently open for conversation." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {careers.map((position) => (
            <Card className="rounded-lg p-6 shadow-none" key={position.slug}>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{position.team}</Badge>
                <Badge variant="neutral">{position.type}</Badge>
              </div>
              <h2 className="mt-6 text-2xl font-semibold">{position.title}</h2>
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <MapPin className="size-4" aria-hidden="true" />
                {position.location}
              </p>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{position.summary}</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <RoleList title="Responsibilities" items={position.responsibilities} />
                <RoleList title="Requirements" items={position.requirements} />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-enterprise pb-20">
        <div className="rounded-lg border border-border bg-card p-8">
          <SectionHeading
            eyebrow="Application"
            title="Tell us what you have built."
            description="The form prepares an application email so your message remains in your control."
          />
          <div className="mt-10">
            <ApplicationForm />
          </div>
        </div>
      </section>

      <CtaSection
        title="Not seeing the exact role?"
        description="Strong builders are welcome to start a conversation when their work aligns with software, data, analytics, AI, cloud, automation, or consulting."
        label="Introduce yourself"
      />
    </>
  );
}

function RoleList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-primary">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li className="flex gap-2" key={item}>
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
