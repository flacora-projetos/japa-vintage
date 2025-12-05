import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logo-dario-best.png';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Equipamentos', href: '#produtos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-vintage-cream/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src={logoImage} 
            alt="Japa Vintage Logo" 
            className="h-16 w-auto object-contain transition-transform hover:scale-105" 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans font-medium text-sm tracking-widest uppercase hover:text-vintage-red transition-colors ${
                isScrolled ? 'text-vintage-charcoal' : 'text-vintage-charcoal'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/556284344419"
            target="_blank"
            rel="noreferrer"
            className="bg-vintage-red text-white px-6 py-2 rounded-full font-sans font-bold text-sm tracking-wide hover:bg-vintage-red-dark transition-all shadow-md transform hover:-translate-y-0.5"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-vintage-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-vintage-cream shadow-xl md:hidden flex flex-col items-center py-8 gap-6 border-t border-vintage-sand">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-xl text-vintage-charcoal hover:text-vintage-red"
            >
              {link.name}
            </a>
          ))}
          <a
             href="https://wa.me/556284344419"
             target="_blank"
             rel="noreferrer"
             className="bg-vintage-red text-white px-8 py-3 rounded-full font-sans font-bold shadow-md"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
};
