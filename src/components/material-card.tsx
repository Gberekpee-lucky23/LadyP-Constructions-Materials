import type { Material } from "@/data/materials";
import { whatsappLink, orderMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

export function MaterialCard({ material }: { material: Material }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-primary/60">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={material.image}
          alt={material.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
          In Stock
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-xl">{material.name}</h3>
        <p className="text-sm text-muted-foreground flex-1">{material.description}</p>
        <a
          href={whatsappLink(orderMessage(material.name))}
          target="_blank"
          rel="noopener"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="h-4 w-4"/> Order via WhatsApp
        </a>
      </div>
    </article>
  );
}
