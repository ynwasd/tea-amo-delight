import { Gift, Star, Zap, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/shared/SectionReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  { icon: Zap, title: "Sign Up", desc: "Create your free account in seconds." },
  { icon: Star, title: "Earn Points", desc: "Get 1 point for every $1 you spend." },
  { icon: Gift, title: "Get Rewards", desc: "Redeem points for free drinks & treats." },
  { icon: PartyPopper, title: "Birthday Bonus", desc: "Double points on your special day!" },
];

const faqs = [
  { q: "How do I earn points?", a: "You earn 1 point per $1 spent on any purchase. Points are tracked automatically through your account." },
  { q: "When do my points expire?", a: "Points expire after 12 months of account inactivity. Keep sipping to keep earning!" },
  { q: "Can I use rewards at any location?", a: "Yes! Rewards are valid at all Tea Amo locations." },
  { q: "How do I check my points balance?", a: "Log into your account on our app or website to view your current balance and available rewards." },
  { q: "Is there a birthday reward?", a: "Yes! You earn double points on all purchases during your birthday week. Make sure your birthday is set in your profile." },
];

const RewardsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Gift size={48} className="mx-auto mb-4" />
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-2">Tea Amo Rewards</h1>
          <span className="inline-block bg-secondary text-secondary-foreground font-display font-semibold text-sm px-4 py-1 rounded-full mb-4">Coming Soon</span>
          <p className="text-primary-foreground/80 font-body max-w-lg mx-auto text-lg mb-8">
            Every sip gets you closer to free drinks, exclusive flavors, and surprise treats.
            Join the fam — it's free forever.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" variant="secondary" className="font-display shadow-button">
              Join Rewards
            </Button>
            <Button size="lg" variant="outline" className="font-display border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Download App
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="font-display text-3xl font-bold text-center mb-12">How It Works</h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <SectionReveal key={step.title} delay={i * 0.1}>
                <div className="text-center bg-card rounded-2xl p-6 shadow-card">
                  <div className="w-14 h-14 rounded-2xl bg-green-light flex items-center justify-center mx-auto mb-4">
                    <step.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* App download */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl font-bold mb-3">Get the App</h2>
            <p className="text-muted-foreground font-body mb-6 max-w-md mx-auto">
              Track your points, order ahead, and get exclusive app-only rewards.
            </p>
            <div className="flex justify-center gap-4 mb-3">
              <Button variant="outline" size="lg" className="font-display">
                 App Store
              </Button>
              <Button variant="outline" size="lg" className="font-display">
                 Google Play
              </Button>
            </div>
            <p className="text-sm text-muted-foreground/70 font-display font-semibold">Coming Soon</p>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <SectionReveal>
            <h2 className="font-display text-3xl font-bold text-center mb-8">FAQs</h2>
          </SectionReveal>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl px-4 border-none shadow-card">
                <AccordionTrigger className="font-display font-semibold text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default RewardsPage;
