type Props = {
  variant?: "dark" | "light";
  className?: string;
};

export function GradientOrbs({ variant = "light", className = "" }: Props) {
  const a = variant === "dark" ? "bg-accent-400/25" : "bg-accent-400/30";
  const b = variant === "dark" ? "bg-violet-400/15" : "bg-lime-400/25";
  const c = variant === "dark" ? "bg-energy-400/15" : "bg-energy-400/20";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className={`absolute -left-24 -top-24 h-72 w-72 rounded-full ${a} blur-3xl animate-blob`}
      />
      <div
        className={`absolute -right-16 top-1/3 h-80 w-80 rounded-full ${b} blur-3xl animate-blob`}
        style={{ animationDelay: "-5s" }}
      />
      <div
        className={`absolute bottom-0 left-1/3 h-64 w-64 rounded-full ${c} blur-3xl animate-blob`}
        style={{ animationDelay: "-10s" }}
      />
    </div>
  );
}
