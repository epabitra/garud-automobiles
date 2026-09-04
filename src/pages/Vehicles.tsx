import { useSeo } from "../hooks/useSeo";
import { PageHero } from "../components/sections/PageHero";
import { CtaBanner } from "../components/sections/CtaBanner";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { SmartImage } from "../components/ui/SmartImage";
import { CtaButton } from "../components/ui/CtaButton";
import { vehicleCategories, rangeCatalogImage } from "../data/vehicles";

export function Vehicles() {
  useSeo({
    title: "Electric Vehicles & Products",
    description:
      "Explore Skyy Rider Electric passenger, cargo and commercial vehicles, plus custom cart builds, from Garud Automobiles in Berhampur.",
  });

  return (
    <>
      <PageHero
        eyebrow="Vehicles"
        title="Electric vehicles built for every job"
        description="Passenger e-rickshaws, cargo loaders, an enclosed commercial van, and custom vending carts — all electric, all from Skyy Rider Electric."
        image="/images/vehicles/passenger/passenger-teal-03-side.webp"
      />

      <nav className="sticky top-[72px] z-30 border-b border-line bg-surface/95 backdrop-blur-md">
        <Container className="flex items-center justify-between gap-3 py-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {vehicleCategories.map((v) => (
              <a
                key={v.id}
                href={`#${v.id}`}
                className="shrink-0 rounded-full border border-line px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-ink hover:text-ink"
              >
                {v.tag}
              </a>
            ))}
          </div>
          <CtaButton href="/pricing" variant="ghost" className="hidden shrink-0 sm:inline-flex">
            See Approx. Pricing
          </CtaButton>
        </Container>
      </nav>

      {vehicleCategories.map((v, index) => (
        <section
          id={v.id}
          key={v.id}
          className={`scroll-mt-32 py-20 sm:py-24 ${index % 2 === 1 ? "bg-surface-muted" : ""}`}
        >
          <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <SectionHeading eyebrow={v.tag} title={v.name} description={v.description} />
              <Reveal delay={0.1} className="mt-6 space-y-3">
                {v.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M5 10l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-text-muted">{h}</span>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={0.15} className="mt-7">
                <CtaButton href="/contact" variant="dark">
                  Enquire About This Vehicle
                </CtaButton>
              </Reveal>
            </div>

            <Reveal
              delay={0.1}
              className={`grid gap-4 ${
                v.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
              } ${index % 2 === 1 ? "lg:order-1" : ""}`}
            >
              {v.images.slice(0, 4).map((img, i) => (
                <div
                  key={img}
                  className={`group overflow-hidden rounded-2xl border border-line shadow-soft transition-all duration-300 hover:shadow-glow ${
                    v.images.length > 1 && i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
                  }`}
                >
                  <SmartImage
                    src={img}
                    alt={`${v.name} photo ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </Reveal>
          </Container>
        </section>
      ))}

      <section className="py-16">
        <Container>
          <Reveal className="overflow-hidden rounded-3xl border border-line shadow-soft">
            <SmartImage
              src={rangeCatalogImage}
              alt="The wider Skyy Rider Electric loader range catalogue"
              className="w-full object-cover"
            />
            <p className="border-t border-line bg-surface-muted px-6 py-4 text-xs text-text-muted">
              Skyy Rider Electric's broader product range — ask us which configuration suits
              your requirement.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
