import SiteCard from "./SiteCard";
import { Clock } from "lucide-react";

// Sites WordPress
const wpSites = [
  {
    title: "Restaurantes",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    url: "https://restaurante.firedominios.com",
    description: "Site elegante para restaurantes com cardápio digital, sistema de reservas online e galeria de pratos especiais.",
  },
  {
    title: "Corretores de Imóveis",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    url: "https://corretoresdeimoveis.firedominios.com",
    description: "Portal imobiliário completo com catálogo de propriedades, busca avançada e sistema de contato direto.",
  },
  {
    title: "Personal Trainer",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    url: "https://personaltrainers.firedominios.com",
    description: "Site profissional para personal trainers com planos de treino, agendamento de sessões e depoimentos de clientes.",
  },
  {
    title: "Nutricionista",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    url: "https://nutricionismo.firedominios.com",
    description: "Plataforma para nutricionistas com consultas online, planos alimentares personalizados e blog de dicas nutricionais.",
  },
];

// Sites Codados
const customSites = [
  {
    title: "Advocacia",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    url: "https://advogado.firedominios.com",
    description: "Site profissional para escritório de advocacia com áreas de atuação, consulta online e agendamento de reuniões.",
  },
  {
    title: "Bijuteria",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    url: "https://biju.firedominios.com",
    description: "E-commerce elegante para bijuterias com catálogo de produtos, carrinho de compras e sistema de pagamento integrado.",
  },
  {
    title: "Salão de Beleza",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    url: "https://salaodebeleza.firedominios.com",
    description: "Site moderno para salão de beleza com galeria de serviços, agendamento online e perfil da equipe profissional.",
  },
  {
    title: "Veterinário",
    img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
    url: "https://veterinario.firedominios.com",
    description: "Clínica veterinária completa com informações sobre serviços, agendamento de consultas e dicas de cuidados com pets.",
  },
];

const PortfolioGrid = () => (
  <section className="py-20 bg-gray-50" id="portfolio">
    <div className="container mx-auto">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-fire-dark">
        Nosso Portfólio
      </h2>
      <p className="text-base md:text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Cada projeto é uma parceria. Navegue por nossas soluções e descubra como combinamos design e tecnologia para posicionar marcas como a sua na vanguarda do mercado digital.
      </p>

      {/* Seção WordPress */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-10 text-center">Plataforma de Alta Performance (WordPress)</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {wpSites.map((site) => (
            <SiteCard key={site.title} {...site} />
          ))}
        </div>
      </div>

      {/* Seção Soluções Sob Medida */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-16 text-center">Soluções Sob Medida (Código)</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {customSites.map((site) => (
            <SiteCard key={site.title} {...site} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 flex justify-center">
        <div
          className="
            w-full max-w-sm sm:max-w-md bg-white shadow-sm border rounded-2xl px-4 py-9
            flex flex-col items-center gap-6
          "
        >
          <h3 className="text-2xl xs:text-3xl font-extrabold text-fire-dark text-center mb-2 leading-snug">
            Pronto para<br />
            Impressionar?
          </h3>
          <p className="text-base xs:text-lg font-medium text-slate-700 text-center leading-relaxed">
            Vamos conversar sobre como a{' '}
            <span className="text-fire font-bold">FireDominios</span>
            {' '}pode construir a solução digital ideal para o seu negócio. Agende uma conversa sem compromisso.
          </p>
          <a
            href="https://wa.me/11972492813?text=Olá,%20quero%20receber%20uma%20análise%20gratuita%20do%20meu%20site!"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full 
              flex items-center justify-center
              px-0 xs:px-4
              py-3
              rounded-full
              bg-[#FF6F00] 
              font-bold text-white text-lg xs:text-lg text-center
              shadow-lg hover:bg-[#d45900] transition
              min-h-[50px]
              active:scale-[0.98]
              border-0
              outline-none
              focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF6F00]
              select-none
            "
            style={{ minWidth: 0, boxShadow: "0 4px 18px 0 #fc562b33" }}
          >
            <span className="w-full block text-center leading-tight">
              Receber Análise<br className="sm:hidden" /> Gratuita
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioGrid;
