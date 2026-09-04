import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  onClick?: () => void;
};

export function SmartImage({ src, alt, className = "", eager = false, onClick }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-surface-sunk text-text-muted ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 16l5-5 4 4 5-6 4 5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8" cy="9" r="1.5" />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      onClick={onClick}
      className={className}
    />
  );
}
