"use client";

import Link from "next/link";
import { useState } from "react";

import PageFrame from "@/components/PageFrame";

type AgendamentoClientProps = {
  initialServico: string;
  initialSalao: string;
  initialHorario: string;
};

export default function AgendamentoClient({
  initialServico,
  initialSalao,
  initialHorario,
}: AgendamentoClientProps) {
  const [data, setData] = useState("2026-06-22");
  const [horario, setHorario] = useState(initialHorario);
  const [profissional, setProfissional] = useState("Primeiro disponível");
  const [observacao, setObservacao] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const horarios = ["09:00", "10:30", "13:30", "14:00", "16:00", "17:30"];
  const profissionais = [
    "Primeiro disponível",
    "Ana Souza",
    "Carla Silva",
    "Rafael Lima",
  ];

  return (
    <PageFrame
      eyebrow="Agendamento"
      title={confirmed ? "Reserva solicitada" : "Revise seu agendamento"}
      description={
        confirmed
          ? "Seu pedido ficou pronto no frontend. Com o backend, esse passo gravará a reserva no banco e enviará a confirmação."
          : "Confira as informações, escolha data e profissional antes de confirmar sua reserva."
      }
    >
      {confirmed ? (
        <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm mt-12 max-w-2xl">
          <div className="rounded-3xl bg-emerald-50 text-emerald-800 p-6">
            <h2 className="text-2xl font-bold">Agendamento recebido</h2>
            <p className="mt-2">
              {initialServico} em {initialSalao}, dia {data} às {horario}.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <Link
              href="/minha-conta"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium transition inline-flex items-center justify-center"
            >
              Ver meus agendamentos
            </Link>
            <Link
              href="/services"
              className="border border-stone-300 hover:bg-stone-50 px-8 py-4 rounded-full font-medium transition inline-flex items-center justify-center"
            >
              Agendar outro serviço
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm mt-12 max-w-3xl">
          <dl className="grid sm:grid-cols-3 gap-6">
            <div>
              <dt className="text-sm text-stone-500">Serviço</dt>
              <dd className="font-semibold text-stone-900 mt-1">{initialServico}</dd>
            </div>

            <div>
              <dt className="text-sm text-stone-500">Salão</dt>
              <dd className="font-semibold text-stone-900 mt-1">{initialSalao}</dd>
            </div>

            <div>
              <dt className="text-sm text-stone-500">Horário</dt>
              <dd className="font-semibold text-stone-900 mt-1">{horario}</dd>
            </div>
          </dl>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <label className="block">
              <span className="text-sm font-medium text-stone-700">Data</span>
              <input
                type="date"
                value={data}
                onChange={(event) => setData(event.target.value)}
                className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-stone-700">Profissional</span>
              <select
                value={profissional}
                onChange={(event) => setProfissional(event.target.value)}
                className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 bg-white outline-none focus:border-rose-500"
              >
                {profissionais.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6">
            <span className="text-sm font-medium text-stone-700">
              Horários disponíveis
            </span>
            <div className="flex flex-wrap gap-2 mt-3">
              {horarios.map((hora) => (
                <button
                  key={hora}
                  onClick={() => setHorario(hora)}
                  className={`px-4 py-2 rounded-full border text-sm transition ${
                    horario === hora
                      ? "bg-rose-500 text-white border-rose-500"
                      : "hover:border-rose-500"
                  }`}
                >
                  {hora}
                </button>
              ))}
            </div>
          </div>

          <label className="block mt-6">
            <span className="text-sm font-medium text-stone-700">Observação</span>
            <textarea
              value={observacao}
              onChange={(event) => setObservacao(event.target.value)}
              className="mt-2 w-full min-h-28 rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-rose-500"
              placeholder="Alguma preferência para o atendimento?"
            />
          </label>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => setConfirmed(true)}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium transition"
            >
              Confirmar reserva
            </button>

            <Link
              href="/services"
              className="border border-stone-300 hover:bg-stone-50 px-8 py-4 rounded-full font-medium transition inline-flex items-center justify-center"
            >
              Alterar serviço
            </Link>
          </div>
        </div>
      )}
    </PageFrame>
  );
}
