import { createFileRoute } from "@tanstack/react-router";
import consultationImg from "@/assets/consultation.jpg";
import { whatsappLink, DEFAULT_ORDER_MSG } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";
import { ShieldCheck, Clock, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lady P — Trusted Construction Materials Supplier" },
      { name: "description", content: "Lady P is a trusted Rivers State supplier of construction aggregates and materials, known for fast delivery, accurate measurements, and expert consultation." },
      { property: "og:title", content: "About Lady P" },
      { property: "og:description", content: "Reliable. Fast. Accurate. The Lady P story." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-bold uppercase tracking-wider text-xs">About Lady P</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl max-w-3xl">Built on Trust.<br/><span className="text-primary">Delivered on Time.</span></h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div className="rounded-2xl overflow-hidden border border-border">
            <img src={consultationImg} alt="Lady P team consulting on a construction project" width={1200} height={800} loading="lazy" className="w-full h-full object-cover"/>
          </div>
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Our Story</h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>Lady P was founded on a simple promise: when a builder calls, the materials show up full quantity, fair price, on time.</p>
              <p>For years we've supplied aggregates and construction materials across Rivers State, helping homeowners, contractors, and large-scale projects move faster without the headaches of unreliable suppliers.</p>
              <p>Beyond delivery, we offer professional consultation to help you pick the right material for the right job saving you money and rework.</p>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Clock, title: "On Time", text: "Same-day delivery" },
                { icon: ShieldCheck, title: "Honest", text: "Accurate measurements" },
                { icon: Award, title: "Quality", text: "Trusted brands only" },
              ].map((v) => (
                <div key={v.title} className="rounded-xl border border-border bg-card p-4">
                  <v.icon className="h-6 w-6 text-primary"/>
                  <div className="mt-3 font-bold text-sm">{v.title}</div>
                  <div className="text-xs text-muted-foreground">{v.text}</div>
                </div>
              ))}
            </div>
            <a href={whatsappLink(DEFAULT_ORDER_MSG)} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-bold">
              <WhatsAppIcon className="h-5 w-5"/> Talk to Lady P
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
