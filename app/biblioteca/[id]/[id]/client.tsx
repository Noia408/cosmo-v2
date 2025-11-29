'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

const TOTAL_PAGES = 24;

export default function MangaLeitura() {
  const params = useParams<{ id: string; capitulo: string }>();
  const mangaId = params?.id ?? "1";
  const chapterId = params?.capitulo ?? "1";

  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    if (currentPage < TOTAL_PAGES) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevChapter = Math.max(Number(chapterId) - 1, 1);
  const nextChapter = Number(chapterId) + 1;

  return (
    <div className="min-h-screen bg-black">
      {/* Header fixo */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href={`/biblioteca/${mangaId}`}>
              <Button variant="ghost" size="sm">
                <X className="mr-2 w-4 h-4" />
                Fechar
              </Button>
            </Link>

            <div className="text-center flex-1 mx-4">
              <h1 className="font-bold text-lg truncate">Cosmic Warriors</h1>
              <p className="text-sm text-muted-foreground truncate">
                Cap. {chapterId}: O Despertar do Poder Absoluto
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {currentPage} / {TOTAL_PAGES}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo da página */}
      <div className="pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Página do mangá */}
          <div className="relative">
            <Image
              src="/assets/manga.jpg"
              alt={`Página ${currentPage}`}
              width={1200}
              height={1800}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Navegação entre páginas */}
          <div className="flex items-center justify-between mt-8">
            <Button variant="secondary" onClick={goToPrevPage} disabled={currentPage === 1}>
              <ChevronLeft className="mr-2 w-4 h-4" />
              Página Anterior
            </Button>

            <span className="text-muted-foreground">
              Página {currentPage} de {TOTAL_PAGES}
            </span>

            <Button variant="secondary" onClick={goToNextPage} disabled={currentPage === TOTAL_PAGES}>
              Próxima Página
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer fixo - Navegação entre capítulos */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href={`/biblioteca/${mangaId}/capitulo/${prevChapter}`}>
              <Button variant="secondary" disabled={Number(chapterId) === 1}>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Cap. Anterior
              </Button>
            </Link>

            <Link href={`/biblioteca/${mangaId}`}>
              <Button variant="ghost">Ver Todos os Capítulos</Button>
            </Link>

            <Link href={`/biblioteca/${mangaId}/capitulo/${nextChapter}`}>
              <Button className="glow-border">
                Próximo Cap.
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
