import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { CaseStudy } from "@/types/content";

export function CaseStudyGrid({ studies }: { studies: CaseStudy[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {studies.map((study) => (
        <Link href={`/case-studies/${study.slug}/`} key={study.slug} className="group">
          <Card className="h-full rounded-lg p-6 shadow-none transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-[var(--shadow-soft)]">
            <div className="flex items-start justify-between gap-4">
              <Badge variant={study.featured ? "default" : "neutral"}>{study.industry}</Badge>
              <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <h3 className="mt-8 text-balance text-2xl font-semibold leading-tight text-foreground">
              {study.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{study.summary}</p>
            <dl className="mt-7 grid gap-3 sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-xs leading-5 text-muted-foreground">{metric.label}</dt>
                  <dd className="mt-1 text-lg font-semibold text-foreground">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </Link>
      ))}
    </div>
  );
}
