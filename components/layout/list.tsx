import Image from "next/image";
import Link from "next/link";

export default function List() {
    return(
        <div className="w-full h-[5vw] bg-black rounded-xl justify-between items-center p-[0.5vw] hover:scale-105 duration-300">
            <Link href={""} className="flex w-full h-full gap-[0.5vw]">
            <div className="h-full w-[25%] bg-amber-500 rounded-xl overflow-hidden">
                <Image className="w-full h-full object-cover" alt="" src={"/assets/manga.jpg"} width={1080} height={1920}/>
            </div>
            <div className="h-full w-[calc(100%-25%)] flex flex-col gap-[1vw]">
                <span className="line-clamp-1 opacity-50 text-sm font-bold">One Piece Volume 93 – Wano Arc</span>
                <span className="line-clamp-1 text-sm font-bold">Capitulo 00</span>
            </div>
            </Link>
        </div>
    )
}