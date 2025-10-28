'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import Card from '@/components/layout/card';

export default function CardSlide() {
  return (
    <div className='px-[2vw] w-full h-fit'>
        <Swiper
            slidesPerView={4}
            spaceBetween={25}
            
            modules={[Pagination]}
            className="w-full h-fit"
          >
            <SwiperSlide className='w-fit h-fit py-[1vw] px-[0.3vw]'><Card/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit py-[1vw] px-[0.3vw]'><Card/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit py-[1vw] px-[0.3vw]'><Card/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit py-[1vw] px-[0.3vw]'><Card/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit py-[1vw] px-[0.3vw]'><Card/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit py-[1vw] px-[0.3vw]'><Card/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit py-[1vw] px-[0.3vw]'><Card/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit py-[1vw] px-[0.3vw]'><Card/></SwiperSlide>
          </Swiper>
      </div>
  );
}