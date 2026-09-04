export type Service = {
  id: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "sales",
    title: "Electric Vehicle Sales",
    description:
      "Passenger, cargo and commercial electric three-wheelers from Skyy Rider Electric — as the authorised local dealer in Berhampur.",
  },
  {
    id: "custom-builds",
    title: "Custom Cargo & Vending Cart Builds",
    description:
      "Fold-out counter carts and cargo bodies fabricated to order at our own workshop, for food, retail and delivery businesses.",
  },
  {
    id: "consultation",
    title: "Showroom Consultation",
    description:
      "Visit our showroom for guidance on choosing the right electric vehicle for passenger, cargo or commercial use.",
  },
  {
    id: "pm-edrive",
    title: "PM E-Drive Scheme Guidance",
    description:
      "Information and support on the Government of India's PM E-Drive scheme for eligible electric vehicle purchases.",
  },
];
