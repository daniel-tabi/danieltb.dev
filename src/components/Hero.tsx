import { ButtonColorful } from "@/components/ui/button-colorful";
import { Rocket, Building2, Lightbulb, Sparkles } from "lucide-react";

const trustBadges = [
  { icon: Rocket, label: "Founders", delay: "0.5s" },
  { icon: Building2, label: "Startups", delay: "0.6s" },
  { icon: Lightbulb, label: "Indie Builders", delay: "0.7s" },
];

export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: "3s"
      }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-glow opacity-60" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center opacity-100">
          {/* Badge */}
          

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            I Build MVPs & SaaS Products That{" "}
            <span className="gradient-text">Ship Fast</span>
            {" "}— With AI.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            Helping founders, startups, and teams turn ideas into working software without over-engineering or delays.
          </p>

          {/* CTA */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="https://tally.so/r/WOr5xJ" target="_blank" rel="noopener noreferrer">
              <ButtonColorful label="Book a Consultation Call" className="h-16 px-12 text-lg" />
            </a>
          </div>

          {/* Social Proof - Enhanced */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <p className="text-sm text-muted-foreground font-medium">
                Trusted by
              </p>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm animate-fade-in hover:bg-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-300 cursor-default"
                  style={{ animationDelay: badge.delay }}
                >
                  <badge.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
}