import { useSeo } from "../hooks/useSeo";
import { PageHero } from "../components/sections/PageHero";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { CtaBanner } from "../components/sections/CtaBanner";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { SmartImage } from "../components/ui/SmartImage";
import { business } from "../data/business";

export function About() {
  useSeo({
    title: "About Us",
    description:
      "About Garud Automobiles — the authorised Skyy Rider Electric dealer on Bijipur Main Road, Berhampur, Odisha.",
  });

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A local showroom for electric mobility in Berhampur"
        description="Real vehicles, a real Bijipur address, and a straightforward showroom experience."
        image="/images/storefront/storefront-family-entrance.webp"
      />

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Bringing electric mobility to Bijipur"
              description={`${business.name} is the authorised ${business.brandLine} dealer, located at Shop No. 3, Bijipur Main Road, Sundar Nagar, near the Vegetable Market in Berhampur. Our showroom opened its doors on ${business.grandOpening.date}, bringing electric passenger, cargo and commercial vehicles to customers across Berhampur and the wider Ganjam district.`}
            />
            <Reveal delay={0.1} className="mt-6 space-y-3 text-sm leading-relaxed text-text-muted">
              <p>
                Alongside vehicle sales, we fabricate custom cargo and vending cart bodies at
                our own workshop — built to order for food vendors, retailers and delivery
                businesses looking for an electric alternative.
              </p>
              <p>
                We've hosted many customer delivery days at our showroom since opening — each
                new vehicle handed over in person, with the same straightforward approach every
                time.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-lift">
              <SmartImage
                src="/images/gallery/delivery-ceremony-formal.webp"
                alt="A vehicle handover ceremony inside Garud Automobiles showroom"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-muted py-20 sm:py-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-lift">
              <SmartImage
                src="/images/milestones/grand-opening-signboard.webp"
                alt="Garud Automobiles Grand Opening signboard, 15 January 2025"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Milestone"
              title="Grand Opening — 15 January 2025"
              description="Our Bijipur showroom officially opened on 15 January 2025, marking the start of Garud Automobiles as an authorised Skyy Rider Electric dealer in Berhampur."
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our Workshop"
              title="Custom cart builds, made locally"
              description="Beyond stock vehicles, our workshop fabricates fold-out counter carts and cargo bodies to order — for food vendors, retailers and delivery businesses across Berhampur."
            />
          </div>
          <Reveal delay={0.1}>
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-lift">
              <SmartImage
                src="/images/interior/interior-workshop-fabrication.webp"
                alt="A custom cargo cart under fabrication at our Berhampur workshop"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
