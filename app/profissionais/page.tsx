import PageFrame from "@/components/PageFrame";

export default function ProfissionaisPage() {
  return (
    <PageFrame
      eyebrow="Para profissionais"
      title="Receba agendamentos sem depender de mensagens soltas"
      description="A Cortesia ajuda salões, barbearias e profissionais independentes a organizar serviços, horários e novos clientes em uma experiência simples."
      primaryHref="/cadastro-negocio"
      primaryLabel="Cadastrar meu negócio"
      secondaryHref="/services"
      secondaryLabel="Ver serviços"
      features={[
        {
          title: "Agenda organizada",
          text: "Centralize horários, serviços e confirmações em um fluxo claro para você e para o cliente.",
        },
        {
          title: "Perfil profissional",
          text: "Mostre fotos, avaliações, endereço, telefone e valores para ganhar confiança antes da reserva.",
        },
        {
          title: "Mais clientes",
          text: "Apareça para pessoas que já estão procurando serviços de beleza e bem-estar perto delas.",
        },
      ]}
    />
  );
}
