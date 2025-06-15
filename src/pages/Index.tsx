
import DynamicNetworkBackground from "../components/DynamicNetworkBackground";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import Stats from "../components/Stats";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Fundo dinâmico sempre ativo */}
      <DynamicNetworkBackground />
      <Header />
      <FloatingWhatsapp />
      <main className="pt-24 relative z-10">
        <Hero />
        <Stats />
        <PortfolioGrid />
      </main>
    </div>
  );
};

export default Index;
