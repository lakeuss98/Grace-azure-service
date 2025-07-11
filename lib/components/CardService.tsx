import Image from "next/image";

export type CardServiceProps = {
    title:string,
    urlImage:string,
    description:string,
    link:string
}

const  CardService=({title,urlImage,description,link}:CardServiceProps)=>{
    return(
        <div className="flex flex-col bg-[#F49595]/3 gap-y-2 rounded-xl shadow cursor-pointer hover:md:scale-110 transition-all duration-300 ">
        {/* <h2 className=" text-3xl font-bold ">{title}</h2> */}
        <div className="flex flex-col md:flex-row   shadow rounded-xl  ">
            <Image className="flex w-full  rounded-b-[0px] rounded-t-[4px] md:w-1/2  md:rounded-r-[0px] md:rounded-l-[8px]" src={urlImage} height={300} width={300} alt={""} />
            <div className="flex flex-col  md:w-full px-2 py-2 md:justify-between ">
                <h3 className="text-2xl px-2.5 font-bold text-[#F49595]" >{'Pourquoi nous'}</h3>  
                <div className="flex w-full  text-base text-justify md:text-xl md:font-medium  py-2.5 px-2.5 ">
                    {description}
                </div>

            </div>
        </div>
    </div>
     
    );

}
export  default CardService; 