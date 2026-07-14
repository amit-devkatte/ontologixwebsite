import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type CtaSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  href?: string;
  label?: string;
};

export function CtaSection({
  eyebrow = "Start with clarity",
  title = "Let’s shape the platform your next decade depends on.",
  description = "Bring us the decision, workflow, data challenge, or AI opportunity. We will help define the architecture and path to value.",
  href = "/contact/",
  label = "Start a conversation"
}: CtaSectionProps) {
  return (
    <section className="container-enterprise section-spacing">
      <div className="grid gap-8 rounded-lg border border-border bg-foreground p-8 text-background shadow-[var(--shadow-enterprise)] md:grid-cols-[1.4fr_auto] md:items-center md:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-cyan">{eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-background/75 md:text-lg">
            {description}
          </p>
        </div>
        <Button asChild variant="accent" size="lg">
          <Link href={href}>
            {label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
