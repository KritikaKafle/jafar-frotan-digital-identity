import { Separator } from "@/components/ui/separator";
import { Globe, Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    href: "#about",
    label: "About"
  }, {
    href: "#zeytoon",
    label: "Zeytoon ICT"
  }, {
    href: "#portfolio",
    label: "Portfolio"
  }, {
    href: "#press",
    label: "Press"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  const externalLinks = [{
    href: "https://zeytoonict.com",
    label: "Zeytoon ICT"
  }, {
    href: "#",
    label: "Hekayat Shab"
  }];
  return <footer className="bg-card/50 border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold gradient-text">
                Jafar Frotan
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Visionary entrepreneur and CEO of Zeytoon ICT, blending innovative technology 
              with creative storytelling to empower communities worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map(link => <a key={link.href} href={link.href} className={`block text-muted-foreground transition-colors text-sm ${link.label === 'Zeytoon ICT' ? 'hover:text-[#808000]' : 'hover:text-primary'}`}>
                  {link.label}
                </a>)}
            </nav>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Projects</h4>
            <nav className="space-y-2">
              {externalLinks.map(link => <a key={link.href} href={link.href} className={`block text-muted-foreground transition-colors text-sm ${link.label === 'Zeytoon ICT' ? 'hover:text-[#808000]' : link.label === 'Hekayat Shab' ? 'hover:text-[#FF8C00]' : 'hover:text-primary'}`} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {link.label}
                </a>)}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-4 w-4" />
                <span>Italy</span>
              </div>
              <a href="mailto:hi@frotan.me" className="block text-muted-foreground hover:text-primary transition-colors">
                hi@frotan.me
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span>© {currentYear} Powered By</span>
            <a href="https://zeytoon.it" target="_blank" rel="noopener noreferrer" className="hover:text-[#808000] transition-colors">
              Zeytoon
            </a>
          </div>
          <div className="flex items-center gap-6">
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;