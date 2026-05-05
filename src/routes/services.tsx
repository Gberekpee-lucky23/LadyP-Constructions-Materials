import { createFileRoute } from "@tanstack/react-router";
import { Truck, Boxes, HardHat } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Material Supply, Bulk Orders & Site Consultation | Lady P" },
      { name: "description", content: "Lady P offers material supply & delivery, bulk orders for projects, and on-site construction consultation across Rivers State, Nigeria." },
      { property: "og:title", content: "Services — Lady P" },
      { property: "og:description", content: "Supply, bulk orders, and consultation — all in one place." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Truck, title: "Material Supply & Delivery", text: "Sand, granite, cement, blocks and more — delivered to your site on time, with accurate measurements every trip.", msg: "Hello Lady P, I'd like to know more about your supply & delivery service." },
  { icon: Boxes, title: "Bulk Orders", text: "Supplying ongoing construction projects with scheduled deliveries and priority pricing on volume orders.", msg: "Hello Lady P, I have a bulk order request for an ongoing project. Please share details." },
  { icon: HardHat, title: "Site Consultation", text: "Not sure what to use? Our team helps you choose the right material and quantity for your build — saving cost and time.", msg: "Hello Lady P, I'd like to book a site consultation. Please share availability." },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-bold uppercase tracking-wider text-xs">Our Services</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">More Than a Supplier.<br/><span className="text-primary">A Building Partner.</span></h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/60">
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <s.icon className="h-7 w-7"/>
              </div>
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{s.text}</p>
              <a href={whatsappLink(s.msg)} target="_blank" rel="noopener" className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
                <WhatsAppIcon className="h-4 w-4"/> Request Service
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
