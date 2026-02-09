import { useState } from "react";
import { TrendingUp, Building2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/shared/SectionReveal";
import { toast } from "sonner";

const benefits = [
  { title: "Proven Concept", desc: "Join a brand that's already winning hearts (and taste buds) in Texas." },
  { title: "Full Support", desc: "From training to marketing, we've got your back every step of the way." },
  { title: "Low Overhead", desc: "Streamlined operations mean higher margins and faster ROI." },
];

const FranchisePage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", investment: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in required fields.");
      return;
    }
    toast.success("Inquiry submitted! Our franchise team will reach out soon. 🤝");
    setForm({ name: "", email: "", phone: "", location: "", investment: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  return (
    <Layout>
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Building2 size={48} className="mx-auto mb-4" />
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Own a Tea Amo</h1>
          <p className="text-primary-foreground/80 font-body max-w-lg mx-auto text-lg">
            Bring the Tea Amo experience to your city. We're looking for passionate
            partners to grow with us.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {benefits.map((b, i) => (
              <SectionReveal key={b.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-card text-center h-full">
                  <TrendingUp size={28} className="text-primary mx-auto mb-3" />
                  <h3 className="font-display font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{b.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="bg-card rounded-3xl p-8 shadow-card max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold mb-6 text-center">Franchise Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name *" value={form.name} onChange={update("name")} className="font-body" required />
                  <Input placeholder="Email *" type="email" value={form.email} onChange={update("email")} className="font-body" required />
                  <Input placeholder="Phone" value={form.phone} onChange={update("phone")} className="font-body" />
                  <Input placeholder="Desired Location" value={form.location} onChange={update("location")} className="font-body" />
                </div>
                <Input placeholder="Available Investment Range" value={form.investment} onChange={update("investment")} className="font-body" />
                <Textarea placeholder="Tell us about yourself and why you'd be a great Tea Amo partner..." value={form.message} onChange={update("message")} rows={4} className="font-body" />
                <Button type="submit" size="lg" className="w-full font-display shadow-button">
                  <Send size={16} className="mr-2" /> Submit Inquiry
                </Button>
              </form>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default FranchisePage;
