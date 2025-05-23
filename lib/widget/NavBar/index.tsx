"use client";
import { Menu } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import React from "react";
export default function  NavBar(){

return(
<header className="flex flex-col w-full  items-center">
    <div className="hidden lg:flex justify-end w-full">
        <span className="bg-[#DCA797]  px-2  py-2">698251433</span>
    </div>
    <nav className="flex bg-[#DCA797] px-[20px] py-3 lg:py-4   lg:px-[65px] w-full items-center justify-between">
        
        <Link className="flex" href={"/"}> <Image className="h-[50px] w-[50px] lg:h-[80px] lg:w-[80px]"   src={"/icon/logo.png"} width={80} height={80} alt={"logo Grace azure Service"}  /> </Link>
        <ul className="hidden lg:flex gap-6 items-center justify-between">
            <li><Link href={'/'}>Acceuil</Link></li>
            <li><Link href={'/services'}>Nos services</Link></li>
            <li><Link href={'/devis'}>Devis</Link></li>
            <li><Link href={'/a-propos'}>A propos de nous </Link></li>
            <li><Link href={'/contqct'}>Nous contacter </Link></li>
            <li> <Link href={'/tarif'}>Nos tarifs </Link></li>
        </ul>
        <Menu className="lg:hidden" />
       
    </nav>
   
</header>);

}

