import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group p-6 md:p-8 bg-card rounded-2xl border border-border hover-lift cursor-pointer">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-display font-bold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
        Learn more
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}
