import { createFileRoute } from "@tanstack/react-router";
import { MATERIALS } from "@/data/materials";
import { MaterialCard } from "@/components/material-card";
import { QuoteForm } from "@/components/quote-form";

export const Route = createFileRoute("/materials")({
  head: () => ({
    meta: [
      { title: "Materials & Products — Lady P Construction Supply" },
      { name: "description", content: "Browse Lady P's full range: sharp sand, plastering sand, granite chippings, cement, blocks and more. Order any material on WhatsApp." },
      { property: "og:title", content: "Materials — Lady P" },
      { property: "og:description", content: "Sand, granite, cement, blocks — order any material on WhatsApp." },
    ],
  }),
  component: MaterialsPage,
});

function MaterialsPage() {
  return (
    <>
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-bold uppercase tracking-wider text-xs">Our Catalogue</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">Materials & Products</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">From sharp sand to cement and blocks — every material you need for the job, delivered to your site on schedule.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MATERIALS.map((m) => <MaterialCard key={m.slug} material={m}/>) }
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <QuoteForm/>
        </div>
      </section>
    </>
  );
}
