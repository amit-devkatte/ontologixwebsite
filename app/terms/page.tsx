import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms",
  description: "Website terms for Ontologix Software Pvt Ltd.",
  path: "/terms/"
});

export default function TermsPage() {
  const sections = [
    {
      title: "Use of this website",
      text: "This website provides general information about Ontologix Software Pvt Ltd services, capabilities, insights, and career opportunities. Content is provided for informational purposes and does not create a client engagement by itself."
    },
    {
      title: "Intellectual property",
      text: "Website content, design, graphics, and brand assets are owned by or licensed to Ontologix unless otherwise noted. You may not copy, distribute, or reuse them without permission."
    },
    {
      title: "No professional warranty",
      text: "Technology recommendations require context. Information on this website should not be treated as a final architecture, legal, security, or compliance recommendation."
    },
    {
      title: "External links",
      text: "This website may link to third-party services such as maps, social platforms, or analytics providers. Ontologix is not responsible for third-party content or practices."
    },
    {
      title: "Contact",
      text: `For questions about these terms, contact ${siteConfig.email}.`
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Website Terms"
        description="The terms that apply when using the Ontologix Software Pvt Ltd website."
      />
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
    </>
  );
}
