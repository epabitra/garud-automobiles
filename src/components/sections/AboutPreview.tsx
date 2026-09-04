import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CtaButton } from "../ui/CtaButton";
import { SmartImage } from "../ui/SmartImage";
import { business } from "../../data/business";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-2xl border border-accent-200 bg-accent-50/60 animate-float-slow sm:h-28 sm:w-28" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-lift">
            <SmartImage
              src="/images/storefront/storefront-grand-opening-full.webp"
              alt="Garud Automobiles showroom entrance in Bijipur, Berhampur"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 w-40 rotate-2 overflow-hidden rounded-2xl border-4 border-surface shadow-lift transition-transform duration-300 hover:rotate-0 sm:-right-8 sm:w-52">
            <SmartImage
              src="/images/interior/interior-workshop-fabrication.webp"
              alt="Custom cart fabrication at our Berhampur workshop"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -left-4 bottom-10 hidden -rotate-3 overflow-hidden rounded-2xl border-4 border-surface shadow-lift transition-transform duration-300 hover:rotate-0 sm:block sm:w-28">
            <SmartImage
              src="/images/gallery/delivery-garlanded-vehicle-01.webp"
              alt="A newly delivered Garud Automobiles vehicle"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <span className="absolute -top-5 right-10 hidden items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-white shadow-lift sm:flex">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-accent-400" fill="currentColor">
              <path d="M13 2 5 13h4l-1.5 9L18 11h-4l1.5-9Z" />
            </svg>
            100% Electric
          </span>
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
