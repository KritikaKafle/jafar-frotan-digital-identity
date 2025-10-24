import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, FileText, Award } from "lucide-react";

const Press = () => {
  const pressItems = [
    {
      type: "Article",
      title: "Building a Tech Empire Before 20",
      publication: "Awe.some",
      description: "An in-depth look at Jafar Frotan's entrepreneurial journey and how he built a successful technology company at a young age.",
      date: "September 2024",
      category: "Entrepreneurship",
      link: "https://awe.sm/2024/09/01/jafar-frotan-building-a-tech-empire-before-20/",
      featured: true
    },
    {
      type: "Profile",
      title: "Jafar Frotan - Entrepreneur Profile",
      publication: "Wikitia",
      description: "Comprehensive professional profile detailing career achievements, business ventures, and contributions to the technology sector.",
      date: "2024",
      category: "Biography",
      link: "https://wikitia.com/wiki/Jafar_Frotan",
      featured: true
    },
    {
      type: "Article",
      title: "The Teenage CEO: Jafar Frotan's Rise in the Tech Industry",
      publication: "365 Business Tips",
      description: "Exploring Frotan's remarkable journey from founding Zeytoon ICT at age 12 to becoming a CEO, showcasing his blend of youthful ambition and business acumen.",
      date: "September 2024",
      category: "Entrepreneurship",
      link: "https://365businesstips.com/the-teenage-ceo-jafar-frotans-rise-in-the-tech-industry/",
      featured: false
    },
    {
      type: "Feature",
      title: "Technology Inside Jafar Frotan's Hekayat Shab",
      publication: "CEO Weekly",
      description: "An inside look at the technology and vision behind Hekayat Shab, the innovative storytelling platform co-founded by Jafar Frotan.",
      date: "2024",
      category: "Technology",
      link: "https://ceoweekly.com/technology-inside-jafar-frotans-hekayat-shab/",
      featured: false
    },
    {
      type: "Article",
      title: "Jafar Frotan's Blueprint for Empowering Tech Startups",
      publication: "Phenomena",
      description: "Insights into Frotan's strategic approach to empowering tech startups and fostering innovation in the digital landscape.",
      date: "2024",
      category: "Innovation",
      link: "https://www.phenomena.org/jafar-frotans-blueprint-for-empowering-tech-startups/",
      featured: false
    }
  ];

  const recognitions = [
    {
      title: "Young Entrepreneur of the Year",
      organization: "Tech Innovation Awards",
      year: "2023",
      description: "Recognized for outstanding contributions to web hosting and digital solutions"
    },
    {
      title: "Innovation Leadership",
      organization: "Digital Business Forum",
      year: "2022",
      description: "Acknowledged for pioneering approaches to web technology democratization"
    },
    {
      title: "Community Impact Award",
      organization: "Global Entrepreneurs Network",
      year: "2021",
      description: "Honored for empowering communities through technology and storytelling"
    }
  ];

  return (
    <section id="press" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Press</span> & Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Media coverage, interviews, and recognition highlighting the journey of innovation, 
            entrepreneurship, and impact in the technology sector.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold mb-8 gradient-text">
            Featured Coverage
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {pressItems.filter(item => item.featured).map((item, index) => (
              <Card key={item.title} className="card-premium animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={item.type === 'Article' ? 'default' : 'secondary'}>
                      {item.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                  </div>

                  <h4 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {item.title}
                  </h4>
                  
                  <p className="text-primary font-medium mb-3">{item.publication}</p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    {item.link !== "#" && (
                      <Button variant="outline" size="sm" className="glass">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Read Article
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Press Coverage */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold mb-8 gradient-text">
            Media Coverage
          </h3>
          <div className="space-y-4">
            {pressItems.filter(item => !item.featured).map((item, index) => (
              <Card key={item.title} className="card-premium animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <FileText className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {item.type}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium text-sm mb-2">{item.publication}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                      {item.link !== "#" && (
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div>
          <h3 className="font-display text-2xl font-semibold mb-8 gradient-text">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <Card key={recognition.title} className="card-premium text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-display text-lg font-semibold mb-2 text-foreground">
                    {recognition.title}
                  </h4>
                  <p className="text-primary font-medium text-sm mb-2">
                    {recognition.organization}
                  </p>
                  <p className="text-muted-foreground text-sm mb-3">
                    {recognition.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {recognition.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;