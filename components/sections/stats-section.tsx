import type { Metric } from "@/types/content";
import { AnimatedCounter } from "@/components/motion/animated-counter";

export function StatsSection({ stats }: { stats: Metric[] }) {
  return (
    <section className="container-enterprise py-10">
      <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div className="bg-card p-7" key={stat.label}>
            <dt className="text-sm leading-6 text-muted-foreground">{stat.label}</dt>
            <dd className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
              <AnimatedCounter value={stat.value} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
