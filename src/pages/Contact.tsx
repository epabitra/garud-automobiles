import type { ReactNode } from "react";
import { useSeo } from "../hooks/useSeo";
import { PageHero } from "../components/sections/PageHero";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { CtaButton } from "../components/ui/CtaButton";
import { ContactForm } from "../components/forms/ContactForm";
import { business } from "../data/business";

export function Contact() {
  useSeo({
    title: "Contact Us",
    description:
      "Contact Garud Automobiles — call, get directions, or send an enquiry to our Bijipur Main Road showroom in Berhampur.",
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with Garud Automobiles"
        description="Call us, visit the showroom, or send an enquiry below."
        image="/images/storefront/storefront-day-authorized-dealer.webp"
      />

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal className="space-y-6">
              <ContactCard
                icon={
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                }
                title="Showroom Address"
              >
                <p className="text-sm leading-relaxed text-text-muted">{business.address.full}</p>
                <CtaButton
                  href={business.mapsSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  className="mt-4"
                >
                  Get Directions
                </CtaButton>
              </ContactCard>

              <ContactCard
                icon={
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.5.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8Z" />
                }
                title="Phone"
              >
                <div className="space-y-1.5">
                  {business.phones.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="block text-sm font-medium text-ink hover:text-accent-600"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
                <CtaButton href={business.phones[0].href} variant="outline" className="mt-4">
                  Call Now
                </CtaButton>
              </ContactCard>

              <div className="overflow-hidden rounded-2xl border border-line shadow-soft">
                <iframe
                  title={`${business.name} location map`}
                  src={business.mapsEmbedUrl}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1} className="rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-8">
              <h2 className="font-[var(--font-display)] text-2xl font-bold text-ink">
                Send an Enquiry
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                Tell us what you're looking for and we'll get back to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            {icon}
          </svg>
        </span>
        <h3 className="font-[var(--font-display)] text-base font-bold text-ink">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
