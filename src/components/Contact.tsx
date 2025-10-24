import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Globe, Send, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@jafarfrotan.com",
      link: "mailto:hello@jafarfrotan.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Perugia, Umbria, Italy",
      link: "#"
    },
    {
      icon: Globe,
      label: "Website",
      value: "frotan.me",
      link: "https://frotan.me"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "#"
    },
    {
      icon: Twitter,
      label: "Twitter",
      link: "#"
    },
    {
      icon: Globe,
      label: "Zeytoon ICT",
      link: "https://zeytoonict.com"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're interested in collaboration, have a business opportunity, or just want to 
            connect, I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-premium animate-slide-up">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold mb-6 gradient-text">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-card/50 border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-card/50 border-border/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-card/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more about your project or idea..."
                    required
                    rows={6}
                    className="bg-card/50 border-border/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-hero w-full group" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up delay-200">
            {/* Contact Details */}
            <Card className="card-premium">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-6 gradient-text">
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((contact) => (
                    <div key={contact.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <contact.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{contact.label}</div>
                        {contact.link !== "#" ? (
                          <a 
                            href={contact.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-premium">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-semibold mb-6 gradient-text">
                  Connect Online
                </h3>
                
                <div className="grid gap-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="glass"
                      className="justify-start"
                      asChild
                    >
                      <a href={social.link}>
                        <social.icon className="mr-3 h-4 w-4" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="card-premium">
              <CardContent className="p-8 text-center">
                <h4 className="font-display text-lg font-semibold mb-3 gradient-text">
                  Response Time
                </h4>
                <p className="text-muted-foreground">
                  I typically respond to messages within <strong className="text-foreground">24 hours</strong>. 
                  For urgent matters, please mention it in your subject line.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;