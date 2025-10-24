'use client'
import BannerSlide from '@/components/layout/BannerSlide';
import CardSlide from '@/components/layout/CardSlide';
import CarroselSlide from '@/components/layout/CardSlide';
import CreatorSlide from '@/components/layout/CreatorSlide';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className='w-full h-fit border-b-[0.3vw] border-gray-900 flex flex-col gap-[2vw] pb-[2vw]'>
        <BannerSlide />

        <div className='w-full h-fit flex flex-col gap-[2.5vw] px-[8vw]'>
          <div className='w-full h-fit flex justify-between items-center'>
            <div>
            <h1 className='text-[2vw] font-bold'>Destaques da <span className='text-[#00D315]'>Semana</span></h1>
            <span className='text-[0.8vw] font-semibold text-[#244224]'>Os mangás mais populares do momento</span>
            </div>
            <div className='px-[1vw] py-[0.5vw] hover:bg-[#00D315] rounded-xl flex gap-[1vw] duration-200'>Ver Todos <ArrowRight color='#ffffff' /></div>
          </div>
          <CardSlide/>
        </div>

        <div className='w-full h-fit flex flex-col gap-[2.5vw] px-[8vw]'>
          <div className='w-full h-fit flex justify-between items-center'>
            <div>
            <h1 className='text-[2vw] font-bold'>Últimos <span className='text-[#00D315]'>Lançamentos</span></h1>
            <span className='text-[0.8vw] font-semibold text-[#244224]'>Novos capítulos e séries</span>
            </div>
            <div className='px-[1vw] py-[0.5vw] hover:bg-[#00D315] rounded-xl flex gap-[1vw] duration-200'>Ver Todos <ArrowRight color='#ffffff' /></div>
          </div>
          <CreatorSlide/>
        </div>
        
        <div className='w-full h-fit flex flex-col gap-[2.5vw] px-[8vw]'>
          <div className='w-full h-fit flex justify-between items-center'>
            <div>
            <h1 className='text-[2vw] font-bold'>Últimos <span className='text-[#00D315]'>Lançamentos</span></h1>
            <span className='text-[0.8vw] font-semibold text-[#244224]'>Novos capítulos e séries</span>
            </div>
            <div className='px-[1vw] py-[0.5vw] hover:bg-[#00D315] rounded-xl flex gap-[1vw] duration-200'>Ver Todos <ArrowRight color='#ffffff' /></div>
          </div>
          <CardSlide/>
        </div>
      </div>
    </div>
  );
}
