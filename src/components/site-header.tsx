import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappLink, DEFAULT_ORDER_MSG } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/materials", label: "Materials" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Logo Image */}
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-primary/10 p-1.5 transition-colors group-hover:bg-primary/20">
            <img
              src="src\assets\ladyp-logo.png" // Replace with your actual logo path
              alt="LadyP Construction Materials"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight">
              LadyP <span className="text-primary">Construction</span>
            </span>
            <span className="text-xs text-muted-foreground tracking-wide">Materials</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink(DEFAULT_ORDER_MSG)}
          target="_blank"
          rel="noopener"
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-bold transition-transform hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Order Now
        </a>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-base font-semibold text-foreground hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={whatsappLink(DEFAULT_ORDER_MSG)}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" /> Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
