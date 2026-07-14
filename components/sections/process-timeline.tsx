import type { ProcessStep } from "@/types/content";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <article
          className="relative rounded-lg border border-border bg-card p-6 shadow-sm"
          key={step.title}
        >
          <span className="grid size-9 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {index + 1}
          </span>
          <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
