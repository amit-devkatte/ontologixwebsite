import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Ontologix Software Pvt Ltd website visitors and inquiries.",
  path: "/privacy-policy/"
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How Ontologix Software Pvt Ltd handles information submitted through this website."
      />
      <PolicyContent
        sections={[
          {
            title: "Information we collect",
            text: "When you contact Ontologix, we may receive your name, work email, company, role, inquiry details, and any information you choose to include in your message."
          },
          {
            title: "How information is used",
            text: "We use submitted information to respond to inquiries, evaluate fit for services or careers, improve communications, and maintain appropriate business records."
          },
          {
            title: "Analytics and cookies",
            text: "The website may use essential cookies and privacy-conscious analytics to understand site performance and content effectiveness. You can control cookies through your browser settings."
          },
          {
            title: "Sharing",
            text: "We do not sell personal information. Information may be shared with trusted service providers only when required for business operations, security, legal compliance, or communication support."
          },
          {
            title: "Retention and security",
            text: "We retain information only as long as reasonably necessary for business, legal, or operational purposes and use appropriate safeguards to protect it."
          },
          {
            title: "Contact",
            text: `For privacy questions, contact ${siteConfig.email}.`
          }
        ]}
      />
    </>
  );
}

function PolicyContent({ sections }: { sections: { title: string; text: string }[] }) {
  return (
    <section className="container-enterprise max-w-4xl pb-20">
      <Card className="rounded-lg p-8 shadow-none">
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-base leading-8 text-muted-foreground">{section.text}</p>
            </section>
          ))}
        </div>
      </Card>
    </section>
  );
}
