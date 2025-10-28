'use client'
import type { ReactNode } from "react";

export default function ContainerGrid({
  children,
}: Readonly<{
  children: ReactNode;
}>) { 
  return(
    <div className='w-full h-fit grid grid-cols-4 gap-[1vw] rounded-lg'>
      {children}
    </div>
  )
}