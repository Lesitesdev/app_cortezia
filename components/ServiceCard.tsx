import Image from "next/image";
import Link from "next/link";

interface Props {
  nome: string;
  preco: string;
  imagem: string;
  genero: string;
  salao?: string;
  bairro?: string;
  distanciaKm?: number;
  nota?: number;
  duracao?: string;
  disponivelHoje?: boolean;
}

export default function ServiceCard({
  nome,
  preco,
  imagem,
  genero,
  salao = "Salão parceiro",
  bairro = "São Paulo",
  distanciaKm,
  nota,
  duracao,
  disponivelHoje,
}: Props) {
  const agendamentoHref = `/agendamento?servico=${encodeURIComponent(
    nome
  )}&salao=${encodeURIComponent(salao)}`;

  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">
      <div className="relative h-60">
        <Image
          src={imagem}
          alt={nome}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-rose-500 capitalize">{genero}</span>
          {nota && (
            <span className="text-sm font-semibold text-amber-500">{nota}</span>
          )}
        </div>

        <h3 className="text-xl font-bold mt-2">{nome}</h3>

        <p className="text-stone-500 mt-2">
          {salao} · {bairro}
        </p>

        <div className="flex flex-wrap gap-2 mt-4 text-xs text-stone-600">
          {distanciaKm !== undefined && (
            <span className="rounded-full bg-stone-100 px-3 py-1">
              {distanciaKm.toFixed(1)} km
            </span>
          )}
          {duracao && (
            <span className="rounded-full bg-stone-100 px-3 py-1">{duracao}</span>
          )}
          {disponivelHoje && (
            <span className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1">
              Hoje
            </span>
          )}
        </div>

        <p className="text-stone-500 mt-4">A partir de {preco}</p>

        <Link
          href={agendamentoHref}
          className="mt-4 w-full bg-rose-500 text-white py-3 rounded-xl hover:bg-rose-600 inline-flex items-center justify-center transition"
        >
          Agendar
        </Link>
      </div>
    </article>
  );
}
