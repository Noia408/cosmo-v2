"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import Card from "@/components/layout/card";

type Manga = {
  id: string;
  title: string;
  author: string;
  genres: string[];
  popularity: number; // views or likes
  createdAt: string; // ISO
};

const MOCK_MANGAS: Manga[] = [
  {
    id: "1",
    title: "One Piece Volume 93 – Wano Arc",
    author: "Eiichiro Oda",
    genres: ["Ação", "Aventura"],
    popularity: 200,
    createdAt: "2024-11-01",
  },
  {
    id: "2",
    title: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    genres: ["Ação", "Horror"],
    popularity: 350,
    createdAt: "2025-06-12",
  },
  {
    id: "3",
    title: "Spy x Family",
    author: "Tatsuya Endo",
    genres: ["Comédia", "Ação"],
    popularity: 180,
    createdAt: "2025-02-20",
  },
  {
    id: "4",
    title: "Vagabond",
    author: "Takehiko Inoue",
    genres: ["Seinen", "Histórico"],
    popularity: 120,
    createdAt: "2023-08-05",
  },
  {
    id: "5",
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    genres: ["Ação", "Sobrenatural"],
    popularity: 420,
    createdAt: "2025-07-10",
  },
];

const ALL_GENRES = Array.from(
  new Set(MOCK_MANGAS.flatMap((manga) => manga.genres))
).sort();
const ALL_AUTHORS = Array.from(new Set(MOCK_MANGAS.map((m) => m.author))).sort();

type SortKey = "popularidade" | "recentes" | "titulo";

export default function Biblioteca() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<string>("todos");
  const [sortBy, setSortBy] = useState<SortKey>("popularidade");
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo<Manga[]>(() => {
    let result = [...MOCK_MANGAS];

    if (selectedGenres.length > 0) {
      result = result.filter((m: Manga) => selectedGenres.every((g: string) => m.genres.includes(g)));
    }
    if (selectedAuthor !== "todos") {
      result = result.filter((m: Manga) => m.author === selectedAuthor);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter((m: Manga) =>
        m.title.toLowerCase().includes(q) || m.author.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "recentes":
        result.sort((a: Manga, b: Manga) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "titulo":
        result.sort((a: Manga, b: Manga) => a.title.localeCompare(b.title));
        break;
      case "popularidade":
      default:
        result.sort((a: Manga, b: Manga) => b.popularity - a.popularity);
        break;
    }

    return result;
  }, [selectedGenres, selectedAuthor, sortBy, query]);

  function toggleGenre(genre: string) {
    setSelectedGenres((prev: string[]) =>
      prev.includes(genre) ? prev.filter((g: string) => g !== genre) : [...prev, genre]
    );
  }

  function clearFilters() {
    setSelectedGenres([]);
    setSelectedAuthor("todos");
    setSortBy("popularidade");
    setQuery("");
  }

  return (
    <>
      <div className='w-full h-fit border-b-[0.3vw] border-gray-900 flex flex-col gap-[2vw] py-[3.5vw]'>
        {/* Filtros Horizontais */}
        <div className='w-full h-fit flex flex-col gap-[0.5vw] px-[8vw]'>
          <div>
            <h1 className='text-[3vw] font-bold'>Nossa <span className=' text-shadow-[#00D315] text-shadow-lg'>Biblioteca</span></h1>
            <span className='text-[1vw] font-semibold text-[#244224]'>Explore nossa coleção completa de mangás e quadrinhos</span>
          </div>
          <div className='flex items-center gap-[1vw] mb-[1vw]'>
            <button
              onClick={clearFilters}
              className='px-[1vw] py-[0.5vw] hidden bg-black text-white rounded-lg hover:bg-neongreen hover:text-black duration-300 text-sm'
            >
              Limpar filtros
            </button>
          </div>

          {/* Barra de pesquisa */}
          <div className='mb-[1vw] flex gap-[1vw]'>
            <input
              value={query}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
              placeholder='Procurar por título ou autor'
              className='bg-[#121212] text-white px-[1vw] py-[0.6vw] rounded-lg w-full max-w-[30vw] outline-1 outline-[#244224] focus:outline-[#00D315]'
            />
            <button className='px-[1vw] py-[0.5vw] bg-neongreen text-black duration-300 font-semibold rounded-lg text-sm'>
              Buscar
            </button>
          </div>

          {/* Filtros em linha */}
          <div className='flex flex-wrap gap-[1vw] items-center'>
            {/* Géneros */}
            <div className='flex items-center gap-[0.5vw]'>
              <span className='text-white/80 text-sm whitespace-nowrap'>Géneros:</span>
              <div className='flex flex-wrap gap-[0.5vw]'>
                {ALL_GENRES.map((g) => (
                  <label key={g} className='flex items-center gap-[0.3vw] text-white/90 text-sm cursor-pointer hover:text-[#00D315] transition-colors'>
                    <input
                      type='checkbox'
                      className='accent-neongreen w-[0.8vw] h-[0.8vw]'
                      checked={selectedGenres.includes(g)}
                      onChange={() => toggleGenre(g)}
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>

            {/* Separador */}
            <div className='w-px h-[2vw] bg-white/20'></div>

            {/* Autor */}
            <div className='flex items-center gap-[0.5vw]'>
              <span className='text-white/80 text-sm whitespace-nowrap'>Autor:</span>
              <select
                value={selectedAuthor}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedAuthor(e.target.value)}
                className='bg-[#121212] text-white px-[0.8vw] py-[0.4vw] rounded text-sm min-w-[12vw]'
              >
                <option value='todos'>Todos</option>
                {ALL_AUTHORS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            {/* Separador */}
            <div className='w-px h-[2vw] bg-white/20'></div>

            {/* Ordenação */}
            <div className='flex items-center gap-[0.5vw]'>
              <span className='text-white/80 text-sm whitespace-nowrap'>Ordenar:</span>
              <select
                value={sortBy}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value as SortKey)}
                className='bg-[#121212] text-white px-[0.8vw] py-[0.4vw] rounded text-sm min-w-[12vw]'
              >
                <option value='popularidade'>Mais populares</option>
                <option value='recentes'>Mais recentes</option>
                <option value='titulo'>Título (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid de Itens */}
        <section className='w-full h-fit flex flex-col gap-[2.5vw] px-[8vw]'>
          <div className='w-full h-fit flex'>
            <h1 className='text-[2vw] font-bold'>Resultados <span className='text-[#00D315]'>Obtidos:</span></h1>
          </div>

          <div className='w-full h-fit grid grid-cols-5 gap-[0.8vw] rounded-lg'>
            {filtered.map((manga) => (
              <Card key={manga.id} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}