import { CaseStudyGrid } from "@/components/sections/case-study-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/content";

export const metadata = createMetadata({
  title: "Case Studies",
  description:
    "Explore Ontologix case studies across AI-ready data platforms, manufacturing operations, retail customer analytics, and workflow automation.",
  path: "/case-studies/"
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Technology programs designed around measurable operating impact."
        description="Representative examples of how Ontologix structures complex software, data, automation, and analytics work into dependable business outcomes."
      />
      <section className="container-enterprise pb-20">
        <CaseStudyGrid studies={caseStudies} />
      </section>
      <section className="bg-card">
        <div className="container-enterprise section-spacing">
          <SectionHeading
            eyebrow="How to read these"
            title="Each case study follows the same executive lens."
            description="Problem, challenge, solution architecture, technologies, and business impact are separated so leaders can quickly evaluate relevance."
          />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
