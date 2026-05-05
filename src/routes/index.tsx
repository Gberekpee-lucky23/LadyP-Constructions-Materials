import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import truckImg from "@/assets/truck.jpg";
import { MATERIALS } from "@/data/materials";
import { MaterialCard } from "@/components/material-card";
import { QuoteForm } from "@/components/quote-form";
import { whatsappLink, DEFAULT_ORDER_MSG } from "@/lib/whatsapp";
import { WhatsAppIcon, TruckIcon } from "@/components/icons";
import {
  Ruler,
  Wallet,
  MessageCircle,
  PackageCheck,
  Truck,
  Star,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lady P — Reliable Delivery of Quality Construction Materials" },
      {
        name: "description",
        content:
          "Sand, gravel, cement, blocks and more delivered on time across Rivers State. Order on WhatsApp.",
      },
      { property: "og:title", content: "Lady P — Construction Materials Delivery" },
      {
        property: "og:description",
        content: "Reliable delivery of quality construction materials. Order on WhatsApp.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Orange tipper truck unloading construction aggregate at sunset"
            width={1600}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28 md:pt-32 md:pb-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Now delivering
              across Rivers State
            </span>
            <h1 className="mt-5 font-bold text-4xl sm:text-6xl md:text-7xl leading-[0.95] text-white">
              Reliable Delivery of <span className="text-primary">Quality</span> Construction
              Materials
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-concrete/90">
              We deliver sand, gravel, cement, and more — on time, every time. No shortages. No
              excuses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink(DEFAULT_ORDER_MSG)}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-elevated transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                <WhatsAppIcon className="h-5 w-5" /> Order on WhatsApp
              </a>
              <Link
                to="/materials"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-white/80 backdrop-blur-sm px-6 py-3.5 text-sm font-bold text-foreground hover:bg-white shadow-sm transition-all hover:shadow-md"
              >
                View Materials <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl">
              {[
                { icon: Truck, label: "Fast Delivery", desc: "Same-day delivery" },
                { icon: Ruler, label: "Accurate", desc: "Precision measured" },
                { icon: Wallet, label: "Fair Pricing", desc: "No hidden costs" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="group glass rounded-xl border border-white/20 px-3 py-3 transition-all hover:shadow-elevated hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold leading-tight block">
                        {b.label}
                      </span>
                      <span className="text-xs text-muted-foreground hidden sm:block">
                        {b.desc}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS PREVIEW */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-primary font-bold uppercase tracking-wider text-xs">
                Our Materials
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-5xl">Everything Your Site Needs</h2>
            </div>
            <Link
              to="/materials"
              className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1"
            >
              See all materials <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MATERIALS.slice(0, 6).map((m) => (
              <MaterialCard key={m.slug} material={m} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 sm:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-bold uppercase tracking-wider text-xs">How It Works</p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl">Order in 3 Simple Steps</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                icon: PackageCheck,
                title: "Choose Material",
                text: "Pick from our full range of aggregates and supplies.",
              },
              {
                step: "02",
                icon: MessageCircle,
                title: "Chat on WhatsApp",
                text: "Send us your order — we confirm price and delivery instantly.",
              },
              {
                step: "03",
                icon: TruckIcon,
                title: "Get Delivery",
                text: "We deliver right to your site, accurately measured.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-border bg-background p-7"
              >
                <span className="font-display text-7xl text-primary/15 absolute top-3 right-5 leading-none">
                  {s.step}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE + IMAGE */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-primary font-bold uppercase tracking-wider text-xs">Quick Quote</p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl">
              Tell Us What You Need.
              <br />
              <span className="text-primary">We'll Handle the Rest.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Fill the form — your request opens directly in WhatsApp with all your details ready to
              send.
            </p>
            <div className="mt-8 hidden lg:block rounded-2xl overflow-hidden border border-border">
              <img
                src={truckImg}
                alt="Lady P delivery truck on construction site"
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-bold uppercase tracking-wider text-xs">
              Trusted by Builders
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl">What Our Clients Say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Engr. Tunde A.",
                role: "Site Manager, Port Harcourt",
                text: "Lady P delivered 3 trips of sharp sand same day. Quantity was on point. My go-to supplier now.",
              },
              {
                name: "Mrs. Chioma N.",
                role: "Homeowner, Eleme",
                text: "Honest pricing and they actually pick up the phone. Cement and blocks arrived within hours.",
              },
              {
                name: "Mr. Bassey E.",
                role: "Contractor, Obio-Akpor",
                text: "I've worked with many suppliers — Lady P is reliable. No shortages, no stories.",
              },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-background p-7">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-5">
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-primary font-bold uppercase tracking-wider text-xs">FAQ</p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
            {[
              {
                q: "How fast can you deliver?",
                a: "Most orders within Port Harcourt and surrounding areas are delivered same-day. Bulk orders are scheduled for the next day.",
              },
              {
                q: "How do I get pricing?",
                a: "Send us a message on WhatsApp with the material and quantity. We respond with current pricing and delivery cost in minutes.",
              },
              {
                q: "What areas do you cover?",
                a: "We deliver across Rivers State, Nigeria — Port Harcourt, Eleme, Obio-Akpor, Oyigbo and surrounding LGAs. Outside locations on request.",
              },
              {
                q: "Do you guarantee accurate measurements?",
                a: "Yes. Every trip is measured against agreed quantities. What you order is what you get — no shortages.",
              },
              {
                q: "Can you handle bulk site supply?",
                a: "Absolutely. We supply ongoing projects with scheduled deliveries. Talk to us about your project on WhatsApp.",
              },
            ].map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="font-bold text-base">{f.q}</span>
                  <ChevronRight className="h-5 w-5 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-5xl text-primary-foreground">
            Ready to Start Building?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Send us a message on WhatsApp — get pricing, confirm delivery, and we're on the way.
          </p>
          <a
            href={whatsappLink(DEFAULT_ORDER_MSG)}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-background px-7 py-4 text-base font-bold text-foreground shadow-2xl transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5 text-whatsapp" /> Order on WhatsApp Now
          </a>
        </div>
      </section>
    </>
  );
}
