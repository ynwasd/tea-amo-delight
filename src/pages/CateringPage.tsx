import { useState } from "react";
import { UtensilsCrossed, Users, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/shared/SectionReveal";
import { toast } from "sonner";

const cateringOptions = [
  { icon: UtensilsCrossed, title: "Party Packs", desc: "Pre-made drink trays for 10, 20, or 50 guests. Mix & match flavors!" },
  { icon: Users, title: "Event Bar", desc: "We bring the boba bar to you! Full setup with a Tea Amo barista on-site." },
  { icon: Calendar, title: "Corporate Orders", desc: "Weekly office deliveries or one-time orders for your team. Bulk pricing available." },
];

const CateringPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", location: "", guests: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in required fields.");
      return;
    }
    toast.success("Request sent! We'll be in touch within 24 hours. 🎉");
    setForm({ name: "", email: "", phone: "", date: "", location: "", guests: "", notes: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  return (
    <Layout>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">Catering 🎉</h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Make your next event unforgettable with Tea Amo. We cater parties, weddings,
            corporate events, and everything in between.
          </p>
        </div>
      </section>

      {/* Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6">
            {cateringOptions.map((opt, i) => (
              <SectionReveal key={opt.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-card text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-green-light flex items-center justify-center mx-auto mb-4">
                    <opt.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{opt.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{opt.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl">
          <SectionReveal>
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <h2 className="font-display text-2xl font-bold mb-6 text-center">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name *" value={form.name} onChange={update("name")} className="font-body" required />
                  <Input placeholder="Email *" type="email" value={form.email} onChange={update("email")} className="font-body" required />
                  <Input placeholder="Phone" value={form.phone} onChange={update("phone")} className="font-body" />
                  <Input placeholder="Event Date" type="date" value={form.date} onChange={update("date")} className="font-body" />
                  <Input placeholder="Event Location" value={form.location} onChange={update("location")} className="font-body" />
                  <Input placeholder="# of Guests" type="number" value={form.guests} onChange={update("guests")} className="font-body" />
                </div>
                <Textarea placeholder="Tell us about your event..." value={form.notes} onChange={update("notes")} rows={4} className="font-body" />
                <Button type="submit" size="lg" className="w-full font-display shadow-button">
                  <Send size={16} className="mr-2" /> Send Request
                </Button>
              </form>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default CateringPage;
