"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import Card from "@/components/layout/card";
import CardCreator from "@/components/layout/CardCreator";

type Creator = {
  id: string;
  title: string;
  author: string;
  genres: string[];
  popularity: number; // views or likes
  createdAt: string; // ISO
};


export default function Criadores() {
  
  return (
    <>
      <div className='w-full h-fit border-b-[0.3vw] border-gray-900 flex flex-col gap-[2vw] py-[3.5vw]'>
        {/* Filtros Horizontais */}
        <div className='w-full h-fit flex flex-col gap-[0.5vw] px-[8vw]'>
          <div>
            <h1 className='text-[3vw] font-bold'>Nossos <span className=' text-shadow-[#00D315] text-shadow-lg'> Criadores</span></h1>
            <span className='text-[1vw] font-semibold text-[#244224]'>Conheça os talentosos artistas e autores por trás das histórias</span>
          </div>
          

          {/* Barra de pesquisa */}
          <div className='mb-[1vw] flex gap-[1vw]'>
            <input
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
            
          </div>
        </div>

        {/* Grid de Itens */}
        <section className='w-full h-fit flex flex-col gap-[2.5vw] px-[8vw]'>
          <div className='w-full h-fit flex'>
            <h1 className='text-[2vw] font-bold'>Resultados <span className='text-[#00D315]'>Obtidos:</span></h1>
          </div>

          <div className='w-full h-fit grid grid-cols-5 gap-[0.8vw] rounded-lg'>
            <CardCreator/>
            <CardCreator/>
            <CardCreator/>
            <CardCreator/>
            <CardCreator/>
            <CardCreator/>
          </div>
        </section>
      </div>
    </>
  );
}