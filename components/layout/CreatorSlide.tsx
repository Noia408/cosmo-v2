'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import CardCreator from './CardCreator';

export default function CreatorSlide() {
  return (
    <div className='px-[2vw] w-full h-fit'>
        <Swiper
            slidesPerView={4}
            spaceBetween={25}
            
            modules={[Pagination]}
            className="w-full h-fit"
          >
            <SwiperSlide className='w-fit h-fit'><CardCreator/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit'><CardCreator/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit'><CardCreator/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit'><CardCreator/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit'><CardCreator/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit'><CardCreator/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit'><CardCreator/></SwiperSlide>
            <SwiperSlide className='w-fit h-fit'><CardCreator/></SwiperSlide>
          </Swiper>
      </div>
  );
}