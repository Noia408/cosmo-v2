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
      
      <div className='w-full h-full flex gap-[2vw] px-[8vw] py-[2vw]'>
        {/* Sidebar */}
        <aside className='w-[25%] min-w-[18vw] h-fit bg-gray-900 p-[1vw] flex flex-col gap-[1vw]'>
          <div className='px-[1vw] py-[0.5vw] bg-[#00D315] rounded-xl w-fit'>Filtros</div>

          <input
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            placeholder='Procurar por título ou autor'
            className='bg-[#121212] text-white px-[1vw] py-[0.6vw] rounded-lg w-full outline-none'
          />

          <div className='flex flex-col gap-[0.5vw]'>
            <span className='text-white/80 text-sm'>Géneros</span>
            <div className='flex flex-col gap-[0.4vw] max-h-[16vw] overflow-auto pr-[0.5vw]'>
              {ALL_GENRES.map((g) => (
                <label key={g} className='flex items-center gap-[0.6vw] text-white/90 text-[0.9vw]'>
                  <input
                    type='checkbox'
                    className='accent-[#00D315] w-[1vw] h-[1vw]'
                    checked={selectedGenres.includes(g)}
                    onChange={() => toggleGenre(g)}
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-[0.5vw]'>
            <span className='text-white/80 text-sm'>Autor</span>
            <select
              value={selectedAuthor}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedAuthor(e.target.value)}
              className='bg-[#121212] text-white px-[1vw] py-[0.6vw]'
            >
              <option value='todos'>Todos</option>
              {ALL_AUTHORS.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          <div className='flex flex-col gap-[0.5vw]'>
            <span className='text-white/80 text-sm'>Ordenar por</span>
            <select
              value={sortBy}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value as SortKey)}
              className='bg-[#121212] text-white px-[1vw] py-[0.6vw]'
            >
              <option value='popularidade'>Mais populares</option>
              <option value='recentes'>Mais recentes</option>
              <option value='titulo'>Título (A-Z)</option>
            </select>
          </div>

          <button
            onClick={clearFilters}
            className='mt-[0.5vw] px-[1vw] py-[0.6vw] bg-black text-white rounded-lg hover:bg-[#00D315] hover:text-black duration-300 w-full text-center'
          >
            Limpar filtros
          </button>
        </aside>

        {/* Grid */}
        <section className='w-[75%] h-full flex flex-col gap-[1.5vw]'>
          <div className='w-full h-fit flex'>
            <div className='px-[1vw] py-[0.5vw] bg-[#00D315] rounded-xl'>Catálogo</div>
          </div>

          <div className='w-full h-fit grid grid-cols-4 gap-[0.5vw] bg-gray-900 p-[0.5vw]'>
            {filtered.map((manga) => (
              <Card key={manga.id} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}