"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import type { TechnologyCategory } from "@/types/content";

export function TechnologyChart({ technologies }: { technologies: TechnologyCategory[] }) {
  const data = technologies.map((category) => ({
    name: category.category,
    count: category.items.length
  }));

  return (
    <div className="h-80 rounded-lg border border-border bg-card p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: -16, right: 8, top: 12, bottom: 48 }}>
          <CartesianGrid stroke="var(--border)" vertical={false} />
          <XAxis
            dataKey="name"
            angle={-35}
            textAnchor="end"
            interval={0}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          />
          <YAxis allowDecimals={false} tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
          <Tooltip
            cursor={{ fill: "rgba(19,137,198,0.08)" }}
            contentStyle={{
              border: "1px solid var(--border)",
              borderRadius: 8,
              background: "var(--card)",
              color: "var(--foreground)"
            }}
          />
          <Bar dataKey="count" fill="#1389C6" radius={[6, 6, 0, 0]} name="Technologies" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
