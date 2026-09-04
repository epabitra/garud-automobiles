import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { business } from "../../data/business";
import { vehicleCategories } from "../../data/vehicles";

const stats = [
  {
    label: "Dealer Status",
    value: "Authorised",
    sub: `${business.brandLine} dealer`,
  },
  {
    label: "Showroom",
    value: "Jan 2025",
    sub: business.grandOpening.label,
  },
  {
    label: "Vehicle Range",
    value: `${vehicleCategories.length} Categories`,
    sub: "Passenger, cargo & custom builds",
  },
  {
    label: "Location",
    value: "Bijipur",
    sub: "Berhampur, Odisha 760001",
  },
];

export function TrustStrip() {
  return (
    <div className="relative z-10 -mt-14 sm:-mt-16">
      <Container>
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-lift sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-5 py-6 sm:px-6 sm:py-7">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                {s.label}
              </p>
              <p className="mt-1.5 font-[var(--font-display)] text-xl font-bold text-ink sm:text-2xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-text-muted">{s.sub}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </div>
  );
}
