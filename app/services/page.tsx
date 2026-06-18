"use client";

import { useMemo, useRef, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import ServicesFilter from "@/components/ServicesFilter";
import { services } from "@/data/services";

export default function ServicesPage() {
  const [categoria, setCategoria] = useState("todos");
  const [genero, setGenero] = useState("todos");
  const [busca, setBusca] = useState("");
  const [ordenacao, setOrdenacao] = useState<"relevancia" | "distancia" | "preco" | "nota">(
    "relevancia"
  );
  const [precoMaximo, setPrecoMaximo] = useState(200);
  const [notaMinima, setNotaMinima] = useState(0);
  const [bairro, setBairro] = useState("todos");
  const [somenteHoje, setSomenteHoje] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const loadingTimer = useRef<number | undefined>(undefined);

  const itemsPerPage = 9;

  const triggerLoading = () => {
    window.clearTimeout(loadingTimer.current);
    setIsLoading(true);
    loadingTimer.current = window.setTimeout(() => setIsLoading(false), 250);
  };

  const applyChange = (callback: () => void) => {
    callback();
    triggerLoading();
  };

  const bairros = useMemo(
    () => ["todos", ...Array.from(new Set(services.map((service) => service.bairro)))],
    []
  );

  const filtered = useMemo(() => {
    const normalizedSearch = busca.trim().toLowerCase();

    return services
      .filter((service) => {
        const categoriaOk = categoria === "todos" || service.categoria === categoria;
        const generoOk = genero === "todos" || service.genero === genero;
        const buscaOk =
          normalizedSearch.length === 0 ||
          [service.nome, service.salao, service.bairro, service.categoria]
            .join(" ")
            .toLowerCase()
            .includes(normalizedSearch);
        const precoOk = service.precoNumero <= precoMaximo;
        const notaOk = service.nota >= notaMinima;
        const bairroOk = bairro === "todos" || service.bairro === bairro;
        const hojeOk = !somenteHoje || service.disponivelHoje;

        return categoriaOk && generoOk && buscaOk && precoOk && notaOk && bairroOk && hojeOk;
      })
      .sort((a, b) => {
        if (ordenacao === "distancia") return a.distanciaKm - b.distanciaKm;
        if (ordenacao === "preco") return a.precoNumero - b.precoNumero;
        if (ordenacao === "nota") return b.nota - a.nota;
        return a.id - b.id;
      });
  }, [bairro, busca, categoria, genero, notaMinima, ordenacao, precoMaximo, somenteHoje]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const genderOptions = [
    { id: "todos", label: "Todos" },
    { id: "feminino", label: "Feminino" },
    { id: "masculino", label: "Masculino" },
    { id: "unissex", label: "Unissex" },
  ];

  const resetFilters = () => {
    setCategoria("todos");
    setGenero("todos");
    setBusca("");
    setOrdenacao("relevancia");
    setPrecoMaximo(200);
    setNotaMinima(0);
    setBairro("todos");
    setSomenteHoje(false);
    setCurrentPage(1);
    triggerLoading();
  };

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-32">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900">
            Encontre o serviço ideal
          </h1>

          <div className="flex flex-wrap items-center gap-2 mt-2 text-stone-500">
            <span>Pinheiros, São Paulo</span>
            <span className="hidden sm:inline">·</span>
            <span>ordenado para o CEP do cliente logado</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 md:p-5 border border-stone-100 shadow-sm mb-6">
          <label className="block">
            <span className="sr-only">Buscar serviços, salões ou bairros</span>
            <input
              value={busca}
              onChange={(event) =>
                applyChange(() => {
                  setBusca(event.target.value);
                  setCurrentPage(1);
                })
              }
              placeholder="Busque por corte, barba, manicure, salão ou bairro"
              className="w-full rounded-2xl border border-stone-300 px-5 py-4 outline-none focus:border-rose-500"
            />
          </label>
        </div>

        <ServicesFilter
          categoria={categoria}
          setCategoria={(value) => {
            applyChange(() => {
              setCategoria(value);
              setCurrentPage(1);
            });
          }}
        />

        <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
          <p className="text-stone-500">
            {filtered.length} serviços encontrados
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                applyChange(() => {
                  setOrdenacao("distancia");
                  setCurrentPage(1);
                });
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition ${
                ordenacao === "distancia"
                  ? "bg-rose-500 text-white border-rose-500"
                  : "bg-white hover:bg-stone-50"
              }`}
            >
              Por distância
            </button>

            <button
              onClick={() => setFiltersOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border bg-white hover:bg-stone-50 transition"
            >
              Filtros
            </button>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap mt-6">
          {genderOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                applyChange(() => {
                  setGenero(option.id);
                  setCurrentPage(1);
                });
              }}
              className={`px-4 py-2 rounded-full border transition ${
                genero === option.id
                  ? "bg-rose-500 text-white border-rose-500"
                  : "bg-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {[
            { id: "relevancia", label: "Relevância" },
            { id: "preco", label: "Menor preço" },
            { id: "nota", label: "Melhor avaliação" },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => {
                applyChange(() => {
                  setOrdenacao(option.id as typeof ordenacao);
                  setCurrentPage(1);
                });
              }}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                ordenacao === option.id
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white hover:bg-stone-50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm">
                <div className="h-60 bg-stone-200 animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-stone-200 rounded animate-pulse w-24" />
                  <div className="h-6 bg-stone-200 rounded animate-pulse w-2/3" />
                  <div className="h-4 bg-stone-200 rounded animate-pulse" />
                  <div className="h-12 bg-stone-200 rounded-xl animate-pulse mt-6" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {currentServices.map((service) => (
              <ServiceCard
                key={service.id}
                nome={service.nome}
                preco={service.preco}
                imagem={service.imagem}
                genero={service.genero}
                salao={service.salao}
                bairro={service.bairro}
                distanciaKm={service.distanciaKm}
                nota={service.nota}
                duracao={service.duracao}
                disponivelHoje={service.disponivelHoje}
              />
            ))}
          </div>
        )}

        {!isLoading && currentServices.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">Nenhum serviço encontrado</h2>
            <p className="text-stone-500 mt-2">Tente alterar os filtros.</p>
            <button
              onClick={resetFilters}
              className="mt-6 bg-rose-500 text-white rounded-full px-6 py-3"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12 flex-wrap">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full transition ${
                  currentPage === index + 1
                    ? "bg-rose-500 text-white"
                    : "bg-white border border-stone-300 hover:border-rose-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </main>

      {filtersOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-xl p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-stone-900">Filtros</h2>
                <p className="text-stone-500 mt-1">
                  Refine resultados antes de conectar ao backend.
                </p>
              </div>

              <button
                onClick={() => setFiltersOpen(false)}
                className="w-10 h-10 rounded-full border hover:bg-stone-50"
                aria-label="Fechar filtros"
              >
                ×
              </button>
            </div>

            <div className="space-y-6 mt-8">
              <label className="block">
                <span className="font-medium text-stone-800">
                  Preço máximo: R$ {precoMaximo}
                </span>
                <input
                  type="range"
                  min="35"
                  max="200"
                  step="5"
                  value={precoMaximo}
                  onChange={(event) => {
                    applyChange(() => {
                      setPrecoMaximo(Number(event.target.value));
                      setCurrentPage(1);
                    });
                  }}
                  className="w-full mt-3 accent-rose-500"
                />
              </label>

              <label className="block">
                <span className="font-medium text-stone-800">Avaliação mínima</span>
                <select
                  value={notaMinima}
                  onChange={(event) => {
                    applyChange(() => {
                      setNotaMinima(Number(event.target.value));
                      setCurrentPage(1);
                    });
                  }}
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 bg-white outline-none focus:border-rose-500"
                >
                  <option value={0}>Qualquer avaliação</option>
                  <option value={4.7}>4.7 ou mais</option>
                  <option value={4.8}>4.8 ou mais</option>
                  <option value={4.9}>4.9 ou mais</option>
                </select>
              </label>

              <label className="block">
                <span className="font-medium text-stone-800">Bairro</span>
                <select
                  value={bairro}
                  onChange={(event) => {
                    applyChange(() => {
                      setBairro(event.target.value);
                      setCurrentPage(1);
                    });
                  }}
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 bg-white outline-none focus:border-rose-500"
                >
                  {bairros.map((option) => (
                    <option key={option} value={option}>
                      {option === "todos" ? "Todos os bairros" : option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-stone-200 p-4">
                <input
                  type="checkbox"
                  checked={somenteHoje}
                  onChange={(event) => {
                    applyChange(() => {
                      setSomenteHoje(event.target.checked);
                      setCurrentPage(1);
                    });
                  }}
                  className="h-5 w-5 accent-rose-500"
                />
                <span className="font-medium text-stone-800">
                  Mostrar apenas horários para hoje
                </span>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={() => setFiltersOpen(false)}
                className="bg-rose-500 text-white rounded-full px-6 py-3 font-medium"
              >
                Aplicar filtros
              </button>
              <button
                onClick={resetFilters}
                className="border border-stone-300 rounded-full px-6 py-3 font-medium"
              >
                Limpar filtros
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
