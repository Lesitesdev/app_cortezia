import PageFrame from "@/components/PageFrame";

export default function SobrePage() {
  return (
    <PageFrame
      eyebrow="Sobre nós"
      title="A Cortesia aproxima clientes e profissionais da beleza"
      description="Criamos uma forma mais leve de descobrir salões, comparar serviços e reservar horários sem ligações, filas ou conversas espalhadas."
      primaryHref="/services"
      primaryLabel="Encontrar serviços"
      secondaryHref="/contato"
      secondaryLabel="Falar conosco"
      features={[
        {
          title: "Busca local",
          text: "A experiência prioriza opções próximas, com informações úteis para decidir rápido.",
        },
        {
          title: "Agendamento claro",
          text: "O cliente escolhe serviço, horário e salão antes de confirmar a reserva.",
        },
        {
          title: "Crescimento para negócios",
          text: "Profissionais ganham uma vitrine digital com caminhos simples para receber reservas.",
        },
      ]}
    />
  );
}
