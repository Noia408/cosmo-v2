'use client'

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Card from "@/components/layout/card";
import { ArrowLeft, Book, Users, Star, Globe, Twitter, Instagram } from "lucide-react";

const CriadorPerfil = () => {
  const { id } = useParams();

  // Dados mockados - em produção viriam de uma API
  const creator = {
    id: id,
    name: "Akira Tanaka",
    profileImage: "/assets/Creator.jpg",
    role: "Mangaká",
    bio: `
      Akira Tanaka é um dos mangakás mais aclamados da atualidade, conhecido por 
      seu estilo único de arte e narrativas épicas que transcendem galáxias. Começou 
      sua carreira em 2015 com pequenos one-shots até criar sua obra-prima, Cosmic Warriors, 
      que se tornou um fenômeno mundial.
      
      Com mais de 12 obras publicadas e milhões de leitores ao redor do mundo, Akira 
      continua a inovar e inspirar uma nova geração de criadores. Seu trabalho é 
      caracterizado por cenas de ação dinâmicas, desenvolvimento profundo de personagens 
      e universos ricamente detalhados.
    `,
    stats: {
      works: 12,
      followers: "15K",
      rating: 4.8,
      totalReaders: "2.5M",
    },
    social: {
      website: "www.akiratanaka.com",
      twitter: "@akiratanaka",
      instagram: "@akiratanaka_official",
    },
    genres: ["Shonen", "Sci-Fi", "Ação", "Aventura"],
  };

  const works = [
    {
      id: 1,
      title: "Cosmic Warriors",
      genre: "Shonen",
      rating: 4.8,
      chapters: 156,
    },
    {
      id: 2,
      title: "Star Legends",
      genre: "Sci-Fi",
      rating: 4.7,
      chapters: 89,
    },
    {
      id: 3,
      title: "Galaxy Hunters",
      genre: "Ação",
      rating: 4.6,
      chapters: 124,
    },
  ];

  return (
    <div className="w-full min-h-screen px-[8vw] py-[4vw]">
      <div className="w-full h-fit flex items-center justify-start mb-[1vw]">
        <Link href="/biblioteca" className="px-[1vw] text-black py-[0.5vw] items-center hover:bg-neongreen hover:text-black text-white flex gap-[1vw] duration-200 font-semibold rounded-xl">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Voltar para Criadores
        </Link>
      </div>

      {/* Header do Perfil */}
      <div className="w-full bg-graydeep border border-neongreen rounded-lg mb-8 p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-[192px] h-[288px] overflow-hidden border-4 border-neongreen shrink-0 rounded-lg">
            <Image
              src={creator.profileImage}
              alt={creator.name}
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="mb-4">
              <h1 className="text-4xl font-bold mb-2 text-white">{creator.name}</h1>
              <p className="text-xl text-gray-300">{creator.role}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {creator.genres.map((genre) => (
                <span key={genre} className="px-3 py-1 bg-neongreen/20 text-neongreen rounded-full text-sm font-semibold border border-neongreen">
                  {genre}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-graylow rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Book className="w-4 h-4 text-neongreen" />
                  <span className="text-2xl font-bold text-white">{creator.stats.works}</span>
                </div>
                <p className="text-sm text-gray-300">Obras</p>
              </div>
              <div className="text-center p-4 bg-graylow rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-neongreen" />
                  <span className="text-2xl font-bold text-white">{creator.stats.followers}</span>
                </div>
                <p className="text-sm text-gray-300">Seguidores</p>
              </div>
              <div className="text-center p-4 bg-graylow rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Star className="w-4 h-4 text-neongreen" />
                  <span className="text-2xl font-bold text-white">{creator.stats.rating}</span>
                </div>
                <p className="text-sm text-gray-300">Avaliação</p>
              </div>
              <div className="text-center p-4 bg-graylow rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-neongreen" />
                  <span className="text-2xl font-bold text-white">{creator.stats.totalReaders}</span>
                </div>
                <p className="text-sm text-gray-300">Leitores</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-neongreen text-black hover:bg-neongreen/90">
                <Users className="mr-2 w-4 h-4" />
                Seguir
              </Button>
              <Button variant="secondary" className="bg-graylow text-white">
                <Globe className="mr-2 w-4 h-4" />
                Website
              </Button>
              <Button variant="secondary" className="bg-graylow text-white">
                <Twitter className="mr-2 w-4 h-4" />
                Twitter
              </Button>
              <Button variant="secondary" className="bg-graylow text-white">
                <Instagram className="mr-2 w-4 h-4" />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Biografia */}
      <div className="w-full bg-graydeep border border-neongreen rounded-lg mb-8 p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Sobre o Criador</h2>
        <p className="text-gray-300 whitespace-pre-line leading-relaxed">
          {creator.bio}
        </p>
      </div>

      {/* Obras Publicadas */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Obras <span className="text-neongreen">Publicadas</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {works.map((manga) => (
            <div key={manga.id}>
              <Card />
            </div>
          ))}
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="w-full bg-graydeep border border-neongreen rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Siga nas Redes Sociais</h2>
        <p className="text-gray-300 mb-6">
          Fique por dentro das últimas novidades e bastidores das obras
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`https://${creator.social.website}`} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="bg-graylow text-white">
              <Globe className="mr-2 w-5 h-5" />
              {creator.social.website}
            </Button>
          </a>
          <a href={`https://twitter.com/${creator.social.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="bg-graylow text-white">
              <Twitter className="mr-2 w-5 h-5" />
              {creator.social.twitter}
            </Button>
          </a>
          <a href={`https://instagram.com/${creator.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="bg-graylow text-white">
              <Instagram className="mr-2 w-5 h-5" />
              {creator.social.instagram}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CriadorPerfil;
