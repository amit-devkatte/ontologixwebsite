import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  name: string;
  description: string;
  badge?: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export function PricingCard({ name, description, badge, features, cta, featured }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col rounded-lg p-6 shadow-none",
        featured && "border-primary/55 shadow-[var(--shadow-enterprise)]"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
        {badge ? <Badge variant={featured ? "default" : "neutral"}>{badge}</Badge> : null}
      </div>
      <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
        {features.map((feature) => (
          <li className="flex gap-3" key={feature}>
            <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full" variant={featured ? "default" : "secondary"}>
        {cta}
      </Button>
    </Card>
  );
}
