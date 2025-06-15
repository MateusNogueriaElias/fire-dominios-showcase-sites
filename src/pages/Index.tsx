
import Header from "../components/Header";
import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import Stats from "../components/Stats";
// Removido: import DynamicParticlesBackground from "../components/DynamicParticlesBackground";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-x-hidden">
      {/* <DynamicParticlesBackground /> */}
      <Header />
      <FloatingWhatsapp />
      <main className="pt-24">
        <Hero />
        <Stats />
        <PortfolioGrid />
      </main>
    </div>
  );
};

export default Index;

