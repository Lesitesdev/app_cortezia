import Link from "next/link";

import PageFrame from "@/components/PageFrame";

export default function EntrarPage() {
  return (
    <PageFrame
      eyebrow="Entrar"
      title="Acesse sua conta"
      description="Entre para acompanhar seus agendamentos e encontrar seus salões favoritos."
    >
      <form className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm mt-12 max-w-md space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-stone-700">E-mail</span>
          <input
            type="email"
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="voce@email.com"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">Senha</span>
          <input
            type="password"
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
            placeholder="Sua senha"
          />
        </label>

        <Link
          href="/minha-conta"
          className="w-full bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium transition inline-flex justify-center"
        >
          Entrar
        </Link>

        <p className="text-sm text-stone-600 text-center">
          Ainda não tem conta?{" "}
          <Link href="/cadastro" className="text-rose-500 font-semibold">
            Cadastre-se
          </Link>
        </p>
      </form>
    </PageFrame>
  );
}
