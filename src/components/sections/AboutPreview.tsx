import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CtaButton } from "../ui/CtaButton";
import { SmartImage } from "../ui/SmartImage";
import { business } from "../../data/business";

export function AboutPreview() {
  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-lift">
            <SmartImage
              src="/images/storefront/storefront-grand-opening-full.webp"
              alt="Garud Automobiles showroom entrance in Bijipur, Berhampur"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 w-40 rotate-2 overflow-hidden rounded-2xl border-4 border-surface shadow-lift sm:-right-8 sm:w-52">
            <SmartImage
              src="/images/interior/interior-workshop-fabrication.webp"
              alt="Custom cart fabrication at our Berhampur workshop"
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About Us"
            title="Your local automotive & electric mobility showroom"
            description={`Located on Bijipur Main Road in Sundar Nagar, ${business.name} serves customers looking for electric vehicles in Berhampur and the surrounding Ganjam area, as the local ${business.brandLine} dealer.`}
          />
          <Reveal delay={0.15} className="mt-6">
            <CtaButton href="/about" variant="dark">
              More About Us
            </CtaButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
