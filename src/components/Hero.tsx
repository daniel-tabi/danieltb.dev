import { ButtonColorful } from "@/components/ui/button-colorful";
import { Sparkles, Zap, Box, Code2 } from "lucide-react";

export function Hero() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
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
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-brand-dark py-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="container-custom">
          <p className="text-center text-sm text-muted-foreground mb-6">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-white/80">
              <Sparkles className="w-6 h-6" />
              <span className="text-xl font-semibold tracking-tight">StartupCo</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Zap className="w-6 h-6" />
              <span className="text-xl font-semibold tracking-tight">TechFlow</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Box className="w-6 h-6" />
              <span className="text-xl font-semibold tracking-tight">BuildLab</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Code2 className="w-6 h-6" />
              <span className="text-xl font-semibold tracking-tight">DevStack</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}