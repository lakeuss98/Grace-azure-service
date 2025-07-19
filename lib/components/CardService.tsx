import Image from "next/image";
import { ReactNode } from "react";

export type CardServiceProps = {
    title:string,
    urlImage:string,
    description:string|ReactNode,
   // link:string
}

const  CardService=({title,urlImage,description}:CardServiceProps)=>{
    return(
        <div className="flex flex-col bg-[#F49595]/3 gap-y-2 rounded-xl shadow cursor-pointer hover:md:my-9 hover:md:scale-110 transition-all duration-300 ">
        <div className="flex flex-col md:flex-row   shadow rounded-xl">
            <Image className="flex w-full  rounded-b-[0px] rounded-t-[4px] md:w-1/2   md:rounded-r-[0px] md:rounded-l-[8px]" src={urlImage} height={300} width={300} alt={title} />
            <div className="flex flex-col  md:w-1/2 px-2 py-2 md:justify-between  ">
                <h3 className="text-3xl px-2.5 font-bold text-black" >{title}</h3>  
                <div className="flex w-full md:text-2xl  text text-justify md:text md:text- md:font  py-2.5 px-2.5 ">
                    {description}
                </div>

            </div>
        </div>
    </div>
     
    );

}
export  default CardService; 