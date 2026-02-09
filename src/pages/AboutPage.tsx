import { Heart, Leaf, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/shared/SectionReveal";

const timeline = [
  { year: "2023", title: "The Dream Brews", desc: "Tea Amo was born from a simple idea: everyone deserves amazing boba made with real ingredients." },
  { year: "2024", title: "First Store Opens", desc: "We opened our doors in San Marcos, TX, and the community showed up in a big way." },
  { year: "2025", title: "Growing the Family", desc: "Launched Tea Amo Rewards, expanded our menu, and started catering events across Texas." },
  { year: "2026", title: "What's Next?", desc: "More locations, more flavors, more love. The best is yet to come! 🚀" },
];

const values = [
  { icon: Leaf, title: "Real Ingredients", desc: "No artificial flavors, no shortcuts. We use real fruit, premium teas, and house-made syrups." },
  { icon: Heart, title: "Community First", desc: "We're more than a tea shop — we're a gathering place. Built by the community, for the community." },
  { icon: Award, title: "Quality Obsessed", desc: "Every drink is made to order with the same care whether it's your first cup or your hundredth." },
];

const AboutPage = () => {
  return (
    <Layout>
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Our Story 🍵</h1>
          <p className="text-primary-foreground/80 font-body max-w-lg mx-auto text-lg">
            Tea Amo started with one question: why can't boba be made with love AND real ingredients?
            Spoiler: it can. And we're proving it every day.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionReveal>
            <h2 className="font-display text-3xl font-bold text-center mb-12">Our Journey</h2>
          </SectionReveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <SectionReveal key={item.year} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row items-start gap-4 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-1.5" />
                    <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                      <span className="font-display text-sm font-bold text-primary">{item.year}</span>
                      <h3 className="font-display font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-body mt-1">{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="font-display text-3xl font-bold text-center mb-12">What We Stand For</h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-card text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-green-light flex items-center justify-center mx-auto mb-4">
                    <v.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
