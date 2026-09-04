import type { ReactNode } from "react";

export function Marquee({
  items,
  className = "",
}: {
  items: ReactNode[];
  className?: string;
}) {
  const track = (
    <div className="flex shrink-0 items-center gap-3 pr-3">
      {items.map((item, i) => (
        <div key={i} className="flex shrink-0 items-center gap-3">
          {item}
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-40" />
        </div>
      ))}
    </div>
  );

  return (
    <div className={`no-scrollbar flex overflow-hidden ${className}`}>
      <div className="flex shrink-0 animate-marquee motion-reduce:animate-none">
        {track}
        {track}
      </div>
    </div>
  );
}
