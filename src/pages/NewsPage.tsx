import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import SectionReveal from "@/components/shared/SectionReveal";
import { promos } from "@/data/promos";

const NewsPage = () => {
  return (
    <Layout>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">News & Promos 📰</h1>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Stay up to date with the latest from Tea Amo.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promos.map((promo, i) => (
              <SectionReveal key={promo.id} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-green-light text-primary font-display text-xs">{promo.tag}</Badge>
                    <span className="text-xs text-muted-foreground font-body">
                      {new Date(promo.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-bold mb-2">{promo.title}</h2>
                  <p className="text-sm text-muted-foreground font-body flex-1 leading-relaxed">{promo.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
