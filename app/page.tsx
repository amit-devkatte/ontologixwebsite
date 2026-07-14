import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { CaseStudyGrid } from "@/components/sections/case-study-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCardGrid } from "@/components/sections/service-card-grid";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DataConstellation } from "@/components/visuals/data-constellation";
import { createMetadata } from "@/lib/seo";
import { caseStudies, home, services, solutions, technologies, testimonials } from "@/lib/content";

export const metadata = createMetadata({
  title: "Enterprise Software, Data Engineering, Analytics & AI",
  description:
    "Ontologix Software Pvt Ltd builds trusted software, data platforms, analytics, AI-ready data, cloud solutions, automation workflows, and enterprise consulting programs.",
  path: "/"
});

export default function HomePage() {
  const featuredStudies = caseStudies.filter((study) => study.featured).concat(caseStudies.slice(1, 3));

  return (
    <>
      <section className="container-enterprise grid gap-12 pb-16 pt-16 md:pb-24 md:pt-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <Reveal>
          <Badge variant="cyan">Enterprise AI · Data Intelligence · Innovation · Trust</Badge>
          <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.02] text-foreground md:text-7xl">
            Trusted digital platforms for AI-ready enterprises.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
            Ontologix Software Pvt Ltd builds secure software, governed data platforms,
            executive analytics, intelligent automation, and cloud foundations for modern
            organizations.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact/">Start a conversation</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/services/">Explore services</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-border bg-card p-3 shadow-[var(--shadow-enterprise)]">
            <DataConstellation />
          </div>
        </Reveal>
      </section>

      <section className="container-enterprise pb-12">
        <div className="grid gap-3 border-y border-border py-6 md:grid-cols-[auto_1fr] md:items-center">
          <p className="text-sm font-semibold text-muted-foreground">Trusted by teams building</p>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {home.trustedBy.map((item) => (
              <span
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <StatsSection stats={home.stats} />

      <section className="container-enterprise section-spacing">
        <Reveal>
          <SectionHeading
            eyebrow="Services overview"
            title="A full-stack partner for software, data, cloud, automation, and AI."
            description="Our service model connects advisory, architecture, engineering, analytics, and operations so your digital investments reinforce one another."
          />
        </Reveal>
        <Reveal delay={0.08} className="mt-12">
          <ServiceCardGrid services={services} />
        </Reveal>
      </section>

      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Industry expertise"
                title="Built around the realities of complex operating environments."
                description="Ontologix translates enterprise technology into measurable outcomes for sectors where data trust, workflow reliability, and decision speed matter."
              />
              <Button asChild variant="secondary" className="mt-8">
                <Link href="/industries/">Explore industries</Link>
              </Button>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {solutions.slice(0, 6).map((solution, index) => (
                <Reveal delay={index * 0.04} key={solution.slug}>
                  <Card className="h-full rounded-lg p-6 shadow-none">
                    <p className="section-kicker">{solution.sector}</p>
                    <h3 className="mt-4 text-xl font-semibold">{solution.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {solution.description}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-enterprise section-spacing">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Technology stack"
              title="Modern platforms, chosen with enterprise discipline."
              description="We select technologies for maintainability, security, performance, and fit with the client operating model."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {technologies.slice(0, 9).map((category) => (
                <div
                  className="rounded-lg border border-border bg-card p-4 text-sm font-semibold text-foreground"
                  key={category.category}
                >
                  {category.category}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <Image
              src="/images/enterprise-platform.svg"
              width={1200}
              height={760}
              alt="Enterprise platform architecture with systems, trusted data core, AI, and analytics"
              className="rounded-lg border border-border bg-card shadow-[var(--shadow-soft)]"
              priority
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <SectionHeading
            eyebrow="Why Ontologix"
            title="Calm technology execution for high-trust organizations."
            description="The best enterprise systems feel inevitable: clear, secure, maintainable, and useful. That is the standard we design toward."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {home.why.map((item, index) => (
              <Reveal delay={index * 0.04} key={item.title}>
                <Card className="h-full rounded-lg p-6 shadow-none">
                  <span className="text-sm font-bold text-primary">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-enterprise section-spacing">
        <SectionHeading
          eyebrow="Process"
          title="A measured path from ambition to operating capability."
          description="We make transformation manageable by turning complexity into a clear delivery system."
        />
        <div className="mt-12">
          <ProcessTimeline steps={home.process} />
        </div>
      </section>

      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <SectionHeading
            eyebrow="Case studies"
            title="Representative programs with measurable business impact."
            description="Explore how disciplined architecture, data trust, and workflow design change the way teams operate."
          />
          <div className="mt-12">
            <CaseStudyGrid studies={featuredStudies} />
          </div>
        </div>
      </section>

      <section className="container-enterprise section-spacing">
        <SectionHeading
          eyebrow="Testimonials"
          title="A partner for leaders who need technology to hold up under scrutiny."
        />
        <div className="mt-12">
          <TestimonialsSection testimonials={testimonials} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
