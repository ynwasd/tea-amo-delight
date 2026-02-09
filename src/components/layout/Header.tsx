import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/tea-amo-logo.png";
import OrderModal from "@/components/shared/OrderModal";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Locations" },
  { to: "/rewards", label: "Rewards" },
  { to: "/catering", label: "Catering" },
  { to: "/about", label: "About" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Tea Amo" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-semibold font-body transition-colors hover:bg-secondary ${
                  location.pathname === link.to
                    ? "text-primary bg-green-light"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
              className="hidden sm:flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md"
            >
              <Globe size={14} />
              {lang}
            </button>
            <Button
              onClick={() => setOrderOpen(true)}
              className="shadow-button font-display text-sm"
            >
              Order Now
            </Button>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-card border-b border-border"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg font-semibold font-body transition-colors ${
                      location.pathname === link.to
                        ? "text-primary bg-green-light"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
                  className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground"
                >
                  <Globe size={16} /> {lang === "EN" ? "Español" : "English"}
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <OrderModal open={orderOpen} onOpenChange={setOrderOpen} />
    </>
  );
};

export default Header;
