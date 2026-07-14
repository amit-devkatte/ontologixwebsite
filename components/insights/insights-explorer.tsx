"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Insight } from "@/types/content";
import { formatDate } from "@/lib/utils";

export function InsightsExplorer({ insights }: { insights: Insight[] }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const categories = React.useMemo(
    () => ["All", ...Array.from(new Set(insights.map((insight) => insight.category)))],
    [insights]
  );

  const filtered = React.useMemo(() => {
    const value = query.trim().toLowerCase();
    return insights.filter((insight) => {
      const matchesCategory = category === "All" || insight.category === category;
      const matchesQuery =
        !value ||
        [insight.title, insight.excerpt, insight.category].join(" ").toLowerCase().includes(value);
      return matchesCategory && matchesQuery;
    });
  }, [category, insights, query]);

  return (
    <div className="grid gap-8">
      <div className="grid gap-4 rounded-lg border border-border bg-card p-4 md:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search insights"
            aria-label="Search insights"
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Insight categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className="rounded-full border border-border px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary data-[active=true]:border-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              data-active={category === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((insight) => (
          <Link href={`/insights/${insight.slug}/`} key={insight.slug} className="group">
            <Card className="h-full rounded-lg p-6 shadow-none transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-[var(--shadow-soft)]">
              <Badge variant="neutral">{insight.category}</Badge>
              <h2 className="mt-8 text-balance text-2xl font-semibold leading-tight text-foreground">
                {insight.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{insight.excerpt}</p>
              <p className="mt-6 text-sm font-semibold text-primary">
                {formatDate(insight.date)} · {insight.readTime}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
