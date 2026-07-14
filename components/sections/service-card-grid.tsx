import {
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ChartSpline,
  CloudCog,
  Code2,
  DatabaseZap,
  Workflow
} from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { Service } from "@/types/content";

const iconMap = {
  Code2,
  BrainCircuit,
  DatabaseZap,
  ChartNoAxesCombined,
  ChartSpline,
  Workflow,
  CloudCog,
  BriefcaseBusiness
};

export function ServiceCardGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Code2;

        return (
          <Link href={`/services/${service.slug}/`} key={service.slug} className="group">
            <Card className="h-full rounded-lg p-6 shadow-none transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[var(--shadow-soft)]">
              <div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                {service.eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
