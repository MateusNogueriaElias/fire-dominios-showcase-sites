
import { Flame } from "lucide-react";

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-20 border-b border-gray-200">
    <nav className="container mx-auto flex items-center justify-between py-4 px-2">
      <a href="/" className="flex items-center gap-2 font-playfair text-2xl text-fire font-bold tracking-tight hover:opacity-90 transition">
        <Flame className="text-fire" size={32} />
        Fire Domínios
      </a>
      <ul className="flex gap-8 text-base font-medium text-gray-800">
        <li><a href="#portfolio" className="hover:text-fire transition">Portfólio</a></li>
        <li><a href="#sobre" className="hover:text-fire transition">Sobre</a></li>
        <li><a href="#contato" className="hover:text-fire transition">Contato</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
