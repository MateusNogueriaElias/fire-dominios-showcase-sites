
import React from 'react';

const SitesSection = () => {
  return (
    <section className="py-20 bg-white" id="sites">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-fire-dark">
          Nossos Sites
        </h2>
        <p className="text-base md:text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Desenvolvemos sites profissionais com foco em performance, SEO e experiência do usuário. 
          Cada projeto é único e personalizado para atender às necessidades específicas do seu negócio.
        </p>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-fire-dark mb-3">Sites WordPress</h3>
            <p className="text-gray-600">
              Plataformas robustas e otimizadas com sistema de gerenciamento de conteúdo intuitivo.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-fire-dark mb-3">Desenvolvimento Sob Medida</h3>
            <p className="text-gray-600">
              Soluções personalizadas desenvolvidas do zero para atender necessidades específicas.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-fire-dark mb-3">E-commerce</h3>
            <p className="text-gray-600">
              Lojas virtuais completas com integração de pagamento e gestão de produtos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SitesSection;
