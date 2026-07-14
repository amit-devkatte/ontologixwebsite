import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";
import { company } from "@/lib/content";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Ontologix Software Pvt Ltd, its mission, vision, values, journey, leadership practices, and company culture.",
  path: "/about/"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ontologix"
        title="A technology partner for organizations that need trust, intelligence, and execution discipline."
        description="Ontologix Software Pvt Ltd helps companies design and operate dependable digital capabilities across software, data, analytics, AI, automation, cloud, and consulting."
      />

      <section className="container-enterprise grid gap-5 md:grid-cols-2">
        <Card className="rounded-lg p-8 shadow-none">
          <p className="section-kicker">Mission</p>
          <h2 className="mt-4 text-2xl font-semibold">Why we exist</h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{company.mission}</p>
        </Card>
        <Card className="rounded-lg p-8 shadow-none">
          <p className="section-kicker">Vision</p>
          <h2 className="mt-4 text-2xl font-semibold">Where we are headed</h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{company.vision}</p>
        </Card>
      </section>

      <section className="container-enterprise section-spacing">
        <SectionHeading
          eyebrow="Values"
          title="The principles behind our delivery culture."
          description="Enterprise work rewards clarity, consistency, and judgment. Our values keep those qualities visible in every engagement."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {company.values.map((value) => (
            <Card className="rounded-lg p-6 shadow-none" key={value.title}>
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <SectionHeading
            eyebrow="Journey"
            title="From data reliability to intelligent enterprise platforms."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {company.journey.map((item) => (
              <Card className="rounded-lg p-6 shadow-none" key={item.title}>
                <p className="text-sm font-bold text-primary">{item.year}</p>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-enterprise section-spacing">
        <SectionHeading
          eyebrow="Leadership"
          title="Senior ownership across strategy, architecture, and delivery."
          description="Our leadership model is organized by practice depth rather than personality theatre, keeping attention on client outcomes and accountable execution."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {company.leadership.map((leader) => (
            <Card className="rounded-lg p-6 shadow-none" key={leader.name}>
              <div className="grid size-14 place-items-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
                {leader.name.slice(0, 2)}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{leader.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{leader.role}</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{leader.bio}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-enterprise pb-20">
        <div className="rounded-lg border border-border bg-foreground p-8 text-background md:p-12">
          <SectionHeading
            eyebrow="Company culture"
            title="Quiet rigor, high standards, and domain curiosity."
            description="Ontologix culture is shaped around the work clients actually need: careful listening, strong architecture, readable communication, and systems that remain useful after launch."
            className="text-background [&_h2]:text-background [&_p:last-child]:text-background/75"
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {company.culture.map((item) => (
              <div
                className="rounded-lg border border-background/15 bg-background/5 p-4 text-sm font-semibold text-background/85"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
