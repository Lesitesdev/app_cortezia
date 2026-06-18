import PageFrame from "@/components/PageFrame";

export default function PrivacidadePage() {
  return (
    <PageFrame
      eyebrow="Privacidade"
      title="Seus dados devem ser tratados com clareza"
      description="A Cortesia utiliza informações de cadastro e agendamento apenas para operar a experiência, conectar clientes aos salões e melhorar o serviço."
      features={[
        {
          title: "Dados de cadastro",
          text: "Nome, contato e preferências ajudam a identificar reservas e facilitar comunicações.",
        },
        {
          title: "Dados de agendamento",
          text: "Serviço, salão e horário escolhido são usados para organizar a reserva.",
        },
        {
          title: "Controle",
          text: "Solicitações sobre dados podem ser enviadas pela página de contato.",
        },
      ]}
    />
  );
}
