export const WHATSAPP_NUMBER = "2348146622842";
export const PHONE_DISPLAY = "+234 814 662 2842";
export const BUSINESS_LOCATION = "Rivers State, Nigeria";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_ORDER_MSG =
  "Hello Lady P, I'd like to place an order. Please share pricing and delivery details.";

export function orderMessage(material: string): string {
  return `Hello Lady P, I'd like to order ${material}. Please provide price and delivery details.`;
}
