import { Book, Eye, ShoppingCart, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardShop() {
    return (
        <div className="w-full h-auto aspect-9/13 bg-black group hover:scale-103 duration-300 hover:shadow-neongreen hover:shadow-lg overflow-hidden rounded-md">
            <Link href={""} className="w-full h-full relative flex justify-center">
                <Image className="w-full h-full object-cover group-hover:scale-110 duration-300" alt="" src={"/assets/Creator.jpg"} width={1080} height={1920}/>
                <div className="absolute w-full h-fit bottom-0 gradient-black flex flex-col py-[0.5vw]">
                    <div className="w-full h-fit flex flex-col gap-[0.3vw] px-[0.5vw]">
                        <span className="line-clamp-1 text-sm font-bold text-[0.9vw]">Eiichiro Oda</span>
                        <div className="w-full flex flex-col gap-[0.3vw]">
                          <div className="flex gap-[0.3vw] items-center">
                            <span className="line-clamp-1 text-sm font-semibold text-neongreen text-[1.2vw]">2.000 kz</span>
                          </div>
                          <div className="flex gap-[0.3vw] items-center">
                            <Link href={""} className="w-full py-[0.4vw] bg-neongreen hover:bg-neongreen/80 duration-150 flex items-center justify-center gap-[0.5vw] text-black font-semibold text-center text-[1vw] rounded-lg"><ShoppingCart size={20} /> Comprar Agora</Link>
                          </div>
                        </div>
                    </div>
                </div>
            </Link> 
        </div>
        
    )
}