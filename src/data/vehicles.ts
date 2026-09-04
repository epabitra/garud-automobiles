export type VehicleCategory = {
  id: string;
  name: string;
  tag: string;
  description: string;
  highlights: string[];
  images: string[];
};

export const vehicleCategories: VehicleCategory[] = [
  {
    id: "passenger",
    name: "Passenger E-Rickshaws",
    tag: "Passenger",
    description:
      "Battery-electric passenger three-wheelers for city and local transport, available in multiple colour options for individual owners and route operators.",
    highlights: [
      "Enclosed passenger cabin with weather cover",
      "Available in multiple colour finishes",
      "Suited to city routes and daily local transport",
    ],
    images: [
      "/images/vehicles/passenger/passenger-teal-02-grass.webp",
      "/images/vehicles/passenger/passenger-teal-03-side.webp",
      "/images/vehicles/passenger/passenger-teal-01.webp",
      "/images/vehicles/passenger/passenger-blue-04-park.webp",
      "/images/vehicles/passenger/passenger-maroon-dusk.webp",
      "/images/vehicles/passenger/passenger-dark-blue-street.webp",
      "/images/vehicles/passenger/passenger-blue-roadside-01.webp",
      "/images/vehicles/passenger/passenger-blue-roadside-02.webp",
      "/images/vehicles/passenger/passenger-red-roadside-01.webp",
    ],
  },
  {
    id: "cargo",
    name: "Loader & Cargo E-Rickshaws",
    tag: "Cargo",
    description:
      "Open-deck electric loaders built for goods movement, local delivery runs and small commercial operations.",
    highlights: [
      "Open cargo deck for goods and materials",
      "Electric drivetrain for low running cost",
      "Compact turning radius for narrow lanes",
    ],
    images: [
      "/images/vehicles/cargo/cargo-loader-red-01.webp",
      "/images/vehicles/cargo/cargo-loader-blue-01.webp",
      "/images/vehicles/cargo/cargo-loader-blue-02-rear.webp",
    ],
  },
  {
    id: "skyy-box",
    name: "Skyy Box Cargo Van",
    tag: "Commercial",
    description:
      "A fully enclosed electric cargo body for secure, weatherproof goods transport — built for delivery and courier businesses.",
    highlights: [
      "Fully enclosed cargo compartment",
      "Made in Odisha",
      "Suited to courier and delivery operations",
    ],
    images: ["/images/vehicles/skyy-box/skyy-box-cargo-van-01.webp"],
  },
  {
    id: "specialty",
    name: "Custom Vending & Mobile Cart Builds",
    tag: "Specialty",
    description:
      "Fold-out counter carts fabricated to order for food vendors, retail pop-ups and mobile business use — built at our own workshop.",
    highlights: [
      "Fold-out counter and display design",
      "Fabricated to order at our workshop",
      "Electric mobility, no fuel running cost",
    ],
    images: [
      "/images/vehicles/specialty/vending-cart-maroon-01.webp",
      "/images/vehicles/specialty/vending-cart-teal-01.webp",
      "/images/vehicles/specialty/vending-cart-maroon-02-field.webp",
    ],
  },
];

export const rangeCatalogImage = "/images/vehicles/range/loader-range-catalog.webp";
