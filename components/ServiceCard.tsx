import Image from "next/image";

interface Props {
  nome: string;
  preco: string;
  imagem: string;
  genero: string;
}

export default function ServiceCard({
  nome,
  preco,
  imagem,
  genero,
}: Props) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">
      <div className="relative h-60">
        <Image
          src={imagem}
          alt={nome}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <span className="text-sm text-rose-500 capitalize">
          {genero}
        </span>

        <h3 className="text-xl font-bold mt-2">
          {nome}
        </h3>

        <p className="text-stone-500 mt-2">
          A partir de {preco}
        </p>

        <button
          className="
            mt-4
            w-full
            bg-rose-500
            text-white
            py-3
            rounded-xl
            hover:bg-rose-600
          "
        >
          Agendar
        </button>
      </div>
    </div>
  );
}