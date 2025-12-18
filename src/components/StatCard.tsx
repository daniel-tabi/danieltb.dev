interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center p-6 md:p-8">
      <p className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
        {value}
      </p>
      <p className="text-muted-foreground font-medium">
        {label}
      </p>
    </div>
  );
}
