export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Cadastre-se",
      text: "Crie seu perfil como cliente ou como salão em menos de 2 minutos.",
    },
    {
      number: "02",
      title: "Encontre próximos",
      text: "Veja salões ordenados por distância da sua localização atual.",
    },
    {
      number: "03",
      title: "Agende e pronto",
      text: "Escolha horário, confirme e apareça na hora sem ligações.",
    },
  ];

  return (
    <section id="como-funciona" className="py-28">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#3b2323] mb-4">
            Como funciona
          </h2>

          <p className="text-lg text-stone-500">
            Simples, rápido e sem complicação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 relative"
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 font-bold mb-8">
                {step.number}
              </div>

              <span className="absolute top-8 right-8 text-6xl font-bold text-stone-100">
                {step.number}
              </span>

              <h3 className="text-3xl font-semibold text-[#3b2323] mb-4">
                {step.title}
              </h3>

              <p className="text-stone-500 leading-8">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
