import { useSeo } from "../hooks/useSeo";
import { PageHero } from "../components/sections/PageHero";
import { CtaBanner } from "../components/sections/CtaBanner";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { FaqAccordion } from "../components/ui/FaqAccordion";
import { faqItems } from "../data/faq";

export function Faq() {
  useSeo({
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about Garud Automobiles — location, dealership status, vehicle range and more.",
  });

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Straightforward answers about our showroom, vehicles and how to reach us."
        image="/images/storefront/storefront-full-daytime-customers.webp"
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <FaqAccordion items={faqItems} />
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
