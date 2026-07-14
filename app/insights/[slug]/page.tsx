import Link from "next/link";
import { notFound } from "next/navigation";

import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { getInsight, getRelatedInsights, insights } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { formatDate } from "@/lib/utils";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) return createMetadata({ title: "Insight Not Found", path: "/insights/" });

  return createMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insights/${insight.slug}/`
  });
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) notFound();

  const related = getRelatedInsights(insight.related);
  const breadcrumbs = [
    { name: "Insights", href: "/insights/" },
    { name: insight.title, href: `/insights/${insight.slug}/` }
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", href: "/" }, ...breadcrumbs]),
          articleSchema({
            title: insight.title,
            description: insight.excerpt,
            datePublished: insight.date,
            path: `/insights/${insight.slug}/`
          })
        ]}
      />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow={insight.category}
        title={insight.title}
        description={insight.excerpt}
        badge={`${formatDate(insight.date)} · ${insight.readTime}`}
        className="pt-12"
      />
      <article className="container-enterprise max-w-3xl pb-20">
        <div className="space-y-7 text-lg leading-9 text-muted-foreground">
          {insight.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <SectionHeading eyebrow="Related articles" title="Continue exploring the topic." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <Link href={`/insights/${item.slug}/`} key={item.slug}>
                <Card className="h-full rounded-lg p-6 shadow-none transition-all hover:-translate-y-1 hover:border-primary/35">
                  <Badge variant="neutral">{item.category}</Badge>
                  <h2 className="mt-6 text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 rounded-lg border border-border bg-background p-6">
            <h2 className="text-2xl font-semibold">Get future insights</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Receive concise notes on data, AI, cloud, automation, and enterprise architecture.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
