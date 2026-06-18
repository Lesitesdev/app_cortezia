export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      nome: "Mariana Silva",
      texto:
        "Achei um salão incrível perto de casa e consegui agendar em menos de 2 minutos.",
    },
    {
      id: 2,
      nome: "Juliana Costa",
      texto:
        "A plataforma é muito fácil de usar. Hoje faço todos os meus agendamentos por aqui.",
    },
    {
      id: 3,
      nome: "Carlos Mendes",
      texto:
        "Como proprietário de salão, consegui aumentar muito meus agendamentos.",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-rose-500 font-medium">Depoimentos</span>

          <h2 className="text-5xl font-bold text-[#3b2323] mt-4">
            O que nossos clientes dizem
          </h2>

          <p className="text-stone-500 mt-4 text-lg">
            Milhares de pessoas já utilizam a plataforma.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#f7f3f0] p-8 rounded-3xl border border-stone-200"
            >
              <div className="text-amber-400 text-xl mb-6">★★★★★</div>

              <p className="text-stone-600 leading-8 mb-8">“{item.texto}”</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold">
                  {item.nome[0]}
                </div>

                <div>
                  <p className="font-semibold text-[#3b2323]">{item.nome}</p>
                  <p className="text-sm text-stone-500">Cliente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
