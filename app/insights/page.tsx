import Link from "next/link";

import { NewsletterForm } from "@/components/forms/newsletter-form";
import { InsightsExplorer } from "@/components/insights/insights-explorer";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { insights } from "@/lib/content";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Read Ontologix insights on AI-ready data, data engineering modernization, governed BI, executive analytics, and cloud cost control.",
  path: "/insights/"
});

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Clear thinking on software, data, AI, automation, and cloud modernization."
        description="A modern magazine-style resource for leaders shaping dependable digital platforms and intelligent operating models."
      />
      <section className="container-enterprise pb-16">
        <Link href={`/insights/${featured.slug}/`} className="group">
          <Card className="grid gap-8 rounded-lg p-8 shadow-none transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-[var(--shadow-soft)] lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Badge>Featured article</Badge>
              <p className="mt-6 text-sm font-semibold text-primary">
                {formatDate(featured.date)} · {featured.readTime}
              </p>
            </div>
            <div>
              <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">{featured.excerpt}</p>
            </div>
          </Card>
        </Link>
      </section>

      <section className="container-enterprise pb-20">
        <SectionHeading eyebrow="Browse" title="Search by topic or category." />
        <div className="mt-10">
          <InsightsExplorer insights={rest} />
        </div>
      </section>

      <section className="bg-card">
        <div className="container-enterprise section-spacing grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Newsletter"
            title="Receive practical notes on enterprise data and AI readiness."
            description="Short, useful perspectives on architecture, governance, analytics, automation, and platform modernization."
          />
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
