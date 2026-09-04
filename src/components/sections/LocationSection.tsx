import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CtaButton } from "../ui/CtaButton";
import { business } from "../../data/business";

export function LocationSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent-400/10 blur-3xl" />
      <Container className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Visit Us"
            title="Find our showroom in Bijipur"
            description="Shop No. 3, Bijipur Main Road, Sundar Nagar, near the Vegetable Market — a short walk from central Berhampur."
          />
          <Reveal delay={0.1} className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                </svg>
              </span>
              <p className="text-sm leading-relaxed text-text-muted">{business.address.full}</p>
            </div>
            {business.phones.map((p) => (
              <div key={p.href} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.5.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8Z" />
                  </svg>
                </span>
                <a href={p.href} className="text-sm font-medium text-ink hover:text-accent-600">
                  {p.display}
                </a>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <CtaButton href={business.mapsSearchUrl} target="_blank" rel="noreferrer" variant="primary">
              Get Directions
            </CtaButton>
            <CtaButton href={business.phones[0].href} variant="outline">
              Call Showroom
            </CtaButton>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <span className="absolute -top-4 left-6 z-10 flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-white shadow-lift">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse-soft" />
            Open in Google Maps
          </span>
          <div className="overflow-hidden rounded-3xl border border-line shadow-lift">
            <iframe
              title={`${business.name} location map`}
              src={business.mapsEmbedUrl}
              className="h-80 w-full lg:h-full lg:min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
