import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-500 px-4 py-2 rounded-full mb-6">
            Salões perto de você
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
            Beleza e bem-estar perto de você
          </h1>

          <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-xl">
            Dos melhores cortes de cabelo às sessões de massagem, manicure e tratamentos
            estéticos. Encontre profissionais qualificados e reserve seu horário sem
            filas ou ligações.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/services"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium transition inline-flex items-center justify-center"
            >
              Encontrar serviços
            </Link>

            <Link
              href="/cadastro-negocio"
              className="border border-stone-300 hover:bg-white px-8 py-4 rounded-full font-medium transition inline-flex items-center justify-center"
            >
              Cadastrar meu negócio
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-stone-900">2.400+</h3>
              <p className="text-stone-500 text-sm">Profissionais</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-stone-900">4.8</h3>
              <p className="text-stone-500 text-sm">Avaliação média</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-stone-900">15 mil+</h3>
              <p className="text-stone-500 text-sm">Agendamentos</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[700px]">
            <Image
              src="/banner.jpg"
              alt="Salão de beleza"
              fill
              priority
              className="object-cover rounded-3xl lg:rounded-[40px]"
            />
          </div>

          <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-white p-4 rounded-2xl shadow-xl">
            <div className="text-amber-500">★★★★★</div>
            <p className="text-stone-500 text-sm">+380 avaliações</p>
          </div>

          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-bold">
              1
            </div>

            <div>
              <p className="text-xs text-stone-500">Mais próximo</p>
              <p className="font-medium text-sm">Studio Bella - 0.8 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
