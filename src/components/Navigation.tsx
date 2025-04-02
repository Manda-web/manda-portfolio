
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Downloadcv from "./Downloadcv";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // État pour le menu mobile

  useEffect(() => {
    const handleScroll = () => {
      // Mettre à jour le style de la barre de navigation lors du défilement
      setScrolled(window.scrollY > 50);

      // Obtenir toutes les sections pour vérifier leur intersection
      const sections = document.querySelectorAll("section[id]");
      
      // Trouver la section actuellement visible
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        
        if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
          current = section.getAttribute("id") || "";
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false); // Fermer le menu après avoir cliqué sur un lien
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-semibold">
            {/* ANDRIATSILEFITRA <span className="text-primary">Sarobidy Hery Manda</span> */}
            <img src="logo-manda.png" alt="Manda" style={{width: "150px"}}/>
          </a>
          {/* Navigation pour grand écrans */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={cn(
                  "nav-link",
                  activeSection === id && "active"
                )}
              >
                {label}
              </button>
            ))}
            <Downloadcv/>
          </nav>
          {/* Bouton hamburger pour petit écrans */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Ouvrir/Fermer le menu
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Menu déroulant pour petits écrans */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-2 rounded-lg overflow-hidden">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={cn(
                  "block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-300",
                  activeSection === id && "bg-primary text-white"
                )}
              >
                {label}
              </button>
            ))}
            <Downloadcv/>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
