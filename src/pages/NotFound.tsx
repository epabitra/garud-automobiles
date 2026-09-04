import { useSeo } from "../hooks/useSeo";
import { Container } from "../components/ui/Container";
import { CtaButton } from "../components/ui/CtaButton";

export function NotFound() {
  useSeo({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist.",
  });

  return (
    <section className="flex min-h-[70vh] items-center justify-center py-24">
      <Container className="max-w-lg text-center">
        <p className="font-[var(--font-display)] text-6xl font-bold text-accent-500">404</p>
        <h1 className="mt-4 font-[var(--font-display)] text-2xl font-bold text-ink">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CtaButton href="/" variant="dark">
            Back to Home
          </CtaButton>
          <CtaButton href="/contact" variant="outline">
            Contact Us
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
