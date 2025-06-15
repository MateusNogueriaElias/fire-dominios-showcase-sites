
import Header from "../components/Header";
import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
// Removido: import Stats from "../components/Stats";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-x-hidden">
      {/* <DynamicParticlesBackground /> */}
      <Header />
      <FloatingWhatsapp />
      <main className="pt-24">
        <Hero />
        {/* <Stats /> Removido conforme solicitado */}
        <PortfolioGrid />
      </main>
    </div>
  );
};

export default Index;
