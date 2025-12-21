interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
}

const sublabels: Record<string, string> = {
  "Weeks to MVP": "Average delivery timeline",
  "Founder-Led Builds": "Direct collaboration with me",
  "Development Approach": "Modern AI-powered workflow"
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center p-6 md:p-8">
      <p className="text-4xl md:text-5xl font-display font-bold gradient-text mb-3">
        {value}
      </p>
      <p className="text-foreground font-semibold mb-1">
        {label}
      </p>
      <p className="text-sm text-muted-foreground">
        {sublabels[label] || ""}
      </p>
    </div>
  );
}
