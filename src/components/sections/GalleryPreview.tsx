import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CtaButton } from "../ui/CtaButton";
import { SmartImage } from "../ui/SmartImage";
import { galleryImages } from "../../data/gallery";

const preview = [
  galleryImages.find((g) => g.src.includes("passenger-teal-02-grass"))!,
  galleryImages.find((g) => g.src.includes("storefront-day-authorized-dealer"))!,
  galleryImages.find((g) => g.src.includes("skyy-box-cargo-van-01"))!,
  galleryImages.find((g) => g.src.includes("delivery-ceremony-formal"))!,
  galleryImages.find((g) => g.src.includes("cargo-loader-red-01"))!,
  galleryImages.find((g) => g.src.includes("delivery-garlanded-vehicle-01"))!,
];

export function GalleryPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="A closer look at our showroom & vehicles"
            description="Real photographs from our showroom, our vehicle range, and customer delivery days."
          />
          <Reveal delay={0.1}>
            <CtaButton href="/gallery" variant="outline" className="hidden sm:inline-flex">
              View Full Gallery
            </CtaButton>
          </Reveal>
        </div>

        <div className="mt-12 columns-2 gap-4 sm:columns-3">
          {preview.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06} className="mb-4 break-inside-avoid">
              <div className="overflow-hidden rounded-2xl border border-line bg-surface-sunk shadow-soft">
                <SmartImage
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-500 hover:scale-105 ${
                    img.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 sm:hidden">
          <CtaButton href="/gallery" variant="outline" className="w-full">
            View Full Gallery
          </CtaButton>
        </Reveal>
      </Container>
    </section>
  );
}
