import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { business } from "../../data/business";

const points = [
  {
    title: "Authorised Skyy Rider Electric Dealer",
    description:
      "Our showroom carries official Skyy Rider Electric dealer signage, so you're buying from a recognised source in Berhampur.",
    icon: <path d="M9 12.75 11.25 15 15 9.75M12 3l7 3v5c0 4.5-3 8.25-7 9.5-4-1.25-7-5-7-9.5V6l7-3Z" />,
  },
  {
    title: "Convenient Bijipur Location",
    description:
      "Easy to find on Bijipur Main Road, Sundar Nagar, near the Vegetable Market — close to central Berhampur.",
    icon: <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />,
  },
  {
    title: "Custom Cart Fabrication",
    description:
      "Beyond standard vehicles, we build custom vending and cargo cart bodies to order at our own workshop.",
    icon: <path d="M14.7 3.3a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4L9 21H4v-5L14.7 3.3Z" />,
  },
  {
    title: "Direct Enquiry Support",
    description:
      "Speak directly with our team by phone or in person — no call centres, straightforward answers.",
    icon: <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.5.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8Z" />,
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-surface-muted py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-energy-400/10 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Garud Automobiles"
          title="A local showroom you can walk into"
          description={`Real electric vehicles, a real Berhampur showroom, and ${business.rating.value}★ from ${business.rating.count} Google reviews.`}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group flex h-full gap-4 rounded-2xl border border-line bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-glow">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
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
