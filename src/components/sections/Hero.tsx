import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { CtaButton } from "../ui/CtaButton";
import { RatingBadge } from "../ui/RatingBadge";
import { SmartImage } from "../ui/SmartImage";
import { business } from "../../data/business";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <SmartImage
          src="/images/vehicles/passenger/passenger-teal-02-grass.webp"
          alt="Skyy Rider Electric passenger e-rickshaw, made in Odisha"
          eager
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      <Container className="relative flex min-h-[86vh] flex-col justify-end gap-10 pb-24 pt-36 sm:min-h-[92vh] sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-400 backdrop-blur-sm">
            {business.dealerLine}
          </span>
          <h1 className="mt-5 text-balance font-[var(--font-display)] text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            {business.tagline}
          </h1>
          <p className="mt-5 max-w-lg text-balance text-base leading-relaxed text-white/75 sm:text-lg">
            Explore electric passenger, cargo and commercial vehicles from{" "}
            {business.brandLine}, at our showroom in Bijipur, Berhampur.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CtaButton href="/vehicles" variant="primary">
              View Vehicles
            </CtaButton>
            <CtaButton
              href={business.phones[0].href}
              variant="outline"
              className="border-white/25 text-white hover:border-white hover:bg-white/10"
            >
              Call Now
            </CtaButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <RatingBadge className="bg-white/95" />
        </motion.div>
      </Container>
    </section>
  );
}
