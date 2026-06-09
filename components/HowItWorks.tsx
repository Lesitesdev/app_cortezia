export default function HowItWorks() {
  return (
    <section className="py-28">
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

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 relative">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-2xl mb-8">
              👤
            </div>

            <span className="absolute top-8 right-8 text-6xl font-bold text-stone-100">
              01
            </span>

            <h3 className="text-3xl font-semibold text-[#3b2323] mb-4">
              Cadastre-se
            </h3>

            <p className="text-stone-500 leading-8">
              Crie seu perfil como cliente ou como salão em menos de 2 minutos.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 relative">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-2xl mb-8">
              🔍
            </div>

            <span className="absolute top-8 right-8 text-6xl font-bold text-stone-100">
              02
            </span>

            <h3 className="text-3xl font-semibold text-[#3b2323] mb-4">
              Encontre próximos
            </h3>

            <p className="text-stone-500 leading-8">
              Veja salões ordenados por distância da sua localização atual.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 relative">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-2xl mb-8">
              🕒
            </div>

            <span className="absolute top-8 right-8 text-6xl font-bold text-stone-100">
              03
            </span>

            <h3 className="text-3xl font-semibold text-[#3b2323] mb-4">
              Agende e pronto
            </h3>

            <p className="text-stone-500 leading-8">
              Escolha horário, confirme e apareça na hora sem ligações.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}