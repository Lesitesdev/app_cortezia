import Link from "next/link";

import PageFrame from "@/components/PageFrame";

export default function CadastroPage() {
  return (
    <PageFrame
      eyebrow="Cadastro"
      title="Crie sua conta grátis"
      description="Salve seus dados, CEP, agilize reservas e acompanhe seus próximos horários."
    >
      <form className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm mt-12 max-w-md space-y-5">
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
          <span className="text-sm font-medium text-stone-700">CEP</span>
          <input
            inputMode="numeric"
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="05422-000"
          />
          <span className="text-xs text-stone-500 mt-2 block">
            Depois o backend usa esse CEP para ordenar salões próximos.
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">Senha</span>
          <input
            type="password"
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="Crie uma senha"
          />
        </label>

        <Link
          href="/minha-conta"
          className="w-full bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium transition inline-flex justify-center"
        >
          Criar conta
        </Link>

        <p className="text-sm text-stone-600 text-center">
          Tem um negócio?{" "}
          <Link href="/cadastro-negocio" className="text-rose-500 font-semibold">
            Cadastre seu negócio
          </Link>
        </p>
      </form>
    </PageFrame>
  );
}
