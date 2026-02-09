import macchiato from "@/assets/drinks/macchiato.jpg";
import espresso from "@/assets/drinks/espresso.jpg";
import warmLatte from "@/assets/drinks/warm-latte.jpg";
import classicMilkTea from "@/assets/drinks/classic-milk-tea.jpg";
import mangoFruitTea from "@/assets/drinks/mango-fruit-tea.jpg";
import taroMilkTea from "@/assets/drinks/taro-milk-tea.jpg";
import matchaLatte from "@/assets/drinks/matcha-latte.jpg";
import brownSugarMilk from "@/assets/drinks/brown-sugar-milk.jpg";
import strawberrySlush from "@/assets/drinks/strawberry-slush.jpg";
import specialTea from "@/assets/drinks/special-tea.jpg";
import smoothie from "@/assets/drinks/smoothie.jpg";
import frappe from "@/assets/drinks/frappe.jpg";
import cakes from "@/assets/drinks/cakes.jpg";
import snacks from "@/assets/drinks/snacks.jpg";
import seaSaltLatte from "@/assets/drinks/sea-salt-latte.jpg";
import specialBlended from "@/assets/drinks/special-blended.jpg";

export type MenuCategory =
  | "macchiato"
  | "others"
  | "espresso"
  | "warm-me-up"
  | "basic-teas"
  | "flavored-black-tea"
  | "flavored-green-tea"
  | "special-tea"
  | "winter-melon-tea"
  | "flavored-oolong-tea"
  | "cakes"
  | "basic-milk-tea"
  | "flavored-milk-tea"
  | "special-milk-tea"
  | "smoothie"
  | "frappes"
  | "special-drinks"
  | "sea-salt-latte"
  | "snacks"
  | "special-blended";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  image: string;
  tags: string[];
  price: string;
  featured?: boolean;
  isNew?: boolean;
}

export const categories: { id: MenuCategory; label: string }[] = [
  { id: "macchiato", label: "Macchiato" },
  { id: "espresso", label: "Espresso" },
  { id: "warm-me-up", label: "Warm Me Up" },
  { id: "basic-teas", label: "Basic Teas" },
  { id: "flavored-black-tea", label: "Flavored Black Tea" },
  { id: "flavored-green-tea", label: "Flavored Green Tea" },
  { id: "flavored-oolong-tea", label: "Flavored Oolong Tea" },
  { id: "winter-melon-tea", label: "Winter Melon Tea" },
  { id: "special-tea", label: "Special Tea" },
  { id: "basic-milk-tea", label: "Basic Milk Tea" },
  { id: "flavored-milk-tea", label: "Flavored Milk Tea" },
  { id: "special-milk-tea", label: "Special Milk Tea" },
  { id: "smoothie", label: "Smoothie" },
  { id: "frappes", label: "Frappes" },
  { id: "special-blended", label: "Special Blended" },
  { id: "special-drinks", label: "Special Drinks" },
  { id: "sea-salt-latte", label: "Sea Salt Latte" },
  { id: "cakes", label: "Cakes" },
  { id: "snacks", label: "Snacks" },
  { id: "others", label: "Others" },
];

export const menuItems: MenuItem[] = [
  // ── Macchiato ──
  { id: "iced-hazelnut-macchiato", name: "Iced Hazelnut Macchiato", description: "Creamy espresso layered with rich hazelnut and milk over ice.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "hot-caramel-macchiato", name: "Hot Caramel Macchiato", description: "Velvety steamed milk marked with espresso and sweet caramel drizzle.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "iced-caramel-macchiato", name: "Iced Caramel Macchiato", description: "Espresso poured over iced milk with a golden caramel finish.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.00", featured: true },
  { id: "hot-chocolat-macchiato", name: "Hot Chocolat Macchiato", description: "Rich chocolate meets bold espresso in a warm, comforting cup.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "iced-chocolat-macchiato", name: "Iced Chocolat Macchiato", description: "Chilled chocolate espresso layers for a refreshing pick-me-up.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "hot-hazelnut-macchiato", name: "Hot Hazelnut Macchiato", description: "Warm espresso with nutty hazelnut flavor and steamed milk.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "iced-horchata-macchiato", name: "Iced Horchata Macchiato", description: "Sweet cinnamon horchata layered with bold iced espresso.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "hot-lavender-macchiato", name: "Hot Lavender Macchiato", description: "Floral lavender and espresso create a calming, aromatic treat.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "iced-lavender-macchiato", name: "Iced Lavender Macchiato", description: "Cool and floral — lavender espresso over ice.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "hot-spain-macchiato", name: "Hot Spain Macchiato", description: "A premium macchiato with a unique Spanish-inspired flavor twist.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.50" },
  { id: "iced-spain-macchiato", name: "Iced Spain Macchiato", description: "Bold and smooth Spanish-inspired macchiato served over ice.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.50" },
  { id: "hot-horchata-macchiato", name: "Hot Horchata Macchiato", description: "Warm cinnamon-kissed horchata paired with rich espresso.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "hot-vanilla-macchiato", name: "Hot Vanilla Macchiato", description: "Classic vanilla sweetness with espresso and steamed milk.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "iced-vanilla-macchiato", name: "Iced Vanilla Macchiato", description: "Smooth vanilla espresso served chilled over ice.", category: "macchiato", image: macchiato, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },

  // ── Espresso ──
  { id: "hot-latte", name: "Hot Latte", description: "Smooth espresso with perfectly steamed milk.", category: "espresso", image: espresso, tags: ["Caffeine", "Contains Dairy"], price: "$5.75" },
  { id: "iced-latte", name: "Iced Latte", description: "Espresso and milk served refreshingly over ice.", category: "espresso", image: espresso, tags: ["Caffeine", "Contains Dairy"], price: "$5.75" },
  { id: "hot-cappuccino", name: "Hot Cappuccino", description: "Bold espresso topped with thick, frothy steamed milk.", category: "espresso", image: espresso, tags: ["Caffeine", "Contains Dairy"], price: "$5.75" },
  { id: "iced-cappuccino", name: "Iced Cappuccino", description: "Light and frothy cappuccino served over ice.", category: "espresso", image: espresso, tags: ["Caffeine", "Contains Dairy"], price: "$5.75" },
  { id: "cold-brew", name: "Cold Brew", description: "Slow-steeped for 24 hours — ultra smooth and naturally sweet.", category: "espresso", image: espresso, tags: ["High Caffeine"], price: "$5.50", featured: true },
  { id: "hot-americano", name: "Hot Americano", description: "Rich espresso with hot water for a clean, bold flavor.", category: "espresso", image: espresso, tags: ["Caffeine"], price: "$5.25" },
  { id: "iced-americano", name: "Iced Americano", description: "Crisp and refreshing espresso diluted with cold water over ice.", category: "espresso", image: espresso, tags: ["Caffeine"], price: "$5.25" },
  { id: "hot-single-espresso", name: "Hot Single Espresso Shot", description: "A concentrated burst of bold espresso.", category: "espresso", image: espresso, tags: ["High Caffeine"], price: "$3.00" },
  { id: "iced-single-espresso", name: "Iced Single Espresso Shot", description: "A single espresso shot poured over ice.", category: "espresso", image: espresso, tags: ["High Caffeine"], price: "$3.00" },
  { id: "hot-double-espresso", name: "Hot Double Espresso Shot", description: "Double the intensity — pure espresso power.", category: "espresso", image: espresso, tags: ["High Caffeine"], price: "$3.75" },
  { id: "iced-double-espresso", name: "Iced Double Espresso Shot", description: "Two shots of espresso served bold over ice.", category: "espresso", image: espresso, tags: ["High Caffeine"], price: "$3.75" },

  // ── Warm Me Up ──
  { id: "hot-chocolat-latte", name: "Hot Chocolat Latte", description: "Rich, creamy chocolate latte to warm your soul.", category: "warm-me-up", image: warmLatte, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "hot-horchata-latte", name: "Hot Horchata Latte", description: "Warm cinnamon horchata blended with smooth espresso.", category: "warm-me-up", image: warmLatte, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "hot-taro-latte", name: "Hot Taro Latte", description: "Velvety taro root steamed into a gorgeous purple latte.", category: "warm-me-up", image: warmLatte, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },

  // ── Basic Teas ──
  { id: "hot-green-tea", name: "Hot Green Tea", description: "Light and refreshing pure green tea.", category: "basic-teas", image: classicMilkTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.00" },
  { id: "iced-green-tea", name: "Iced Green Tea", description: "Crisp green tea served chilled over ice.", category: "basic-teas", image: classicMilkTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.00" },
  { id: "hot-oolong-tea", name: "Hot Oolong Tea", description: "Aromatic oolong tea with a smooth, toasty finish.", category: "basic-teas", image: classicMilkTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.00" },
  { id: "iced-oolong-tea", name: "Iced Oolong Tea", description: "Refreshing iced oolong with a delicate floral note.", category: "basic-teas", image: classicMilkTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.00" },
  { id: "hot-black-tea", name: "Hot Black Tea", description: "Classic bold black tea — simple and satisfying.", category: "basic-teas", image: classicMilkTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.00" },
  { id: "iced-black-tea", name: "Iced Black Tea", description: "Strong black tea cooled down over ice.", category: "basic-teas", image: classicMilkTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.00" },

  // ── Flavored Black Tea ──
  { id: "hot-honey-black-tea", name: "Hot Honey Black Tea", description: "Sweet honey drizzled into rich black tea warmth.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$6.00" },
  { id: "iced-honey-black-tea", name: "Iced Honey Black Tea", description: "Refreshing iced black tea kissed with honey.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$6.00" },
  { id: "hot-lychee-black-tea", name: "Hot Lychee Black Tea", description: "Floral lychee flavor meets bold black tea.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-lychee-black-tea", name: "Iced Lychee Black Tea", description: "Tropical lychee black tea served over ice.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-mango-black-tea", name: "Hot Mango Black Tea", description: "Juicy mango infused into warm black tea.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-mango-black-tea", name: "Iced Mango Black Tea", description: "Tropical mango and bold black tea over ice.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$6.00" },
  { id: "hot-passion-fruit-black-tea", name: "Hot Passion Fruit Black Tea", description: "Tangy passion fruit meets warm black tea.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-passion-fruit-black-tea", name: "Iced Passion Fruit Black Tea", description: "Bold and fruity — passion fruit iced black tea.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-peach-black-tea", name: "Hot Peach Black Tea", description: "Fragrant peach steeped into smooth black tea.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-peach-black-tea", name: "Iced Peach Black Tea", description: "Sweet peach and black tea served chilled.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-strawberry-black-tea", name: "Hot Strawberry Black Tea", description: "Berry sweetness blended with bold black tea.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-strawberry-black-tea", name: "Iced Strawberry Black Tea", description: "Iced strawberry-infused black tea refreshment.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-osmanthus-black-tea", name: "Hot Osmanthus Black Tea", description: "Delicate osmanthus flower aroma in warm black tea.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-osmanthus-black-tea", name: "Iced Osmanthus Black Tea", description: "Floral osmanthus black tea served over ice.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-lemon-black-tea", name: "Hot Lemon Black Tea", description: "Zesty lemon brightens rich black tea.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-lemon-black-tea", name: "Iced Lemon Black Tea", description: "Classic lemon iced tea — crisp and refreshing.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-rose-black-tea", name: "Hot Rose Black Tea", description: "Romantic rose petals steeped with black tea.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-rose-black-tea", name: "Iced Rose Black Tea", description: "Floral rose black tea served beautifully over ice.", category: "flavored-black-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },

  // ── Flavored Green Tea ──
  { id: "hot-honey-green-tea", name: "Hot Honey Green Tea", description: "Light green tea sweetened with natural honey.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-honey-green-tea", name: "Iced Honey Green Tea", description: "Refreshing honey green tea over ice.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-lychee-green-tea", name: "Hot Lychee Green Tea", description: "Sweet lychee paired with delicate green tea.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-lychee-green-tea", name: "Iced Lychee Green Tea", description: "Tropical lychee green tea served cold.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-mango-green-tea", name: "Hot Mango Green Tea", description: "Juicy mango infused into warm green tea.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-mango-green-tea", name: "Iced Mango Green Tea", description: "A tropical mango and green tea refresher.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-passion-fruit-green-tea", name: "Hot Passion Fruit Green Tea", description: "Tangy passion fruit meets light green tea.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-passion-fruit-green-tea", name: "Iced Passion Fruit Green Tea", description: "Bright and bold — iced passion fruit green tea.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-peach-green-tea", name: "Hot Peach Green Tea", description: "Fragrant peach steeped into smooth green tea.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-peach-green-tea", name: "Iced Peach Green Tea", description: "Sweet peach green tea served chilled.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-strawberry-green-tea", name: "Hot Strawberry Green Tea", description: "Berry-kissed green tea served warm.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-strawberry-green-tea", name: "Iced Strawberry Green Tea", description: "Strawberry-infused iced green tea refreshment.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-lemon-green-tea", name: "Hot Lemon Green Tea", description: "Bright lemon and light green tea — simple and clean.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-lemon-green-tea", name: "Iced Lemon Green Tea", description: "Classic lemon green iced tea.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "osmanthus-green-tea", name: "Osmanthus Green Tea", description: "Delicate osmanthus flower with green tea harmony.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-rose-green-tea", name: "Hot Rose Green Tea", description: "Romantic rose petals steeped with green tea.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-rose-green-tea", name: "Iced Rose Green Tea", description: "Floral rose green tea served over ice.", category: "flavored-green-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },

  // ── Special Tea ──
  { id: "blue-27-tea", name: "Blue 27 Tea", description: "A mesmerizing blue tea with a stunning color-changing twist.", category: "special-tea", image: specialTea, tags: ["Caffeine", "Dairy-Free"], price: "$7.50", featured: true, isNew: true },
  { id: "galaxy-sunrise-tea", name: "Galaxy Sunrise Tea", description: "A cosmic blend of colors and flavors — out of this world!", category: "special-tea", image: specialTea, tags: ["Caffeine", "Dairy-Free"], price: "$7.50", isNew: true },
  { id: "summer-breeze-tea", name: "Summer Breeze Tea", description: "Light and tropical — like a summer breeze in a cup.", category: "special-tea", image: specialTea, tags: ["Caffeine", "Dairy-Free"], price: "$7.50" },
  { id: "white-peach-oolong-sea-salt", name: "White Peach Oolong Tea With Sea Salt Cream", description: "Fragrant peach oolong crowned with velvety sea salt cream.", category: "special-tea", image: specialTea, tags: ["Caffeine", "Contains Dairy"], price: "$7.50" },
  { id: "rainbow-tea", name: "Rainbow Tea", description: "A vibrant rainbow of flavors — as beautiful as it tastes!", category: "special-tea", image: specialTea, tags: ["Caffeine", "Dairy-Free"], price: "$7.50", isNew: true },
  { id: "house-fruit-tea", name: "House Fruit Tea", description: "Our signature blend of fresh fruits and premium tea.", category: "special-tea", image: specialTea, tags: ["Caffeine", "Dairy-Free"], price: "$7.50" },

  // ── Winter Melon Tea ──
  { id: "hot-winter-melon-black-tea", name: "Hot Winter Melon Black Tea", description: "Sweet winter melon and bold black tea combined.", category: "winter-melon-tea", image: classicMilkTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-winter-melon-tea", name: "Hot Winter Melon Tea", description: "Naturally sweet winter melon tea served warm.", category: "winter-melon-tea", image: classicMilkTea, tags: ["Caffeine-Free", "Dairy-Free"], price: "$5.50" },
  { id: "iced-winter-melon-tea", name: "Iced Winter Melon Tea", description: "Cool and sweet winter melon tea over ice.", category: "winter-melon-tea", image: classicMilkTea, tags: ["Caffeine-Free", "Dairy-Free"], price: "$5.50" },

  // ── Flavored Oolong Tea ──
  { id: "hot-mango-oolong-tea", name: "Hot Mango Oolong Tea", description: "Tropical mango meets toasty oolong tea.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-mango-oolong-tea", name: "Iced Mango Oolong Tea", description: "Refreshing mango oolong served over ice.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-passion-fruit-oolong", name: "Hot Passion Fruit Oolong Tea", description: "Tangy passion fruit with smooth oolong warmth.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-passion-fruit-oolong", name: "Iced Passion Fruit Oolong Tea", description: "Bold passion fruit oolong chilled over ice.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-peach-oolong-tea", name: "Hot Peach Oolong Tea", description: "Fragrant peach steeped into toasty oolong.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-peach-oolong-tea", name: "Iced Peach Oolong Tea", description: "Delicate peach oolong served refreshingly cold.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-strawberry-oolong", name: "Hot Strawberry Oolong Tea", description: "Berry sweetness with smooth oolong warmth.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-strawberry-oolong", name: "Iced Strawberry Oolong Tea", description: "Strawberry-infused oolong over ice.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-honey-oolong-tea", name: "Hot Honey Oolong Tea", description: "Natural honey drizzled into aromatic oolong.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-honey-oolong-tea", name: "Iced Honey Oolong Tea", description: "Sweet honey oolong served chilled.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-lychee-oolong-tea", name: "Hot Lychee Oolong Tea", description: "Floral lychee paired with toasty oolong.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-lychee-oolong-tea", name: "Iced Lychee Oolong Tea", description: "Tropical lychee oolong served over ice.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-lemon-oolong-tea", name: "Hot Lemon Oolong Tea", description: "Zesty lemon with smooth oolong warmth.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-lemon-oolong-tea", name: "Iced Lemon Oolong Tea", description: "Bright lemon oolong chilled to perfection.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "hot-osmanthus-oolong", name: "Hot Osmanthus Oolong Tea", description: "Delicate osmanthus flower with smooth oolong.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },
  { id: "iced-osmanthus-oolong", name: "Iced Osmanthus Oolong Tea", description: "Floral osmanthus oolong served over ice.", category: "flavored-oolong-tea", image: mangoFruitTea, tags: ["Caffeine", "Dairy-Free"], price: "$5.50" },

  // ── Cakes ──
  { id: "cheesecake", name: "Cheesecake", description: "Rich and creamy classic cheesecake — the perfect side to any drink.", category: "cakes", image: cakes, tags: ["Contains Dairy"], price: "$7.00" },
  { id: "tiramisu", name: "Tiramisu", description: "Italian-inspired coffee-soaked layers of mascarpone goodness.", category: "cakes", image: cakes, tags: ["Caffeine", "Contains Dairy"], price: "$8.00" },

  // ── Basic Milk Tea ──
  { id: "milky-way", name: "Milky Way", description: "Milk slush with a dash of honey. Comes with brown sugar around the cup, boba, AND egg pudding!", category: "basic-milk-tea", image: brownSugarMilk, tags: ["Caffeine-Free", "Contains Dairy"], price: "$5.50", featured: true },
  { id: "hot-royal-milk-tea", name: "Hot Royal Milk Tea", description: "Premium royal milk tea — rich, creamy, and perfectly balanced.", category: "basic-milk-tea", image: classicMilkTea, tags: ["Caffeine", "Contains Dairy"], price: "$6.25" },
  { id: "iced-royal-milk-tea", name: "Iced Royal Milk Tea", description: "Royal milk tea served refreshingly over ice.", category: "basic-milk-tea", image: classicMilkTea, tags: ["Caffeine", "Contains Dairy"], price: "$6.25" },

  // ── Flavored Milk Tea ──
  { id: "winter-melon-milk-tea", name: "Winter Melon Milk Tea", description: "Sweet winter melon blended into creamy milk tea.", category: "flavored-milk-tea", image: classicMilkTea, tags: ["Caffeine", "Contains Dairy"], price: "$6.50" },
  { id: "almond-green-milk-tea", name: "Almond Green Milk Tea", description: "Nutty almond and light green tea milk tea fusion.", category: "flavored-milk-tea", image: classicMilkTea, tags: ["Caffeine", "Contains Dairy"], price: "$6.50" },
  { id: "almond-milk-tea", name: "Almond Milk Tea", description: "Smooth almond flavor in a classic milk tea base.", category: "flavored-milk-tea", image: classicMilkTea, tags: ["Caffeine", "Contains Dairy"], price: "$6.50" },
  { id: "jasmine-milk-tea", name: "Jasmine Milk Tea", description: "Fragrant jasmine tea blended with creamy milk.", category: "flavored-milk-tea", image: classicMilkTea, tags: ["Caffeine", "Contains Dairy"], price: "$6.25" },
  { id: "matcha-milk-tea", name: "Matcha Milk Tea", description: "Premium matcha whisked into creamy milk tea perfection.", category: "flavored-milk-tea", image: matchaLatte, tags: ["Caffeine", "Contains Dairy"], price: "$6.50", featured: true },
  { id: "taro-milk-tea", name: "Taro Milk Tea", description: "Velvety taro root blended into a gorgeous purple milk tea.", category: "flavored-milk-tea", image: taroMilkTea, tags: ["Caffeine-Free", "Contains Dairy"], price: "$6.50", featured: true },
  { id: "thai-milk-tea", name: "Thai Milk Tea", description: "Bold and sweet Thai-style orange milk tea.", category: "flavored-milk-tea", image: classicMilkTea, tags: ["Caffeine", "Contains Dairy"], price: "$6.25" },
  { id: "hokkaido-milk-tea", name: "Hokkaido Milk Tea", description: "Rich Hokkaido-style milk tea with a caramel-like sweetness.", category: "flavored-milk-tea", image: brownSugarMilk, tags: ["Caffeine", "Contains Dairy"], price: "$6.50" },
  { id: "hokkaido-matcha-milk-tea", name: "Hokkaido Matcha Milk Tea", description: "Creamy Hokkaido milk meets earthy matcha perfection.", category: "flavored-milk-tea", image: matchaLatte, tags: ["Caffeine", "Contains Dairy"], price: "$6.50" },
  { id: "okinawa-milk-tea", name: "Okinawa Milk Tea", description: "Brown sugar Okinawa-style milk tea — rich and toasty.", category: "flavored-milk-tea", image: brownSugarMilk, tags: ["Caffeine", "Contains Dairy"], price: "$6.50" },
  { id: "lavender-milk-tea", name: "Lavender Milk Tea", description: "Floral lavender infused into creamy milk tea bliss.", category: "flavored-milk-tea", image: classicMilkTea, tags: ["Caffeine", "Contains Dairy"], price: "$6.50" },

  // ── Special Milk Tea ──
  { id: "special-jasmine-milk-tea", name: "Jasmine Milk Tea", description: "Sea salt or tiramisu. Premium jasmine milk tea with your choice of topping.", category: "special-milk-tea", image: seaSaltLatte, tags: ["Caffeine", "Contains Dairy"], price: "$7.50" },
  { id: "potted-plant-milk-tea", name: "Potted Plant Milk Tea", description: "An Instagram-worthy milk tea that looks like a tiny potted plant!", category: "special-milk-tea", image: classicMilkTea, tags: ["Caffeine", "Contains Dairy"], price: "$8.00", isNew: true },
  { id: "ceylon-milk-tea", name: "Ceylon Milk Tea", description: "Sea salt or tiramisu. Rich Ceylon black tea with premium toppings.", category: "special-milk-tea", image: seaSaltLatte, tags: ["Caffeine", "Contains Dairy"], price: "$7.50" },
  { id: "uji-matcha-milk-tea-sea-salt", name: "Uji Matcha Milk Tea And Sweet Sea Salt", description: "Premium Uji matcha with sweet sea salt cream.", category: "special-milk-tea", image: matchaLatte, tags: ["Caffeine", "Contains Dairy"], price: "$8.00" },
  { id: "taro-milk-taro-mud", name: "Taro Milk With Taro Mud", description: "Extra taro goodness — creamy taro milk with chunky taro mud.", category: "special-milk-tea", image: taroMilkTea, tags: ["Caffeine-Free", "Contains Dairy"], price: "$7.50" },
  { id: "osmanthus-oolong-milk-tea", name: "Osmanthus Oolong Milk Tea", description: "Sea salt or tiramisu. Floral osmanthus oolong with premium toppings.", category: "special-milk-tea", image: seaSaltLatte, tags: ["Caffeine", "Contains Dairy"], price: "$7.50" },
  { id: "uji-matcha-tea-fruit", name: "Uji Matcha Tea", description: "Strawberry or mango. Premium Uji matcha with fresh fruit.", category: "special-milk-tea", image: matchaLatte, tags: ["Caffeine", "Dairy-Free"], price: "$8.00" },

  // ── Smoothie ──
  { id: "almond-smoothie", name: "Almond Smoothie", description: "Creamy almond blended into a thick, frosty smoothie.", category: "smoothie", image: smoothie, tags: ["Caffeine-Free", "Dairy-Free"], price: "$6.75" },
  { id: "mango-smoothie", name: "Mango Smoothie", description: "Tropical mango blended to frozen perfection.", category: "smoothie", image: smoothie, tags: ["Caffeine-Free", "Dairy-Free"], price: "$6.50", featured: true },
  { id: "passion-fruit-smoothie", name: "Passion Fruit Smoothie", description: "Tangy passion fruit in a thick, frosty blend.", category: "smoothie", image: smoothie, tags: ["Caffeine-Free", "Dairy-Free"], price: "$6.50" },
  { id: "peach-smoothie", name: "Peach Smoothie", description: "Sweet peach blended into smooth, icy perfection.", category: "smoothie", image: smoothie, tags: ["Caffeine-Free", "Dairy-Free"], price: "$6.50" },
  { id: "strawberry-smoothie", name: "Strawberry Smoothie", description: "Classic strawberry smoothie — fruity and refreshing.", category: "smoothie", image: strawberrySlush, tags: ["Caffeine-Free", "Dairy-Free"], price: "$6.50" },
  { id: "taro-smoothie", name: "Taro Smoothie", description: "Purple taro blended into a creamy frozen treat.", category: "smoothie", image: taroMilkTea, tags: ["Caffeine-Free", "Dairy-Free"], price: "$6.75" },

  // ── Frappes ──
  { id: "iced-mocha-frappe", name: "Iced Mocha Frappe", description: "Rich mocha and espresso blended into icy perfection.", category: "frappes", image: frappe, tags: ["High Caffeine", "Contains Dairy"], price: "$6.75" },
  { id: "iced-uji-matcha-frappe", name: "Iced Uji Matcha Frappe", description: "Crème brûlée. Premium Uji matcha blended frozen with a sweet caramelized top.", category: "frappes", image: frappe, tags: ["Caffeine", "Contains Dairy"], price: "$7.25" },

  // ── Special Drinks ──
  { id: "taro-hokkaido", name: "Taro & Hokkaido", description: "Sweet sea salt. Creamy taro meets rich Hokkaido milk with sea salt cream.", category: "special-drinks", image: taroMilkTea, tags: ["Caffeine-Free", "Contains Dairy"], price: "$7.50" },
  { id: "oreo-vanilla", name: "Oreo & Vanilla", description: "Crème brûlée. Crunchy Oreo and vanilla blended with a caramelized finish.", category: "special-drinks", image: frappe, tags: ["Caffeine-Free", "Contains Dairy"], price: "$7.75" },

  // ── Sea Salt Latte ──
  { id: "sea-salt-black-tea", name: "Sea Salt Black Tea", description: "Bold black tea topped with creamy sea salt foam.", category: "sea-salt-latte", image: seaSaltLatte, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "sea-salt-caramel-candy-coffee", name: "Sea Salt Caramel Candy Coffee", description: "Sweet caramel coffee crowned with sea salt cream.", category: "sea-salt-latte", image: seaSaltLatte, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "sea-salt-coffee", name: "Sea Salt Coffee", description: "Rich coffee with a layer of velvety sea salt cream.", category: "sea-salt-latte", image: seaSaltLatte, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "sea-salt-green-tea", name: "Sea Salt Green Tea", description: "Light green tea with creamy sea salt foam on top.", category: "sea-salt-latte", image: seaSaltLatte, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },
  { id: "sea-salt-oolong-tea", name: "Sea Salt Oolong Tea", description: "Toasty oolong tea crowned with smooth sea salt cream.", category: "sea-salt-latte", image: seaSaltLatte, tags: ["Caffeine", "Contains Dairy"], price: "$6.00" },

  // ── Snacks ──
  { id: "popcorn-chicken", name: "Popcorn Chicken", description: "Crispy bite-sized chicken pieces — the perfect tea-time snack!", category: "snacks", image: snacks, tags: [], price: "$9.00" },
  { id: "sweet-potato-fries", name: "Sweet Potato Fries", description: "Golden sweet potato fries — crispy outside, soft inside.", category: "snacks", image: snacks, tags: [], price: "$6.50" },
  { id: "cajun-fries", name: "Cajun Fries", description: "Seasoned Cajun-spiced fries with a kick.", category: "snacks", image: snacks, tags: [], price: "$6.50" },
  { id: "house-tater-tots", name: "House Tater Tots", description: "Black pepper, cheese, meat, parsley — loaded and delicious.", category: "snacks", image: snacks, tags: [], price: "$9.00" },

  // ── Special Blended ──
  { id: "kissing-rose", name: "Kissing Rose", description: "Strawberry and rose smoothie blended separately with sea salt in the middle.", category: "special-blended", image: specialBlended, tags: ["Caffeine-Free", "Contains Dairy"], price: "$7.75", featured: true, isNew: true },
  { id: "peach-strawberry", name: "Peach & Strawberry", description: "Sweet sea salt. A dreamy peach and strawberry blended duo.", category: "special-blended", image: specialBlended, tags: ["Caffeine-Free", "Contains Dairy"], price: "$7.50" },
  { id: "strawberry-mango", name: "Strawberry And Mango", description: "Sweet sea salt. Tropical mango meets sweet strawberry blend.", category: "special-blended", image: specialBlended, tags: ["Caffeine-Free", "Contains Dairy"], price: "$7.50" },
  { id: "peach-mango", name: "Peach & Mango", description: "Sweet sea salt. A fruity fusion of peach and mango blended together.", category: "special-blended", image: specialBlended, tags: ["Caffeine-Free", "Contains Dairy"], price: "$7.50" },

  // ── Others ──
  { id: "hot-milk", name: "Hot Milk", description: "Simple and comforting — warm milk served fresh.", category: "others", image: brownSugarMilk, tags: ["Caffeine-Free", "Contains Dairy"], price: "$3.50" },
  { id: "iced-milk", name: "Iced Milk", description: "Fresh cold milk served over ice.", category: "others", image: brownSugarMilk, tags: ["Caffeine-Free", "Contains Dairy"], price: "$3.50" },
  { id: "hot-soy-milk", name: "Hot Soy Milk", description: "Warm plant-based soy milk — dairy-free and delicious.", category: "others", image: brownSugarMilk, tags: ["Caffeine-Free", "Dairy-Free"], price: "$3.50" },
  { id: "iced-soy-milk", name: "Iced Soy Milk", description: "Chilled soy milk served over ice.", category: "others", image: brownSugarMilk, tags: ["Caffeine-Free", "Dairy-Free"], price: "$3.50" },
];
