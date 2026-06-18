import PageFrame from "@/components/PageFrame";

export default function AjudaPage() {
  return (
    <PageFrame
      eyebrow="Central de ajuda"
      title="Encontre respostas rápidas"
      description="Veja orientações sobre cadastro, escolha de serviços, confirmação de horários e contato com salões."
      primaryHref="/contato"
      primaryLabel="Enviar mensagem"
      secondaryHref="/services"
      secondaryLabel="Ver serviços"
      features={[
        {
          title: "Como agendar",
          text: "Escolha um serviço, selecione um salão e confirme um horário disponível.",
        },
        {
          title: "Alterar horário",
          text: "Entre em contato com o salão pelo telefone exibido na página de detalhes.",
        },
        {
          title: "Cadastrar negócio",
          text: "Use a página de cadastro de negócio para enviar seus dados e começar a montar o perfil.",
        },
      ]}
    />
  );
}
