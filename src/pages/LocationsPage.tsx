import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/shared/SectionReveal";
import { locations } from "@/data/locations";

const LocationsPage = () => {
  return (
    <Layout>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">Find Us 📍</h1>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Visit your nearest Tea Amo for the freshest boba experience.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <SectionReveal>
              <div className="rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  title="Tea Amo Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-117.1657!3d33.1434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s727+W+San+Marcos+Blvd+San+Marcos+CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </SectionReveal>

            {/* Location cards */}
            <div className="space-y-6">
              {locations.map((loc) => (
                <SectionReveal key={loc.id}>
                  <div className="bg-card rounded-2xl p-6 shadow-card">
                    <h2 className="font-display text-xl font-bold mb-4">{loc.name}</h2>
                    <div className="space-y-3 text-sm font-body">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{loc.address}, {loc.city}, {loc.state} {loc.zip}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{loc.hours}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                        <a href={`tel:${loc.phone}`} className="hover:text-primary transition-colors">{loc.phone}</a>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-5">
                      <Button asChild size="sm" className="font-display">
                        <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer">
                          Get Directions <ExternalLink size={14} className="ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LocationsPage;
