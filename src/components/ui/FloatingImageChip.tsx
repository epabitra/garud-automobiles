import { SmartImage } from "./SmartImage";

type Props = {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "2xl";
  delay?: string;
  slow?: boolean;
};

const sizes = {
  sm: "h-14 w-14 sm:h-16 sm:w-16",
  md: "h-20 w-20 sm:h-24 sm:w-24",
  lg: "h-24 w-24 sm:h-28 sm:w-28",
};

export function FloatingImageChip({
  src,
  alt,
  className = "",
  size = "md",
  rounded = "2xl",
  delay = "0s",
  slow = false,
}: Props) {
  return (
    <div
      className={`absolute ${sizes[size]} ${slow ? "animate-float-slower" : "animate-float-slow"} ${className}`}
      style={{ animationDelay: delay }}
    >
      <div
        className={`h-full w-full overflow-hidden border-4 border-surface bg-surface-sunk shadow-lift ${
          rounded === "full" ? "rounded-full" : "rounded-2xl"
        }`}
      >
        <SmartImage src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
