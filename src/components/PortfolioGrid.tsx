import SiteCard from "./SiteCard";
import { MessageCircle } from "lucide-react";

// Sites WordPress
const wpSites = [
  {
    title: "Cafeteria Aroma",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    url: "https://exemplo-cafearoma.com",
    description: "Site institucional moderno para cafeteria local, com cardápio online, integração WhatsApp.",
  },
  {
    title: "Construtora Prime",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    url: "https://construtoraprime.com",
    description: "Landing page responsiva para construtora, foco em contato e portfólio de obras.",
  },
  {
    title: "Blog Viagem com Estilo",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    url: "https://viagemcomestilo.com",
    description: "Blog com sistema de posts, integração Instagram e layout atraente para viajantes.",
  },
];

// Sites Codados
const customSites = [
  {
    title: "Loja TechShop",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    url: "https://lojatechshop.com",
    description: "E-commerce completo com carrinho, gateway de pagamento e catálogo de produtos.",
  },
  {
    title: "Personal Trainer Premium",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    url: "https://ptpremium.com",
    description: "Site pessoal com agendamento de treinos, área de depoimentos e blog de saúde.",
  },
  {
    title: "Advocacia Freitas",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    url: "https://advfreitas.com",
    description: "Site institucional elegante, destaque para áreas de atuação e contato ágil.",
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {wpSites.map((site) => (
            <SiteCard key={site.title} {...site} />
          ))}
        </div>
      </div>

      {/* Seção Soluções Sob Medida */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-16 text-center">Soluções Sob Medida (Código)</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
            href="https://wa.me/5599999999999?text=Olá,%20quero%20receber%20uma%20análise%20gratuita%20do%20meu%20site!"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-1 w-full
              flex items-center justify-center gap-2
              px-0 xs:px-2
              py-3 xs:py-3
              rounded-full bg-fire text-white font-bold
              shadow-lg hover:bg-fire-dark transition
              text-base xs:text-lg
              min-h-[50px]
              active:scale-[0.98]
            "
            style={{ minWidth: 0 }}
          >
            <span className="w-full text-center">Receber Análise Gratuita</span>
            <svg className="ml-1 xs:ml-2 shrink-0" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.5 8.5 12 7v6l4.5 2.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioGrid;
