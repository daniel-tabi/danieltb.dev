import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export function ProjectCard({ image, title, description, tags }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-card border border-border hover-lift cursor-pointer">
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-lg font-display font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
