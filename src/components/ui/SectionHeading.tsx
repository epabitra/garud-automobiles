import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-[var(--font-display)] text-3xl font-bold text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-text-muted sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
