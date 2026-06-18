import PageFrame from "@/components/PageFrame";

export default function TermosPage() {
  return (
    <PageFrame
      eyebrow="Termos de uso"
      title="Regras simples para usar a Cortesia"
      description="Ao usar a plataforma, clientes e profissionais concordam em fornecer informações verdadeiras, respeitar horários confirmados e usar os canais de contato com responsabilidade."
      features={[
        {
          title: "Reservas",
          text: "A confirmação do atendimento depende da disponibilidade apresentada pelo salão ou profissional.",
        },
        {
          title: "Informações",
          text: "Dados de serviços, preços e horários podem ser atualizados pelos estabelecimentos parceiros.",
        },
        {
          title: "Uso adequado",
          text: "Não é permitido usar a plataforma para mensagens abusivas, falsas reservas ou conteúdo indevido.",
        },
      ]}
    />
  );
}
