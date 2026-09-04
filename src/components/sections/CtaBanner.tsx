import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CtaButton } from "../ui/CtaButton";
import { GradientOrbs } from "../ui/GradientOrbs";
import { business } from "../../data/business";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <GradientOrbs variant="dark" />
      <div className="grain-overlay absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid-light opacity-40 [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,black,transparent)]" />

      <Container className="relative">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-400 backdrop-blur-sm">
            Let's Talk
          </span>
          <h2 className="text-balance font-[var(--font-display)] text-3xl font-extrabold text-white sm:text-5xl">
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
