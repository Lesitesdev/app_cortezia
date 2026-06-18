import PageFrame from "@/components/PageFrame";

export default function ContatoPage() {
  return (
    <PageFrame
      eyebrow="Contato"
      title="Fale com a Cortesia"
      description="Envie sua dúvida, sugestão ou solicitação. A equipe retorna pelo contato informado."
    >
      <form className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm mt-12 max-w-2xl space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Nome</span>
          <input
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="Seu nome"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">E-mail</span>
          <input
            type="email"
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="voce@email.com"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">Mensagem</span>
          <textarea
            className="mt-2 w-full min-h-36 rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="Como podemos ajudar?"
          />
        </label>

        <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium transition">
          Enviar mensagem
        </button>
      </form>
    </PageFrame>
  );
}
