'use client'
import BannerSlide from '@/components/layout/BannerSlide';
import CardSlide from '@/components/layout/CardSlide';
import CreatorSlide from '@/components/layout/CreatorSlide';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className='w-full h-fit border-b-[0.3vw] border-gray-900 flex flex-col gap-[2vw] pb-[2vw]'>
        <BannerSlide />

        <div className='w-full h-fit flex flex-col gap-[2.5vw] px-[8vw]'>
          <div className='w-full h-fit flex justify-between items-center'>
            <div>
            <h1 className='text-[2vw] font-bold'>Destaques da <span className='text-neongreen'>Semana</span></h1>
            <span className='text-[0.8vw] font-semibold text-darkgreen'>Os mangás mais populares do momento</span>
            </div>
            <Link href={""} className='px-[1vw] py-[0.5vw] hover:bg-neongreen hover:text-black rounded-xl flex gap-[1vw] duration-200 font-semibold'>Ver Todos <ArrowRight /></Link>
          </div>
          <CardSlide/>
        </div>

        <div className='w-full h-fit flex flex-col gap-[2.5vw] px-[8vw]'>
          <div className='w-full h-fit flex justify-between items-center'>
            <div>
            <h1 className='text-[2vw] font-bold'>Últimos <span className='text-neongreen'>Lançamentos</span></h1>
            <span className='text-[0.8vw] font-semibold text-darkgreen'>Novos capítulos e séries</span>
            </div>
            <Link href={""} className='px-[1vw] py-[0.5vw] hover:bg-neongreen hover:text-black rounded-xl flex gap-[1vw] duration-200 font-semibold'>Ver Todos <ArrowRight /></Link>
          </div>
          <CreatorSlide/>
        </div>

      </div>
    </div>
  );
}
