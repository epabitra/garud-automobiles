import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { business } from "../../data/business";
import { vehicleCategories } from "../../data/vehicles";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink text-text-inverse">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl" />
      <Container className="relative grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d="M13 2 5 13h4l-1.5 9L18 11h-4l1.5-9Z" fill="var(--color-accent-400)" />
              </svg>
            </span>
            <span>
              <span className="block font-[var(--font-display)] text-base font-bold">
                {business.name}
              </span>
              <span className="block text-xs font-medium text-accent-400">
                {business.brandLine}
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {business.dealerLine} in Bijipur, Berhampur — electric passenger, cargo and
            commercial vehicles.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/90">Vehicles</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            {vehicleCategories.map((v) => (
              <li key={v.id}>
                <Link to="/vehicles" className="transition-colors hover:text-accent-400">
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/90">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            {[
              { to: "/about", label: "About Us" },
              { to: "/pricing", label: "Pricing" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/faq", label: "FAQ" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/90">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            {business.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="transition-colors hover:text-accent-400">
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a
                href={business.mapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="leading-relaxed transition-colors hover:text-accent-400"
              >
                {business.address.full}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>{business.dealerLine}</p>
        </Container>
      </div>
    </footer>
  );
}
