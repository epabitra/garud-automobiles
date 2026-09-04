import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { business } from "../../data/business";

const points = [
  {
    title: "Authorised Skyy Rider Electric Dealer",
    description:
      "Our showroom carries official Skyy Rider Electric dealer signage, so you're buying from a recognised source in Berhampur.",
  },
  {
    title: "Convenient Bijipur Location",
    description:
      "Easy to find on Bijipur Main Road, Sundar Nagar, near the Vegetable Market — close to central Berhampur.",
  },
  {
    title: "Custom Cart Fabrication",
    description:
      "Beyond standard vehicles, we build custom vending and cargo cart bodies to order at our own workshop.",
  },
  {
    title: "Direct Enquiry Support",
    description:
      "Speak directly with our team by phone or in person — no call centres, straightforward answers.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Garud Automobiles"
          title="A local showroom you can walk into"
          description={`Real electric vehicles, a real Berhampur showroom, and ${business.rating.value}★ from ${business.rating.count} Google reviews.`}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex h-full gap-4 rounded-2xl border border-line bg-surface p-6 shadow-soft">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-[var(--font-display)] text-base font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                    {p.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
