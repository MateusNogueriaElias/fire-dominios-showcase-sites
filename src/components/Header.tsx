
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-20 bg-white transition-all duration-300 ${
      isScrolled ? 'shadow-sm' : ''
    }`}>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 group"
          aria-label="Página inicial"
        >
          <img
            src="/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png"
            alt="Logo Fire Domínios"
            className="w-8 h-8 object-contain"
            loading="eager"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-fire">Fire Domínios</span>
            <span className="text-xs text-gray-500">Digital Excellence</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={scrollToTop}
            className="text-fire font-medium hover:text-fire/80 transition-colors relative"
          >
            Home
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-fire"></div>
          </button>
          
          <span className="text-gray-600 font-medium">Serviços</span>
          
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-600 font-medium hover:text-fire transition-colors"
            >
              {link.label}
            </button>
          ))}
          
          <span className="text-gray-600 font-medium">Sobre</span>
          
          <button 
            onClick={() => handleNavClick('#contato')}
            className="bg-fire text-white px-6 py-2 rounded-full font-medium hover:bg-fire/90 transition-colors"
          >
            Contato
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menu"
                className="p-2 rounded-full text-fire hover:bg-orange-50 transition-colors"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white w-[300px]">
              <div className="flex items-center gap-2 mb-8">
                <img
                  src="/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png"
                  alt="Logo Fire Domínios"
                  className="w-6 h-6 object-contain"
                />
                <span className="text-fire font-bold">Fire Domínios</span>
              </div>
              
              <div className="flex flex-col gap-4">
                <button
                  onClick={scrollToTop}
                  className="text-left py-3 text-fire font-medium"
                >
                  Home
                </button>
                
                <span className="py-3 text-gray-600 font-medium">Serviços</span>
                
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-3 text-gray-600 font-medium hover:text-fire transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                
                <span className="py-3 text-gray-600 font-medium">Sobre</span>
                
                <button 
                  onClick={() => handleNavClick('#contato')}
                  className="bg-fire text-white px-6 py-3 rounded-full font-medium hover:bg-fire/90 transition-colors mt-4"
                >
                  Contato
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
