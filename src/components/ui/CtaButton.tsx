import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-ink hover:bg-accent-400 shadow-[0_16px_36px_-14px_rgba(21,194,147,0.65)] hover:shadow-[0_20px_44px_-12px_rgba(21,194,147,0.75)] hover:-translate-y-0.5 shine-sweep",
  dark: "bg-ink text-text-inverse hover:bg-ink-soft hover:-translate-y-0.5 shine-sweep",
  outline: "border border-line text-text hover:border-ink hover:bg-surface-muted",
  ghost: "text-text hover:bg-surface-muted",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

type Props = {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
};

export function CtaButton({
  children,
  variant = "primary",
  icon,
  className = "",
  href,
  target,
  rel,
  onClick,
  type = "button",
  disabled,
  ariaLabel,
}: Props) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} aria-label={ariaLabel}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
      {icon}
    </button>
  );
}
