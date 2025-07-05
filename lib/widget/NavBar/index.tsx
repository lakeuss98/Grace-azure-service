"use client";
import Image from "next/image"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { MenuPhone } from "../MenuPhone/SheetMenu";
import { menus } from "@/lib/const/menuList";

export default function  NavBar(){
const pathname = usePathname()

return(
<header className="flex flex-col w-full  items-center">
    <div className="flex bg-white justify-end w-full">
        <span className="bg-[#F49595] pl-[20px]   text-[25px]  py-2 pr-[70px] ">6 98 25 14 33</span>
    </div>
    <nav className="flex bg-[#F49595] px-[20px] py-3 lg:py-4   lg:px-[65px] w-full items-center justify-between">
        
        <Link className="flex" href={"/"}> <Image className=" h-[60px] w-[189px] lg:h-[70px] lg:w-[184px]"   src={"/icon/logo-nav.png"} width={200} height={80} alt={"logo Grace azure Service"}  /> </Link>
        <ul className="hidden lg:flex  items-center text-[20px] justify-between">
            {menus.map(
                (menu,i) =>   <li key={i+menu.path} ><Link href={menu.path.toString()} className={pathname === `${menu.path}` ? 'underline underline-offset-4 font-semibold  p-6 ' : '' +'hover:border-none hover:bg-gray-100 p-6 ' }>{menu.title}</Link></li>
                 )}
        </ul>
        <MenuPhone/>
       
       
    </nav>
   
</header>);

}

