import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSignup = ({ variant = "default" }: { variant?: "default" | "footer" }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("You're in! Welcome to the Tea Amo fam 🎉");
    setEmail("");
  };

  const isFooter = variant === "footer";

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 text-sm ${
          isFooter
            ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
            : ""
        }`}
      />
      <Button
        type="submit"
        variant={isFooter ? "secondary" : "default"}
        className="font-display text-sm shrink-0"
      >
        Join
      </Button>
    </form>
  );
};

export default NewsletterSignup;
