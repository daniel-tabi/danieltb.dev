interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Number Badge */}
      <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
        <span className="text-xl font-display font-bold text-primary-foreground">{number}</span>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-display font-bold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed max-w-xs">
        {description}
      </p>
      
      {/* Connector Line (hidden on last item and mobile) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-primary/30 to-accent/30" />
      )}
    </div>
  );
}
