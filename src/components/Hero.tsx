import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8 animate-fade-in text-center">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Visionary Entrepreneur & Technology Leader
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Jafar Frotan</span>
              </h1>
              <h2 className="font-display text-2xl md:text-3xl text-foreground/80 font-medium">
                CEO & Founder of Zeytoon ICT
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Blending innovative technology with creative storytelling to empower communities. 
              Building the future through digital solutions that spark transformation and inspire change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero group">
                Explore My Journey
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                <ExternalLink className="mr-2 h-4 w-4" />
                Zeytoon ICT
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/20 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="font-display text-2xl font-bold gradient-text">2017</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold gradient-text">Millions</div>
                <div className="text-sm text-muted-foreground">Users Served</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold gradient-text">Global</div>
                <div className="text-sm text-muted-foreground">Reach</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;