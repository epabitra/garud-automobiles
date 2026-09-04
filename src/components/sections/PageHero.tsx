import { Container } from "../ui/Container";
import { SmartImage } from "../ui/SmartImage";
import { GradientOrbs } from "../ui/GradientOrbs";
import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 scale-110">
        <SmartImage src={image} alt="" eager className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/50" />
      </div>
      <GradientOrbs variant="dark" />
      <div className="grain-overlay absolute inset-0" />
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-2/5 bg-dot-grid-light [mask-image:radial-gradient(ellipse_60%_80%_at_80%_30%,black,transparent)] lg:block" />

      <Container className="relative py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-400 backdrop-blur-sm">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-balance font-[var(--font-display)] text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
