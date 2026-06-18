interface Props {
  categoria: string;
  setCategoria: (value: string) => void;
}

export const categorias = [
  { id: "todos", nome: "Todos" },
  { id: "corte-feminino", nome: "Corte feminino" },
  { id: "corte-masculino", nome: "Corte masculino" },
  { id: "coloracao", nome: "Coloração" },
  { id: "mechas", nome: "Mechas / Luzes" },
  { id: "escova", nome: "Escova" },
  { id: "manicure", nome: "Manicure" },
  { id: "barba", nome: "Barba" },
  { id: "massagem", nome: "Massagem" },
];

export default function ServicesFilter({
  categoria,
  setCategoria,
}: Props) {
  return (
    <div className="relative">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {categorias.map((item) => (
          <button
            key={item.id}
            onClick={() => setCategoria(item.id)}
            className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              categoria === item.id
                ? "bg-rose-500 border-rose-500 text-white"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {item.nome}
          </button>
        ))}
      </div>
    </div>
  );
}
