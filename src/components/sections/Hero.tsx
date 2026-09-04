import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "../ui/Container";
import { CtaButton } from "../ui/CtaButton";
import { RatingBadge } from "../ui/RatingBadge";
import { SmartImage } from "../ui/SmartImage";
import { GradientOrbs } from "../ui/GradientOrbs";
import { FloatingImageChip } from "../ui/FloatingImageChip";
import { business } from "../../data/business";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink">
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-[1.15]">
        <SmartImage
          src="/images/vehicles/passenger/passenger-teal-02-grass.webp"
          alt="Skyy Rider Electric passenger e-rickshaw, made in Odisha"
          eager
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/50 to-transparent" />
      </motion.div>

      <GradientOrbs variant="dark" />
      <div className="grain-overlay absolute inset-0" />

      {/* decorative grid pattern, upper right */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 bg-dot-grid-light [mask-image:radial-gradient(ellipse_60%_60%_at_70%_20%,black,transparent)] lg:block" />

      <motion.div style={{ opacity: fade }} className="hidden lg:block">
        <FloatingImageChip
          src="/images/gallery/delivery-ceremony-formal.webp"
          alt="A vehicle handover ceremony at Garud Automobiles"
          className="right-[14%] top-[20%]"
          size="md"
          delay="0s"
        />
        <FloatingImageChip
          src="/images/interior/interior-showroom-staff-01.webp"
          alt="Inside the Garud Automobiles showroom"
          className="right-[26%] top-[52%]"
          size="sm"
          rounded="full"
          delay="-2.2s"
          slow
        />
        <FloatingImageChip
          src="/images/storefront/storefront-grand-opening-full.webp"
          alt="Garud Automobiles showroom entrance"
          className="right-[5%] top-[46%]"
          size="lg"
          delay="-4.5s"
        />
      </motion.div>

      <Container className="relative flex min-h-[86vh] flex-col justify-end gap-10 pb-24 pt-36 sm:min-h-[92vh] sm:pb-28">
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-400 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
            </span>
            {business.dealerLine}
          </span>
          <h1 className="mt-5 text-balance font-[var(--font-display)] text-5xl font-extrabold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
            Electric Mobility for a{" "}
            <span className="text-gradient">Smarter Journey</span>
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
