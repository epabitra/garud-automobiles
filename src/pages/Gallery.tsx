import { useMemo, useState } from "react";
import { useSeo } from "../hooks/useSeo";
import { PageHero } from "../components/sections/PageHero";
import { CtaBanner } from "../components/sections/CtaBanner";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { SmartImage } from "../components/ui/SmartImage";
import { Lightbox } from "../components/ui/Lightbox";
import { galleryImages, galleryCategories, type GalleryCategory } from "../data/gallery";

export function Gallery() {
  useSeo({
    title: "Gallery",
    description:
      "Photos from the Garud Automobiles showroom, our Skyy Rider Electric vehicle range, and customer delivery days in Berhampur.",
  });

  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our showroom, vehicles & delivery days"
        description={`${galleryImages.length} photographs from Garud Automobiles — the complete visual story of our showroom.`}
        image="/images/storefront/storefront-night-signage.webp"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="flex flex-wrap gap-2">
            {(["All", ...galleryCategories] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "border-ink bg-ink text-white shadow-glow"
                    : "border-line text-text-muted hover:-translate-y-0.5 hover:border-accent-400 hover:text-ink"
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-60">
                  ({cat === "All" ? galleryImages.length : galleryImages.filter((g) => g.category === cat).length})
                </span>
              </button>
            ))}
          </Reveal>

          {filtered.length === 0 ? (
            <p className="mt-16 text-center text-sm text-text-muted">
              No photos in this category yet.
            </p>
          ) : (
            <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
              {filtered.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-line bg-surface-sunk text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                >
                  <SmartImage
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      img.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-2 p-3 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {img.caption}
                  </span>
                  <span className="pointer-events-none absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          )}
        </Container>
      </section>

      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />

      <CtaBanner />
    </>
  );
}
