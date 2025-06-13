
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/images/rkees.jpeg";
const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "clients", label: "Clients" },
    { id: "leadership", label: "Board of Directors" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Determine active section
      const sectionElements = sections.map((section) => {
        const element = document.getElementById(section.id);
        if (!element) return { id: section.id, offsetTop: 0, height: 0 };
        return {
          id: section.id,
          offsetTop: element.offsetTop - 100,
          height: element.offsetHeight,
        };
      });

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, offsetTop } = sectionElements[i];
        if (scrollY >= offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    // Close mobile menu after clicking a link
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center" onClick={() => scrollToSection("home")}>
              <img src={Logo} alt="RKEES Logo" className="h-16 w-auto" />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-all",
                    activeSection === section.id
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  )}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button 
              className="p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 bg-blue-300/95 shadow-md rounded-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-all",
                    activeSection === section.id
                      ? "text-primary bg-gray-50"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  )}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
