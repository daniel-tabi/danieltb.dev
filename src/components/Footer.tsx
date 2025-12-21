import logo from "@/assets/logo.png";
import { Mail, Calendar, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "https://tally.so/r/WOr5xJ", external: true },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-custom py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="danieltb.dev" className="h-8 w-8" />
              <span className="font-display font-bold text-lg text-foreground">
                danieltb.dev
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building MVPs and SaaS products with modern technology and AI-powered development.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@danieltb.dev"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hello@danieltb.dev
                </a>
              </li>
              <li>
                <a
                  href="https://tally.so/r/WOr5xJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Call
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://x.com/danieltb_dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/daniel-tabi/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-center text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} danieltb.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
