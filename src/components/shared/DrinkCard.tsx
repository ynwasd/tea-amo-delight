import { motion } from "framer-motion";
import { MenuItem } from "@/data/menu";
import { Badge } from "@/components/ui/badge";

const DrinkCard = ({ item }: { item: MenuItem }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display font-semibold text-lg leading-tight">{item.name}</h3>
          <span className="font-display font-bold text-primary shrink-0">{item.price}</span>
        </div>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">{item.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.isNew && (
            <Badge className="bg-accent text-accent-foreground text-xs font-display">NEW</Badge>
          )}
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-body">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DrinkCard;
