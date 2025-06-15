
import SiteCard from "./SiteCard";

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
  <section className="py-20 bg-white" id="portfolio">
    <div className="container mx-auto">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 text-fire-dark">
        Nosso Portfólio
      </h2>

      {/* Seção WordPress */}
      <div>
        <h3 className="text-2xl font-bold text-fire-dark mb-6 mt-10 text-center">Plataforma de Alta Performance (WordPress)</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {wpSites.map((site) => (
            <SiteCard key={site.title} {...site} />
          ))}
        </div>
      </div>

      {/* Seção Soluções Sob Medida */}
      <div>
        <h3 className="text-2xl font-bold text-fire-dark mb-6 mt-16 text-center">Soluções Sob Medida (Sites Codados)</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {customSites.map((site) => (
            <SiteCard key={site.title} {...site} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioGrid;
