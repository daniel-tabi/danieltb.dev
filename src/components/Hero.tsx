import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient glow at top */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-50"
          style={{ background: 'var(--gradient-hero)' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Star Rating - Credibility Badge */}
          <div 
            className="inline-flex items-center gap-2 mb-5 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-sm">★</span>
              ))}
            </div>
            <span className="text-sm font-medium text-foreground tracking-tight">
              Rated 4.9/5 by 100+ Founders
            </span>
          </div>

          {/* Founder Badge - Black Pill with Emojis */}
          <div 
            className="flex justify-center mb-8 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-foreground text-background text-sm font-semibold tracking-tight">
              <span>💻</span>
              <span>For Founders</span>
              <span>⚡</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight md:leading-[1.1] tracking-tight text-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            I Build MVPs That{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">Launch Fast</span> and{" "}
            <span className="gradient-text">Scale Smarter</span>.
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl font-medium text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            From scoped MVPs to scalable SaaS, I help founders turn validated ideas into polished products — without over-engineering.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a 
              href="https://tally.so/r/WOr5xJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                variant="gradient" 
                size="xl" 
                className="w-full sm:w-auto group shadow-lg btn-glow"
              >
                Book your consultation call
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a 
              href="#process" 
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline" 
                size="xl" 
                className="w-full sm:w-auto"
              >
                See How I Work
              </Button>
            </a>
          </div>

          {/* Scroll Cue */}
          <div 
            className="mt-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a 
              href="#about" 
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1.5">
                <div className="w-1.5 h-2.5 bg-primary rounded-full animate-bounce" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
