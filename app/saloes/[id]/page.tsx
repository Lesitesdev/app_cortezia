import { saloes } from "@/data/saloes";
import SalaoClient from "./SalaoClient";

export function generateStaticParams() {
  return saloes.map((salao) => ({
    id: String(salao.id),
  }));
}

export default async function SalaoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const salao = saloes.find((s) => s.id === Number(id));

  if (!salao) {
    return <div className="p-10">Salão não encontrado</div>;
  }

  return <SalaoClient salao={salao} />;
}
