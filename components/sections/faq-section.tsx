import type { Faq } from "@/types/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="rounded-lg border border-border bg-card px-6">
      {faqs.map((faq, index) => (
        <AccordionItem value={`faq-${index}`} key={faq.question}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
