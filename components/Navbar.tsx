import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { BRAND_NAME, WHATSAPP_LINK } from '../constants';

interface NavbarProps {
  onOpenQuote?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Modelos', href: '#collections' },
    { name: 'Qualidade', href: '#features' },
    { name: 'Processo', href: '#process' },
    { name: 'Portfólio', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 py-3'
        : 'bg-gradient-to-b from-black/40 to-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
          {BRAND_NAME}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-brand-dark' : 'text-gray-200 hover:text-white'
                }`}
            >
              {link.name}
            </a>
          ))}

          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${isScrolled
                ? 'text-brand-dark hover:text-brand-primary'
                : 'text-white/90 hover:text-white'
                }`}
            >
              <FileText className="w-4 h-4" />
              Orçamento
            </button>
          )}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${isScrolled
              ? 'bg-brand-dark text-white hover:bg-brand-primary'
              : 'bg-white text-brand-dark hover:bg-gray-100'
              }`}
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-current"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-800 text-lg font-medium border-b border-gray-100 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-dark text-white text-center py-3 rounded-md font-medium"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;