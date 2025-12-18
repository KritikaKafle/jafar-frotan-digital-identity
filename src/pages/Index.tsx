import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ZeytoonICT from "@/components/ZeytoonICT";
import Portfolio from "@/components/Portfolio";
import Press from "@/components/Press";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ZeytoonICT />
        {/* Added id to Portfolio section for scrolling */}
        <section id="portfolio">
          <Portfolio />
        </section>
        <Press />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
