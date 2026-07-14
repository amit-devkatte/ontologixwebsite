import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  className?: string;
};

export function PageHero({ eyebrow, title, description, badge, className }: PageHeroProps) {
  return (
    <section className={cn("container-enterprise pb-16 pt-16 md:pb-20 md:pt-24", className)}>
      <div className="max-w-4xl">
        <p className="section-kicker">{eyebrow}</p>
        <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-foreground md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
          {description}
        </p>
        {badge ? (
          <div className="mt-8">
            <Badge variant="cyan">{badge}</Badge>
          </div>
        ) : null}
      </div>
    </section>
  );
}
