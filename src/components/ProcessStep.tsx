interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center px-4">
      {/* Number Badge with colored circle background */}
      <div className="relative mb-8">
        <div className="absolute inset-0 w-20 h-20 -translate-x-3 -translate-y-3 rounded-full bg-primary/10" />
        <div className="relative w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/20">
          <span className="text-xl font-display font-bold text-primary-foreground">{number}</span>
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-display font-bold text-foreground mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed max-w-xs">
        {description}
      </p>
      
      {/* Connector Line (hidden on last item and mobile) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-9 left-[calc(50%+48px)] w-[calc(100%-96px)] h-0.5">
          <div className="w-full h-full bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/50" />
        </div>
      )}
    </div>
  );
}
