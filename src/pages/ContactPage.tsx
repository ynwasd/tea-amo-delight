import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/shared/SectionReveal";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon. 💚");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  return (
    <Layout>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">Contact Us 💬</h1>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Questions, feedback, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <SectionReveal>
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-bold">Get in Touch</h2>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "727 W San Marcos Blvd #108, San Marcos, CA 92078" },
                    { icon: Phone, label: "(760) 290-3189" },
                    { icon: Mail, label: "hello@teaamosanmarcos.com" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <span className="text-sm font-body">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-muted rounded-2xl p-4">
                  <p className="text-xs text-muted-foreground font-body">
                    <strong>Hours:</strong> Mon–Thu 11:30am–9pm · Fri 11:30am–9:30pm · Sat–Sun 10:30am–9:30pm
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* Form */}
            <SectionReveal delay={0.1}>
              <div className="bg-card rounded-3xl p-8 shadow-card">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name *" value={form.name} onChange={update("name")} className="font-body" required />
                    <Input placeholder="Email *" type="email" value={form.email} onChange={update("email")} className="font-body" required />
                  </div>
                  <Input placeholder="Subject" value={form.subject} onChange={update("subject")} className="font-body" />
                  <Textarea placeholder="Your message *" value={form.message} onChange={update("message")} rows={5} className="font-body" required />
                  <Button type="submit" size="lg" className="w-full font-display shadow-button">
                    <Send size={16} className="mr-2" /> Send Message
                  </Button>
                </form>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
