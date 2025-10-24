import Image from "next/image";
import Link from "next/link";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

export default function BannerSlide() {
    return (
        <div className='w-full h-[30vw] bg-[#1a1a1b] overflow-hidden'>
            <div className='w-full h-full flex items-center justify-center relative '>
                <div className="w-full h-full z-0">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                          }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="w-full h-full"
                    >
                        <SwiperSlide className="w-full h-full">
                            <Image src="/assets/banner.jpeg" alt="banner" className="w-full h-full object-cover object-center" width={1920} height={1080} />
                        </SwiperSlide>
                        <SwiperSlide className="w-full h-full">
                            <Image src="/assets/banner.jpeg" alt="banner" className="w-full h-full object-cover object-center" width={1920} height={1080} />
                        </SwiperSlide>
                        <SwiperSlide className="w-full h-full">
                            <Image src="/assets/banner.jpeg" alt="banner" className="w-full h-full object-cover object-center" width={1920} height={1080} />
                        </SwiperSlide>
                        <SwiperSlide className="w-full h-full">
                            <Image src="/assets/banner.jpeg" alt="banner" className="w-full h-full object-cover object-center" width={1920} height={1080} />
                        </SwiperSlide>
                        
                    </Swiper>
                    
                </div>
                <div className="w-full h-full absolute z-50 flex items-center justify-center gradient-banner">
                    <div className="w-full h-full flex flex-col items-center bg-black/60 justify-center">
                        <h1 className="text-[3vw] font-bold text-white">Bem-vindo ao <span className="text-shadow-[#00D315] text-shadow-lg">COSMO COMICKON</span></h1>
                        <p className="text-white text-[1vw] text-center font-semibold">Explore universos infinitos através dos melhores mangás e quadrinhos. <br /> Descubra histórias épicas, criadores talentosos e uma comunidade apaixonada.</p>
                        <div className="w-full h-fit flex items-center justify-center gap-[1vw] mt-[1vw]">
                            <Link href={""} className="px-[1vw] text-black py-[0.5vw] bg-[#00D315] hover:bg-[#00D315]/70 shadow-[#00D315] shadow-lg duration-150 font-semibold rounded-xl">Explorar Biblioteca</Link>
                            <Link href={""} className="px-[1vw] text-white py-[0.5vw] bg-[#191919] hover:bg-[#191919]/70 duration-150 font-semibold rounded-xl">Conheça os Criadores</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}