'use client'

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, BookOpen, Heart, Share2 } from "lucide-react";

const MangaDetalhes = () => {
  const { id } = useParams();

  // Dados mockados - em produção viriam de uma API
  const manga = {
    id: "1",
    title: "Cosmic Warriors",
    cover: "/assets/manga.jpg",
    genre: "Shonen",
    rating: 4.8,
    totalChapters: 156,
    status: "Em Andamento",
    author: "Akira Tanaka",
    artist: "Akira Tanaka",
    releaseYear: 2020,
    synopsis: `
      Em um universo onde galáxias estão em constante conflito, jovens guerreiros 
      são escolhidos para defender seus mundos. Kai, um adolescente comum, descobre 
      que possui o poder ancestral dos Guerreiros Cósmicos - heróis lendários que 
      protegeram o universo há milênios.
      
      Agora, Kai deve treinar suas habilidades recém-descobertas enquanto enfrenta 
      inimigos poderosos de outras dimensões. Com a ajuda de seus amigos e mentores, 
      ele embarca em uma jornada épica através das estrelas para desvendar os 
      mistérios de seu passado e o destino do universo.
      
      Uma história de amizade, coragem e batalhas espetaculares que vai te levar 
      aos confins do cosmos!
    `,
    tags: ["Ação", "Aventura", "Sci-Fi", "Super Poderes", "Comédia"],
  };

  const chapters = [
    { num: 156, title: "O Despertar do Poder Absoluto", date: "Há 2 dias", isNew: true },
    { num: 155, title: "Batalha nas Estrelas", date: "Há 1 semana" },
    { num: 154, title: "O Segredo da Nebulosa", date: "Há 2 semanas" },
    { num: 153, title: "Aliados Improváveis", date: "Há 3 semanas" },
    { num: 152, title: "A Profecia Revelada", date: "Há 1 mês" },
  ];

  return (
    <div className="w-full min-h-screen px-[8vw] py-[4vw]">
      <div className="w-full h-fit flex items-center justify-start mb-[1vw]">
        <Link href="/biblioteca" className="px-[1vw] text-black py-[0.5vw] items-center hover:bg-neongreen hover:text-black text-white flex gap-[1vw] duration-200 font-semibold rounded-xl">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Voltar para Biblioteca
        </Link>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Cover e Ações */}
        <div className="lg:col-span-1">
          <div className="bg-graydeep border border-neongreen rounded-lg overflow-hidden sticky top-24">
            <Image
              src={manga.cover}
              alt={manga.title}
              width={400}
              height={600}
              className="w-full aspect-2/3 object-cover"
            />
            <div className="p-6 space-y-4 flex flex-col gap-[0.3vw]">
              <Link href={`/biblioteca/${manga.id}/capitulo/156`}>
                <Button size="lg" className="w-full bg-neongreen text-black hover:bg-neongreen/90">
                  <BookOpen className="mr-2 w-4 h-4" />
                  Ler Agora
                </Button>
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="secondary" size="sm" className="bg-graylow text-white hover:bg-red-600">
                  <Heart className="mr-2 w-4 h-4" />
                  Favoritar
                </Button>
                <Button variant="secondary" size="sm" className="bg-graylow text-white hover:bg-blue-600">
                  <Share2 className="mr-2 w-4 h-4" />
                  Partilhar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Informações Principais */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{manga.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-neongreen/20 text-neongreen rounded-full text-base font-semibold border border-neongreen">
                {manga.genre}
              </span>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-neongreen text-neongreen" />
                <span className="text-xl font-bold text-white">{manga.rating}</span>
                <span className="text-gray-300">(2.5K avaliações)</span>
              </div>
              <span className="px-3 py-1 bg-neongreen text-black rounded-full text-sm font-semibold">
                {manga.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {manga.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-black/50 text-white rounded-full text-sm font-semibold border border-neongreen/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-graydeep border border-neongreen rounded-lg mb-6 p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Sinopse</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {manga.synopsis}
            </p>
          </div>

          <div className="bg-graydeep border border-neongreen rounded-lg mb-6 p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Informações</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-300">Autor</p>
                <p className="font-semibold text-white">{manga.author}</p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Artista</p>
                <p className="font-semibold text-white">{manga.artist}</p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Ano de Lançamento</p>
                <p className="font-semibold text-white">{manga.releaseYear}</p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Capítulos</p>
                <p className="font-semibold text-white">{manga.totalChapters}</p>
              </div>
            </div>
          </div>

          <div className="bg-graydeep border border-neongreen rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Capítulos</h2>
            <div className="space-y-2">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.num}
                  href={`/biblioteca/${manga.id}/capitulo/${chapter.num}`}
                >
                  <div className="flex items-center justify-between p-4 rounded-lg bg-graylow mb-[0.3vw]">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-white">Capítulo {chapter.num}</span>
                        {chapter.isNew && (
                          <span className="px-2 py-1 bg-neongreen text-black rounded text-xs font-semibold">
                            NOVO
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-300">{chapter.title}</p>
                    </div>
                    <span className="text-sm text-gray-300">{chapter.date}</span>
                  </div>
                </Link>
              ))}
              <Button variant="secondary" className="w-full mt-4 bg-graylow text-white hover:bg-gray-600">
                Ver Todos os Capítulos ({manga.totalChapters})
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangaDetalhes;
