import { useSeo } from "../hooks/useSeo";
import { PageHero } from "../components/sections/PageHero";
import { CtaBanner } from "../components/sections/CtaBanner";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { SmartImage } from "../components/ui/SmartImage";
import { CtaButton } from "../components/ui/CtaButton";
import { pricedProducts } from "../data/pricing";
import { business } from "../data/business";

export function Pricing() {
  useSeo({
    title: "Price List",
    description:
      "Approximate reference prices for Skyy Rider Electric vehicles available from Garud Automobiles in Berhampur — passenger, cargo, commercial and custom builds.",
  });

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Products & approximate pricing"
        description="A guide to what Skyy Rider Electric vehicles typically cost — confirm the exact, current price with our showroom before you buy."
        image="/images/vehicles/brand-catalog/bison-loader-brand.jpg"
      />

      <section className="pt-14">
        <Container>
          <Reveal className="flex items-start gap-4 rounded-2xl border border-energy-500/30 bg-energy-400/10 p-5 sm:p-6">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-energy-500 text-ink">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-sm leading-relaxed text-ink/80">
              <strong className="font-semibold text-ink">
                Prices below are approximate reference figures, not final showroom prices.
              </strong>{" "}
              They're collected from publicly listed Skyy Rider Electric pricing elsewhere in
              India, to give you a general idea before you visit. Exact pricing depends on the
              configuration, taxes and current offers — please{" "}
              <a href="/contact" className="font-semibold underline underline-offset-2">
                contact us
              </a>{" "}
              or call{" "}
              <a href={business.phones[0].href} className="font-semibold underline underline-offset-2">
                {business.phones[0].display}
              </a>{" "}
              for a confirmed quote.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pricedProducts.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-soft">
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-sunk">
                  <SmartImage src={p.image} alt={p.name} className="h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    {p.tag}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-energy-500 px-3 py-1 text-[11px] font-bold text-ink">
                    Approx.
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-[var(--font-display)] text-lg font-bold text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{p.description}</p>

                  <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-4">
                    {p.specs.map((s) => (
                      <div key={s.label}>
                        <dt className="text-[11px] uppercase tracking-wide text-text-muted">
                          {s.label}
                        </dt>
                        <dd className="text-sm font-medium text-ink">{s.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-5 flex flex-1 items-end justify-between gap-3 border-t border-line pt-5">
                    <div>
                      <p className="font-[var(--font-display)] text-xl font-bold text-ink">
                        {p.approxPriceLabel}
                      </p>
                      <p className="text-xs text-text-muted">{p.approxPriceNote}</p>
                    </div>
                    <CtaButton href="/contact" variant="dark">
                      Enquire
                    </CtaButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>

        <Container className="mt-6">
          <Reveal>
            <p className="text-xs text-text-muted">
              *Approximate figures compiled from publicly available Skyy Rider Electric
              dealer listings across India as of September 2026. Actual on-road price at
              Garud Automobiles may differ and will be confirmed at the showroom.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
