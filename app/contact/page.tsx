import {  Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Ontologix Software Pvt Ltd for software development, data engineering, analytics, AI, automation, cloud, and consulting programs.",
  path: "/contact/"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with the business problem. We will help shape the technology path."
        description="Tell us about the decision, workflow, platform, data challenge, or AI opportunity you want to improve."
      />
      <section className="container-enterprise grid gap-8 pb-20 lg:grid-cols-[1fr_0.78fr]">
        <Card className="rounded-lg p-8 shadow-none">
          <SectionHeading
            eyebrow="Inquiry"
            title="Send a focused note to the Ontologix team."
            description="The form opens your email client with a structured message, keeping the static site fast and privacy-conscious."
          />
          <div className="mt-10">
            <ContactForm />
          </div>
        </Card>
        <div className="grid gap-5">
          <ContactCard
            icon={<Mail className="size-5" aria-hidden="true" />}
            title="Email"
            text={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
          <ContactCard
            icon={<Phone className="size-5" aria-hidden="true" />}
            title="Phone"
            text={siteConfig.phoneLabel}
          />
          <ContactCard
            icon={<MapPin className="size-5" aria-hidden="true" />}
            title="Office"
            text={siteConfig.location}
          />
          
        </div>
      </section>
      <section className="container-enterprise pb-20">
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <iframe
            title="Google Map for Ontologix Software Pvt Ltd India"
            src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`}
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  text,
  href
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <Card className="rounded-lg p-6 shadow-none transition-colors hover:border-primary/35">
      <div className="flex gap-4">
        <div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">{icon}</div>
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
        </div>
      </div>
    </Card>
  );

  if (!href) return content;

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  );
}
