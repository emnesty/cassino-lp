const stats = [
  { id: 1, name: "Clientes satisfeitos", value: "+100" },
  { id: 2, name: "Jogadores nas plataformas", value: "+2.000.000" },
  { id: 3, name: "Alta disponibilidade", value: "99.9%" },
  { id: 4, name: "Receita bruta da operação", value: "R$ 100.000.000" },
];

export default function StatsSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Garantia a cada compra
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Dezenas de compras ja realizadas e negócios feitos
            </p>
          </div>
          <dl
            className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
