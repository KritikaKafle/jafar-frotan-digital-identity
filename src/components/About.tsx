import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Rocket, Users, Target, ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology solutions"
    },
    {
      icon: Rocket,
      title: "Growth",
      description: "Scaling businesses and empowering communities through strategic vision"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections and fostering collaboration across global networks"
    },
    {
      icon: Target,
      title: "Impact",
      description: "Creating meaningful change through technology and entrepreneurship"
    }
  ];

  const skills = [
    "Entrepreneurship", "Technology Leadership", "Strategic Planning", 
    "Digital Transformation", "Community Building", "Innovation Management",
    "Web Technologies", "Business Development", "Storytelling", "Global Markets"
  ];

  return (
    <section id="about" className="section-padding bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Jafar Frotan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An entrepreneur driven by passion for innovation and storytelling, using technology 
            and creative expression to make a positive impact in the lives of others.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="space-y-6 animate-slide-up">
            <Card className="card-premium">
              <CardContent className="p-8 text-center md:text-left">
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-4 gradient-text">
                  My Journey
                </h3>
                <div className={`text-muted-foreground leading-relaxed text-sm md:text-base ${isMobile && !isExpanded ? 'line-clamp-3' : ''}`}>
                  <p className={isMobile && !isExpanded ? 'inline' : 'mb-4'}>
                    My entrepreneurial journey began with a simple idea and an unwavering drive to make a difference. 
                    From sharing innovative ideas on social media to launching full-fledged ventures, I discovered 
                    a community eager for innovation and inspiration.
                  </p>
                  {(!isMobile || isExpanded) && (
                    <>
                      <p className="mb-4">
                        As the founder of <strong className="text-foreground">Zeytoon ICT</strong> and 
                        <strong className="text-foreground"> Hekayat Shab</strong>, I've dedicated myself to 
                        delivering digital solutions and sharing captivating narratives that spark meaningful change.
                      </p>
                      <p>
                        My mission is to revolutionize how technology meets storytelling, empowering people with 
                        tools, ideas, and inspiration so they can overcome challenges and realize their full potential.
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
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="card-premium">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-6 gradient-text">
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="grid gap-6 animate-slide-up delay-200">
            <h3 className="font-display text-2xl font-semibold gradient-text">
              Core Values
            </h3>
            {values.map((value, index) => (
              <Card key={value.title} className="card-premium hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;