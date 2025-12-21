import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <div className="p-6 md:p-8 bg-card rounded-2xl border border-border hover-lift h-full flex flex-col">
      <Quote className="w-8 h-8 text-primary/30 mb-4 flex-shrink-0" />
      <p className="text-foreground leading-relaxed mb-6 flex-grow">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center ring-2 ring-primary/20 ring-offset-2 ring-offset-card">
          <span className="text-base font-bold text-primary-foreground">
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
