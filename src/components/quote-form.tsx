import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { MATERIALS } from "@/data/materials";
import { WhatsAppIcon } from "@/components/icons";

export function QuoteForm() {
  const [name, setName] = useState("");
  const [material, setMaterial] = useState(MATERIALS[0].name);
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");

  const message = `Hello Lady P, I'd like a quick quote.%0A%0AName: ${name}%0AMaterial: ${material}%0AQuantity: ${quantity}%0ADelivery Location: ${location}%0A%0APlease share pricing and delivery details.`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(decodeURIComponent(message)), "_blank");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card">
      <div>
        <h3 className="font-display text-2xl">Get a Quick Quote</h3>
        <p className="text-sm text-muted-foreground mt-1">No forms to wait on — your details go straight to WhatsApp.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="rounded-md bg-secondary px-4 py-3 text-sm border border-border focus:border-primary focus:outline-none"/>
        <input required value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Delivery location" className="rounded-md bg-secondary px-4 py-3 text-sm border border-border focus:border-primary focus:outline-none"/>
        <select value={material} onChange={(e)=>setMaterial(e.target.value)} className="rounded-md bg-secondary px-4 py-3 text-sm border border-border focus:border-primary focus:outline-none">
          {MATERIALS.map(m => <option key={m.slug} value={m.name}>{m.name}</option>)}
        </select>
        <input required value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder="Quantity (e.g. 1 trip, 50 bags)" className="rounded-md bg-secondary px-4 py-3 text-sm border border-border focus:border-primary focus:outline-none"/>
      </div>
      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-foreground shadow-bold transition-transform hover:-translate-y-0.5">
        <WhatsAppIcon className="h-5 w-5"/> Send via WhatsApp
      </button>
    </form>
  );
}
