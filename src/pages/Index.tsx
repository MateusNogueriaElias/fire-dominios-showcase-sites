
import Header from "../components/Header";
import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";
import DynamicParticlesBackground from "../components/DynamicParticlesBackground";
import FloatingWhatsapp from "../components/FloatingWhatsapp";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-x-hidden">
      <DynamicParticlesBackground />
      <Header />
      <FloatingWhatsapp />
      <main className="pt-24">
        <Hero />
        <PortfolioGrid />
      </main>
    </div>
  );
};

export default Index;
