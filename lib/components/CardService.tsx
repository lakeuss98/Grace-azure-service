import Image from "next/image";

export type CardServiceProps = {
    title:string,
    urlImage:string,
    description:string,
    link:string
}

const  CardService=({title,urlImage,description,link}:CardServiceProps)=>{
    return(
    <div className="flex flex-col gap-y-2 ">
         <h2 className=" text-3xl font-bold ">{title}</h2>
                <div className="flex flex-col md:flex-row   shadow rounded-xl ">
                    <Image className=" flex w-full  rounded-b-[0px] rounded-t-[4px] md:w-2/5  md:rounded-r-[0px] md:rounded-l-[8px] " src={urlImage} height={300} width={300} alt={""} />
                    <div className="flex flex-col  md:w-full  ">
                    <div className="flex w-full  text-base text-justify md:text-xl md:font-medium  py-2.5 px-2.5 ">
                    {description}
                    </div>
                    <a href={link} className="text-blue-600 py-2.5 px-2.5 hover:underline">En savoir plus →</a>

                    </div>
                </div>
    </div>
     
    );

}
export  default CardService; 