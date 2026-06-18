import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SalonCard from "@/components/SalonCard";
import { saloes } from "@/data/saloes";

export default function SaloesPage() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-32">
        <div className="mb-10">
          <span className="text-rose-500 font-semibold">Salões parceiros</span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mt-3">
            Escolha um salão perto de você
          </h1>
          <p className="text-stone-600 mt-4 max-w-2xl leading-8">
            Compare serviços, avaliações e horários disponíveis antes de confirmar
            seu agendamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saloes.map((salao) => (
            <SalonCard
              key={salao.id}
              id={salao.id}
              nome={salao.nome}
              cidade={salao.cidade}
              nota={salao.nota}
              imagem={salao.imagens[0]}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
