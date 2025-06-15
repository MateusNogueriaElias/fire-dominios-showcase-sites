const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur z-20 border-b border-gray-100 shadow-sm">
    <nav className="container mx-auto flex items-center justify-between py-4 px-2">
      <a href="/" className="flex items-center gap-2 font-poppins text-2xl font-bold tracking-tight text-fire hover:opacity-95 transition">
        <img src="/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png" alt="Logo Fire Domínios" className="w-10 h-10 object-contain" />
        Fire Domínios
      </a>
      <ul className="flex gap-8 text-base font-medium text-[#333] font-poppins">
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
