import type { ReactElement } from "react";
import { useSeo } from "../hooks/useSeo";
import { PageHero } from "../components/sections/PageHero";
import { CtaBanner } from "../components/sections/CtaBanner";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { services } from "../data/services";

const icons: Record<string, ReactElement> = {
  sales: (
    <path d="M4 17V7l8-4 8 4v10l-8 4-8-4Z M12 21V11 M4 7l8 4 8-4" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "custom-builds": (
    <path d="M14.7 3.3a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4L9 21H4v-5L14.7 3.3Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  consultation: (
    <path d="M8 12h8M8 16h5M21 12c0 4.4-4 8-9 8-1.1 0-2.2-.2-3.2-.5L3 21l1.6-4.2C3.6 15.4 3 13.8 3 12c0-4.4 4-8 9-8s9 3.6 9 8Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "pm-edrive": (
    <path d="M13 2 5 13h4l-1.5 9L18 11h-4l1.5-9Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export function Services() {
  useSeo({
    title: "Services",
    description:
      "Electric vehicle sales, custom cargo & vending cart builds, and showroom consultation from Garud Automobiles in Berhampur.",
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we do at Garud Automobiles"
        description="From vehicle sales to custom cart fabrication — here's how we can help."
        image="/images/interior/interior-workshop-fabrication.webp"
      />

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <div className="flex h-full gap-5 rounded-2xl border border-line bg-surface p-7 shadow-soft transition-shadow hover:shadow-lift">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    {icons[s.id]}
                  </svg>
                </span>
                <div>
                  <h3 className="font-[var(--font-display)] text-lg font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {s.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-surface-muted py-16">
        <Container>
          <Reveal className="rounded-2xl border border-line bg-surface p-8 text-center sm:p-10">
            <p className="text-sm leading-relaxed text-text-muted">
              Looking for something specific — test drives, financing options or after-sales
              support? Availability can vary by vehicle, so please{" "}
              <a href="/contact" className="font-semibold text-accent-600 underline underline-offset-2">
                get in touch
              </a>{" "}
              and we'll let you know what we can offer for your requirement.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
