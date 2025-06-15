
import React from "react";
import { Menu } from "lucide-react";
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

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur z-20 border-b border-gray-100 shadow-sm">
    <nav className="container mx-auto flex items-center justify-between py-3 xs:py-4 px-2 md:px-6">
      {/* Logo + título - sempre visível */}
      <a
        href="/"
        className="flex items-center gap-2 font-poppins text-xl xs:text-2xl font-bold tracking-tight text-fire focus:outline-none focus-visible:ring-2 focus-visible:ring-fire"
        aria-label="Página inicial"
        tabIndex={0}
      >
        <img
          src="/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png"
          alt="Logo Fire Domínios"
          className="w-9 xs:w-10 h-9 xs:h-10 object-contain transition-transform duration-200"
          loading="eager"
        />
        <span className="font-extrabold leading-tight">
          <span className="text-fire">Fire</span>{" "}
          <span className="text-[#FF6F00]">Domínios</span>
        </span>
      </a>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 lg:gap-8 text-[15px] md:text-base font-medium text-[#333] font-poppins">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-fire transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fire px-2 py-1 rounded"
              {...(link.target ? { target: link.target, rel: link.rel } : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile menu trigger */}
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Abrir menu"
              className="p-2 xs:p-2.5 rounded-full text-fire-dark hover:bg-orange-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fire"
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
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 px-2 rounded hover:bg-orange-50 hover:text-fire transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fire"
                    style={{ minWidth: 44, minHeight: 44, display: "block" }}
                    {...(link.target ? { target: link.target, rel: link.rel } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </header>
);

export default Header;
