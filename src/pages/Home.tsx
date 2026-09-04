import { useSeo } from "../hooks/useSeo";
import { Hero } from "../components/sections/Hero";
import { TrustStrip } from "../components/sections/TrustStrip";
import { VehicleShowcase } from "../components/sections/VehicleShowcase";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { AboutPreview } from "../components/sections/AboutPreview";
import { GalleryPreview } from "../components/sections/GalleryPreview";
import { FaqPreview } from "../components/sections/FaqPreview";
import { LocationSection } from "../components/sections/LocationSection";
import { CtaBanner } from "../components/sections/CtaBanner";
import { TickerStrip } from "../components/sections/TickerStrip";

export function Home() {
  useSeo({
    title: "Electric Vehicle Showroom in Berhampur",
    description:
      "Garud Automobiles is the authorised Skyy Rider Electric dealer in Bijipur, Berhampur, Odisha — electric passenger, cargo and commercial vehicles.",
  });

  return (
    <>
      <Hero />
      <TrustStrip />
      <VehicleShowcase />
      <TickerStrip />
      <WhyChooseUs />
      <AboutPreview />
      <GalleryPreview />
      <FaqPreview />
      <LocationSection />
      <CtaBanner />
    </>
  );
}
