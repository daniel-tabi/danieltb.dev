import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <div className="p-6 md:p-8 bg-card rounded-2xl border border-border hover-lift">
      <Quote className="w-8 h-8 text-primary/30 mb-4" />
      <p className="text-foreground leading-relaxed mb-6">
        "{quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
          <span className="text-sm font-bold text-primary-foreground">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}{company && `, ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
}
