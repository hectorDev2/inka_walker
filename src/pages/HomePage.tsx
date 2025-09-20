import React, { useState, useRef } from "react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { TourPackages } from "../components/TourPackages";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);

    const refs = {
      home: heroRef,
      services: servicesRef,
      packages: packagesRef,
      contact: contactRef,
    };

    const targetRef = refs[section as keyof typeof refs];
    if (targetRef?.current) {
      const offsetTop = targetRef.current.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Update active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", ref: heroRef },
        { id: "services", ref: servicesRef },
        { id: "packages", ref: packagesRef },
        { id: "contact", ref: contactRef },
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (
          section.ref.current &&
          scrollPosition >= section.ref.current.offsetTop
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <div ref={heroRef}>
        <Hero onNavigate={scrollToSection} whatsappPhone="51942299911" />
        {/* Botón flotante WhatsApp bottom-right */}
        <a
          href="https://wa.me/51942299911?text=Hola,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20tours."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir WhatsApp"
          className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-lg transition-colors duration-200"
          style={{
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Simple ícono de WhatsApp con SVG inline para evitar dependencias */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.52 3.48A11.85 11.85 0 0 0 12.02 0C5.4 0 .02 5.38.02 12c0 2.11.55 4.08 1.51 5.8L0 24l6.36-1.5A11.92 11.92 0 0 0 12.02 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.5-8.52ZM12.02 22a9.9 9.9 0 0 1-5.06-1.39l-.36-.21-3.77.89.9-3.68-.24-.38A9.96 9.96 0 0 1 2.02 12c0-5.5 4.48-9.98 10-9.98 2.68 0 5.2 1.04 7.09 2.92A9.9 9.9 0 0 1 22.02 12c0 5.52-4.48 10-10 10Zm5.58-7.46c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.08-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.5-1.77-1.67-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.48-.5-.68-.51-.18-.01-.38-.01-.58-.01-.2 0-.53.08-.81.38-.28.3-1.07 1.05-1.07 2.56 0 1.5 1.1 2.94 1.26 3.14.16.2 2.14 3.27 5.2 4.59.73.31 1.3.5 1.74.64.73.23 1.4.2 1.92.12.59-.09 1.78-.73 2.03-1.45.25-.71.25-1.32.18-1.45-.08-.13-.28-.2-.58-.35Z" />
          </svg>
        </a>
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={packagesRef}>
        <TourPackages />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
