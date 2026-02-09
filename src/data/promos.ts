export interface Promo {
  id: string;
  title: string;
  description: string;
  date: string;
  tag: string;
}

export const promos: Promo[] = [
  {
    id: "instagram-discount",
    title: "Get 20% Off — Tag Us on Instagram! 📸",
    description: "Order your favorite drink, snap a pic, and tag @homeofteaamo on Instagram to get 20% off!",
    date: "2026-02-01",
    tag: "Promotion",
  },
  {
    id: "sakura-launch",
    title: "New: Sakura Blossom Latte 🌸",
    description: "Our limited-edition spring flavor is here. Cherry blossom meets creamy latte perfection.",
    date: "2026-02-05",
    tag: "New Drink",
  },
  {
    id: "rewards-double",
    title: "Double Points Weekend",
    description: "Earn 2x reward points on all orders this weekend. Stack those sips!",
    date: "2026-01-28",
    tag: "Rewards",
  },
];
