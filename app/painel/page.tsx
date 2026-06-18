import PageFrame from "@/components/PageFrame";

const services = [
  { name: "Corte feminino", price: "R$ 80 - 90", duration: "50 min" },
  { name: "Coloração", price: "R$ 120 - 200", duration: "2h" },
  { name: "Mechas / Luzes", price: "R$ 150 - 280", duration: "2h30" },
];

const bookings = [
  { client: "Ana Souza", service: "Corte feminino", time: "Hoje, 14:00" },
  { client: "Carla Silva", service: "Coloração", time: "Amanhã, 10:30" },
];

export default function PainelPage() {
  return (
    <PageFrame
      eyebrow="Painel profissional"
      title="Gerencie seu salão"
      description="Um painel visual para o salão editar serviços, acompanhar pedidos de agendamento e manter o perfil pronto para clientes próximos."
      primaryHref="/cadastro-negocio"
      primaryLabel="Editar perfil"
      secondaryHref="/saloes/1"
      secondaryLabel="Ver página pública"
    >
      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        <section className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-stone-900">Serviços</h2>
            <button className="rounded-full bg-rose-500 text-white px-5 py-2 font-medium">
              Novo serviço
            </button>
          </div>

          <div className="space-y-4 mt-6">
            {services.map((service) => (
              <article
                key={service.name}
                className="rounded-2xl border border-stone-200 p-4 flex items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-semibold text-stone-900">{service.name}</h3>
                  <p className="text-stone-500 text-sm mt-1">
                    {service.duration} · {service.price}
                  </p>
                </div>
                <button className="rounded-full border border-stone-300 px-4 py-2 text-sm">
                  Editar
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm">
          <h2 className="text-2xl font-bold text-stone-900">Agendamentos</h2>

          <div className="space-y-4 mt-6">
            {bookings.map((booking) => (
              <article
                key={`${booking.client}-${booking.time}`}
                className="rounded-2xl border border-stone-200 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-stone-900">{booking.client}</h3>
                    <p className="text-stone-500 text-sm mt-1">
                      {booking.service} · {booking.time}
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-50 text-amber-700 px-3 py-1 text-sm font-semibold">
                    Pendente
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mt-5">
                  <button className="rounded-full bg-emerald-600 text-white px-4 py-2 text-sm">
                    Confirmar
                  </button>
                  <button className="rounded-full border border-stone-300 px-4 py-2 text-sm">
                    Reagendar
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
