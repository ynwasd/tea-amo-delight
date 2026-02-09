import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin } from "lucide-react";
import { locations } from "@/data/locations";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OrderModal = ({ open, onOpenChange }: OrderModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Order Now 🧋</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground font-body">
          Choose your location and favorite delivery platform:
        </p>
        <div className="space-y-4 mt-2">
          {locations.map((loc) => (
            <div key={loc.id} className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-primary" />
                <span className="font-display font-semibold">{loc.name}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {loc.orderLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-secondary/80 transition-colors"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
