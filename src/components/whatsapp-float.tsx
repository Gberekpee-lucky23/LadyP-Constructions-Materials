import { whatsappLink, DEFAULT_ORDER_MSG } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(DEFAULT_ORDER_MSG)}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-whatsapp-foreground shadow-2xl shadow-black/40 transition-transform hover:scale-105"
    >
      <span className="relative flex h-6 w-6">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50"></span>
        <WhatsAppIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden sm:inline font-bold text-sm">Chat Now</span>
    </a>
  );
}
