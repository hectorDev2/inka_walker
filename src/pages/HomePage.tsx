import React, { useState, useRef } from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { TourPackages } from '../components/TourPackages';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  
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
        behavior: 'smooth'
      });
    }
  };

  // Update active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', ref: heroRef },
        { id: 'services', ref: servicesRef },
        { id: 'packages', ref: packagesRef },
        { id: 'contact', ref: contactRef },
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current && scrollPosition >= section.ref.current.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <div ref={heroRef}>
        <Hero />
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