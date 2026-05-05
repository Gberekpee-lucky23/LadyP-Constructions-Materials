import { Link } from "@tanstack/react-router";
import { whatsappLink, DEFAULT_ORDER_MSG, PHONE_DISPLAY, BUSINESS_LOCATION } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";
import { MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
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
          </div>
          <p className="mt-3 font-display text-2xl leading-tight">
            Delivering Quality.
            <br />
            <span className="text-primary">On Time.</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Reliable supplier of aggregate and construction materials across Rivers State and
            beyond.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/materials" className="text-muted-foreground hover:text-foreground">
                Materials
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-muted-foreground hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-4">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 mt-0.5 text-primary" /> {PHONE_DISPLAY}
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 text-primary" /> {BUSINESS_LOCATION}
            </li>
            <li>
              <a
                href={whatsappLink(DEFAULT_ORDER_MSG)}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 mt-2 rounded-md bg-whatsapp px-3 py-2 text-xs font-bold text-whatsapp-foreground"
              >
                <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lady P Construction Materials. All rights reserved.
      </div>
    </footer>
  );
}
