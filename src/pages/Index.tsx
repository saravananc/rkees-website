
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const Index: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = "RKEES - Innovative Software Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Leadership />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
