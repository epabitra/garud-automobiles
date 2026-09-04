import { business } from "../data/business";

export function buildWhatsAppUrl(message: string, number: string = business.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
