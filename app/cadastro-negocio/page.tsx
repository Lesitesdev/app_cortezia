import Link from "next/link";

import PageFrame from "@/components/PageFrame";

export default function CadastroNegocioPage() {
  return (
    <PageFrame
      eyebrow="Cadastro de negócio"
      title="Coloque seu salão na Cortesia"
      description="Envie as informações principais do seu negócio para começar a receber pedidos de agendamento online."
    >
      <form className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm mt-12 max-w-2xl grid md:grid-cols-2 gap-5">
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-stone-700">Nome do negócio</span>
          <input
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="Ex: Studio Bella"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">Telefone</span>
          <input
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="(11) 99999-9999"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">CEP</span>
          <input
            inputMode="numeric"
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="05409-000"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">Cidade</span>
          <input
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="São Paulo"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">Bairro</span>
          <input
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="Pinheiros"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-stone-700">Serviços oferecidos</span>
          <textarea
            className="mt-2 w-full min-h-28 rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="Cortes, manicure, massagem, barba..."
          />
        </label>

        <Link
          href="/painel"
          className="md:col-span-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium transition inline-flex justify-center"
        >
          Enviar cadastro
        </Link>
      </form>
    </PageFrame>
  );
}
