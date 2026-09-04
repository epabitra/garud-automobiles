import { business } from "../../data/business";

export function RatingBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 shadow-soft ${className}`}
    >
      <span className="flex items-center gap-0.5 text-energy-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L10 1.5z" />
          </svg>
        ))}
      </span>
      <span className="text-sm font-semibold text-ink">{business.rating.value}</span>
      <span className="text-sm text-text-muted">
        · {business.rating.count} {business.rating.source} Reviews
      </span>
    </div>
  );
}
