import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  nome: string;
  cidade: string;
  nota: number;
  imagem?: string;
};

export default function SalonCard({
  id,
  nome,
  cidade,
  nota,
  imagem = "/saloes/bella1.jpg",
}: Props) {
  return (
    <Link
      href={`/saloes/${id}`}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition block"
    >
      <div className="relative h-56">
        <Image
          src={imagem}
          alt={nome}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-stone-900">{nome}</h2>
            <p className="text-stone-600 mt-1">{cidade}</p>
          </div>

          <span className="rounded-full bg-rose-50 text-rose-500 px-3 py-1 text-sm font-semibold">
            {nota}
          </span>
        </div>

        <span className="mt-5 inline-flex bg-rose-500 text-white px-4 py-2 rounded-lg">
          Ver detalhes
        </span>
      </div>
    </Link>
  );
}
