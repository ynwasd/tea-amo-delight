import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import DrinkCard from "@/components/shared/DrinkCard";
import SectionReveal from "@/components/shared/SectionReveal";
import OrderModal from "@/components/shared/OrderModal";
import { menuItems, categories, type MenuCategory } from "@/data/menu";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [orderOpen, setOrderOpen] = useState(false);

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCategory = activeCategory === "all" || item.category === activeCategory;
      const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <Layout>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">Our Menu 🧋</h1>
          <p className="text-muted-foreground font-body max-w-md mx-auto mb-8">
            From classic milk teas to wild seasonal drops — there's a Tea Amo for everyone.
          </p>

          {/* Search */}
          <div className="max-w-sm mx-auto relative mb-8">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search drinks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 font-body"
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-display font-semibold transition-colors ${
                activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-muted"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-display font-semibold transition-colors ${
                  activeCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground font-body py-12">No drinks found. Try a different search!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((item, i) => (
                <SectionReveal key={item.id} delay={i * 0.05}>
                  <DrinkCard item={item} />
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-muted rounded-2xl p-6 text-center">
            <p className="text-xs text-muted-foreground font-body">
              ⚠️ Allergen Notice: Our drinks may contain dairy, soy, and gluten. Caffeine levels vary.
              Please ask our team about specific allergen or nutrition information.
            </p>
          </div>
        </div>
      </section>

      {/* Persistent CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button size="lg" onClick={() => setOrderOpen(true)} className="font-display shadow-button rounded-full">
          🧋 Order Now
        </Button>
      </div>

      <OrderModal open={orderOpen} onOpenChange={setOrderOpen} />
    </Layout>
  );
};

export default MenuPage;
