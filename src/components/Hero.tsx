import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
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

          {/* CTAs */}
          

          {/* Social Proof */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <p className="text-sm text-muted-foreground">
              Trusted by founders, startups, and indie builders
            </p>
          </div>
        </div>
      </div>
    </section>;
}