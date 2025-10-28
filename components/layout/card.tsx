import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
    return (
        <div className="w-full h-auto aspect-9/13 bg-black group hover:scale-103 overflow-hidden rounded-md duration-300 hover:shadow-neongreen hover:shadow-lg">
            <Link href={""} className="w-full h-full relative flex justify-center">
                <Image className="w-full h-full object-cover group-hover:scale-110 duration-300" alt="" src={"/assets/manga.jpg"} width={1080} height={1920}/>
                <div className="absolute w-full h-fit bottom-0 gradient-black flex flex-col justify-center py-[1.5vw]">
                    <div className="w-full h-fit flex flex-col items-center gap-[0.5vw] mt-[2vw] py-[1vw]">
                        <span className="line-clamp-1 text-sm font-bold">One Piece Volume 93 – Wano Arc</span>
                        <hr className=" w-[70%] h-[0.2vw] border-none bg-neongreen" />
                        <div className="flex gap-[0.5vw]">
                            <Eye color="#ffffff" strokeWidth={1.5} />
                            <span className="line-clamp-1 text-sm font-bold">200</span>
                        </div>
                    </div>
                </div>
            </Link> 
        </div>
        
    )
}