import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Users, Shield, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ZeytoonICT = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  const achievements = [
    {
      icon: Users,
      metric: "Millions",
      label: "Users Worldwide",
      description: "Serving millions of users across the globe"
    },
    {
      icon: Globe,
      metric: "2017",
      label: "Year Founded",
      description: "Continuous innovation since establishment"
    },
    {
      icon: Shield,
      metric: "99.9%",
      label: "Uptime",
      description: "Reliable hosting solutions"
    },
    {
      icon: Zap,
      metric: "24/7",
      label: "Support",
      description: "Round-the-clock technical assistance"
    }
  ];

  const features = [
    "Web Hosting Solutions",
    "Domain Management", 
    "Cloud Infrastructure",
    "Technical Support",
    "Security Solutions",
    "Performance Optimization"
  ];

  return (
    <section id="zeytoon" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Zeytoon ICT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leading web hosting solutions company empowering people to fully harness the web. 
            Based in Perugia, Umbria, we provide comprehensive tools for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Overview */}
          <div className="space-y-8 animate-slide-up">
            <Card className="card-premium">
              <CardContent className="p-8 text-center md:text-left">
                <div className="mb-6">
                  <h3 className="font-display text-2xl md:text-3xl font-bold gradient-text mb-2">
                    Host Your Dreams
                  </h3>
                  <p className="text-muted-foreground italic text-sm md:text-base">Our Mission & Vision</p>
                </div>
                
                <div className={`text-muted-foreground leading-relaxed text-sm md:text-base ${isMobile && !isExpanded ? 'line-clamp-3' : ''}`}>
                  <p className={isMobile && !isExpanded ? 'inline' : 'mb-4'}>
                    Since our founding in 2017, Zeytoon has continually innovated new ways to deliver 
                    on our mission: <strong className="text-foreground">to empower people to fully harness the web.</strong>
                  </p>
                  {(!isMobile || isExpanded) && (
                    <>
                      <p className="mb-4">
                        We provide comprehensive web hosting packages and tools to millions of users 
                        throughout the world, ensuring that anyone—novice or professional—can get on 
                        the web and thrive.
                      </p>
                      <p>
                        Our commitment to innovation, reliability, and customer success has made us 
                        a trusted partner for businesses and individuals worldwide.
                      </p>
                    </>
                  )}
                </div>

                {isMobile && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-3 inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                  >
                    {isExpanded ? (
                      <>Read less <ChevronUp className="h-4 w-4" /></>
                    ) : (
                      <>Read more <ChevronDown className="h-4 w-4" /></>
                    )}
                  </button>
                )}

                <div className="mt-8">
                  <a href="https://zeytoonict.com" target="_blank" rel="noopener noreferrer">
                    <Button className="btn-hero group">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Zeytoon ICT
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="card-premium">
              <CardContent className="p-8 text-center md:text-left">
                <h4 className="font-display text-xl font-semibold mb-4 gradient-text">
                  Our Services
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 justify-center md:justify-start">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up delay-200">
            {achievements.map((achievement, index) => (
              <Card key={achievement.label} className="card-premium text-center group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <achievement.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="font-display text-2xl font-bold gradient-text">
                      {achievement.metric}
                    </div>
                    <div className="font-medium text-foreground mb-2">
                      {achievement.label}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <Card className="card-premium animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="font-display text-2xl font-semibold mb-4 gradient-text">
              Why Choose Zeytoon ICT?
            </h3>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We believe in democratizing web technology. Whether you're launching your first website 
              or scaling a global enterprise, our innovative solutions, reliable infrastructure, and 
              dedicated support team ensure your success in the digital world.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ZeytoonICT;