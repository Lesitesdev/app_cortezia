import Image from "next/image";

export default function ProfessionalSection() {
  return (
    <section className="pb-32">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-[40px] shadow-lg">

          {/* TEXTO */}
          <div className="bg-[#c0677c] text-white p-16 flex flex-col justify-center">

            <span className="uppercase tracking-[3px] text-sm mb-6 text-rose-100">
              Para profissionais
            </span>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Faça seu negócio crescer com agendamentos online
            </h2>

            <p className="text-lg text-rose-100 leading-8 mb-10">
              Conecte-se com novos clientes, receba agendamentos
              online e gerencie sua agenda em um único lugar.
              Ideal para salões, barbearias, manicures,
              massagistas, esteticistas e profissionais da área
              da beleza e bem-estar.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="
                  bg-white
                  text-[#c0677c]
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  shadow-md
                  hover:shadow-lg
                  hover:scale-105
                  transition
                "
              >
                Cadastrar meu negócio
              </button>

              <button
                className="
                  border
                  border-white
                  text-white
                  px-8
                  py-4
                  rounded-full
                  hover:bg-white/10
                  transition
                "
              >
                Saiba mais
              </button>
            </div>

            <div className="flex gap-8 mt-10 text-sm text-rose-100">
              <div className="grid grid-cols-3 gap-6 mt-12">
  <div>
    <h3 className="text-3xl font-bold">2.500+</h3>
    <p className="text-rose-100 text-sm">
      Profissionais cadastrados
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">15 mil+</h3>
    <p className="text-rose-100 text-sm">
      Agendamentos realizados
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">4.8★</h3>
    <p className="text-rose-100 text-sm">
      Avaliação média
    </p>
  </div>
</div>
            </div>

          </div>

          {/* IMAGEM */}
          <div className="relative h-[900px]">
            <Image
              src="/banner2.jpg"
              alt="Profissional da beleza"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}