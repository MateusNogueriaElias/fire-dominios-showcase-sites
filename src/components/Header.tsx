
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#portfolio", label: "Portfólio" },
  {
    href: "https://firedominios.com/",
    label: "Site",
    target: "_blank",
    rel: "noopener noreferrer",
  },
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
    <header className={`fixed top-0 left-0 w-full z-20 border-b border-gray-100 shadow-sm transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur py-2' : 'bg-white/95 backdrop-blur py-3 xs:py-4'
    }`}>
      <nav className="container mx-auto flex items-center justify-between px-2 md:px-6">
        {/* Logo + título - sempre visível */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 font-poppins text-xl xs:text-2xl font-bold tracking-tight text-fire focus:outline-none focus-visible:ring-2 focus-visible:ring-fire hover:scale-105 transition-transform duration-300 group"
          aria-label="Página inicial"
          tabIndex={0}
        >
          <div className="relative">
            <img
              src="/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png"
              alt="Logo Fire Domínios"
              className="w-9 xs:w-10 h-9 xs:h-10 object-contain transition-transform duration-200 group-hover:scale-110"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-fire to-[#FF6F00] opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </div>
          <span className="font-extrabold leading-tight">
            <span className="text-fire">Fire</span>{" "}
            <span className="text-[#FF6F00]">Domínios</span>
          </span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-[15px] md:text-base font-medium text-[#333] font-poppins">
          {navLinks.map((link, index) => (
            <li key={link.label}>
              {link.target ? (
                <a
                  href={link.href}
                  className="hover:text-fire transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fire px-4 py-2 rounded-full hover:bg-orange-50 relative group"
                  target={link.target}
                  rel={link.rel}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-fire to-[#FF6F00] transition-all duration-300 w-0 group-hover:w-8"></span>
                </a>
              ) : (
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-fire transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fire px-4 py-2 rounded-full hover:bg-orange-50 relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-fire to-[#FF6F00] transition-all duration-300 w-0 group-hover:w-8"></span>
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menu"
                className="p-2 xs:p-2.5 rounded-full text-fire-dark hover:bg-orange-50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fire hover:text-fire"
                tabIndex={0}
                style={{ minWidth: 44, minHeight: 44, touchAction: "manipulation" }}
              >
                <Menu size={27} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-white w-[80vw] max-w-xs flex flex-col p-0 shadow-2xl"
            >
              <div className="flex items-center gap-2 px-4 py-5 border-b">
                <img
                  src="/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png"
                  alt="Logo Fire Domínios"
                  className="w-8 h-8 object-contain"
                  loading="eager"
                />
                <span className="text-fire font-extrabold text-xl leading-tight">
                  Fire
                </span>{" "}
                <span className="text-[#FF6F00] font-extrabold text-xl leading-tight">
                  Domínios
                </span>
              </div>
              <ul className="flex flex-col gap-1 px-5 py-8 text-base xs:text-lg font-medium font-poppins text-[#333]">
                {navLinks.map((link, index) => (
                  <li key={link.label}>
                    {link.target ? (
                      <a
                        href={link.href}
                        className="block py-3 px-4 rounded-xl hover:bg-orange-50 hover:text-fire transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fire"
                        style={{ minWidth: 44, minHeight: 44, display: "block", animationDelay: `${index * 100}ms` }}
                        target={link.target}
                        rel={link.rel}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="block w-full text-left py-3 px-4 rounded-xl hover:bg-orange-50 hover:text-fire transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fire"
                        style={{ minWidth: 44, minHeight: 44, animationDelay: `${index * 100}ms` }}
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
