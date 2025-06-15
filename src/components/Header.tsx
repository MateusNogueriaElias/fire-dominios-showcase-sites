
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
    <nav className="container mx-auto flex items-center justify-between py-4 px-2">
      {/* Logo + título */}
      <a
        href="/"
        className="flex items-center gap-2 font-poppins text-2xl font-bold tracking-tight text-fire hover:opacity-95 transition"
      >
        <img
          src="/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png"
          alt="Logo Fire Domínios"
          className="w-10 h-10 object-contain"
        />
        <span className="hidden xs:inline font-extrabold">
          <span className="text-fire">Fire</span>{" "}
          <span className="text-[#FF6F00]">Domínios</span>
        </span>
      </a>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-base font-medium text-[#333] font-poppins">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-fire transition"
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
              className="p-2 rounded-full text-fire-dark hover:bg-orange-50 transition"
            >
              <Menu size={27} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white w-[70vw] max-w-xs flex flex-col p-0">
            <div className="flex items-center gap-2 px-4 py-5 border-b">
              <img
                src="/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png"
                alt="Logo Fire Domínios"
                className="w-8 h-8 object-contain"
              />
              <span className="text-fire font-extrabold text-xl">
                Fire
              </span>{" "}
              <span className="text-[#FF6F00] font-extrabold text-xl">
                Domínios
              </span>
            </div>
            <ul className="flex flex-col gap-3 px-6 py-7 text-lg font-medium font-poppins text-[#333]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 px-2 rounded hover:bg-orange-50 hover:text-fire transition"
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
