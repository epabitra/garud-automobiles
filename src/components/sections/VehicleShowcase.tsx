import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { SmartImage } from "../ui/SmartImage";
import { Reveal } from "../ui/Reveal";
import { CtaButton } from "../ui/CtaButton";
import { TiltCard } from "../ui/TiltCard";
import { vehicleCategories } from "../../data/vehicles";

export function VehicleShowcase() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-dot-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <Container className="relative">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Offer"
            title="Electric vehicles for every need"
            description="From daily passenger transport to commercial cargo and custom vending carts — explore the Skyy Rider Electric range at Garud Automobiles."
          />
          <Reveal delay={0.1}>
            <CtaButton href="/vehicles" variant="outline" className="hidden sm:inline-flex">
              View All Vehicles
            </CtaButton>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicleCategories.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.08} className="[perspective:800px]">
              <TiltCard className="h-full">
                <Link
                  to="/vehicles"
                  className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition-shadow duration-300 hover:shadow-glow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-sunk">
                    <SmartImage
                      src={v.images[0]}
                      alt={v.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                      {v.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-[var(--font-display)] text-base font-bold text-ink">
                      {v.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-muted">
                      {v.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                      Explore
                      <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="currentColor">
                        <path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 sm:hidden">
          <CtaButton href="/vehicles" variant="outline" className="w-full">
            View All Vehicles
          </CtaButton>
        </Reveal>
      </Container>
    </section>
  );
}
