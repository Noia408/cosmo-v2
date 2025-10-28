import { Calendar, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardNews() {
  return (
    <div className="w-full h-auto aspect-10/9 bg-black group hover:scale-103 duration-300 hover:shadow-neongreen hover:shadow-lg overflow-hidden rounded-md">
      <Link href={""} className="w-full h-full flex flex-col justify-center">
        <div className="w-full h-[65%] relative">
          <div className="absolute w-full h-[105%] bg-amber-400 gradient-new z-40 group-hover:scale-103"></div>
          <Image className="w-full h-full object-cover z-0 group-hover:scale-110 duration-300" alt="" src={"/assets/banner.jpeg"} width={1920} height={1080} />
        </div>
        <div className="w-full h-[35%] bottom-0 flex flex-col gap-[0.7vw] p-[0.5vw] z-50">
          <div className="flex gap-[0.5vw] justify-between">
            <div className="flex gap-[0.5vw]">
            <span className="bg-graylow text-[0.6vw] py-[0.3vw] px-[0.4vw] rounded-md">Comic</span>
            <span className="bg-graylow text-[0.6vw] py-[0.3vw] px-[0.4vw] rounded-md">Comic</span>
            <span className="bg-graylow text-[0.6vw] py-[0.3vw] px-[0.4vw] rounded-md">Comic</span>
            </div>
            <div className="flex gap-[0.5vw] items-center">
              <span className="text-[0.6vw] flex item-center bg-graylow py-[0.3vw] px-[0.4vw] rounded-md gap-[0.3vw]"> <Calendar size={12} /> 12/12/1212</span>
            </div>
          </div>
          <div className="flex flex-col gap-[0.4vw]">
          <h1 className="font-bold text-[1.2vw] line-clamp-1">Novo Arc de Cosmic Warriors é Revelado!</h1>
          <span className="font-semibold text-[0.6vw] text-darkgreen line-clamp-3">A mais recente saga de Cosmic Warriors promete ser a mais épica até agora! O criador Akira Tanaka revelou detalhes exclusivos sobre o novo arco que está deixando os fãs em êxtase</span>
          </div>
        </div>
      </Link>
    </div>

  )
}