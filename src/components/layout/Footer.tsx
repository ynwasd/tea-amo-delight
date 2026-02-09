import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/tea-amo-logo.png";
import NewsletterSignup from "@/components/shared/NewsletterSignup";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Tea Amo" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">
              Crafted with love, sipped with joy. Tea Amo brings you the freshest boba
              and fruit teas made with real ingredients.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/homeofteaamo/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.tiktok.com/@homeofteaamo" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="TikTok">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.23 8.23 0 003.76.92V6.69z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-body">
              {[
                { to: "/menu", label: "Our Menu" },
                { to: "/locations", label: "Find a Store" },
                { to: "/rewards", label: "Rewards" },
                { to: "/catering", label: "Catering" },
                { to: "/franchise", label: "Franchise" },
                { to: "/about", label: "About Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm font-body text-primary-foreground/70">
              <li>727 W San Marcos Blvd #108, San Marcos, CA 92078</li>
              <li>(760) 290-3189</li>
              <li>hello@teaamosanmarcos.com</li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="text-sm font-semibold underline underline-offset-4 hover:text-primary-foreground/90 transition-colors">
                Contact Us →
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Stay in the Loop</h4>
            <p className="text-sm text-primary-foreground/70 mb-3 font-body">
              Get exclusive deals, new flavors & rewards updates.
            </p>
            <NewsletterSignup variant="footer" />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© 2026 Tea Amo. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
