import Link from "next/link";

import PageFrame from "@/components/PageFrame";

const appointments = [
  {
    id: 1,
    service: "Corte feminino",
    salon: "Studio Bella",
    date: "22/06/2026",
    time: "14:00",
    status: "Confirmado",
  },
  {
    id: 2,
    service: "Manicure completa",
    salon: "Bella Prime Beauty",
    date: "28/06/2026",
    time: "10:30",
    status: "Pendente",
  },
];

export default function MinhaContaPage() {
  return (
    <PageFrame
      eyebrow="Área do cliente"
      title="Meus agendamentos"
      description="Aqui o cliente logado acompanha horários, endereço cadastrado e preferências. No backend, esta tela será alimentada pelo usuário autenticado."
      primaryHref="/services"
      primaryLabel="Novo agendamento"
      secondaryHref="/cadastro"
      secondaryLabel="Editar cadastro"
    >
      <div className="grid lg:grid-cols-[1fr_360px] gap-8 mt-12">
        <section className="space-y-4">
          {appointments.map((appointment) => (
            <article
              key={appointment.id}
              className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-stone-900">
                    {appointment.service}
                  </h2>
                  <p className="text-stone-600 mt-1">{appointment.salon}</p>
                </div>

                <span className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm font-semibold">
                  {appointment.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-5 text-sm text-stone-600">
                <span className="rounded-full bg-stone-100 px-3 py-1">
                  {appointment.date}
                </span>
                <span className="rounded-full bg-stone-100 px-3 py-1">
                  {appointment.time}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="/services"
                  className="rounded-full bg-rose-500 text-white px-5 py-2 font-medium"
                >
                  Remarcar
                </Link>
                <button className="rounded-full border border-stone-300 px-5 py-2 font-medium">
                  Cancelar
                </button>
              </div>
            </article>
          ))}
        </section>

        <aside className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm h-fit">
          <h2 className="text-xl font-bold text-stone-900">Meu endereço</h2>
          <p className="text-stone-600 mt-3">
            CEP 05422-000 · Pinheiros, São Paulo
          </p>
          <p className="text-stone-500 mt-4 leading-7">
            Esse CEP será usado pelo backend para calcular salões próximos e ordenar
            a página de serviços por distância.
          </p>
          <Link
            href="/cadastro"
            className="mt-6 inline-flex rounded-full border border-stone-300 px-5 py-3 font-medium"
          >
            Atualizar CEP
          </Link>
        </aside>
      </div>
    </PageFrame>
  );
}
