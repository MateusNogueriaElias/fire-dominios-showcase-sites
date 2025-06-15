
const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-20 border-b border-gray-200">
    <nav className="container mx-auto flex items-center justify-between py-4 px-2">
      <a href="/" className="flex items-center gap-2 font-playfair text-2xl text-fire font-bold tracking-tight hover:opacity-90 transition">
        <img src="/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png" alt="Logo Fire Domínios" className="w-10 h-10 object-contain" />
        Fire Domínios
      </a>
      <ul className="flex gap-8 text-base font-medium text-gray-800">
        <li><a href="#portfolio" className="hover:text-fire transition">Portfólio</a></li>
        <li>
          <a
            href="https://firedominios.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fire transition"
          >
            Site
          </a>
        </li>
        <li><a href="#contato" className="hover:text-fire transition">Contato</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
