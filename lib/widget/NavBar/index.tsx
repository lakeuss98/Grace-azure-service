"use client";
import Image from "next/image"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { MenuPhone } from "../MenuPhone/SheetMenu";
import { menus } from "@/lib/const/menuList";
import logoAzur from "@/public/icon/logomain.png"
import { ACCENT_COLOR, SECONDARY_COLOR } from "@/lib/const/menuList";
export default function  NavBar(){
const pathname = usePathname()

return(
<header className="flex flex-col w-full  items-center  ">
    <div className="flex bg-transparent justify-end w-full">
        <span className={`bg-[${ACCENT_COLOR}] pl-[20px]   text-[25px]  py-2 pr-[70px] `}>6 98 25 14 33</span>
    </div>
    {/* lg:px-[65px] */}
    <nav className={`flex  drop-shadow-xl md:px-[15%] font-bold  bg-[${ACCENT_COLOR}] px-[20px] py-3 lg:py-4  flex-row   w-full items-center justify-between`}>
        <Link className="flex" href={"/"}> <Image className=" h-[57px] w-[58px] lg:h-[70px] lg:w-[69px]"   src={logoAzur} width={58} height={57} alt={"logo Grace azure Service"}  /> </Link>
        <ul className="hidden lg:flex  items-center text-[20px] justify-between">

            {menus.map(
                (menu,i) =>   <li key={i+menu.path} ><Link href={menu.path.toString()} className={pathname === `${menu.path}` ? 'underline underline-offset-4 font-semibold  text-white p-6 ' : '' +'hover:border-none text-black hover:bg-gray-100 p-6 ' }>{menu.title}</Link></li>
                 )}
                         <Link href={'/devis'} className={` flex border-[2px] border-[${SECONDARY_COLOR}] bg-[${SECONDARY_COLOR}] text-white px-4 py-2 rounded-lg`}>Mon dévis</Link>

        </ul>
        <div className="flex items-center space-x-2 lg:hidden">
       

        <Link href={'/devis'}  className={` flex border-[2px] border-[#2e6417] bg-[#2e6417] text-white py-[4px]  justify-center items-center font-bold text-base px-4 rounded-lg`}>Devis</Link>
        <MenuPhone />
        </div>
    </nav>
</header>);

}

