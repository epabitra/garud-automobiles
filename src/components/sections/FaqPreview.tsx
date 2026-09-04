import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CtaButton } from "../ui/CtaButton";
import { FaqAccordion } from "../ui/FaqAccordion";
import { faqItems } from "../../data/faq";

export function FaqPreview() {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Frequently asked questions"
          className="mx-auto"
        />
        <Reveal delay={0.1} className="mt-10">
          <FaqAccordion items={faqItems.slice(0, 4)} />
        </Reveal>
        <Reveal delay={0.15} className="mt-8 text-center">
          <CtaButton href="/faq" variant="outline">
            View All Questions
          </CtaButton>
        </Reveal>
      </Container>
    </section>
  );
}
