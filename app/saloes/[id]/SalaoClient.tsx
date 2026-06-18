"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface SalaoProps {
  salao: {
    id: number;
    nome: string;
    nota: number;
    endereco: string;
    telefone: string;
    imagens: string[];
    servicos: {
      id: number;
      nome: string;
      preco: string;
    }[];
    avaliacoes: {
      nome: string;
      nota: number;
      comentario: string;
    }[];
  };
}

export default function SalaoClient({ salao }: SalaoProps) {
  const [servicoSelecionado, setServicoSelecionado] = useState<number | null>(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);
  const [imagemAberta, setImagemAberta] = useState<number | null>(null);

  const horarios = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];

  const servicoAtual = salao.servicos.find((s) => s.id === servicoSelecionado);

  const proximaImagem = () => {
    if (imagemAberta === null) return;
    setImagemAberta(imagemAberta === salao.imagens.length - 1 ? 0 : imagemAberta + 1);
  };

  const imagemAnterior = () => {
    if (imagemAberta === null) return;
    setImagemAberta(imagemAberta === 0 ? salao.imagens.length - 1 : imagemAberta - 1);
  };

  const agendamentoHref = `/agendamento?salao=${encodeURIComponent(
    salao.nome
  )}&servico=${encodeURIComponent(servicoAtual?.nome ?? "")}&horario=${encodeURIComponent(
    horarioSelecionado ?? ""
  )}`;

  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-32">
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            loop
            className="rounded-3xl overflow-hidden"
          >
            {salao.imagens.map((imagem, index) => (
              <SwiperSlide key={imagem}>
                <button
                  type="button"
                  onClick={() => setImagemAberta(index)}
                  className="relative h-[420px] md:h-[600px] w-full block"
                >
                  <Image
                    src={imagem}
                    alt={`${salao.nome} foto ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1152px) 100vw, 1152px"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold">{salao.nome}</h1>

          <div className="flex flex-wrap gap-6 mt-4 text-stone-600">
            <span>Nota {salao.nota}</span>
            <span>{salao.endereco}</span>
            <span>{salao.telefone}</span>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Serviços</h2>

          <div className="space-y-3">
            {salao.servicos.map((servico) => (
              <button
                key={servico.id}
                onClick={() => {
                  if (servicoSelecionado === servico.id) {
                    setServicoSelecionado(null);
                    setHorarioSelecionado(null);
                  } else {
                    setServicoSelecionado(servico.id);
                    setHorarioSelecionado(null);
                  }
                }}
                className={`w-full flex justify-between items-center gap-4 p-4 rounded-xl border transition ${
                  servicoSelecionado === servico.id
                    ? "bg-rose-50 border-rose-500"
                    : "hover:border-rose-300"
                }`}
              >
                <span>{servico.nome}</span>
                <span>{servico.preco}</span>
              </button>
            ))}
          </div>
        </div>

        {servicoSelecionado && (
          <div className="mt-8 bg-white border rounded-2xl p-5">
            <h3 className="font-semibold mb-4">Escolha um horário</h3>

            <div className="flex flex-wrap gap-2">
              {horarios.map((hora) => (
                <button
                  key={hora}
                  onClick={() => setHorarioSelecionado(hora)}
                  className={`px-4 py-2 rounded-full border text-sm transition ${
                    horarioSelecionado === hora
                      ? "bg-rose-500 text-white border-rose-500"
                      : "hover:border-rose-500"
                  }`}
                >
                  {hora}
                </button>
              ))}
            </div>
          </div>
        )}

        {servicoSelecionado && horarioSelecionado && (
          <Link
            href={agendamentoHref}
            className="w-full bg-rose-500 hover:bg-rose-600 transition text-white py-4 rounded-xl mt-8 text-lg font-semibold inline-flex justify-center"
          >
            Agendar {servicoAtual?.nome} às {horarioSelecionado}
          </Link>
        )}

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Avaliações</h2>

          <div className="space-y-4">
            {salao.avaliacoes.map((avaliacao) => (
              <div
                key={`${avaliacao.nome}-${avaliacao.comentario}`}
                className="border rounded-xl p-4"
              >
                <h3 className="font-semibold">{avaliacao.nome}</h3>
                <p className="mt-1 text-amber-500">{"★".repeat(avaliacao.nota)}</p>
                <p className="mt-2 text-stone-600">{avaliacao.comentario}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {imagemAberta !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setImagemAberta(null)}
        >
          <button
            onClick={() => setImagemAberta(null)}
            className="absolute top-6 right-6 text-white text-4xl z-50"
            aria-label="Fechar galeria"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              imagemAnterior();
            }}
            className="absolute left-6 text-white text-6xl z-50"
            aria-label="Imagem anterior"
          >
            ‹
          </button>

          <div
            className="relative w-[90vw] h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={salao.imagens[imagemAberta]}
              alt={salao.nome}
              fill
              className="object-contain rounded-2xl"
              sizes="90vw"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              proximaImagem();
            }}
            className="absolute right-6 text-white text-6xl z-50"
            aria-label="Próxima imagem"
          >
            ›
          </button>

          <div className="absolute bottom-8 bg-black/50 text-white px-4 py-2 rounded-full">
            {imagemAberta + 1} / {salao.imagens.length}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
