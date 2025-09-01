import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: "home", label: "INICIO" },
    { id: "services", label: "SERVICIOS" },
    { id: "packages", label: "PAQUETES" },
    { id: "contact", label: "CONTACTO" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  bg-red/100 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/LOGO.png"
              alt="Logo"
              className="h-12 bg w-full filter invert brightness-0 saturate-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
