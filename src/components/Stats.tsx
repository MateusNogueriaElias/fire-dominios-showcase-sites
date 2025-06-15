
const stats = [
  { label: "Projetos Entregues", value: 38 },
  { label: "Empresas Atendidas", value: 25 },
  { label: "Anos no Mercado", value: "3+" }
];

const Stats = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="p-4">
            <span className="text-5xl font-extrabold text-fire-DEFAULT block mb-2">{stat.value}</span>
            <span className="text-lg text-gray-600 font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
