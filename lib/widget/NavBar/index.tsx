"use client";
import { Menu } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function  NavBar(){
const pathname = usePathname()
const menus = [
    { title:'Acceuil',path:'/' },
    { title:'A prorpos',path:'/a-propos' },
    { title:'Nos services',path:'/services' },
    { title:'Tarifs',path:'/tarifs' },
    { title:'devis',path:'/devis' },
]
return(
<header className="flex flex-col w-full  items-center">
    <div className="hidden lg:flex justify-end w-full">
        <span className="bg-[#DCA797]  px-2  py-2">698251433</span>
    </div>
    <nav className="flex bg-[#DCA797] px-[20px] py-3 lg:py-4   lg:px-[65px] w-full items-center justify-between">
        
        <Link className="flex" href={"/"}> <Image className="h-[50px] w-[50px] lg:h-[80px] lg:w-[80px]"   src={"/icon/logo.png"} width={80} height={80} alt={"logo Grace azure Service"}  /> </Link>
        <ul className="hidden lg:flex gap-6 items-center justify-between">
            {menus.map(
                (menu,i) =>   <li key={i+menu.path} ><Link href={menu.path.toString()} className={pathname === `${menu.path}` ? 'underline underline-offset-4 font-semibold' : ''}>{menu.title}</Link></li>
                 )}
        </ul>
        <Menu className="lg:hidden" />
       
    </nav>
   
</header>);

}

