
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
      <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-3">
        Projetos que transformam presença digital em resultados de negócio.
      </h3>
      <p className="text-base md:text-lg text-center text-gray-700 mb-10 max-w-2xl mx-auto">
        Navegue por nossas soluções e descubra como posicionamos marcas como a sua na vanguarda do mercado digital. Cada site que criamos, seja em WordPress de alta performance ou codificado sob medida, é uma ferramenta para o seu crescimento.
      </p>

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

      {/* CTA */}
      <div className="mt-24 flex flex-col items-center justify-center gap-6">
        <p className="text-2xl md:text-3xl font-bold text-center text-fire-dark">
          Viu o potencial?
        </p>
        <p className="text-lg md:text-xl text-center text-gray-800 max-w-2xl">
          Vamos conversar sobre como a <span className="font-semibold text-fire">FireDominios</span> pode construir a solução digital ideal para posicionar sua empresa e impulsionar suas vendas.<br />Agende uma conversa sem compromisso.
        </p>
        <a
          href="https://wa.me/5599999999999?text=Olá,%20quero%20receber%20uma%20análise%20gratuita%20do%20meu%20site!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-fire text-white font-semibold shadow-lg hover:bg-fire-dark transition text-lg"
        >
          Receber Análise Gratuita
          {/* Ícone WhatsApp */}
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g>
              <path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15s-.767.966-.94 1.164c-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.019-.458.13-.606.134-.133.297-.347.446-.52.151-.174.199-.299.298-.497.099-.198.05-.372-.025-.52-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.202 5.077 4.366.71.306 1.262.489 1.695.627.712.227 1.36.195 1.87.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 5.421h-.001a9.87 9.87 0 01-4.988-1.353l-.357-.212-3.717.974.995-3.621-.232-.373a9.876 9.876 0 01-1.518-5.292c.001-5.451 4.437-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.899a9.825 9.825 0 012.896 6.987c-.003 5.451-4.438 9.884-9.887 9.884zm8.413-18.297C18.127.566 15.235-.486 12.065.021 8.23.602 4.923 3.51 3.42 7.077c-1.93 4.774-.349 10.187 3.508 13.256A11.913 11.913 0 0012 24c6.617 0 12-5.383 12-12 0-2.697-1.065-5.222-3.004-7.14z"></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default PortfolioGrid;
