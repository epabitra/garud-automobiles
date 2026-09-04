import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { business } from "../../data/business";
import { vehicleCategories } from "../../data/vehicles";

const stats = [
  {
    label: "Dealer Status",
    value: "Authorised",
    sub: `${business.brandLine} dealer`,
    icon: (
      <path d="M9 12.75 11.25 15 15 9.75M12 3l7 3v5c0 4.5-3 8.25-7 9.5-4-1.25-7-5-7-9.5V6l7-3Z" />
    ),
  },
  {
    label: "Showroom",
    value: "Jan 2025",
    sub: business.grandOpening.label,
    icon: <path d="M8 2v3M16 2v3M3.5 9h17M5 5h14a1.5 1.5 0 0 1 1.5 1.5V19A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V6.5A1.5 1.5 0 0 1 5 5Z" />,
  },
  {
    label: "Vehicle Range",
    value: `${vehicleCategories.length} Categories`,
    sub: "Passenger, cargo & custom builds",
    icon: <path d="M13 2 5 13h4l-1.5 9L18 11h-4l1.5-9Z" />,
  },
  {
    label: "Location",
    value: "Bijipur",
    sub: "Berhampur, Odisha 760001",
    icon: <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />,
  },
];

export function TrustStrip() {
  return (
    <div className="relative z-10 -mt-16 sm:-mt-20">
      <Container>
        <Reveal
          y={30}
          className="relative grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-lift sm:grid-cols-4"
        >
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent-400 via-lime-400 to-energy-400" />
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden bg-surface px-5 py-6 transition-colors hover:bg-accent-50/60 sm:px-6 sm:py-7"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </span>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                {s.label}
              </p>
              <p className="mt-1 font-[var(--font-display)] text-xl font-bold text-ink sm:text-2xl">
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
