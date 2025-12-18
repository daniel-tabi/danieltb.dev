import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProcessStep } from "@/components/ProcessStep";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StatCard } from "@/components/StatCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Rocket, Globe, Sparkles, RefreshCw, ArrowRight, User } from "lucide-react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const services = [
  {
    Icon: Rocket,
    name: "MVP Development",
    description: "Go from idea to launched product in weeks, not months. Focused builds that validate your concept fast.",
    href: "#contact",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Globe,
    name: "SaaS Web Apps",
    description: "Full-featured web applications with authentication, payments, and scalable architecture built in.",
    href: "#contact",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Sparkles,
    name: "AI-Powered Features",
    description: "Integrate intelligent automation, chatbots, and AI-driven workflows into your product.",
    href: "#contact",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: RefreshCw,
    name: "Post-Launch Iteration",
    description: "Continuous improvement based on real user feedback. Ship updates that matter.",
    href: "#contact",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Scope the MVP",
    description: "Define the core features that matter. Strip away the noise and focus on what moves the needle.",
  },
  {
    number: "02",
    title: "Build & Ship Fast",
    description: "Rapid development with weekly demos. You see progress, give feedback, and stay in control.",
  },
  {
    number: "03",
    title: "Iterate With Real Users",
    description: "Launch, learn, improve. Build what your users actually need, not what you assumed they wanted.",
  },
];

const projects = [
  {
    image: project1,
    title: "Analytics Dashboard",
    description: "Real-time business intelligence platform with customizable reports and integrations.",
    tags: ["SaaS", "Web App"],
  },
  {
    image: project2,
    title: "FinTech Mobile App",
    description: "Digital banking experience with seamless payments and financial tracking.",
    tags: ["MVP", "Mobile"],
  },
  {
    image: project3,
    title: "AI Assistant Platform",
    description: "Intelligent automation tool that streamlines customer support workflows.",
    tags: ["AI", "SaaS"],
  },
];

const testimonials = [
  {
    quote: "Daniel took our vague idea and turned it into a working product in just 4 weeks. The speed and quality exceeded all expectations.",
    author: "Sarah Chen",
    role: "Founder",
    company: "TechFlow",
  },
  {
    quote: "Finally, a developer who understands the founder mindset. No over-engineering, just smart solutions that ship.",
    author: "Marcus Johnson",
    role: "CEO",
    company: "StartupLab",
  },
  {
    quote: "The AI features he built into our platform completely transformed how we serve our customers. Game-changing work.",
    author: "Emily Rodriguez",
    role: "Product Lead",
    company: "DataCo",
  },
];

const stats = [
  { value: "4-6", label: "Weeks to MVP" },
  { value: "100%", label: "Founder-Led Builds" },
  { value: "AI-First", label: "Development Approach" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl gradient-bg flex items-center justify-center shadow-xl">
                  <User className="w-16 h-16 text-primary-foreground" />
                </div>
              </div>
            </div>
            <div>
              <Badge variant="secondary" className="mb-4">
                Founder-Led Development
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                I Build Products, Not Slide Decks
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm Daniel — a solo developer who partners directly with founders to build software that works. No agency overhead, no project managers, no endless meetings. Just focused execution from someone who's been in your shoes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Using modern tech and AI-powered workflows, I ship faster than traditional teams while keeping quality high. Your product gets built by the same person you talk to — from day one to launch and beyond.
              </p>
              <Button variant="outline" size="lg">
                Learn How I Work
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What I Build
            </h2>
            <p className="text-lg text-muted-foreground">
              End-to-end development for founders who want results, not excuses.
            </p>
          </div>
          <BentoGrid className="lg:grid-rows-2">
            {services.map((service) => (
              <BentoCard key={service.name} {...service} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              From Idea to Live Product
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined process designed for speed without sacrificing quality.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                {...step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-border py-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Selected Builds
            </h2>
            <p className="text-lg text-muted-foreground">
              A few examples of products shipped for founders like you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View More Work
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from founders I've partnered with.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-glow" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Have an Idea?{" "}
              <span className="gradient-text">Let's Build It.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Ready to turn your vision into a working product? Let's talk about what you're building and how I can help ship it.
            </p>
            <Button variant="gradient" size="xl">
              Book a Free Call
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
