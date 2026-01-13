import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, Globe } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Zeytoon ICT",
      category: "Web Hosting Platform",
      description:
        "Leading web hosting solutions company serving millions of users worldwide with comprehensive digital tools and infrastructure.",
      technologies: ["Web Hosting", "Cloud Infrastructure", "Global CDN", "24/7 Support"],
      metrics: {
        users: "Millions",
        uptime: "99.9%",
        countries: "Global",
      },
      year: "2017 - Present",
      status: "Active",
      link: "https://zeytoonict.com",
    },
    {
      title: "Hekayat Shab",
      category: "Digital Storytelling",
      description:
        "Creative storytelling platform that combines narrative excellence with digital innovation to share captivating stories that inspire change.",
      technologies: ["Content Creation", "Digital Media", "Community Building", "Creative Writing"],
      metrics: {
        stories: "Thousands",
        engagement: "High",
        impact: "Global",
      },
      year: "2018 - Present",
      status: "Active",
      link: "https://zeytoonict.com",
    },
    {
      title: "Tech Innovation Hub",
      category: "Entrepreneurship",
      description:
        "Incubating and mentoring next-generation entrepreneurs in technology, providing resources and guidance for startup success.",
      technologies: ["Mentorship", "Startup Incubation", "Technology Consulting", "Business Strategy"],
      metrics: {
        startups: "20+",
        success: "85%",
        funding: "$2M+",
      },
      year: "2019 - Present",
      status: "Ongoing",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Portfolio</span> & Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative ventures and initiatives that blend technology with impact, creating meaningful
            solutions for global communities.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="card-premium animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold gradient-text mb-2">{project.title}</h3>
                        <p className="text-primary font-medium">{project.category}</p>
                      </div>
                      <Badge variant={project.status === "Active" ? "default" : "secondary"}>{project.status}</Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Technologies & Focus</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Year & Link */}
                    <div className="flex items-center gap-4 pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {project.year}
                      </div>
                      {project.link !== "#" && (
                        <Button variant="outline" size="sm" className="glass">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          View Project
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Impact Metrics</h4>
                    <div className="space-y-3">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                            {key === "users" && <Users className="h-4 w-4 text-primary-foreground" />}
                            {key === "uptime" && <Globe className="h-4 w-4 text-primary-foreground" />}
                            {key === "countries" && <Globe className="h-4 w-4 text-primary-foreground" />}
                            {key === "stories" && <Users className="h-4 w-4 text-primary-foreground" />}
                            {key === "engagement" && <Users className="h-4 w-4 text-primary-foreground" />}
                            {key === "impact" && <Globe className="h-4 w-4 text-primary-foreground" />}
                            {key === "startups" && <Users className="h-4 w-4 text-primary-foreground" />}
                            {key === "success" && <Globe className="h-4 w-4 text-primary-foreground" />}
                            {key === "funding" && <Globe className="h-4 w-4 text-primary-foreground" />}
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="card-premium max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold mb-4 gradient-text">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities, partnerships, and innovative projects that can make a
                meaningful impact.
              </p>
              <a href="mailto:hi@frotan.me?subject=Let's%20Connect">
                <Button className="btn-hero">Let's Connect</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
