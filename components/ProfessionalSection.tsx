import Image from "next/image";

export default function ProfessionalSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="w-full lg:max-w-6xl lg:mx-auto">
        <div
          className="
            grid
            lg:grid-cols-2
            overflow-hidden
            shadow-lg
            rounded-none
            lg:rounded-[40px]
          "
        >
          {/* TEXTO */}
          <div
            className="
              bg-[#c0677c]
              text-white
              p-6
              md:p-10
              lg:p-16
              flex
              flex-col
              justify-center
            "
          >
            <span
              className="
                uppercase
                tracking-[3px]
                text-xs
                md:text-sm
                mb-4
                md:mb-6
                text-rose-100
              "
            >
              Para profissionais
            </span>

            <h2
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
                mb-6
                md:mb-8
              "
            >
              Faça seu negócio crescer com agendamentos online
            </h2>

            <p
              className="
                text-base
                md:text-lg
                text-rose-100
                leading-7
                md:leading-8
                mb-8
                md:mb-10
              "
            >
              Conecte-se com novos clientes, receba agendamentos online
              e gerencie sua agenda em um único lugar. Ideal para
              salões, barbearias, manicures, massagistas,
              esteticistas e profissionais da área da beleza e
              bem-estar.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="
                  bg-white
                  text-[#c0677c]
                  px-6
                  md:px-8
                  py-3
                  md:py-4
                  rounded-full
                  font-semibold
                  shadow-md
                  hover:shadow-lg
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
                  px-6
                  md:px-8
                  py-3
                  md:py-4
                  rounded-full
                  hover:bg-white/10
                  transition
                "
              >
                Saiba mais
              </button>
            </div>

            {/* ESTATÍSTICAS */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-6
                mt-10
                md:mt-12
              "
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  2.500+
                </h3>
                <p className="text-rose-100 text-sm">
                  Profissionais cadastrados
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  15 mil+
                </h3>
                <p className="text-rose-100 text-sm">
                  Agendamentos realizados
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  4.8★
                </h3>
                <p className="text-rose-100 text-sm">
                  Avaliação média
                </p>
              </div>
            </div>
          </div>

          {/* IMAGEM */}
          <div
            className="
              relative
              h-[250px]
              sm:h-[350px]
              md:h-[450px]
              lg:min-h-[650px]
              lg:h-auto
            "
          >
            <Image
              src="/banner2.jpg"
              alt="Profissional da beleza"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}