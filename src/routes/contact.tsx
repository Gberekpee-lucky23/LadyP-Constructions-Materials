import { createFileRoute } from "@tanstack/react-router";
import { whatsappLink, DEFAULT_ORDER_MSG, PHONE_DISPLAY, BUSINESS_LOCATION } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";
import { QuoteForm } from "@/components/quote-form";
import { Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Lady P — Order Construction Materials on WhatsApp" },
      { name: "description", content: "Reach Lady P on WhatsApp or by phone for construction material orders, bulk supply, and site consultation across Rivers State, Nigeria." },
      { property: "og:title", content: "Contact Lady P" },
      { property: "og:description", content: "WhatsApp, call, or send a quick quote." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-bold uppercase tracking-wider text-xs">Contact</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">Let's Talk Materials.</h1>
          <p className="mt-4 max-w-xl text-muted-foreground">WhatsApp is the fastest way to reach us. Drop a message, we typically respond in minutes.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <a href={whatsappLink(DEFAULT_ORDER_MSG)} target="_blank" rel="noopener" className="block rounded-2xl border border-border bg-whatsapp/10 p-6 transition-transform hover:-translate-y-1">
              <WhatsAppIcon className="h-8 w-8 text-whatsapp"/>
              <h3 className="mt-4 font-display text-xl">WhatsApp (Preferred)</h3>
              <p className="text-sm text-muted-foreground mt-1">{PHONE_DISPLAY}</p>
              <span className="mt-4 inline-flex items-center gap-2 rounded-md bg-whatsapp px-4 py-2 text-xs font-bold text-whatsapp-foreground">Open Chat</span>
            </a>

            <a href={`tel:+${PHONE_DISPLAY.replace(/\s|\+/g,'')}`} className="block rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1">
              <Phone className="h-8 w-8 text-primary"/>
              <h3 className="mt-4 font-display text-xl">Call Us</h3>
              <p className="text-sm text-muted-foreground mt-1">{PHONE_DISPLAY}</p>
            </a>

            <div className="rounded-2xl border border-border bg-card p-6">
              <MapPin className="h-8 w-8 text-primary"/>
              <h3 className="mt-4 font-display text-xl">Location</h3>
              <p className="text-sm text-muted-foreground mt-1">{BUSINESS_LOCATION}</p>
              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-4 w-4"/> Mon – Sat · 7:00 AM – 7:00 PM
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <QuoteForm/>
            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe
                title="Lady P Location"
                src="https://www.google.com/maps?q=Port+Harcourt,+Rivers+State,+Nigeria&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                className="w-full"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
