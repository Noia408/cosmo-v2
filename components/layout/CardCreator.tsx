import { Book, Eye, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardCreator() {
    return (
        <div className="w-full h-auto aspect-[9/13] bg-black p-[1vw] hover:scale-90 duration-300 hover:shadow-[#00D315] hover:shadow-lg">
            <Link href={""} className="w-full h-full relative flex justify-center">
                <Image className="w-full h-full object-cover" alt="" src={"/assets/Creator.jpg"} width={1080} height={1920}/>
                <div className="absolute w-[105%] h-[40%] bottom-0 gradient-black flex flex-col justify-center">
                    <div className="w-full h-fit flex flex-col items-center gap-[0.5vw] mt-[2vw] py-[1vw]">
                        <span className="line-clamp-1 text-sm font-bold text-[1vw]">Oda Genio</span>
                        <hr className=" w-[70%] h-[0.2vw] border-none bg-[#00D315]" />
                        <div className="flex gap-[1.5vw]">
                          <div className="flex gap-[0.3vw] items-center">
                            <Book color="#ffffff" strokeWidth={2} size={22} />
                            <span className="line-clamp-1 text-sm font-semibold text-[0.9vw]">200</span>
                          </div>
                          <div className="flex gap-[0.3vw] items-center">
                            <UsersRound color="#ffffff" strokeWidth={2} size={22} />
                            <span className="line-clamp-1 text-sm font-semibold text-[0.9vw]">200</span>
                          </div>
                        </div>
                    </div>
                </div>
            </Link> 
        </div>
        
    )
}