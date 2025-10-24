import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
    return (
        <div className="w-full h-auto aspect-[9/13] bg-black p-[1vw] hover:scale-90 duration-300 hover:shadow-[#00D315] hover:shadow-lg">
            <Link href={""} className="w-[100%] h-full relative flex justify-center">
                <Image className="w-full h-full object-cover" alt="" src={"/assets/manga.jpg"} width={1080} height={1920}/>
                <div className="absolute w-[105%] h-[40%] bottom-0 gradient-black flex flex-col justify-center">
                    <div className="w-full h-fit flex flex-col items-center gap-[0.5vw] mt-[2vw] py-[1vw]">
                        <span className="line-clamp-1 text-sm font-bold">One Piece Volume 93 – Wano Arc</span>
                        <hr className=" w-[70%] h-[0.2vw] border-none bg-[#00D315]" />
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