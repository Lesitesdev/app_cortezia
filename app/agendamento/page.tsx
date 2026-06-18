import AgendamentoClient from "./AgendamentoClient";

export default async function AgendamentoPage({
  searchParams,
}: {
  searchParams: Promise<{
    servico?: string;
    salao?: string;
    horario?: string;
  }>;
}) {
  const params = await searchParams;

  return (
    <AgendamentoClient
      initialServico={params.servico || "Serviço de beleza"}
      initialSalao={params.salao || "Salão parceiro"}
      initialHorario={params.horario || "14:00"}
    />
  );
}
