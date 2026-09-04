export const business = {
  name: "Garud Automobiles",
  brandLine: "Skyy Rider Electric",
  dealerLine: "Authorised Skyy Rider Electric Dealer",
  tagline: "Electric Mobility for a Smarter Journey",
  intro:
    "Garud Automobiles is the authorised Skyy Rider Electric showroom on Bijipur Main Road, Berhampur — offering electric passenger, cargo and commercial three-wheelers built in Odisha.",
  phones: [
    { display: "89509 77904", href: "tel:+918950977904", primary: true },
    { display: "82218 22926", href: "tel:+918221822926", primary: false },
  ],
  // Used for WhatsApp deep-links (wa.me) — digits only, with country code.
  whatsappNumber: "918950977904",
  address: {
    line1: "Shop No. 3, Bijipur Main Road",
    line2: "Sundar Nagar, Near Vegetable Market",
    city: "Brahmapur (Berhampur)",
    state: "Odisha",
    pin: "760001",
    full: "Shop No. 3, Bijipur Main Road, Sundar Nagar, Near Vegetable Market, Brahmapur (Berhampur), Odisha 760001",
  },
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Garud+Automobiles+Bijipur+Main+Road+Sundar+Nagar+Brahmapur+Odisha+760001",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Garud+Automobiles+Bijipur+Main+Road+Sundar+Nagar+Brahmapur+Odisha+760001&output=embed",
  rating: {
    value: 4.9,
    count: 20,
    source: "Google",
  },
  grandOpening: {
    date: "15 January 2025",
    label: "Showroom opened January 2025",
  },
  gstNote: "GST-registered business",
} as const;

export const ctas = {
  callPrimary: `Call ${business.phones[0].display}`,
  directions: "Get Directions",
  enquire: "Enquire Now",
} as const;
