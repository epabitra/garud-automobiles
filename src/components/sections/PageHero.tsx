import { Container } from "../ui/Container";
import { SmartImage } from "../ui/SmartImage";
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
      <div className="absolute inset-0">
        <SmartImage src={image} alt="" eager className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
      </div>
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
          <h1 className="mt-5 text-balance font-[var(--font-display)] text-4xl font-bold leading-tight text-white sm:text-5xl">
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
