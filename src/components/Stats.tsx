
const stats = [
  { label: "Projetos Entregues", value: 120 },
  { label: "Empresas Atendidas", value: 65 },
  { label: "Avaliação Média", value: "5.0 ★" }
];

const Stats = () => (
  <section className="py-10 bg-gradient-to-r from-fire-light/60 to-white">
    <div className="container mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center animate-fade-in">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white shadow-xl rounded-2xl px-8 py-6 flex flex-col items-center w-full md:w-1/3 border hover:scale-105 transition-transform">
          <span className="text-4xl font-bold text-fire mb-2">{stat.value}</span>
          <span className="text-gray-700 font-medium">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
