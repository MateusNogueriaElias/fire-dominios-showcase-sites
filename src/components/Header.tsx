import React, { useEffect, useState, useCallback } from "react";
import { Menu, X, ExternalLink, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#portfolio", label: "Portfólio" },
  { 
    href: "https://firedominios.com", 
    label: "Site Principal", 
    external: true,
    icon: ExternalLink
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detecta scroll para efeitos visuais
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      // Detecta seção ativa
      const sections = navLinks
        .filter(link => link.href.startsWith('#'))
        .map(link => link.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave para o topo
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Navegação inteligente
  const handleNavClick = useCallback((href: string, external?: boolean) => {
    setIsMenuOpen(false);

    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  // Fecha menu ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo com animação */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fire/20 rounded-lg p-1"
            aria-label="Voltar ao início da página"
          >
            <div className="relative">
              <img
                src="/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png"
                alt="Logo Fire Domínios"
                className="w-10 h-10 object-contain transition-transform group-hover:rotate-12"
                width="40"
                height="40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-fire/20 to-orange-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-fire group-hover:text-orange-600 transition-colors">
                Fire Domínios
              </span>
              <span className="text-xs text-gray-500 group-hover:text-orange-400 transition-colors">
                Digital Excellence
              </span>
            </div>
          </button>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              const Icon = link.icon;
              
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.external)}
                  className={`
                    relative px-4 py-2 rounded-lg font-medium transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-fire/20
                    ${isActive 
                      ? 'text-fire bg-fire/10' 
                      : 'text-gray-600 hover:text-fire hover:bg-fire/5'
                    }
                    ${link.external ? 'flex items-center gap-2' : ''}
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {Icon && <Icon size={14} />}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-fire rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Menu Mobile */}
          <div className="flex md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Abrir menu de navegação"
                  className={`
                    p-3 rounded-lg transition-all duration-300
                    ${isScrolled 
                      ? 'text-fire hover:bg-fire/10' 
                      : 'text-fire hover:bg-white/20'
                    }
                    focus:outline-none focus:ring-2 focus:ring-fire/20
                  `}
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="bg-white/95 backdrop-blur-md w-[320px] border-l border-gray-100"
              >
                {/* Header do menu mobile */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <img
                      src="/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png"
                      alt="Logo Fire Domínios"
                      className="w-8 h-8 object-contain"
                      width="32"
                      height="32"
                    />
                    <div>
                      <span className="text-fire font-bold text-lg">Fire Domínios</span>
                      <p className="text-xs text-gray-500">Digital Excellence</p>
                    </div>
                  </div>
                </div>
                
                {/* Links do menu mobile */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href;
                    const Icon = link.icon;
                    
                    return (
                      <button
                        key={link.label}
                        onClick={() => handleNavClick(link.href, link.external)}
                        className={`
                          flex items-center justify-between w-full px-4 py-3 rounded-lg text-left transition-all duration-300
                          focus:outline-none focus:ring-2 focus:ring-fire/20
                          ${isActive 
                            ? 'text-fire bg-fire/10 font-semibold' 
                            : 'text-gray-600 hover:text-fire hover:bg-fire/5'
                          }
                        `}
                      >
                        <span>{link.label}</span>
                        {Icon && <Icon size={16} />}
                      </button>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* Spacer para evitar sobreposição de conteúdo */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;