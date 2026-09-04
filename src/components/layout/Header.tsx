import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../ui/Container";
import { CtaButton } from "../ui/CtaButton";
import { business } from "../../data/business";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/vehicles", label: "Vehicles" },
  { to: "/pricing", label: "Pricing" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-surface/90 backdrop-blur-md"
          : "border-b border-transparent bg-surface/60 backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M13 2 5 13h4l-1.5 9L18 11h-4l1.5-9Z"
                fill="var(--color-accent-500)"
              />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-[var(--font-display)] text-base font-bold text-ink">
              {business.name}
            </span>
            <span className="block text-[11px] font-medium tracking-wide text-accent-600">
              {business.brandLine}
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-surface-sunk text-ink"
                    : "text-text-muted hover:bg-surface-muted hover:text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href={business.phones[0].href} variant="dark">
            Call Now
          </CtaButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-surface lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium ${
                      isActive ? "bg-surface-sunk text-ink" : "text-text-muted"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <CtaButton href={business.phones[0].href} variant="primary" className="mt-3 w-full">
                Call Now
              </CtaButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
