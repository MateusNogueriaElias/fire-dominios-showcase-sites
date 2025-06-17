// Caminho: src/pages/Index.tsx

import Header from "../components/Header";
import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";
import DynamicParticlesBackground from "../components/DynamicParticlesBackground";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import { useIsMobile } from "@/hooks/use-mobile"; // <-- PASSO 1: IMPORTE O SEU HOOK

const Index = () => {
  const isMobile = useIsMobile(); // <-- PASSO 2: USE O HOOK PARA VERIFICAR

  return (
    <div className="w-full min-h-screen bg-white relative overflow-x-hidden">
      
      {/* PASSO 3: RENDERIZAÇÃO CONDICIONAL
        A animação de partículas só será renderizada se 'isMobile' for falso.
      */}
      {!isMobile && <DynamicParticlesBackground />}
      
      <Header />
      <FloatingWhatsapp />
      <main className="pt-15">
        <Hero />
        <PortfolioGrid />
      </main>
    </div>
  );
};

export default Index;
