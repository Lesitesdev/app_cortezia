import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* TEXTO */}
        <div>
          <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-500 px-4 py-2 rounded-full mb-8">
            ✨ Salões perto de você
          </div>

          <h1 className="text-6xl font-bold text-stone-900 leading-tight mb-8">
             Beleza e bem-estar perto de você
          </h1>

          <p className="text-xl text-stone-600 mb-10 max-w-lg">
           Dos melhores cortes de cabelo às sessões de massagem,
manicure e tratamentos estéticos. Encontre profissionais
qualificados e reserve seu horário sem filas ou ligações.
          </p>

          <div className="flex gap-4 mb-10">
            <button className="bg-rose-500 text-white px-8 py-4 rounded-full">
              Encontrar Serviços
            </button>

            <button className="border border-stone-300 px-8 py-4 rounded-full">
              Cadastrar Meu Negócio
            </button>
          </div>

          <div className="flex gap-10 text-stone-600">
            <span>💇 +2.400 profissionais e estabelecimentos</span>
            <span>⭐ 4.8 avaliação média</span>
             <span>📅 +15.000 agendamentos realizados</span>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="relative">
          <div className="relative w-full max-w-[620px] h-[760px]">
  <Image
    src="/banner.jpg"
    alt="Salão"
    fill
    priority
    className="object-cover rounded-[40px]"
  />
</div>

          {/* CARD AVALIAÇÃO */}
          <div className="absolute top-8 right-[-20px] bg-white p-4 rounded-2xl shadow-lg">
            <div className="text-amber-500 text-xl">⭐⭐⭐⭐⭐</div>

            <p className="text-stone-500 text-sm">+380 avaliações</p>
          </div>

          {/* CARD LOCALIZAÇÃO */}
          <div className="absolute bottom-8 left-[-20px] bg-white p-4 rounded-2xl shadow-lg flex gap-3 items-center">
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
              📍
            </div>

            <div>
              <p className="text-xs text-stone-500">Mais próximo</p>

              <p className="font-medium">Studio Bella — 0.8 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


