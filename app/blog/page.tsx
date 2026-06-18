import Link from "next/link";

import PageFrame from "@/components/PageFrame";

const posts = [
  "Como escolher o salão ideal para o seu próximo atendimento",
  "Dicas para manter sua agenda de beleza sempre em dia",
  "Por que avaliações ajudam na decisão de agendamento",
];

export default function BlogPage() {
  return (
    <PageFrame
      eyebrow="Blog"
      title="Conteúdos para cuidar da rotina de beleza"
      description="Guias rápidos para clientes e profissionais aproveitarem melhor a experiência de agendamento online."
    >
      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {posts.map((post) => (
          <article key={post} className="bg-white rounded-3xl p-7 border border-stone-100">
            <h2 className="text-xl font-bold text-stone-900">{post}</h2>
            <p className="text-stone-600 mt-3 leading-7">
              Um guia prático com orientações simples para decidir e agendar com mais confiança.
            </p>
            <Link href="/services" className="text-rose-500 font-semibold mt-5 inline-flex">
              Explorar serviços
            </Link>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
