import { Link } from "react-router-dom";
import { ArrowRight, Star, Gift, Sparkles, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import DrinkCard from "@/components/shared/DrinkCard";
import SectionReveal from "@/components/shared/SectionReveal";
import NewsletterSignup from "@/components/shared/NewsletterSignup";
import OrderModal from "@/components/shared/OrderModal";
import { menuItems } from "@/data/menu";
import { promos } from "@/data/promos";
import heroBg from "@/assets/hero-bg.jpg";
import { useState } from "react";

const featuredDrinks = menuItems.filter((i) => i.featured);

const Index = () => {
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <Layout>
      {/* SEO */}
      <title>Tea Amo — Crafted Boba & Fruit Tea</title>
      <meta name="description" content="Tea Amo serves handcrafted bubble tea, fruit tea, and slushes made with real ingredients. Order online or visit us today!" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block font-display text-sm font-semibold text-primary bg-green-light px-3 py-1 rounded-full mb-4">
                🧋 Now Open in San Marcos
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
                Sip Into
                <br />
                <span className="text-gradient">Something Amazing</span>
              </h1>
              <p className="text-lg text-muted-foreground font-body max-w-md mb-8 leading-relaxed">
                Handcrafted boba, fresh fruit teas, and creamy lattes made with love.
                Your new favorite sip is waiting.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" onClick={() => setOrderOpen(true)} className="font-display shadow-button text-base">
                  Order Online <ArrowRight size={18} className="ml-1" />
                </Button>
                <Button size="lg" variant="outline" asChild className="font-display text-base">
                  <Link to="/locations">Find a Store</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroBg}
                alt="Colorful bubble tea drinks arranged with fresh fruits"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-3 shadow-card animate-float">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <span className="text-xs font-semibold font-body">4.9 · 500+ reviews</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">Best Sellers 🔥</h2>
              <p className="text-muted-foreground font-body max-w-md mx-auto">
                The drinks everyone's obsessing over. Try one (or all six).
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDrinks.map((drink, i) => (
              <SectionReveal key={drink.id} delay={i * 0.1}>
                <DrinkCard item={drink} />
              </SectionReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild className="font-display">
              <Link to="/menu">View Full Menu <ArrowRight size={16} className="ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <SectionReveal>
            <Sparkles className="mx-auto mb-4 text-primary-foreground" size={32} />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-3">
              {promos[0]?.title}
            </h2>
            <p className="text-primary-foreground/80 font-body max-w-lg mx-auto mb-6 text-lg">
              {promos[0]?.description}
            </p>
            <Button size="lg" variant="secondary" asChild className="font-display shadow-button">
              <a href="https://www.instagram.com/homeofteaamo/" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} className="mr-2" /> Follow @homeofteaamo
              </a>
            </Button>
          </SectionReveal>
        </div>
      </section>

      {/* Student Discount */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card text-center">
              <span className="text-5xl mb-4 block">🎓</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">Students, This One's For You!</h2>
              <p className="text-muted-foreground font-body max-w-md mx-auto mb-6 text-lg leading-relaxed">
                Show us your student ID at checkout and get <span className="font-bold text-primary">10% off</span> your entire order. Every visit, every sip.
              </p>
              <Button size="lg" onClick={() => setOrderOpen(true)} className="font-display shadow-button">
                Order Now <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Rewards Teaser */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Gift size={40} className="text-primary mb-4" />
                <h2 className="font-display text-3xl font-bold mb-3">Tea Amo Rewards</h2>
                <p className="text-muted-foreground font-body mb-6 max-w-md leading-relaxed">
                  Earn points with every sip. Unlock free drinks, exclusive flavors, and birthday treats.
                  It's our way of saying "we love you too."
                </p>
                <Button asChild className="font-display shadow-button">
                  <Link to="/rewards">Join Now — It's Free <ArrowRight size={16} className="ml-1" /></Link>
                </Button>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { num: "1pt", label: "per $1 spent" },
                    { num: "50pts", label: "= free drink" },
                    { num: "2x", label: "birthday pts" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-green-light rounded-2xl p-4">
                      <div className="font-display text-2xl font-bold text-primary">{stat.num}</div>
                      <div className="text-xs text-muted-foreground font-body mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* What's New */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8 text-center">What's New ✨</h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promos.map((promo, i) => (
              <SectionReveal key={promo.id} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                  <span className="text-xs font-display font-semibold text-primary bg-green-light px-2 py-1 rounded-full">
                    {promo.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold mt-3 mb-2">{promo.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{promo.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10 text-center">What People Are Saying 💬</h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sofia M.", text: "The Brown Sugar Tiger is LIFE. I literally get one every day. No shame.", rating: 5 },
              { name: "Jake L.", text: "Best boba in San Marcos, hands down. The vibes in the store are immaculate too.", rating: 5 },
              { name: "Priya K.", text: "Finally a tea shop with real fruit teas! The Mango Sunshine is perfection. 🥭", rating: 5 },
            ].map((review, i) => (
              <SectionReveal key={review.name} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm font-body text-foreground mb-3 leading-relaxed italic">"{review.text}"</p>
                  <p className="text-xs font-display font-semibold text-muted-foreground">— {review.name}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Gallery Strip */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold mb-2">Follow the Flavor 📸</h2>
            <p className="text-muted-foreground font-body mb-4">
              <a href="https://www.instagram.com/homeofteaamo/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary font-semibold hover:underline">
                <Instagram size={16} /> @homeofteaamo
              </a>
              {" "}on Instagram & TikTok
            </p>
            <p className="text-xs text-muted-foreground font-body mb-8">Instagram feed widget coming soon — powered by EmbedSocial</p>
          </SectionReveal>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {featuredDrinks.map((drink) => (
              <motion.div
                key={drink.id}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-xl overflow-hidden"
              >
                <img src={drink.image} alt={drink.name} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl font-bold mb-3">Join the Tea Amo Fam 💌</h2>
            <p className="text-muted-foreground font-body mb-6">
              Be the first to know about new flavors, promos, and rewards. No spam, just sips.
            </p>
            <NewsletterSignup />
          </SectionReveal>
        </div>
      </section>

      <OrderModal open={orderOpen} onOpenChange={setOrderOpen} />
    </Layout>
  );
};

export default Index;
