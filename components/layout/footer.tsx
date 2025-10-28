'use client'
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
    {
      name: "Página Inicial",
      href: "/",
    },
    {
      name: "Bíblioteca",
      href: "/biblioteca",
    },
    {
      name: "Criadores",
      href: "/criadores",
    },
    {
      name: "Notícias",
      href: "/noticias",
    },
    {
      name: "Loja",
      href: "/loja",
    },
  ];

export default function footer() {   
    return(
        <div className="w-full h-[24vw] bg-graydeep px-[8vw] flex gap-[4vw] border-t border-neongreen">
            <div className="w-[30%] h-full flex flex-col gap-[1vw]">
                <Link href={""} className="w-[12vw] h-[5vw] relative flex ">
                    <Image className="h-auto w-[12vw] object-cover absolute top-[-50%] left-[-22%]" src={"/assets/logo.png"} width={100} height={100} alt={"logo"} />
                </Link>
                <span className="text-gray-300 text-[0.9vw]">
                    No COSMO BD, mergulhe em um catálogo repleto de HQs
                    nacionais e internacionais, desde clássicos até lançamentos
                    exclusivos. Descubra novos talentos, apoie criadores locais, 
                    participe de uma comunidade apaixonada e encontre os
                    melhores produtos geek na nossa loja oficial.
                </span>
            </div>
            <div className="w-[calc(100%-30%)] h-full gap-[2vw] grid grid-cols-3 pt-[6vw]">
                <div className="w-full h-full flex flex-col gap-[1vw]">
                    <span className="text-white text-[1.3vw] font-bold">Navegação</span>
                    <ul className="flex flex-col gap-[0.5vw]">
                    {links.map((link, index) => (
                        <li key={index}>
                        <Link href={link.href} className={`text-white text-[0.9vw] hover:text-neongreen duration-300`}>
                            {link.name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="w-full h-full flex flex-col gap-[1vw]">
                    <span className="text-white text-[1.3vw] font-bold">Suporte</span>
                    <ul className="flex flex-col gap-[0.5vw]">
                        <li><Link href={""} className={`text-white text-[0.9vw] hover:text-neongreen duration-300`}>Termos</Link></li>
                        <li><Link href={""} className={`text-white text-[0.9vw] hover:text-neongreen duration-300`}>Privacidade</Link></li>
                        <li><Link href={""} className={`text-white text-[0.9vw] hover:text-neongreen duration-300`}>Direitos</Link></li>
                        <li><Link href={""} className={`text-white text-[0.9vw] hover:text-neongreen duration-300`}>Contactos</Link></li>
                    </ul>
                </div>
                <div className="w-full h-full flex flex-col gap-[1vw]">
                    <span className="text-white text-[1.3vw] font-bold">LEGAL</span>
                    <ul className="flex flex-col gap-[0.5vw]">
                        <li className="flex gap-[1vw]">
                          <Link href={""} className={`text-white text-[1vw] hover:text-neongreen duration-300`}><Facebook /></Link>
                          <Link href={""} className={`text-white text-[1vw] hover:text-neongreen duration-300`}><Instagram /></Link>
                          <Link href={""} className={`text-white text-[1vw] hover:text-neongreen duration-300`}><Youtube /></Link>
                          <Link href={""} className={`text-white text-[1vw] hover:text-neongreen duration-300`}><Twitter /></Link>
                        </li>
                        <li><Link href={""} className={`text-white text-[0.9vw] hover:text-neongreen duration-300`}>WhatsApp: (+244) 988223344</Link></li>
                        <li><Link href={""} className={`text-white text-[0.9vw] hover:text-neongreen duration-300 font-bold`}>contato@cosmobd.com</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}