
import Header from "../components/Header";
import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";
import About from "../components/About";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <Hero />
        <PortfolioGrid />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
