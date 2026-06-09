"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ServiceCard from "@/components/ServiceCard";
import ServicesFilter from "@/components/ServicesFilter";

import { services } from "@/data/services";

export default function ServicesPage() {
  const [categoria, setCategoria] = useState("todos");
  const [genero, setGenero] = useState("todos");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const filtered = services.filter((service) => {
    const categoriaOk =
      categoria === "todos" ||
      service.categoria === categoria;

    const generoOk =
      genero === "todos" ||
      service.genero === genero;

    return categoriaOk && generoOk;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentServices = filtered.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(
    filtered.length / itemsPerPage
  );

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Serviços
        </h1>

        <p className="text-stone-500 mb-10">
          Encontre o serviço ideal para você.
        </p>

        {/* FILTRO DE CATEGORIA */}
        <ServicesFilter
          categoria={categoria}
          setCategoria={(value) => {
            setCategoria(value);
            setCurrentPage(1);
          }}
        />

        {/* FILTRO DE GÊNERO */}
        <div className="flex gap-3 flex-wrap mt-6">
          <button
            onClick={() => {
              setGenero("todos");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full border transition ${
              genero === "todos"
                ? "bg-rose-500 text-white border-rose-500"
                : "bg-white"
            }`}
          >
            Todos
          </button>

          <button
            onClick={() => {
              setGenero("feminino");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full border transition ${
              genero === "feminino"
                ? "bg-rose-500 text-white border-rose-500"
                : "bg-white"
            }`}
          >
            Feminino
          </button>

          <button
            onClick={() => {
              setGenero("masculino");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full border transition ${
              genero === "masculino"
                ? "bg-rose-500 text-white border-rose-500"
                : "bg-white"
            }`}
          >
            Masculino
          </button>

          <button
            onClick={() => {
              setGenero("unissex");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full border transition ${
              genero === "unissex"
                ? "bg-rose-500 text-white border-rose-500"
                : "bg-white"
            }`}
          >
            Unissex
          </button>
        </div>

        {/* TOTAL DE RESULTADOS */}
        <p className="mt-8 text-stone-500">
          {filtered.length} serviços encontrados
        </p>

        {/* GRID DE SERVIÇOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {currentServices.map((service) => (
            <ServiceCard
              key={service.id}
              nome={service.nome}
              preco={service.preco}
              imagem={service.imagem}
              genero={service.genero}
            />
          ))}
        </div>

        {/* MENSAGEM SEM RESULTADOS */}
        {currentServices.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">
              Nenhum serviço encontrado
            </h2>

            <p className="text-stone-500 mt-2">
              Tente alterar os filtros.
            </p>
          </div>
        )}

        {/* PAGINAÇÃO */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12 flex-wrap">
            {Array.from(
              { length: totalPages },
              (_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentPage(index + 1)
                  }
                  className={`
                    w-10
                    h-10
                    rounded-full
                    transition
                    ${
                      currentPage === index + 1
                        ? "bg-rose-500 text-white"
                        : "bg-white border border-stone-300 hover:border-rose-500"
                    }
                  `}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}