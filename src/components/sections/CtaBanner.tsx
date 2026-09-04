import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CtaButton } from "../ui/CtaButton";
import { business } from "../../data/business";

export function CtaBanner() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-balance font-[var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            Looking for an electric vehicle?
          </h2>
          <p className="max-w-xl text-balance text-base text-white/70 sm:text-lg">
            Talk to {business.name} today — visit our Bijipur showroom or reach out directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CtaButton href={business.phones[0].href} variant="primary">
              Call Now
            </CtaButton>
            <CtaButton
              href={business.mapsSearchUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              className="border-white/25 text-white hover:border-white hover:bg-white/10"
            >
              Get Directions
            </CtaButton>
            <CtaButton
              href="/contact"
              variant="outline"
              className="border-white/25 text-white hover:border-white hover:bg-white/10"
            >
              Enquire Now
            </CtaButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
