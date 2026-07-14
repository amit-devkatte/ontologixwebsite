import { Quote } from "lucide-react";

import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/types/content";

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {testimonials.map((item) => (
        <Card className="rounded-lg p-6 shadow-none" key={item.author}>
          <Quote className="size-6 text-primary" aria-hidden="true" />
          <blockquote className="mt-5 text-pretty text-base leading-8 text-foreground">
            “{item.quote}”
          </blockquote>
          <figcaption className="mt-6 border-t border-border pt-5">
            <p className="font-semibold text-foreground">{item.author}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.role}, {item.company}
            </p>
          </figcaption>
        </Card>
      ))}
    </div>
  );
}
