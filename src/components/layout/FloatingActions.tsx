import { business } from "../../data/business";

export function FloatingActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 divide-x divide-line pb-[env(safe-area-inset-bottom)]">
        <a
          href={business.phones[0].href}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.5.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8Z" />
          </svg>
          Call
        </a>
        <a
          href={business.mapsSearchUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-accent-500 py-3.5 text-sm font-semibold text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
          </svg>
          Directions
        </a>
      </div>
    </div>
  );
}
