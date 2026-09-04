export type PricedProduct = {
  id: string;
  name: string;
  tag: string;
  image: string;
  approxPriceLabel: string;
  approxPriceNote: string;
  specs: { label: string; value: string }[];
  description: string;
};

// Prices and specifications below are approximate reference figures collected
// from publicly listed Skyy Rider Electric dealer/distributor prices elsewhere
// in India (IndiaMART listings, September 2026). They are NOT Garud
// Automobiles' confirmed showroom prices and must be updated once the shop
// provides final, current figures.
export const pricedProducts: PricedProduct[] = [
  {
    id: "panda",
    name: "Panda Series Passenger E-Rickshaw",
    tag: "Passenger",
    image: "/images/vehicles/brand-catalog/panda-passenger-brand.jpg",
    approxPriceLabel: "₹1.70 – 1.85 Lakh*",
    approxPriceNote: "Approx. ex-showroom reference price",
    specs: [
      { label: "Seating", value: "6 Seater" },
      { label: "Motor", value: "1000W BLDC" },
      { label: "Range", value: "~120 km" },
      { label: "Charging Time", value: "~8 hours" },
    ],
    description:
      "Skyy Rider's Panda-series passenger e-rickshaw (available as Panda SS / Panda GI) — our most popular vehicle for city and local passenger transport.",
  },
  {
    id: "bison",
    name: "Bison E-Loader",
    tag: "Cargo",
    image: "/images/vehicles/brand-catalog/bison-loader-brand.jpg",
    approxPriceLabel: "₹1.85 – 2.20 Lakh*",
    approxPriceNote: "Approx. ex-showroom reference price",
    specs: [
      { label: "Payload", value: "~400 kg" },
      { label: "Motor", value: "4 HP" },
      { label: "Range", value: "~90 km" },
      { label: "Charging Time", value: "~7 hours" },
    ],
    description:
      "The Bison open-deck electric loader — built for goods movement, local delivery runs and small commercial operations.",
  },
  {
    id: "skyy-box",
    name: "Skyy Box Enclosed Cargo Van",
    tag: "Commercial",
    image: "/images/vehicles/brand-catalog/skyy-box-brand.jpg",
    approxPriceLabel: "₹1.65 – 2.00 Lakh*",
    approxPriceNote: "Approx. reference price, comparable enclosed EV van",
    specs: [
      { label: "Body", value: "Fully enclosed" },
      { label: "Use case", value: "Courier & delivery" },
      { label: "Build", value: "Made in Odisha" },
    ],
    description:
      "A fully enclosed electric cargo body for secure, weatherproof goods transport — suited to courier and delivery businesses.",
  },
  {
    id: "custom-cart",
    name: "Custom Vending & Food Cart",
    tag: "Specialty",
    image: "/images/vehicles/brand-catalog/food-cart-brand.jpg",
    approxPriceLabel: "From ₹1.75 Lakh*",
    approxPriceNote: "Starting price — varies with customisation",
    specs: [
      { label: "Build", value: "Fabricated to order" },
      { label: "Use case", value: "Food, retail & vending" },
    ],
    description:
      "Fold-out counter carts built to order at our workshop. Final price depends on size, fittings and features you choose.",
  },
];
