
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sites", label: "Sites" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
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
            width="32"
            height="32"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-fire">Fire Domínios</span>
            <span className="text-xs text-gray-500">Digital Excellence</span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-600 font-medium hover:text-fire transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

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
                  width="24"
                  height="24"
                />
                <span className="text-fire font-bold">Fire Domínios</span>
              </div>
              
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-3 text-gray-600 font-medium hover:text-fire transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
