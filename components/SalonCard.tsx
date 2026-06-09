type Props = {
  nome: string;
  cidade: string;
  nota: number;
};

export default function SalonCard({
  nome,
  cidade,
  nota,
}: Props) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{cidade}</p>
      <p>⭐ {nota}</p>
      <button>Ver Detalhes</button>
    </div>
  );
}