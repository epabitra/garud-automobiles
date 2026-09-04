import { Marquee } from "../ui/Marquee";
import { business } from "../../data/business";

const items = [
  "⚡ 100% Electric",
  `✅ ${business.dealerLine}`,
  "📍 Bijipur, Berhampur",
  "🛠️ Custom Cart Builds",
  `⭐ ${business.rating.value} Google Rating`,
  "🔋 Passenger · Cargo · Commercial",
];

export function TickerStrip() {
  return (
    <div className="border-y border-white/10 bg-ink py-4">
      <Marquee
        className="text-white/70"
        items={items.map((item) => (
          <span key={item} className="text-sm font-semibold tracking-wide">
            {item}
          </span>
        ))}
      />
    </div>
  );
}
