'use client'


import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


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
    name: "Loja",
    href: "/loja",
  },
  {
    name: "Notícias",
    href: "/noticias",
  },
  {
    name: "Contactos",
    href: "/contactos",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="w-full h-fit flex flex-col border-b border-neongreen">
      <div className="w-full h-[4vw] flex justify-between items-center px-[5vw]">
        <Link href={""} className="w-[10vw] h-[90%]  flex items-center">
          <Image className="h-auto w-[10vw] object-cover" src={"/assets/logo.png"} width={100} height={100} alt={"logo"} />
        </Link>

        <div className="flex gap-[2vw]">
          <ul className="flex gap-[2vw] ">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={` text-[0.6vw] duration-300 ${pathname === link.href ? "text-[#00D315]" : "text-white"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Search color="#ffffff" />
          <ShoppingCart color="#ffffff" />
        </div>
      </div>
    </div>
  );
}