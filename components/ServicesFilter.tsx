interface Props {
  categoria: string;
  setCategoria: (value: string) => void;
}

export default function ServicesFilter({
  categoria,
  setCategoria,
}: Props) {
  const categorias = [
    "todos",
    "cabelo",
    "barbearia",
    "manicure",
    "massagem",
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {categorias.map((item) => (
        <button
          key={item}
          onClick={() => setCategoria(item)}
          className={`
            px-5 py-2 rounded-full transition
            ${
              categoria === item
                ? "bg-rose-500 text-white"
                : "bg-white border"
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

